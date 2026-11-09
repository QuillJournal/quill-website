import FeatureCard from "./FeatureCard";
const FEATURES = [
  {
    title: "End-to-End Encrypted",
    content:
      "Your journal entries are encrypted locally on your device before ever touching cloud storage. Only you hold the keys.",
  },
  {
    title: "Local-First Storage",
    content:
      "Built with a local database architecture. Your thoughts remain accessible and fully functional even when you're completely offline.",
  },
  {
    title: "Zero Analytics or Trackers",
    content:
      "We don't log your activity, monitor your typing habits, or sell your behavior data to third-party ad networks. Period.",
  },
  {
    title: "Minimalist Editorial UI",
    content:
      "A distraction-free, typography-driven writing space designed to help you focus purely on reflection and storytelling.",
  },
  {
    title: "Cross-Device Sync",
    content:
      "Securely sync your personal journal across your phone and tablet using your own private storage provider without middlemen.",
  },
  {
    title: "Export Anytime",
    content:
      "Your data belongs to you. Export your entire journal into clean Markdown or JSON files whenever you want, with zero lock-in.",
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
