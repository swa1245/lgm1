// This file collects products from all page components for search functionality

// Import images for products that might not have them defined in their components
import inlineBg from '../assets/banner/c2.png'
import rollerBg from '../assets/roller/bg2.webp';
import classicQuad1 from '../assets/Quad Shoes/Classic Quad Shoes/1000210301 (1).png';
import superQuad1 from '../assets/Quad Shoes/Super Quad Shoes/1000210421.png';
import hqQuad1 from '../assets/Quad Shoes/HQ Quad shoe/1000210424.png';
import wheels from '../assets/Quad Wheels/Rubber wheel/Photo from Rucha Lembhe.jpg';
import frames from '../assets/Quad Frame/Aluminium Quad Frame/1000210632.png';
import bearings from '../assets/Quad Wheels/Rubber wheel/Photo from Rucha Lembhe.jpg'; // Using wheels image as placeholder

// Inline Skates Products
const inlineSkatesProducts = [
  {
    id: 'pro-series-x1',
    name: 'Pro Series X1',
    description: 'Competition-grade speed skates',
    price: 4999,
    image: inlineBg,
    category: 'Inline Skates',
    pageUrl: '/inline-skates'
  },
  {
    id: 'elite-boots',
    name: 'Elite Boots',
    description: 'Custom-fitted racing boots',
    price: 2999,
    image: superQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  },
  {
    id: 'speed-frames',
    name: 'Speed Frames',
    description: 'Lightweight aluminum frames',
    price: 1999,
    image: frames,
    category: 'Frames',
    pageUrl: '/speed-frames'
  },
  {
    id: 'racing-wheels',
    name: 'Racing Wheels',
    description: 'High-performance racing wheels',
    price: 1499,
    image: wheels,
    category: 'Wheels',
    pageUrl: '/wheels'
  }
];

// Roller Skates Products
const rollerSkatesProducts = [
  {
    id: 'quad-set-1',
    name: 'Complete Quad Set',
    description: 'Professional complete setup',
    price: 5999,
    image: rollerBg,
    category: 'Roller Skates',
    pageUrl: '/roller-skates'
  },
  {
    id: 'pro-quad-shoes',
    name: 'Pro Quad Shoes',
    description: 'Professional quad skating boots',
    price: 2999,
    image: classicQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  },
  {
    id: 'elite-quad-wheels',
    name: 'Elite Quad Wheels',
    description: 'High-performance quad wheels',
    price: 1499,
    image: wheels,
    category: 'Wheels',
    pageUrl: '/quad-wheels'
  },
  {
    id: 'pro-quad-frames',
    name: 'Pro Quad Frames',
    description: 'Competition-grade frames',
    price: 1999,
    image: frames,
    category: 'Frames',
    pageUrl: '/speed-frames'
  }
];

// Boots Products
const bootsProducts = [
  {
    id: 'baby-tenacity-shoes',
    name: 'Baby & Tenacity Shoes',
    description: 'Perfect skating boots for beginners and young skaters',
    price: 1999,
    image: classicQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  },
  {
    id: 'classic-quad-shoes',
    name: 'Classic Quad Shoes',
    description: 'Traditional quad skating boots with excellent ankle support',
    price: 2499,
    image: classicQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  },
  {
    id: 'hq-quad-shoes',
    name: 'HQ Quad Shoes',
    description: 'High-quality quad skating boots for advanced skaters',
    price: 2999,
    image: hqQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  },
  {
    id: 'super-quad-shoes',
    name: 'Super Quad Shoes',
    description: 'Premium quad skating boots for professional performance',
    price: 3499,
    image: superQuad1,
    category: 'Boots',
    pageUrl: '/boots'
  }
];

// Frames Products
const framesProducts = [
  {
    id: 'carbon-speed-frame',
    name: 'Carbon Speed Frame',
    description: 'Professional racing frame with carbon fiber construction',
    price: 15999,
    image: frames,
    category: 'Frames',
    pageUrl: '/frames'
  },
  {
    id: 'aluminum-race-frame',
    name: 'Aluminum Race Frame',
    description: 'Lightweight aluminum frame for competitive racing',
    price: 8999,
    image: frames,
    category: 'Frames',
    pageUrl: '/frames'
  }
];

// Wheels Products
const wheelsProducts = [
  {
    id: 'racing-wheels-110mm',
    name: 'Racing Wheels 110mm',
    description: 'Professional racing wheels for maximum speed',
    price: 3999,
    image: wheels,
    category: 'Wheels',
    pageUrl: '/wheels'
  },
  {
    id: 'quad-wheels-62mm',
    name: 'Quad Wheels 62mm',
    description: 'High-grip quad wheels for roller skates',
    price: 2499,
    image: wheels,
    category: 'Wheels',
    pageUrl: '/quad-wheels'
  }
];

