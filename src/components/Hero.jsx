import HeroIllustration from "./HeroAnimation";

function Hero() {
  return (
    <>
      <h2 className="text-text font-jakarta text-6xl font-semibold">
        <span className="block">Want to share</span>
        <span className="block">
          more <span className="text-accent font-extrabold">memories</span> with
        </span>
        <span className="block">friends?</span>
      </h2>
      <HeroIllustration />
      <h2 className="text-text font-jakarta text-5xl font-semibold mt-30 w-fit text-left ml-auto">
        <span className="block">Tired of apps ignoring</span>
        <span className="block">
          your <span className="text-danger font-extrabold">privacy</span>?
        </span>
      </h2>
      <p className="text-center text-text text-2xl mt-10">
        We built Quill because we believe your personal data belongs to you
      </p>
    </>
  );
}

export default Hero;
