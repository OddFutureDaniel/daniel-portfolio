export type ProjectCarouselItem = {
    type: "image" | "video";
    src: string;
    alt?: string;
    poster?: string;
  
    frameWidth: number;
    imageWidth?: number;
  
    mobile?: {
      frameWidth?: number;
      imageWidth?: number;
    };
  };
  
  export type Project = {
    id: number;
    year: string;
    client: string;
    type: string;
    tech: string;
  
    description: string;
  
    carousel: {
      frameHeight: number;
      mobileFrameHeight: number;
      items: ProjectCarouselItem[];
    };
  };
  
  export const PROJECTS: Record<number, Project> = {
    1: {
      id: 1,
      year: "2026",
      client: "Jaffa Saba",
      type: "Website",
      tech: "Shopify",
      description:
        "We designed and developed a portfolio website for multi disciplinary artist Jaffa Saba, focusing on clarity and ease of use to showcase an evolving selection of art, music and creative direction.",
      carousel: {
        frameHeight: 385,
        mobileFrameHeight: 420,
        items: [
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Replica-T-Shirt_akuq0n",
            alt: "Jaffa Saba Red Bull Visa Cashapp Collab",
            frameWidth: 420,
            imageWidth: 290,
            mobile: { frameWidth: 320, imageWidth: 320 },
          },
          {
            type: "video",
            poster:
              "https://res.cloudinary.com/dzkjoraha/video/upload/so_1,f_jpg,q_auto/JaffasSabaSR_hnxl1t_ii1w2d.jpg",
            src: "https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/JaffasSabaSR_hnxl1t_ii1w2d.mp4",
            alt: "Video of Jaffa Saba Portfolio Site",
            frameWidth: 650,
            imageWidth: 580,
            mobile: { frameWidth: 500, imageWidth: 420 },
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/eyesofnazareth2_c9wnt8",
            alt: "Eyes of Nazareth",
            frameWidth: 400,
            imageWidth: 360,
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Jaffa_Saba_Shopify_Portfolio_Site_Project_ipvyfn",
            alt: "Jaffa Saba Project",
            frameWidth: 600,
            imageWidth: 500,
          },
        ],
      },
    },
  
    2: {
      id: 2,
      year: "2025",
      client: "Third Line",
      type: "Website/Identity",
      tech: "Next.js, Tailwind",
      description: "hello",
      carousel: {
        frameHeight: 385,
        mobileFrameHeight: 420,
        items: [],
      },
    },
  
    3: {
      id: 3,
      year: "2025",
      client: "730Carlina",
      type: "Website",
      tech: "Shopify",
      description:
        "We designed and developed an immersive digital space for 730Carlina, drawing on early internet culture to present fashion items, imagery and archive pieces as a cohesive world.",
      carousel: {
        frameHeight: 385,
        mobileFrameHeight: 420,
        items: [
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/IMG_7427_vhcwht",
            alt: "730Carlina BB.Simon Belts",
            frameWidth: 400,
            imageWidth: 330,
            mobile: { frameWidth: 350, imageWidth: 320 },
          },
          {
            type: "video",
            poster:
              "https://res.cloudinary.com/dzkjoraha/video/upload/so_1,f_jpg,q_auto/730studiosr_vj1qxm.jpg",
            src: "https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/730studiosr_vj1qxm.mp4",
            alt: "730Carlina website screen recording",
            frameWidth: 650,
            imageWidth: 580,
            mobile: { frameWidth: 420, imageWidth: 420 },
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/IMG_5698_mre21z",
            alt: "BB Belt Promo Image",
            frameWidth: 400,
            imageWidth: 330,
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/04B2D23A-D8B1-40F8-9223-97C99E0A9C56_iyar9l",
            alt: "Kirby Chain",
            frameWidth: 300,
            imageWidth: 300,
          },
        ],
      },
    },
  
    4: {
      id: 4,
      year: "2024",
      client: "SkynMaps",
      type: "Website",
      tech: "Shopify",
      description:
        "For long-term client SkynMaps, we began with a homepage redesign before refining existing service pages and developing a dedicated booking system, alongside a considered SEO strategy to support long-term visibility.",
      carousel: {
        frameHeight: 385,
        mobileFrameHeight: 420,
        items: [
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Screenshot_2026-02-02_at_15.25.35_icvmns",
            alt: "SkynMaps Website",
            frameWidth: 650,
            imageWidth: 650,
            mobile: { frameWidth: 420, imageWidth: 420 },
          },
          {
            type: "video",
            poster:
              "https://res.cloudinary.com/dzkjoraha/video/upload/so_0,f_jpg,q_auto/freecompress-SkynmapsSC_c89tcc.jpg",
            src: "https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/freecompress-SkynmapsSC_c89tcc.mp4",
            alt: "Video of SkynMaps Website",
            frameWidth: 650,
            imageWidth: 550,
            mobile: { frameWidth: 420, imageWidth: 420 },
          },
          {
            type: "image",
            src: "https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Screenshot_2026-02-02_at_15.26.45_wz1qzk",
            alt: "SkynMaps Website",
            frameWidth: 650,
            imageWidth: 650,
            mobile: { frameWidth: 420, imageWidth: 420 },
          },
        ],
      },
    },
  };
  
  
  export const PROJECT_LIST: Project[] = [1, 2, 3, 4].map((id) => PROJECTS[id]);