// Additional Products from other pages

// Accessories Products
const accessoriesProducts = [
  {
    id: 'pro-skating-helmet',
    name: 'Pro Skating Helmet',
    description: 'ASTM-certified skating helmet with adjustable fit system',
    price: 2499,
    image: bearings,
    category: 'Accessories',
    pageUrl: '/accessories',
    keywords: 'helmet protection gear safety'
  },
  {
    id: 'protective-gear-set',
    name: 'Protective Gear Set',
    description: 'Complete set of wrist guards, knee pads, and elbow pads',
    price: 1999,
    image: bearings,
    category: 'Accessories',
    pageUrl: '/guard-set',
    keywords: 'protection pads guards safety'
  }
];

// Baby & Tenacity Skates Products
const babyTenacityProducts = [
  {
    id: 'baby-skate-kit',
    name: 'Baby Skate Full Kit',
    description: 'Complete skating kit for young beginners',
    price: 2999,
    image: classicQuad1,
    category: 'Baby & Tenacity',
    pageUrl: '/baby-tenacity-skates',
    keywords: 'kids children junior youth beginner'
  },
  {
    id: 'tenacity-skate-kit',
    name: 'Tenacity Skate Kit',
    description: 'Advanced skating kit for young skaters',
    price: 3499,
    image: classicQuad1,
    category: 'Baby & Tenacity',
    pageUrl: '/baby-tenacity-skates',
    keywords: 'kids children junior youth advanced'
  }
];

// Bearings Products
const bearingsProducts = [
  {
    id: 'premium-bearings',
    name: 'Premium Skate Bearings ABEC-9',
    description: 'High-performance ABEC-9 bearings for smooth rolling',
    price: 1499,
    image: bearings,
    category: 'Quad & Inline Bearings',
    pageUrl: '/bearings',
    keywords: 'abec9 abec-9 ball bearing roller'
  },
  {
    id: 'standard-bearings',
    name: 'Standard Skate Bearings ABEC-7',
    description: 'Reliable ABEC-7 bearings for everyday skating',
    price: 999,
    image: bearings,
    category: 'Quad & Inline Bearings',
    pageUrl: '/bearings',
    keywords: 'abec7 abec-7 ball bearing roller'
  }
];

// Quad Wheels Products
const quadWheelsProducts = [
  {
    id: 'quad-wheels-premium',
    name: 'Premium Quad Wheels',
    description: 'High-performance quad skating wheels',
    price: 1999,
    image: wheels,
    category: 'Quad Wheels',
    pageUrl: '/quad-wheels'
  }
];

// Speed Frames Products
const speedFramesProducts = [
  {
    id: 'pro-speed-frames',
    name: 'Professional Speed Frames',
    description: 'Competition-grade speed frames for professional skaters',
    price: 3999,
    image: frames,
    category: 'Speed Frames',
    pageUrl: '/speed-frames'
  }
];

// Bags Products
const bagsProducts = [
  {
    id: 'skate-backpack',
    name: 'Skate Backpack',
    description: 'Spacious backpack designed for carrying skates and gear',
    price: 1799,
    image: bearings, // Using placeholder image
    category: 'Bags',
    pageUrl: '/bags',
    keywords: 'backpack carry storage transport'
  },
  {
    id: 'skate-duffel-bag',
    name: 'Skate Duffel Bag',
    description: 'Durable duffel bag with compartments for all your skating equipment',
    price: 2299,
    image: bearings, // Using placeholder image
    category: 'Bags',
    pageUrl: '/bags',
    keywords: 'duffel carry storage transport'
  }
];

// Guard Set & Ezeefit Products
const guardSetProducts = [
  {
    id: 'pro-guard-set',
    name: 'Professional Guard Set',
    description: 'Complete protection set for professional skaters',
    price: 2499,
    image: bearings, // Using placeholder image
    category: 'GuardSet & Ezeefit',
    pageUrl: '/guard-set',
    keywords: 'protection pads guards safety professional'
  },
  {
    id: 'ezeefit-ankle-booties',
    name: 'Ezeefit Ankle Booties',
    description: 'Comfortable ankle protection to prevent blisters and pressure points',
    price: 1299,
    image: bearings, // Using placeholder image
    category: 'GuardSet & Ezeefit',
    pageUrl: '/guard-set',
    keywords: 'ankle protection comfort booties'
  }
];

// Hangers Products
const hangersProducts = [
  {
    id: 'skate-wall-hanger',
    name: 'Skate Wall Hanger',
    description: 'Wall-mounted hanger for displaying and storing your skates',
    price: 899,
    image: bearings, // Using placeholder image
    category: 'Hangers',
    pageUrl: '/hangers',
    keywords: 'wall mount storage display'
  },
  {
    id: 'multi-skate-rack',
    name: 'Multi-Skate Storage Rack',
    description: 'Free-standing rack for storing multiple pairs of skates',
    price: 1699,
    image: bearings, // Using placeholder image
    category: 'Hangers',
    pageUrl: '/hangers',
    keywords: 'rack storage multiple pairs'
  }
];

