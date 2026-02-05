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
                                    src: '/projects/Replica-T-Shirt.jpg',
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
                                    src: '/projects/eyesofnazareth2.webp',
                                    alt: 'Eyes of Nazareth',
                                    frameWidth: 400,
                                    imageWidth: 360
                                },
                                {
                                    type: 'image',
                                    src: '/projects/Jaffa Saba Shopify Portfolio Site Project.png',
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
                                    src: '/projects/IMG_7427.png',
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
                                    src: '/projects/IMG_5698.png',
                                    alt: 'BB Belt Promo Image',
                                    frameWidth: 400,
                                    imageWidth: 300
                                },
                                {
                                    type: 'image',
                                    src: '/projects/kirbychain.png',
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
                                    src: '/projects/Skynmapssc1.png',
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
                                    src: '/projects/Skynmapssc2.png',
                                    alt: 'SkynMaps Website',
                                    frameWidth: 650,
                                    imageWidth: 650
                                },
                                {
                                    type: 'image',
                                    src: '/projects/kirbychain.png',
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