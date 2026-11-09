import FeatureCard from "./FeatureCard";
const FEATURES = [
  {
    title: "End-to-End Encryption",
    content:
      "Your shared diaries are encrypted using end-to-end encryption. So only you and your friends can read them",
  },
  {
    title: "Local-First Storage",
    content:
      "Built with a local database, your thoughts remain yours and are only synced when you are online",
  },
  {
    title: "Multi-View Navigation",
    content:
      "Explore three distinct views. List, Feed, and Timeline. Each has its own purpose",
  },
  {
    title: "Minimalist Editorial UI",
    content:
      "A distraction-free, minimal but still powerful editor. You can attach media to entries, select your mood, and the date",
  },
  {
    title: "App Lock",
    content:
      "More privacy with app lock, so you can lock the app and no one can open it without having your fingerprint",
  },
  {
    title: "Beginner Friendly",
    content:
      "Featuring an introductory screen and onboarding tutorial, so beginners don't get scared and can still learn the app step by step",
  },
];
function Features() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-semibold">
        What makes <span className="text-accent">Quil</span> different?
      </h2>
      <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {FEATURES.map((f) => (
          <FeatureCard title={f.title} content={f.content} />
        ))}
      </div>
    </div>
  );
}

export default Features;
