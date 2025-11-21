import { ArtStyle, CharacterReference, Product } from './types';

// In a real app, these would be the uploaded files. 
// For this demo, we use placeholders. The user should replace these strings with their local asset paths.
export const CHARACTER_IMAGES: CharacterReference[] = [
  { id: 'roko1', src: 'https://picsum.photos/seed/roko1/500/500' },
  { id: 'roko2', src: 'https://picsum.photos/seed/roko2/500/500' },
  { id: 'roko3', src: 'https://picsum.photos/seed/roko3/500/500' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hoodie',
    name: 'Premium Hoodie',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
    overlayStyle: {
      top: '30%',
      left: '32%',
      width: '36%',
      height: '36%',
    },
  },
  {
    id: 'mug',
    name: 'Ceramic Mug',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80',
    overlayStyle: {
      top: '35%',
      left: '30%',
      width: '40%',
      height: '40%',
      borderRadius: '50% 10% 10% 50% / 10%',
      transform: 'rotate(-2deg)'
    },
  },
  {
    id: 'cap',
    name: 'Trucker Cap',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
    overlayStyle: {
      top: '25%',
      left: '35%',
      width: '30%',
      height: '30%',
      borderRadius: '50% 50% 0 0',
    },
  },
  {
    id: 'phone',
    name: 'Phone Case',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=80',
    overlayStyle: {
      top: '15%',
      left: '38%',
      width: '28%',
      height: '65%',
      borderRadius: '12px',
    },
  },
];

