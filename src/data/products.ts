export interface Product {
  id: number;
  name: string;
  category: string;
  images: string[];
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
  colors: string[];
  storage: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    category: "Smartphones",

    images: [
      "/images/products/iphone/back.jpg",
      "/images/products/iphone/front.jpg",
      "/images/products/iphone/side.jpg",
      "/images/products/iphone/angle.jpg",
    ],

    price: 999,
    oldPrice: 1199,
    discount: "17% OFF",

    rating: 4.9,
    reviews: 245,

    description:
      "The iPhone 17 Pro delivers exceptional performance with the latest A18 Pro chip, stunning OLED display, advanced AI features, professional-grade camera system, and all-day battery life.",

    inStock: true,

    colors: [
      "Natural Titanium",
      "Black Titanium",
      "White Titanium",
      "Desert Titanium",
    ],

    storage: ["128 GB", "256 GB", "512 GB", "1 TB"],

    specifications: [
      {
        label: "Display",
        value: '6.9" OLED',
      },
      {
        label: "Processor",
        value: "Apple A18 Pro",
      },
      {
        label: "RAM",
        value: "12 GB",
      },
      {
        label: "Storage",
        value: "256 GB",
      },
      {
        label: "Battery",
        value: "5000 mAh",
      },
      {
        label: "Camera",
        value: "48 MP Triple Camera",
      },
      {
        label: "Operating System",
        value: "iOS 26",
      },
      {
        label: "Warranty",
        value: "1 Year",
      },
    ],
  },

  {
    id: 2,
    name: "MacBook Air M4",
    category: "Laptops",

    images: [
      "/images/products/macbook/back.jpg",
      "/images/products/macbook/open.jpg",
      "/images/products/macbook/side.jpg",
      "/images/products/macbook/front.jpg",
    ],

    price: 1299,
    oldPrice: 1499,
    discount: "13% OFF",
    rating: 4.8,
    reviews: 186,
    description:
      "MacBook Air M4 combines Apple's latest M4 chip with an ultra-light design, brilliant Liquid Retina display, long battery life, and incredible performance for professionals and students.",
    inStock: true,
    colors: ["Midnight", "Silver", "Space Gray", "Starlight"],
    storage: ["256 GB", "512 GB", "1 TB", "2 TB"],
    specifications: [
      {
        label: "Display",
        value: '13.6" Liquid Retina',
      },
      {
        label: "Processor",
        value: "Apple M4",
      },
      {
        label: "CPU",
        value: "10-Core CPU",
      },
      {
        label: "GPU",
        value: "10-Core GPU",
      },
      {
        label: "Memory",
        value: "16 GB Unified Memory",
      },
      {
        label: "Storage",
        value: "512 GB SSD",
      },
      {
        label: "Battery",
        value: "Up to 18 Hours",
      },
      {
        label: "Camera",
        value: "12 MP Center Stage",
      },
      {
        label: "Operating System",
        value: "macOS Sequoia",
      },
      {
        label: "Weight",
        value: "1.24 kg",
      },
      {
        label: "Warranty",
        value: "1 Year",
      },
    ],
  },

  {
    id: 3,
    name: "Sony WH-1000XM6",
    category: "Audio",
    images: [
      "/images/products/headphone/headphone1.jpg",
      "/images/products/headphone/headphone2.jpg",
      "/images/products/headphone/headphone3.jpg",
      "/images/products/headphone/headphone4.jpg",
    ],
    price: 399,
    oldPrice: 449,
    discount: "11% OFF",
    rating: 4.8,
    reviews: 186,
    description:
      "Experience industry-leading noise cancellation with the Sony WH-1000XM6. Equipped with premium sound, AI-powered call clarity, up to 40 hours of battery life, and an ultra-comfortable lightweight design for immersive listening anywhere.",
    inStock: true,
    colors: ["Black", "Silver", "Midnight Blue"],
    storage: ["Standard Edition"],
    specifications: [
      {
        label: "Driver Size",
        value: "30 mm Dynamic Driver",
      },
      {
        label: "Noise Cancellation",
        value: "Adaptive Active Noise Cancellation",
      },
      {
        label: "Battery Life",
        value: "Up to 40 Hours",
      },
      {
        label: "Charging",
        value: "USB Type-C Fast Charging",
      },
      {
        label: "Bluetooth",
        value: "Bluetooth 5.4",
      },
      {
        label: "Audio Codec",
        value: "LDAC, AAC, SBC",
      },
      {
        label: "Microphones",
        value: "AI Beamforming Microphones",
      },
      {
        label: "Weight",
        value: "250 g",
      },
      {
        label: "Water Resistance",
        value: "Not Rated",
      },
      {
        label: "Warranty",
        value: "1 Year Manufacturer Warranty",
      },
    ],
  },

  {
    id: 4,
    name: "Apple AirPods Pro (2nd Gen)",
    category: "Audio",

    images: [
      "/images/products/headphone/headphone5.jpg",
      "/images/products/headphone/headphone6.jpg",
      "/images/products/headphone/headphone7.jpg",
      "/images/products/headphone/headphone8.jpg",
    ],

    price: 249,
    oldPrice: 279,
    discount: "11% OFF",

    rating: 4.9,
    reviews: 372,

    description:
      "Apple AirPods Pro (2nd Generation) deliver immersive sound with Active Noise Cancellation, Adaptive Audio, Transparency Mode, Personalized Spatial Audio, and the powerful H2 chip. Enjoy crystal-clear calls, USB-C charging, MagSafe compatibility, and up to 30 hours of listening time with the charging case.",

    inStock: true,

    colors: ["White"],

    storage: ["USB-C Charging Case"],

    specifications: [
      {
        label: "Chip",
        value: "Apple H2",
      },
      {
        label: "Noise Cancellation",
        value: "Active Noise Cancellation (ANC)",
      },
      {
        label: "Transparency Mode",
        value: "Adaptive Transparency",
      },
      {
        label: "Spatial Audio",
        value: "Personalized Spatial Audio",
      },
      {
        label: "Battery Life",
        value: "Up to 6 Hours (Earbuds), 30 Hours with Case",
      },
      {
        label: "Charging",
        value: "USB-C, MagSafe, Qi Wireless",
      },
      {
        label: "Connectivity",
        value: "Bluetooth 5.3",
      },
      {
        label: "Water Resistance",
        value: "IP54 (Earbuds & Case)",
      },
      {
        label: "Microphones",
        value: "Dual Beamforming Microphones",
      },
      {
        label: "Compatibility",
        value: "iPhone, iPad, Mac, Apple Watch",
      },
      {
        label: "Weight",
        value: "5.3 g (Each Earbud)",
      },
      {
        label: "Warranty",
        value: "1 Year Manufacturer Warranty",
      },
    ],
  },

  {
    id: 5,
    name: "Inphic PW1 Gaming Mouse",
    category: "Accessories",

    images: [
      "/images/products/mouse/mouse1.jpg",
      "/images/products/mouse/mouse2.jpg",
      "/images/products/mouse/mouse3.jpg",
      "/images/products/mouse/mouse4.jpg",
    ],

    price: 29,
    oldPrice: 39,
    discount: "26% OFF",
    rating: 4.6,
    reviews: 154,
    description:
      "The Inphic PW1 is a wired RGB gaming mouse designed for precision, comfort, and reliability. Featuring an ergonomic right-handed design, six programmable buttons, adjustable DPI up to 7200, colorful RGB breathing effects, and plug-and-play connectivity, it's ideal for gaming, productivity, and everyday use.",
    inStock: true,
    colors: ["Black", "Gray"],
    storage: ["Standard Edition"],
    specifications: [
      {
        label: "Connection",
        value: "USB Wired",
      },
      {
        label: "Sensor",
        value: "High-Precision Optical Sensor",
      },
      {
        label: "DPI",
        value: "800 / 1600 / 2400 / 3200 / 4800 / 7200",
      },
      {
        label: "Buttons",
        value: "6 Programmable Buttons",
      },
      {
        label: "Lighting",
        value: "RGB Breathing Lighting",
      },
      {
        label: "Polling Rate",
        value: "125 Hz",
      },
      {
        label: "Cable Length",
        value: "1.5 m",
      },
      {
        label: "Weight",
        value: "95 g",
      },
      {
        label: "Dimensions",
        value: "120 × 78 × 38 mm",
      },
      {
        label: "Compatibility",
        value: "Windows, macOS",
      },
      {
        label: "Warranty",
        value: "1 Year Manufacturer Warranty",
      },
    ],
  },

  {
    id: 6,
    name: "Samsung Galaxy Watch5",
    category: "Smart Watches",
    images: [
      "/images/products/smartwatch/smartwatch1.jpg",
      "/images/products/smartwatch/smartwatch2.jpg",
      "/images/products/smartwatch/smartwatch3.jpg",
      "/images/products/smartwatch/smartwatch4.jpg",
    ],
    price: 279,
    oldPrice: 329,
    discount: "15% OFF",
    rating: 4.8,
    reviews: 312,

    description:
      "The Samsung Galaxy Watch5 combines a premium sapphire crystal display, advanced health tracking, GPS, and long-lasting battery life in a sleek smartwatch. Powered by Wear OS Powered by Samsung, it offers seamless integration with Android devices, fitness tracking, sleep monitoring, ECG, and body composition analysis.",

    inStock: true,

    colors: ["Graphite", "Silver", "Sapphire", "Pink Gold"],

    storage: ["16 GB"],

    specifications: [
      {
        label: "Display",
        value: '1.4" Super AMOLED',
      },
      {
        label: "Resolution",
        value: "450 × 450 pixels",
      },
      {
        label: "Processor",
        value: "Samsung Exynos W920 Dual-Core",
      },
      {
        label: "RAM",
        value: "1.5 GB",
      },
      {
        label: "Storage",
        value: "16 GB",
      },
      {
        label: "Operating System",
        value: "Wear OS Powered by Samsung",
      },
      {
        label: "Battery",
        value: "410 mAh (Up to 40 Hours)",
      },
      {
        label: "Charging",
        value: "Fast Wireless Charging",
      },
      {
        label: "Connectivity",
        value: "Bluetooth 5.2, Wi-Fi, NFC, GPS",
      },
      {
        label: "Sensors",
        value:
          "Heart Rate, ECG, BioActive Sensor, SpO₂, Accelerometer, Gyroscope",
      },
      {
        label: "Water Resistance",
        value: "5ATM + IP68 + MIL-STD-810H",
      },
      {
        label: "Weight",
        value: "33.5 g",
      },
      {
        label: "Compatibility",
        value: "Android 8.0 or later with Google Mobile Services",
      },
      {
        label: "Warranty",
        value: "1 Year Manufacturer Warranty",
      },
    ],
  },

  {
    id: 7,
    name: "PlayStation 5 Slim",
    category: "Gaming",

    images: [
      "/images/products/gaming/gaming1.jpg",
      "/images/products/gaming/gaming2.jpg",
      "/images/products/gaming/gaming3.jpg",
      "/images/products/gaming/gaming4.jpg",
    ],

    price: 499,
    oldPrice: 549,
    discount: "9% OFF",

    rating: 4.9,
    reviews: 528,

    description:
      "Experience lightning-fast loading, breathtaking 4K visuals, immersive haptic feedback, adaptive triggers, and Tempest 3D Audio with the PlayStation 5 Slim. Powered by an ultra-high-speed SSD and the custom AMD Zen 2 processor, the PS5 delivers next-generation gaming performance with support for ray tracing, HDR, and up to 120 FPS gameplay.",

    inStock: true,

    colors: ["White", "Midnight Black"],

    storage: ["1 TB SSD"],

    specifications: [
      {
        label: "CPU",
        value: "AMD Zen 2 8-Core @ 3.5 GHz",
      },
      {
        label: "GPU",
        value: "AMD RDNA 2, 10.28 TFLOPS",
      },
      {
        label: "Memory",
        value: "16 GB GDDR6",
      },
      {
        label: "Storage",
        value: "1 TB Ultra-High-Speed SSD",
      },
      {
        label: "Optical Drive",
        value: "Ultra HD Blu-ray Disc Drive",
      },
      {
        label: "Video Output",
        value: "Up to 4K 120Hz, 8K Supported",
      },
      {
        label: "Audio",
        value: "Tempest 3D AudioTech",
      },
      {
        label: "Connectivity",
        value: "Wi-Fi 6, Bluetooth 5.1, Gigabit Ethernet",
      },
      {
        label: "Ports",
        value: "USB-C, USB-A, HDMI 2.1",
      },
      {
        label: "Controller",
        value: "DualSense Wireless Controller",
      },
      {
        label: "Backward Compatibility",
        value: "Supports Most PS4 Games",
      },
      {
        label: "Warranty",
        value: "1 Year Manufacturer Warranty",
      },
    ],
  },
];

export const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];
