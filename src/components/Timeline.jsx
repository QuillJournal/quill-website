import TimelineCard from "./TimelineCard";
const TIMELINE_DATA = [
  {
    weekNumber: "1",
    items: [
      "Set up Expo Router and Tailwind v4 environment",
      "Configured local SQLite database with Drizzle ORM",
      "Designed minimalist, typography-driven editorial layout",
    ],
  },
  {
    weekNumber: "2",
    items: [
      "Added ability to log in, sign up, and upload profile picture",
      "Improved overall app UI",
      "Added subtle UI animations",
    ],
  },
  {
    weekNumber: "3",
    items: [
      "Added entry media attachments",
      "Added native haptic feedback",
      "Added account deletion functionality",
      "Added interactive calendar view",
    ],
  },
  {
    weekNumber: "4",
    items: [
      "Made the calendar collapsible and enhanced functionality",
      "Migrated from plain SQLite to SQLCipher encrypted database",
      "Improved app UI and interactions",
    ],
  },
  {
    weekNumber: "5",
    items: [
      "Added ability to invite and add collaborators to diaries",
      "Added end-to-end encrypted cloud synchronization",
      "Redesigned and improved the Entry screen",
    ],
  },
  {
    weekNumber: "6",
    items: [
      "Added attachment cloud sync support",
      "Added chronological Feed view",
      "Added mood tracking feature",
    ],
  },
  {
    weekNumber: "7",
    items: [
      "Added introductory onboarding screen",
      "Redesigned the List view",
      "Added biometric App Lock privacy feature",
    ],
  },
  {
    weekNumber: "8",
    items: [
      "Added journaling streak tracking engine",
      "Added ability to remove collaborators from diaries",
      "Refined daily streak calculation counter",
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
