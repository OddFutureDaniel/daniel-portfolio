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
                                    src: '/projects/JaffasSabaSR.mov',
                                    alt: 'Video of Jaffa Saba Portfolio Site',
                                    frameWidth: 650,
                                    imageWidth: 650
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
                                    src: '/projects/Replica-T-Shirt.jpg',
                                    alt: "Jaffa Saba Red Bull Visa Cashapp Collab",
                                    frameWidth: 420,
                                    imageWidth: 290
                                },
                                {
                                    type: 'video',
                                    src: '/projects/JaffasSabaSR.mov',
                                    alt: 'Video of Jaffa Saba Portfolio Site',
                                    frameWidth: 650,
                                    imageWidth: 650
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
            case 4:
                return (
                    <p>hello</p>
                )
        // other cases...
    }
}