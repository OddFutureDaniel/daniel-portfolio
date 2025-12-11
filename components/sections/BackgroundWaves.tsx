import AnimatedSvg from "./AnimatedWaveBackground";

export default function BackgroundWaves() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-[180vh] md:h-[220vh] z-10">
      <AnimatedSvg />
    </div>
  );
}