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
      <div className="mt-20 max-w-2xl mx-auto border-l-4 border-accent pl-6 py-2">
        <blockquote className="text-text font-jakarta text-2xl font-medium leading-relaxed">
          <p>
            <span className="block">We built <span className="font-bold text-accent">Quill</span> because we believe</span>
            <span className="block">your personal data belongs to you.</span>
          </p>
        </blockquote>
      </div>
    </>
  );
}

export default Hero;
