import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Interior of an industrial factory with a high ceiling, featuring heavy machinery and large metallic structures. There is an overhead crane with a large hook hanging from it, and the environment is illuminated with warm, orange lighting, highlighting the metallic textures and giving a sense of heat and activity even in the absence of visible workers. The factory appears to be in operation, as evidenced by the lit areas and the haze that slightly obscures the far background, possibly due to dust or heat."
      title="Scale your business with us"
    />
  );
}
