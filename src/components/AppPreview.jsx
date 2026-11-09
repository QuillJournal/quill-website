const SCREENSHOTS = [
  { src: "/screenshots/1.jpg", alt: 'screenshot-1' },
  { src: "/screenshots/2.jpg", alt: 'screenshot-2' },
  { src: "/screenshots/3.jpg", alt: 'screenshot-3' },
  { src: "/screenshots/2.jpg", alt: 'screenshot-4' },
  { src: "/screenshots/3.jpg", alt: 'screenshot-5' },
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
