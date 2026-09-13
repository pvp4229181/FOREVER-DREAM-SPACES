export const BUSINESS = {
  name: 'Forever Dream Spaces',
  tagline: 'Interior Design',
  phone: '+91 98112 75921',
  whatsapp: '919811275921',
  email: 'Hello@foreverdreams.in',
  address: 'NXONE Tower, Greater Noida West',
  addressFull: 'NXONE Tower, Greater Noida West, Uttar Pradesh, India',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    youtube: '#',
  },
};

// Curated, license-free placeholder photography (Unsplash) standing in for
// real project photos — swap these URLs out once real shoots are uploaded.
export const PLACEHOLDER_IMAGES = {
  heroHome: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1800&auto=format&fit=crop',
  heroAbout: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop',
  heroResidential: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop',
  heroCommercial: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop',
  heroProjects: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1800&auto=format&fit=crop',
  heroGallery: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1800&auto=format&fit=crop',
  heroBlog: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1800&auto=format&fit=crop',
  heroContact: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1800&auto=format&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
  ],
  team: [
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  ],
};

export const NAV_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/gallery', label: 'Design Gallery', key: 'gallery' },
  { href: '/about', label: 'About Us', key: 'about' },
  {
    href: '/services',
    label: 'Services',
    key: 'services',
    children: [
      { href: '/services/residential-interior-design', label: 'Residential Interior Design' },
      { href: '/services/commercial-interior-design', label: 'Commercial Interior Design' },
    ],
  },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/blog', label: 'Blog', key: 'blog' },
  { href: '/contact', label: 'Contact Us', key: 'contact' },
];

export const PROJECTS = [
  { slug: 'the-noida-penthouse', title: 'The Noida Penthouse', category: 'Residential', location: 'Greater Noida West', image: PLACEHOLDER_IMAGES.gallery[0], desc: 'A warm, minimal 4BHK penthouse blending walnut tones with soft brass accents.' },
  { slug: 'skyline-corporate-office', title: 'Skyline Corporate Office', category: 'Commercial', location: 'Noida Sector 62', image: PLACEHOLDER_IMAGES.gallery[1], desc: 'A 12,000 sq. ft. workspace designed for focus, collaboration and brand identity.' },
  { slug: 'the-garden-villa', title: 'The Garden Villa', category: 'Residential', location: 'Gurugram', image: PLACEHOLDER_IMAGES.gallery[2], desc: 'A biophilic villa interior connecting indoor living with lush outdoor courtyards.' },
  { slug: 'cafe-mocha-lounge', title: 'Café Mocha Lounge', category: 'Commercial', location: 'Delhi NCR', image: PLACEHOLDER_IMAGES.gallery[3], desc: 'A cosy, Instagram-ready café interior with warm lighting and reclaimed wood.' },
  { slug: 'minimalist-3bhk', title: 'Minimalist 3BHK', category: 'Residential', location: 'Greater Noida West', image: PLACEHOLDER_IMAGES.gallery[4], desc: 'Clean lines, hidden storage and a neutral palette for a young family home.' },
  { slug: 'boutique-retail-store', title: 'Boutique Retail Store', category: 'Commercial', location: 'Noida', image: PLACEHOLDER_IMAGES.gallery[5], desc: 'A retail experience built around product storytelling and soft-touch materials.' },
];

// Design Gallery — AI-generated placeholder renders standing in for real
// project photography. Swap these out once real shoots are ready; each item
// keeps its own `image` field so replacing one is a one-line change.
export const GALLERY_CATEGORIES = ['All', 'Modular Kitchen', 'Living Room', 'Bedroom', 'Wardrobe', 'Kids Bedroom', 'Bathroom', 'Home Office'];

const galleryImg = PLACEHOLDER_IMAGES.gallery;

