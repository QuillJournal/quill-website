function FeatureCard({ title, content }) {
  return (
    <div className="p-7 bg-card rounded-2xl">
      <h2 className="text-xl font-semibold text-[white] mb-2">{title}</h2>
      <p className="text-slate-200">{content}</p>
    </div>
  );
}

export default FeatureCard;
