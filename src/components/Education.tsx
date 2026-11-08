import { education } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Studies" title="Education" />
      <div className="space-y-8">
        {education.map((item) => (
          <article key={item.institution} className="reveal grid md:grid-cols-3 gap-3 md:gap-10">
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-muted-foreground">{item.institution}</p>
            </div>
            <div className="md:col-span-2 text-sm text-muted-foreground flex flex-col sm:flex-row sm:justify-between gap-1">
              <span>{item.location}</span>
              <span>{item.period}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
