function TimelineCard({ weekNumber, title, items }) {
  return (
    <div>
      <h2 className="text-2xl text-text font-medium mb-2">Week {weekNumber}</h2>
      <ul className="p-2 space-y-1">
        {items.map((item) => (
          <li className="flex items-center gap-5">
            <span className="w-2 h-2 bg-accent rounded-full shrink-0 aspect-square"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineCard;