// Helmets Products
const helmetsProducts = [
  {
    id: 'pro-skate-helmet',
    name: 'Professional Skating Helmet',
    description: 'High-impact protection helmet for professional skaters',
    price: 2799,
    image: bearings, // Using placeholder image
    category: 'Helmets',
    pageUrl: '/helmets',
    keywords: 'head protection safety professional'
  },
  {
    id: 'kids-skate-helmet',
    name: 'Kids Skating Helmet',
    description: 'Colorful and safe helmet designed for young skaters',
    price: 1599,
    image: bearings, // Using placeholder image
    category: 'Helmets',
    pageUrl: '/helmets',
    keywords: 'kids children head protection safety'
  }
];

// Spacers-Axle-Adapter Products
const spacersAxleAdapterProducts = [
  {
    id: 'precision-spacers',
    name: 'Precision Bearing Spacers',
    description: 'High-precision spacers for optimal bearing performance',
    price: 499,
    image: bearings, // Using placeholder image
    category: 'Spacers-Axle-Adapter',
    pageUrl: '/spacers-axle-adapter',
    keywords: 'bearing spacers precision performance'
  },
  {
    id: 'axle-adapter-kit',
    name: 'Universal Axle Adapter Kit',
    description: 'Versatile adapters to fit different wheel and frame combinations',
    price: 799,
    image: bearings, // Using placeholder image
    category: 'Spacers-Axle-Adapter',
    pageUrl: '/spacers-axle-adapter',
    keywords: 'axle adapter universal compatibility'
  }
];

// QuadSkates & Accessories Products
const quadSkatesAccessoriesProducts = [
  {
    id: 'quad-skate-tool',
    name: 'Quad Skate Multi-Tool',
    description: 'All-in-one tool for quad skate maintenance and adjustments',
    price: 899,
    image: bearings, // Using placeholder image
    category: 'QuadSkates & Accessories',
    pageUrl: '/quad-skates-accessories',
    keywords: 'tool maintenance adjustment repair'
  },
  {
    id: 'toe-stops',
    name: 'Premium Toe Stops',
    description: 'High-grip toe stops for precise control and stopping power',
    price: 599,
    image: bearings, // Using placeholder image
    category: 'QuadSkates & Accessories',
    pageUrl: '/quad-skates-accessories',
    keywords: 'toe stop brake control grip'
  }
];

// Shoes & Frame Products
const shoesFrameProducts = [
  {
    id: 'custom-shoe-frame-combo',
    name: 'Custom Shoe & Frame Combo',
    description: 'Personalized shoe and frame combination for optimal performance',
    price: 5999,
    image: frames, // Using placeholder image
    category: 'Shoes & Frame',
    pageUrl: '/shoes-frame',
    keywords: 'custom personalized combo combination'
  },
  {
    id: 'performance-shoe-frame',
    name: 'Performance Shoe & Frame Set',
    description: 'Pre-configured high-performance shoe and frame set',
    price: 4999,
    image: frames, // Using placeholder image
    category: 'Shoes & Frame',
    pageUrl: '/shoes-frame',
    keywords: 'performance set combo combination'
  }
];

// SkinSuits Products
const skinSuitsProducts = [
  {
    id: 'pro-racing-skinsuit',
    name: 'Professional Racing Skinsuit',
    description: 'Aerodynamic skinsuit for competitive speed skating',
    price: 3999,
    image: bearings, // Using placeholder image
    category: 'SkinSuits',
    pageUrl: '/skin-suits',
    keywords: 'racing aerodynamic speed competition'
  },
  {
    id: 'team-skinsuit',
    name: 'Team Racing Skinsuit',
    description: 'Customizable team skinsuit with your club colors and logos',
    price: 4599,
    image: bearings, // Using placeholder image
    category: 'SkinSuits',
    pageUrl: '/skin-suits',
    keywords: 'team club custom colors logos'
  }
];

// Combine all products from pages
const allPageProducts = [
  ...inlineSkatesProducts,
  ...rollerSkatesProducts,
  ...bootsProducts,
  ...framesProducts,
  ...wheelsProducts,
  ...accessoriesProducts,
  ...babyTenacityProducts,
  ...bearingsProducts,
  ...quadWheelsProducts,
  ...speedFramesProducts,
  ...bagsProducts,
  ...guardSetProducts,
  ...hangersProducts,
  ...helmetsProducts,
  ...spacersAxleAdapterProducts,
  ...quadSkatesAccessoriesProducts,
  ...shoesFrameProducts,
  ...skinSuitsProducts
];

export default allPageProducts;
