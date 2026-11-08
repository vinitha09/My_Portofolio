import { experience } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="container-mono py-24 md:py-32">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="space-y-10">
        {experience.map((job) => (
          <article key={job.company} className="reveal grid md:grid-cols-3 gap-4 md:gap-10">
            <div>
              <h3 className="font-semibold">{job.role}</h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <p className="text-sm text-muted-foreground">{job.location}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground mb-3">{job.period}</p>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
