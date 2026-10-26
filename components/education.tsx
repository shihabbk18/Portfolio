import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { activities, earlierEducation, education, languages, recognition } from "@/data/portfolio";

export function Education() {
  return (
    <section className="education section-shell" aria-labelledby="education-heading">
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="Education & recognition"
          title="A foundation for the next question."
          description="Academic preparation, research focus, and verified recognition."
        />
        <h3 id="education-heading" className="sr-only">Education and recognition</h3>

        <div className="record-list">
          <Reveal className="record">
            <div className="record__rail">
              <span>2020</span><i /><span>2025</span>
            </div>
            <div className="record__icon"><GraduationCap aria-hidden="true" /></div>
            <div className="record__content">
              <span>Education</span>
              <h3>{education.university}</h3>
              <p className="record__lead">{education.degree}</p>
              <dl>
                <div><dt>Period</dt><dd>{education.period}</dd></div>
                <div><dt>Thesis</dt><dd>{education.thesis}</dd></div>
                <div><dt>Credits completed</dt><dd>{education.credits}</dd></div>
                <div className="record__wide"><dt>Relevant coursework</dt><dd>{education.coursework}</dd></div>
              </dl>
              <div className="earlier-education">
                {earlierEducation.map((item) => (
                  <article key={item.qualification}>
                    <h4>{item.institution}</h4>
                    <p>{item.qualification}</p>
                    <p>{item.period}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="record" delay={0.08}>
            <div className="record__rail">
              <span>01</span><i /><span>03</span>
            </div>
            <div className="record__icon"><Award aria-hidden="true" /></div>
            <div className="record__content">
              <span>Recognition</span>
              <h3>Academic record</h3>
              <ol className="recognition-list">
                {recognition.map((item, index) => (
                  <li key={item}><span>0{index + 1}</span>{item}</li>
                ))}
              </ol>
              <div className="education-details">
                <h4>Language proficiency</h4>
                <p>{languages.ielts}</p>
                <p>{languages.scores}</p>
                <p>{languages.proficiency}</p>
                <h4>Community & leadership</h4>
                <ul>{activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