export const GALLERY_ITEMS = [
  { title: 'Sage Green Modular Kitchen With Open Shelving', category: 'Modular Kitchen', image: galleryImg[0] },
  { title: 'A Blue Modular Kitchen With A Tiled Backsplash', category: 'Modular Kitchen', image: galleryImg[1] },
  { title: 'Blush Pink Modular Kitchen With Sleek Handles', category: 'Modular Kitchen', image: galleryImg[2] },
  { title: 'Matte Black Island Kitchen With Brass Accents', category: 'Modular Kitchen', image: galleryImg[3] },

  { title: 'Living Room Design 1', category: 'Living Room', image: galleryImg[4] },
  { title: 'Living Room Design 6', category: 'Living Room', image: galleryImg[5] },
  { title: 'Living Room Design 9', category: 'Living Room', image: galleryImg[6] },
  { title: 'Warm Neutral Living Room With Feature Wall', category: 'Living Room', image: galleryImg[7] },

  { title: 'Bedroom Design 1', category: 'Bedroom', image: galleryImg[0] },
  { title: 'Bedroom Design 6', category: 'Bedroom', image: galleryImg[8] },
  { title: 'Bedroom Design 12', category: 'Bedroom', image: galleryImg[1] },
  { title: 'Soft Grey Bedroom With Upholstered Headboard', category: 'Bedroom', image: galleryImg[2] },

  { title: 'Walk-In Wardrobe With Glass Shutters', category: 'Wardrobe', image: galleryImg[3] },
  { title: 'Sliding Door Wardrobe With Mirror Finish', category: 'Wardrobe', image: galleryImg[4] },
  { title: 'Loft Wardrobe With Warm Wood Laminate', category: 'Wardrobe', image: galleryImg[5] },

  { title: 'Playful Bunk-Bed Kids Bedroom', category: 'Kids Bedroom', image: galleryImg[6] },
  { title: 'Pastel Themed Kids Bedroom With Study Nook', category: 'Kids Bedroom', image: galleryImg[7] },
  { title: 'Space-Saving Kids Bedroom With Loft Bed', category: 'Kids Bedroom', image: galleryImg[8] },

  { title: 'Spa-Style Bathroom With Rain Shower', category: 'Bathroom', image: galleryImg[0] },
  { title: 'Marble Finish Bathroom With Floating Vanity', category: 'Bathroom', image: galleryImg[1] },

  { title: 'Minimal Home Office With Built-In Shelving', category: 'Home Office', image: galleryImg[2] },
  { title: 'Cosy Work-From-Home Corner With Warm Lighting', category: 'Home Office', image: galleryImg[3] },
];

export const BLOG_POSTS = [
  { slug: 'residential-interior-design-trends-2026', title: '10 Residential Interior Design Trends to Watch in 2026', excerpt: 'From warm minimalism to biophilic accents — here is what is shaping Indian homes this year.', image: PLACEHOLDER_IMAGES.gallery[6], date: 'Aug 12, 2026', author: 'Forever Dream Spaces' },
  { slug: 'choosing-the-right-colour-palette', title: 'How to Choose the Right Colour Palette for Every Room', excerpt: 'Colour psychology, lighting and mood — a practical guide to picking palettes that last.', image: PLACEHOLDER_IMAGES.gallery[7], date: 'Jul 02, 2026', author: 'Forever Dream Spaces' },
  { slug: 'office-interiors-that-boost-productivity', title: 'Office Interiors That Actually Boost Productivity', excerpt: 'Layout, lighting and acoustics — the science-backed design choices for modern workplaces.', image: PLACEHOLDER_IMAGES.gallery[8], date: 'May 18, 2026', author: 'Forever Dream Spaces' },
];

export const TESTIMONIALS = [
  { name: 'Ritika & Aman Verma', role: 'Homeowners, Greater Noida West', text: 'Forever Dream Spaces turned our bare shell into a home that feels like us. Every detail, from lighting to hardware, was thought through.' },
  { name: 'Karan Mehta', role: 'Director, Skyline Consulting', text: 'Our new office reflects our brand perfectly. The team managed the entire project on time and on budget.' },
  { name: 'Sana Iqbal', role: 'Homeowner, Noida', text: 'Professional, creative and genuinely caring about getting it right. Highly recommend for any residential project.' },
];

export const STATS = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '9+', label: 'Years of Experience' },
  { value: '180+', label: 'Happy Families' },
  { value: '15+', label: 'Design Awards' },
];