export const ART_STYLES: ArtStyle[] = [
  {
    id: 'anime',
    name: 'Anime',
    description: 'Bold, cut-out silhouette, cel-shaded, speed-lines.',
    previewColor: 'bg-pink-500',
    prompt: 'Create a high-resolution, print-ready anime illustration in a square format (1:1). The design must feature a strong, bold, cut-out silhouette with clean outlines and a sticker-like shape. Use expressive anime eyes, cel-shaded coloring, dynamic action pose, and energetic speed-line or splash background elements. Keep clear separation between the character and background through bold outlines and contrasting colors. Sharp crisp edges, vibrant tones, and a clean vector-like finish. No scenery backgrounds—focus on the character and dynamic graphic elements only.'
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    description: 'Neon gradients, 80s retro, gridlines, chrome accents.',
    previewColor: 'bg-purple-600',
    prompt: 'Create a high-resolution, print-ready synthwave illustration in a square format (1:1). Use neon gradients, 80s retro colors, vaporwave sun, gridlines, chrome accents, and glowing shapes. The design must have a bold, distinct cut-out silhouette with a strong sticker-like outline. Ensure clean subject separation using neon rim light and high contrast shading. Crisp vector-style edges, retro-futuristic energy, and no cluttered scenic backgrounds.'
  },
  {
    id: 'gta',
    name: 'GTA Style',
    description: 'Bold black outlines, flat comic shading, poster energy.',
    previewColor: 'bg-orange-500',
    prompt: 'Create a high-resolution, print-ready GTA loading-screen style illustration in a square format (1:1). Use bold black outlines, flat comic-style shading, clean color blocks, and minimal background shapes. The design must have a distinct sticker-like cut-out silhouette with thick outline separation. Strong foreground focus, clean negative space behind, and high contrast between character and background. No complex scenery—just stylized GTA-inspired poster energy.'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon lighting, holographic accents, futuristic glows.',
    previewColor: 'bg-cyan-400',
    prompt: 'Create a high-resolution, print-ready cyberpunk illustration in a square format (1:1). Use neon lighting, holographic accents, electric sparks, neon blues/pinks, and futuristic glows. The design must have a bold cut-out silhouette with a clear sticker-like outline. Ensure strong separation between subject and background through neon edge lighting and graphic shapes. Crisp vector-like finish, high contrast, and no complex cityscapes—focus on the character and graphic elements.'
  },
  {
    id: 'mascot',
    name: 'Cartoon / Mascot',
    description: 'Thick bold outlines, playful shapes, graffiti splashes.',
    previewColor: 'bg-yellow-400',
    prompt: 'Create a high-resolution, print-ready cartoon mascot illustration in a square format (1:1). Use thick bold outlines, playful shapes, vibrant colors, and expressive facial features. The design must have a distinct sticker-like cut-out silhouette with clean edges. Add graffiti splashes, simple geometric accents, or bold color pops behind the character for separation. Keep the background minimal and clean for a strong foreground focus.'
  },
  {
    id: '3d',
    name: '3D Stylized',
    description: 'Soft cinematic lighting, toy-like finish, glossy.',
    previewColor: 'bg-blue-500',
    prompt: 'Create a high-resolution, print-ready 3D-stylized illustration in a square format (1:1). Use soft cinematic lighting, stylized materials, smooth shading, and glossy highlights. The design must have a clear sticker-like cut-out silhouette with crisp edge separation. Ensure the character pops from the background using contrast, rim lighting, and minimal backdrop elements. Clean, polished, toy-like or Pixar-inspired finish for apparel graphics.'
  },
  {
    id: 'retro',
    name: 'Retro / Vintage',
    description: 'Muted tones, halftones, vintage sticker look.',
    previewColor: 'bg-amber-700',
    prompt: 'Create a high-resolution, print-ready retro/vintage poster-style illustration in a square format (1:1). Use muted retro tones, halftones, retro shapes, and simplified shading. The design must include a bold, clean cut-out silhouette that looks like a vintage sticker. Strong separation between foreground and background using simple shapes and bold outlines. No detailed scenery—just classic retro graphic energy.'
  },
  {
    id: 'inkpunk',
    name: 'Inkpunk',
    description: 'Chaotic ink strokes, splashes, expressive brushwork.',
    previewColor: 'bg-gray-800',
    prompt: 'Create a high-resolution, print-ready inkpunk illustration in a square format (1:1). Use chaotic ink strokes, splashes, neon highlights, expressive brushwork, and graffiti drips. The design must have a bold cut-out silhouette with a dramatic outline for sticker-like readability. Emphasize high contrast and strong foreground separation using splash shapes behind the subject. Keep the background minimal and clean around the silhouette.'
  },
  {
    id: 'steampunk',
    name: 'Steampunk',
    description: 'Brass textures, gears, warm metallic tones.',
    previewColor: 'bg-amber-600',
    prompt: 'Create a high-resolution, print-ready steampunk illustration in a square format (1:1). Use brass textures, gears, goggles, mechanical elements, Victorian clothing, and warm metallic tones. The design must feature a strong cut-out silhouette with a sticker-style outline. Ensure clear foreground/background separation using graphic shapes, smoke, or gear patterns. Crisp edges, high contrast, and no full scenic backgrounds.'
  },
  {
    id: 'noir',
    name: 'Noir / Dark Comic',
    description: 'Moody lighting, hard shadows, red/black/white palette.',
    previewColor: 'bg-slate-900',
    prompt: 'Create a high-resolution, print-ready noir comic-style illustration in a square format (1:1). Use moody lighting, hard shadows, dramatic contrast, limited palette (black/white/red), and graphic novel shading. The design must have a bold, clean cut-out silhouette with sticker-like readability. Ensure clear separation between foreground and background using strong lighting and minimal graphic shapes. No detailed environments—just noir attitude.'
  },
  {
    id: 'fantasy',
    name: 'Fantasy / RPG',
    description: 'Magical glow, ornate armor, dramatic lighting.',
    previewColor: 'bg-indigo-600',
    prompt: 'Create a high-resolution, print-ready fantasy illustration in a square format (1:1). Use magical glow effects, mystical particles, ornate armor, enchanted elements, and dramatic fantasy lighting. The design must have a bold, clear cut-out silhouette with a sticker-style outline. Ensure strong separation between foreground and background using graphic magical shapes or color bursts. High detail but clean edges—no full scenic fantasy backgrounds.'
  },
  {
    id: 'minimalist',
    name: 'Minimalist Vector',
    description: 'Clean geometric shapes, smooth curves, flat aesthetic.',
    previewColor: 'bg-emerald-500',
    prompt: 'Create a high-resolution, print-ready minimalist vector illustration in a square format (1:1). Use clean geometric shapes, smooth curves, limited color palette, and modern graphic simplicity. The design must have a bold, sharp cut-out silhouette with a crisp outline. Ensure strong separation between subject and background through clean negative space. Flat vector aesthetic with perfect print clarity.'
  },
];