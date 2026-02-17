// components/Carousel.tsx
import Image from 'next/image';

interface CarouselItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  frameWidth: number;
  imageWidth?: number;
  poster?: string;
  mobile?: {
    frameWidth?: number;
    imageWidth?: number;
  };
}

interface CarouselProps {
  items: CarouselItem[];
  frameHeight?: number;
  mobileFrameHeight?: number;
  isMobile?: boolean;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function Carousel({
  items,
  frameHeight = 600,
  mobileFrameHeight = 420,
  isMobile = false,
}: CarouselProps) {
  const h = isMobile ? mobileFrameHeight : frameHeight;

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 pl-6">
        {items.map((item, index) => {
          const rawFrameW = isMobile
            ? item.mobile?.frameWidth ?? item.frameWidth
            : item.frameWidth;

          const frameW = isMobile ? clamp(rawFrameW, 220, 420) : rawFrameW;

          const rawImgW = isMobile
            ? item.mobile?.imageWidth ??
              item.imageWidth ??
              item.mobile?.frameWidth ??
              item.frameWidth
            : item.imageWidth ?? item.frameWidth;

          const imgW = isMobile ? clamp(rawImgW, 200, frameW) : rawImgW;

          return (
            <div
              key={index}
              className="shrink-0 bg-[#d9d9d9]/20 flex items-center justify-center overflow-hidden"
              style={{ height: `${h}px`, width: `${frameW}px` }}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt || ''}
                  width={imgW}
                  height={h}
                  quality={100}
                  priority
                  sizes={`(max-width: 768px) ${imgW}px, ${imgW}px`}
                  className="object-contain"
                />
              ) : (
                <video
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="object-cover mobile:object-contain"
                  style={{ width: `${imgW}px`, height: `${h}px` }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}
        <div className="shrink-0 w-6" style={{ height: `${h}px` }} />
      </div>
    </div>
  );
}