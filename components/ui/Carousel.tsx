// components/Carousel.tsx
import Image from 'next/image';

interface CarouselItem {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    frameWidth: number;
    imageWidth?: number;
}

interface CarouselProps {
    items: CarouselItem[];
    frameHeight?: number;
}

export function Carousel({ items, frameHeight = 600 }: CarouselProps) {
    return (
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-4">
                {items.map((item, index) => (
                    <div 
                        key={index}
                        className="shrink-0 bg-[#d9d9d9]/20 flex items-center justify-center p-8 overflow-hidden"
                        style={{ 
                            height: `${frameHeight}px`,
                            width: `${item.frameWidth}px`
                        }}
                    >
                        {item.type === 'image' ? (
                            <Image 
                                src={item.src}
                                alt={item.alt || ''}
                                width={item.imageWidth || (item.frameWidth - 64)}
                                height={frameHeight - 64}
                                className="object-contain"
                               
                            />
                        ) : (
                            <video 
                                src={item.src}
                                className="object-cover"
                                style={{ 
                                    width: `${item.imageWidth || (item.frameWidth - 64)}px`,
                                    height: `${frameHeight - 64}px`
                                }}
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}