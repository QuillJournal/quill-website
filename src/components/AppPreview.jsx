const SCREENSHOTS = [
  { src: "/screenshots/home-screen.jpg", alt: "Home screen" },
  { src: "/screenshots/account-settings.jpg", alt: "Account settings" },
  { src: "/screenshots/feed-view.jpg", alt: "Feed view" },
  { src: "/screenshots/list-view.jpg", alt: "List view" },
  { src: "/screenshots/editor.jpg", alt: "Editor" },
  { src: "/screenshots/diary-settings.jpg", alt: "Diary settings" },
];
function AppPreview() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl font-semibold">A Preview of Quill</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {SCREENSHOTS.map((screenshot) => (
          <div className="bg-[#EDEDF4] p-2.5 rounded-2xl border border-[#C4C6D0]/40 shadow-xs max-w-[200px] sm:max-w-[240px]">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppPreview;
