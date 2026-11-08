import CircleShape from "./CircleShape";
import PaperPlane from "./PaperPlane";
import StarShape from "./StarShape";

function HeroIllustration() {
  return (
    <div className="flex items-center justify-between m-10">
      <CircleShape size={150} />
      <div className="animate-move-rotate inline-block origin-center">
        <PaperPlane size={50} />
      </div>
      <StarShape size={200} />
    </div>
  );
}
export default HeroIllustration;
