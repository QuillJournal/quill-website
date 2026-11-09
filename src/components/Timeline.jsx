import TimelineCard from "./TimelineCard";
const TIMELINE_DATA = [
  {
    weekNumber: "1",
    title: "Foundation & Local Storage",
    items: [
      "Set up Expo Router and Tailwind v4 environment",
      "Configured local SQLite database with Drizzle ORM",
      "Designed minimalist, typography-driven editorial layout",
    ],
  },
  {
    weekNumber: "2",
    title: "Core Journaling Engine",
    items: [
      "Built rich block editor for daily entries and reflections",
      "Implemented local zero-knowledge data encryption layer",
      "Created habit streak tracking and calendar navigation",
    ],
  },
  {
    weekNumber: "3",
    title: "Sync & Export Systems",
    items: [
      "Added secure cross-device sync via private cloud storage",
      "Implemented zero-lock-in export (Markdown & JSON)",
      "Polished dark mode components and micro-interactions",
    ],
  },
  {
    weekNumber: "4",
    title: "Landing Page & Launch",
    items: [
      "Built landing page with custom CSS hero animations",
      "Integrated privacy statement blockquote and feature cards",
      "Prepared open-source repo documentation and v1 release",
    ],
  },
];
function Timeline() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-semibold">
        <span className="block text-accent">Impressively,</span>we built this
        app in just{" "}
        <span className="underline underline-offset-10">8 weeks</span>
      </h2>
      <div className="flex gap-10 mt-10 px-5">
        <div className="border-l-4 border-accent py-2"></div>
        <div className="flex flex-col gap-10">
          {TIMELINE_DATA.map((item) => (
              <div key={item.weekNumber} className="flex items-center gap-10">
                <div className="w-5 h-5 bg-accent rounded"></div>
              <TimelineCard
                weekNumber={item.weekNumber}
                title={item.title}
                items={item.items}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
