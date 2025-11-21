import React, { useState, useRef } from 'react';
import Header from './components/Header';
import { ART_STYLES, PRODUCTS } from './constants';
import { Product, ArtStyle } from './types';
import { generateDispetDesign } from './services/geminiService';

const App: React.FC = () => {
  // State
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle>(ART_STYLES[0]);
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedCharImages, setUploadedCharImages] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handlers
  const handleGenerate = async () => {
    if (!prompt) return;
    if (uploadedCharImages.length === 0) {
        setError("Please upload at least one reference image of Roko.");
        return;
    }
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const image = await generateDispetDesign(prompt, selectedStyle, uploadedCharImages);
      setGeneratedImage(image);
    } catch (err: any) {
      setError(err.message || "Failed to generate design. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
          const filesArray = Array.from(e.target.files);
          // Limit to 3 images maximum for performance/token limits
          setUploadedCharImages(prev => [...prev, ...filesArray].slice(0, 3));
      }
  };

  const removeImage = (index: number) => {
      setUploadedCharImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Controls */}
        <div className="lg:col-span-5 space-y-8 h-full overflow-y-auto scrollbar-hide pb-20">
          
          {/* Step 1: Character Upload */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">1</span>
                Upload Character (Roko)
            </h2>
            <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                    {uploadedCharImages.map((file, idx) => (
                        <div key={idx} className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group">
                            <img src={URL.createObjectURL(file)} alt="ref" className="w-full h-full object-cover" />
                            <button 
                                onClick={() => removeImage(idx)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    ))}
                    {uploadedCharImages.length < 3 && (
                        <button 
                            onClick={() => fileInputRef.current?.click()}
                            className="aspect-square border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-500 transition-colors cursor-pointer"
                        >
                            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            <span className="text-xs">Add Image</span>
                        </button>
                    )}
                </div>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageUpload} 
                />
                <p className="text-xs text-slate-500">Upload up to 3 reference images of Roko the donkey.</p>
            </div>
          </section>

          {/* Step 2: Product Selection */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">2</span>
                Select Product
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod)}
                  className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-200 ${
                    selectedProduct.id === prod.id 
                      ? 'ring-2 ring-indigo-600 scale-95' 
                      : 'hover:opacity-80'
                  }`}
                >
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] py-1 text-center truncate px-1">
                    {prod.name}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 3: Style Selection */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h2 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">3</span>
                Choose Art Style
            </h2>
            <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {ART_STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedStyle.id === style.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <div className={`w-full h-12 rounded-lg mb-2 ${style.previewColor} opacity-20`}></div>
                  <div className="font-semibold text-sm text-slate-900">{style.name}</div>
                  <div className="text-xs text-slate-500 line-clamp-2 mt-1">{style.description}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Step 4: Prompt */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky bottom-0">
            <h2 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">4</span>
                Describe Design
            </h2>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. Skateboarding in space, eating pizza, playing guitar..."
              className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none h-24 mb-4"
            />
            
            {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100">
                    {error}
                </div>
            )}

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt || uploadedCharImages.length === 0}
              className={`w-full py-3 px-4 rounded-xl text-white font-bold shadow-lg shadow-indigo-200 transition-all ${
                isGenerating || !prompt || uploadedCharImages.length === 0
                  ? 'bg-slate-300 cursor-not-allowed shadow-none'
                  : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95'
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Design...
                </div>
              ) : (
                'Generate Design'
              )}
            </button>
          </section>

        </div>

        {/* RIGHT COLUMN: Preview */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden sticky top-24">
             <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">Live Preview</span>
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-600 text-[10px] rounded-full font-medium uppercase">{selectedProduct.name}</span>
                </div>
                {generatedImage && (
                    <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Mockup
                    </button>
                )}
             </div>
             
             {/* Mockup Canvas */}
             <div className="relative w-full aspect-square bg-slate-100 flex items-center justify-center">
                {/* Background Product */}
                <img 
                    src={selectedProduct.image} 
                    alt="Mockup Base" 
                    className="w-full h-full object-cover relative z-10"
                />
                
                {/* Generated Overlay */}
                {generatedImage && (
                    <div 
                        className="absolute z-20 overflow-hidden pointer-events-none mix-blend-multiply"
                        style={selectedProduct.overlayStyle}
                    >
                         <img 
                            src={generatedImage} 
                            alt="Generated Design" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                )}

                {!generatedImage && (
                    <div 
                        className="absolute z-20 border-2 border-dashed border-indigo-300 bg-indigo-50/30 flex items-center justify-center"
                        style={selectedProduct.overlayStyle}
                    >
                         <span className="text-indigo-400 text-sm font-medium">Design Area</span>
                    </div>
                )}
             </div>

             {generatedImage && (
                <div className="p-6 bg-white border-t border-slate-100">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">Generated Result</h3>
                    <div className="flex gap-4">
                         <div className="w-20 h-20 rounded-lg border border-slate-200 overflow-hidden shrink-0 bg-slate-50">
                             <img src={generatedImage} className="w-full h-full object-contain" alt="thumb" />
                         </div>
                         <div className="flex-1">
                             <p className="text-xs text-slate-500 mb-2">
                                 <span className="font-semibold text-slate-700">Style:</span> {selectedStyle.name}
                             </p>
                             <p className="text-xs text-slate-500 italic line-clamp-2">"{prompt}"</p>
                         </div>
                    </div>
                </div>
             )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default App;