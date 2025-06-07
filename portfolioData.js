const portfolioData = {
  // Portfolio items for index.html (homepage)
  indexPortfolio: [
    // Project 1: Modern Living Room
    {
      category: "residential",
      media: [{ type: "image", src: "./assets/imgs/Res-VictoryPark-LivingRM01.jpg", alt: "Modern Living Room" }],
      title: "Modern Living Room",
      description: "A contemporary living space with clean lines and neutral tones."
    },
    // Project 2: Sleek Office Design
    {
      category: "commercial",
      media: [{ type: "image", src: "./assets/imgs/Com-VI-OfficeSpace01.jpg", alt: "Sleek Office Design" }],
      title: "Sleek Office Design",
      description: "An open-plan office space promoting collaboration and productivity."
    },
    // Project 3: Kitchen Makeover
    {
      category: "renovation",
      media: [{ type: "image", src: "./assets/imgs/Res-Ologolo-Kitchen05.jpg", alt: "Kitchen Makeover" }],
      title: "Kitchen Makeover",
      description: "A complete kitchen renovation with modern appliances and stylish finishes."
    },
    // Project 4: Cozy Bedroom Retreat
    {
      category: "residential",
      media: [{ type: "video", src: "./assets/vids/Res-VictoryPark-BedRM-vid.mp4", alt: "Cozy Bedroom Retreat" }],
      title: "Cozy Bedroom Retreat",
      description: "A serene bedroom design focusing on comfort and relaxation."
    },
    // Project 5: Chic Retail Space
    {
      category: "commercial",
      media: [{ type: "video", src: "./assets/vids/Com-Culate-Stores01.mp4", alt: "Chic Retail Space" }],
      title: "Chic Retail Space",
      description: "A trendy retail interior designed to enhance the shopping experience."
    },
    // Project 6: Bathroom Transformation
    {
      category: "renovation",
      media: [{ type: "image", src: "./assets/imgs/Res-VictoryPark-BathRM03.jpg", alt: "Bathroom Transformation" }],
      title: "Bathroom Transformation",
      description: "A luxurious bathroom renovation with spa-like features."
    }
  ],

  // Portfolio items for portfolio.html
  portfolioPage: {
    // Residential Projects Section
    residential: [
      // Project 1: Victory Park (Modern Living Room)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-VictoryPark-LivingRM01.jpg", alt: "Modern Living Room" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-LivingRM02.jpg", alt: "Modern Living Room 2" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-LivingRM03.jpg", alt: "Modern Living Room 3" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-LivingRM04.jpg", alt: "Modern Living Room 4" },
          { type: "video", src: "./assets/vids/Res-VictoryPark-LivingRM-vid.mp4", alt: "Modern Living Room Video" }
        ],
        title: "Modern Living Room",
        description: "A contemporary living space with clean lines and neutral tones."
      },
      // Project 2: Victory Park (Cozy Bedroom Retreat)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-VictoryPark-BedRM01.jpg", alt: "Cozy Bedroom Retreat" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-BedRM02.jpg", alt: "Cozy Bedroom Retreat 2" },
          { type: "video", src: "./assets/vids/Res-VictoryPark-BedRM-vid.mp4", alt: "Cozy Bedroom Retreat Video" }
        ],
        title: "Master Bedroom",
        description: "A serene bedroom design focusing on comfort and relaxation."
      },
      // Project 3: Victory Park (Elegant Exterior Design)
      {
        media: [
          { type: "video", src: "./assets/vids/Res-VictoryPark-ExteriorFacVid03.mp4", alt: "Elegant Exterior Video" },
          { type: "video", src: "./assets/vids/Res-VictoryPark-ExteriorFacVid02.mp4", alt: "Elegant Exterior Video 2" }
        ],
        title: "Elegant Exterior Design",
        description: "A stunning facade that blends classic and modern aesthetics."
      },
      // Project 4: Favour Court (Warm Contemporary Kitchen)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Ologolo-Kitchen01.jpg", alt: "Warm Contemporary Kitchen" },
          { type: "image", src: "./assets/imgs/Res-Ologolo-Kitchen02.jpg", alt: "Warm Contemporary Kitchen 2" },
          { type: "video", src: "./assets/vids/Res-Ologolo-Kitchen-vid1.mp4", alt: "Warm Contemporary Kitchen Video" },
          { type: "image", src: "./assets/imgs/Res-Ologolo-Kitchen03.jpg", alt: "Warm Contemporary Kitchen 3" },
          { type: "video", src: "./assets/vids/Res-Ologolo-Kitchen-vid3.mp4", alt: "Warm Contemporary Kitchen Video 2" }
        ],
        title: "Master Kitchen",
        description: "A stylish kitchen with brown-themed neutral tones and modern features."
      },
      // Project 5: Megamond (Luxurious Living Space)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM01.jpg", alt: "Luxurious Living Space" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM07.jpg", alt: "Luxurious Living Space 2" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM09.jpg", alt: "Luxurious Living Space 3" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM03.jpg", alt: "Luxurious Living Space 4" },
          { type: "video", src: "./assets/vids/Res-Megamond-LivingRM-vid02.mp4", alt: "Luxurious Living Space Video" },
          { type: "image", src: "./assets/imgs/Res-Megamond-TvUnit01.jpg", alt: "Luxurious Living Space 5" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM04.jpg", alt: "Luxurious Living Space 6" },
          { type: "video", src: "./assets/vids/Res-Megamond-LivingRM-vid06.mp4", alt: "Luxurious Living Space Video 2" }
        ],
        title: "Luxurious Living Space",
        description: "An elegant living room design that seamlessly blends contemporary aesthetics with comfort."
      },
      // Project 6: Megamond (Serene Master Suite)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Megamond-BedRM01.jpg", alt: "Serene Master Suite" },
          { type: "image", src: "./assets/imgs/Res-Megamond-BedRM02.jpg", alt: "Serene Master Suite 2" },
          { type: "video", src: "./assets/vids/Res-Megamond-BedRM-vid05.mp4", alt: "Serene Master Suite Video" },
          { type: "image", src: "./assets/imgs/Res-Megamond-Figurins.jpg", alt: "Serene Master Suite 3" }
        ],
        title: "Serene Master Suite",
        description: "A master bedroom design showcasing rich textures and a harmonious blend of style and comfort."
      },
      // Project 7: Megamond (Open-Plan Kitchen)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Megamond-OpenKitchen02.jpg", alt: "Open-Plan Kitchen" },
          { type: "video", src: "./assets/vids/Res-Megamond-Kitchen-vid01.mp4", alt: "Open-Plan Kitchen Video" },
          { type: "video", src: "./assets/vids/Res-Megamond-OpenPlanKitchen-vid1.mp4", alt: "Open-Plan Kitchen Video 2" },
          { type: "image", src: "./assets/imgs/Res-Megamond-OpenKitchen.jpg", alt: "Open-Plan Kitchen 2" }
        ],
        title: "Open-Plan Kitchen",
        description: "A seamless integration of style and functionality with sleek cabinetry and modern appliances."
      },
      // Project 8: Favour Court (Meticulously Curated Living Room)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-FavourCourt-LivingRM03.jpg", alt: "Curated Living Room" },
          { type: "image", src: "./assets/imgs/Res-FavourCourt-LivingRM01.jpg", alt: "Curated Living Room 2" },
          { type: "video", src: "./assets/vids/Res-FavourCourt-LivingRM01-vid.mp4", alt: "Curated Living Room Video" },
          { type: "image", src: "./assets/imgs/Res-FavourCourt-LivingRM02.jpg", alt: "Curated Living Room 3" },
          { type: "video", src: "./assets/vids/Res-FavourCourt-LivingRM03-vid.mp4", alt: "Curated Living Room Video 2" }
        ],
        title: "Meticulously Curated Living Room",
        description: "A masterfully curated grey-toned living space where contemporary design meets comfort."
      },
      // Project 9: Megamond (Modern Bedroom)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Megamond-Figurins.jpg", alt: "Modern Bedroom" },
          { type: "video", src: "./assets/vids/Res-Megamond-BedRM-vid05.mp4", alt: "Modern Bedroom Video" }
        ],
        title: "Modern Bedroom",
        description: "Featuring high-end finishes, soothing color tones, and a balanced mix of sophistication and comfort."
      },
      // Project 10: Ologolo (Cozy Retreat)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Ologolo-BedRM2.jpg", alt: "Cozy Retreat" },
          { type: "image", src: "./assets/imgs/Res-Ologolo-BedRM4.jpg", alt: "Cozy Retreat 2" },
          { type: "image", src: "./assets/imgs/Res-Ologolo-BedRM.jpg", alt: "Cozy Retreat 3" },
          { type: "image", src: "./assets/imgs/Res-Ologolo-BedRM7.jpg", alt: "Cozy Retreat 4" },
          { type: "video", src: "./assets/vids/Res-Ologolo-Bedroom-vid.mp4", alt: "Cozy Retreat Video" }
        ],
        title: "Cozy Retreat",
        description: "Neutral-themed bedroom for premium resting comforts and retreat."
      },
      // Project 11: Megamond (Welcoming Waiting Lounge)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM17.jpg", alt: "Welcoming Waiting Lounge" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM15.jpg", alt: "Welcoming Waiting Lounge 2" },
          { type: "video", src: "./assets/vids/Res-Megamond-LivingRM-vid04.mp4", alt: "Welcoming Waiting Lounge Video" },
          { type: "image", src: "./assets/imgs/Res-Megamond-LivingRM11.jpg", alt: "Welcoming Waiting Lounge 3" }
        ],
        title: "Welcoming Waiting Lounge",
        description: "A vibrant lounge area featuring comfortable furniture and a cheerful decor style to make guests feel at home."
      },
      // Project 12: Victoria Bay (Bespoke Kitchen)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-VictoriaBay-Kitchen01.jpg", alt: "Bespoke Kitchen" },
          { type: "video", src: "./assets/vids/Res-VictoriaBay-Kitchen-vid01.mp4", alt: "Bespoke Kitchen Video" }
        ],
        title: "Bespoke Kitchen",
        description: "A meticulously designed kitchen that balances functionality with elegance."
      },
      // Project 13: Victoria Bay (Avant-Garde Living Room)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-VictoriaBay-LivingRM03.jpg", alt: "Avant-Garde Living Room" },
          { type: "image", src: "./assets/imgs/Res-VictoriaBay-LivingRM02.jpg", alt: "Avant-Garde Living Room 2" },
          { type: "video", src: "./assets/vids/Res-VictoriaBay-LivingRM-vid01.mp4", alt: "Avant-Garde Living Room Video" }
        ],
        title: "Avant-Garde Living Room",
        description: "An artfully composed living space featuring a harmonious grey palette, where clean lines meet thoughtful design."
      },
      // Project 14: Uyo (Sophisticated Living Room)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Uyo-LivingRM03.jpg", alt: "Sophisticated Living Room" },
          { type: "image", src: "./assets/imgs/Res-Uyo-DiningRM02.jpg", alt: "Sophisticated Living Room 2" },
          { type: "image", src: "./assets/imgs/Res-Uyo-DiningRM01.jpg", alt: "Sophisticated Living Room 3" },
          { type: "image", src: "./assets/imgs/Res-Uyo-DiningRM03.jpg", alt: "Sophisticated Living Room 4" }
        ],
        title: "Sophisticated Living Room",
        description: "A grey-themed living room with stylish furniture and a sophisticated vibe."
      },
      // Project 15: Uyo (Luxurious Master Bedroom)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Uyo-BedRM03.jpg", alt: "Luxurious Master Bedroom" },
          { type: "image", src: "./assets/imgs/Res-Uyo-BedRM03.jpg", alt: "Luxurious Master Bedroom 2" },
          { type: "video", src: "./assets/vids/Res-BedRM-vid2.mp4", alt: "Luxurious Master Bedroom Video" },
          { type: "image", src: "./assets/imgs/Res-Uyo-BedRM02.jpg", alt: "Luxurious Master Bedroom 3" }
        ],
        title: "Luxurious Master Bedroom",
        description: "An upscale retreat with plush furnishings and refined decor."
      },
      // Project 16: Victory Park (Chic Restroom)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-VictoryPark-BathRM01.jpg", alt: "Chic Restroom" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-BathRM03.jpg", alt: "Chic Restroom 2" },
          { type: "image", src: "./assets/imgs/Res-VictoryPark-BathRM02.jpg", alt: "Chic Restroom 3" }
        ],
        title: "Chic Restroom",
        description: "A luxurious bathroom design with spa-like features."
      },
      // Project 17: Orchid-Cadogan (Minimalist Lounge)
      {
        media: [
          { type: "video", src: "./assets/vids/Res-Cadogan-LivingRM-vid2.mp4", alt: "Minimalist Lounge Video" },
          { type: "image", src: "./assets/imgs/Res-Cadogan-LivingRM01.jpg", alt: "Minimalist Lounge" }
        ],
        title: "Minimalist Lounge",
        description: "A streamlined living space emphasizing simplicity and elegance."
      },
      // Project 18: Abuja (Cozy Family Living Room)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Abuja-LivingRM01.jpg", alt: "Cozy Family Living Room" },
          { type: "image", src: "./assets/imgs/Res-Abuja-LivingRM02.jpg", alt: "Cozy Family Living Room 2" },
          { type: "image", src: "./assets/imgs/Res-Abuja-LivingRM03.jpg", alt: "Cozy Family Living Room 3" }
        ],
        title: "Cozy Family Living Room",
        description: "An inviting living area designed for comfort and togetherness."
      }
    ],

    // Commercial Projects Section
    commercial: [
      // Project 1: Culate (Trendy Retail Boutique)
      {
        media: [
          { type: "video", src: "./assets/vids/Com-Culate-Stores01.mp4", alt: "Trendy Retail Boutique Video" }
        ],
        title: "Trendy Retail Boutique",
        description: "A stylish boutique interior designed to elevate the shopping experience."
      },
      // Project 2: Spasso (Premium Lounge)
      {
        media: [
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge01.jpg", alt: "Premium Lounge" },
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge02.jpg", alt: "Premium Lounge 2" },
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge05.jpg", alt: "Premium Lounge 3" },
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge04.jpg", alt: "Premium Lounge 4" },
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge03.jpg", alt: "Premium Lounge 5" },
          { type: "image", src: "./assets/imgs/Com-Spasso-Lounge06.jpg", alt: "Premium Lounge 6" }
        ],
        title: "Premium Lounge",
        description: "An upscale lounge in Owerri, perfect for relaxation, dining, and networking."
      }
    ],

    // Renovation Projects Section
    renovations: [
      // Project 1: Uyo (Chic Kitchen Overhaul)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Uyo-Kitchen01.jpg", alt: "Chic Kitchen Overhaul" },
          { type: "image", src: "./assets/imgs/Res-Uyo-Kitchen02.jpg", alt: "Chic Kitchen Overhaul 2" },
          { type: "image", src: "./assets/imgs/Res-Uyo-Kitchen03.jpg", alt: "Chic Kitchen Overhaul 3" }
        ],
        title: "Chic Kitchen Overhaul",
        description: "A sleek renovation featuring state-of-the-art appliances and good finishes."
      },
      // Project 2: Orchid (Refined Living Room Upgrade)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-Orchid-LivingRM03.jpg", alt: "Refined Living Room Upgrade" },
          { type: "image", src: "./assets/imgs/Res-Orchid-LivingRM01.jpg", alt: "Refined Living Room Upgrade 2" },
          { type: "image", src: "./assets/imgs/Res-Orchid-LivingRM02.jpg", alt: "Refined Living Room Upgrade 3" }
        ],
        title: "Refined Living Room Upgrade",
        description: "A sophisticated transformation with a minimalist aesthetic."
      }
    ],

    // Custom Designs Section
    customDesigns: [
      // Project 1: VI-Ali (Bespoke Furniture)
      {
        media: [
          { type: "image", src: "./assets/imgs/CustomD-VI-SingleChair04.jpg", alt: "Bespoke Furniture" }
        ],
        title: "Bespoke Furniture",
        description: "Custom-designed furniture pieces tailored to client specifications."
      },
      // Project 2: General (Custom TV Unit Design)
      {
        media: [
          { type: "image", src: "./assets/imgs/Res-GeneralPaint-LivingRM02.jpg", alt: "Custom TV Unit Design" }
        ],
        title: "Custom TV Unit Design",
        description: "An artistic television unit blending style with functionality."
      },
      // Project 3: Akure (Custom Accent Chair)
      {
        media: [
          { type: "image", src: "./assets/imgs/CustomD-Akure-SingleChair02.jpg", alt: "Custom Accent Chair" }
        ],
        title: "Custom Accent Chair",
        description: "An exclusive single chair designed to elevate any space."
      },
      // Project 4: VI-Ali (Floating Bedset Design)
      {
        media: [
          { type: "image", src: "./assets/imgs/CustomD-VI-BedSide06.jpg", alt: "Floating Bedset Design" }
        ],
        title: "Floating Bedset Design",
        description: "A unique, modern bedset with a minimalist floating design."
      }
    ]
  }
};