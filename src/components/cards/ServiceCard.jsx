export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div
      className="
        bg-darkCard
        p-6
        rounded-xl
        border border-darkCard
        hover:border-primary
        hover:-translate-y-2
        transition-all duration-300 ease-out
        hover:shadow-[0_0_50px_rgba(247,147,30,0.45)]
      "
    >
      {/* ICON */}
      <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-lightText text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
