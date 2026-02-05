// components/ProjectDetails.tsx
import { GridContainer } from './GridContainer';
import { Carousel } from './Carousel';

export function ProjectDetails({ projectId }: { projectId: number }) {
    switch (projectId) {
        case 1:
            return (
                <GridContainer className='mt-8!'>
                    <div className="col-span-12">
                        <Carousel
                            items={[
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Replica-T-Shirt_akuq0n',
                                    alt: "Jaffa Saba Red Bull Visa Cashapp Collab",
                                    frameWidth: 420,
                                    imageWidth: 290
                                },
                                {
                                    type: 'video',
                                    poster: 'https://res.cloudinary.com/dzkjoraha/video/upload/so_1,f_jpg,q_auto/JaffasSabaSR_hnxl1t_ii1w2d.jpg',
                                    src: 'https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/JaffasSabaSR_hnxl1t_ii1w2d.mp4',
                                    alt: 'Video of Jaffa Saba Portfolio Site',
                                    frameWidth: 650,
                                    imageWidth: 580
                                  },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/eyesofnazareth2_c9wnt8',
                                    alt: 'Eyes of Nazareth',
                                    frameWidth: 400,
                                    imageWidth: 360
                                },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Jaffa_Saba_Shopify_Portfolio_Site_Project_ipvyfn',
                                    alt: "Jaffa Saba Project",
                                    frameWidth: 600,
                                    imageWidth: 500
                                },
                            ]}
                            frameHeight={385}
                        />
                    </div>
                    <div className="col-span-5 mb-8! mx-4!">
                        <p>We designed and developed a portfolio website for multi disciplinary artist Jaffa Saba, focusing on clarity and ease of use to showcase an evolving selection of art, music and creative direction.</p>
                    </div>
                </GridContainer>
            );
        case 2:
            return (
                <p>hello</p>
            );
        case 3:
            return (
                <GridContainer className='mt-8!'>
                    <div className="col-span-12">
                        <Carousel
                            items={[
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/IMG_7427_vhcwht',
                                    alt: "730Carlina BB.Simon Belts",
                                    frameWidth: 420,
                                    imageWidth: 290
                                },
                                {
                                    type: 'video',
                                    poster: 'https://res.cloudinary.com/dzkjoraha/video/upload/so_1,f_jpg,q_auto/730studiosr_vj1qxm.jpg',
                                    src: 'https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/730studiosr_vj1qxm.mp4',
                                    alt: '730Carlina website screen recording',
                                    frameWidth: 650,
                                    imageWidth: 580
                                  },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/IMG_5698_mre21z',
                                    alt: 'BB Belt Promo Image',
                                    frameWidth: 400,
                                    imageWidth: 300
                                },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/04B2D23A-D8B1-40F8-9223-97C99E0A9C56_iyar9l',
                                    alt: "Kirby Chain",
                                    frameWidth: 300,
                                    imageWidth: 300
                                },
                            ]}
                            frameHeight={385}
                        />
                    </div>
                    <div className="col-span-5 mb-8! mx-4!">
                        <p>We designed and developed an immersive digital space for 730Carlina, drawing on early internet culture to present fashion items, imagery and archive pieces as a cohesive world.</p>
                    </div>
                </GridContainer>
            );
            case 4:
                return (
                    <GridContainer className='mt-8!'>
                    <div className="col-span-12">
                        <Carousel
                            items={[
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Screenshot_2026-02-02_at_15.25.35_icvmns',
                                    alt: "SkynMaps Website",
                                    frameWidth: 650,
                                    imageWidth: 650
                                },
                                {
                                    type: 'video',
                                    poster: 'https://res.cloudinary.com/dzkjoraha/video/upload/so_0,f_jpg,q_auto/freecompress-SkynmapsSC_c89tcc.jpg',
                                    src: 'https://res.cloudinary.com/dzkjoraha/video/upload/fl_progressive,q_auto/freecompress-SkynmapsSC_c89tcc.mp4',
                                    alt: 'Video of SkynMaps Website',
                                    frameWidth: 650,
                                    imageWidth: 550
                                  },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/Screenshot_2026-02-02_at_15.26.45_wz1qzk',
                                    alt: 'SkynMaps Website',
                                    frameWidth: 650,
                                    imageWidth: 650
                                },
                                {
                                    type: 'image',
                                    src: 'https://res.cloudinary.com/dzkjoraha/image/upload/q_auto,f_auto/',
                                    alt: "Jaffa Saba Project",
                                    frameWidth: 300,
                                    imageWidth: 300
                                },
                            ]}
                            frameHeight={385}
                        />
                    </div>
                    <div className="col-span-5 mb-8! mx-4!">
                        <p>We designed and developed an immersive digital space for 730Carlina, drawing on early internet culture to present fashion items, imagery and archive pieces as a cohesive world.</p>
                    </div>
                </GridContainer>
                )
        // other cases...
    }
}