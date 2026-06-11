import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={align === "center" ? "text-center max-w-3xl mx-auto mb-12" : "max-w-3xl mb-12"}
    >
      {eyebrow && (
        <div
          className={`inline-block text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-4 ${
            light ? "bg-white/15 text-white" : "bg-card-accent text-primary"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? "text-white/85" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
