"use client";

import { ArrowUpRight, Check, Clipboard, Github, Linkedin, BookOpen, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { identity } from "@/data/portfolio";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section-shell" id="contact" aria-labelledby="contact-heading">
      <div className="shell contact__layout">
        <div className="contact__copy">
          <span>07 / Contact</span>
          <h2 id="contact-heading">Let’s build something meaningful.</h2>
          <p>
            I am open to graduate research opportunities, AI internships, collaborative projects,
            and conversations about computer vision, explainable AI, and multimodal learning.
          </p>

          <div className="contact__actions">
            <a className="button button--primary" href={`mailto:${identity.email}`}>
              <Mail aria-hidden="true" size={17} />
              Email me
            </a>
            <a
              className="button button--secondary"
              href={identity.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <a className="button button--secondary" href={identity.linkedin} target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" size={17} />LinkedIn<ArrowUpRight aria-hidden="true" size={15} /></a>
            <a className="button button--secondary" href={identity.researchgate} target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" size={17} />ResearchGate<ArrowUpRight aria-hidden="true" size={15} /></a>
            <button className="copy-email" type="button" onClick={copyEmail}>
              {copied ? <Check aria-hidden="true" size={16} /> : <Clipboard aria-hidden="true" size={16} />}
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__header">
            <span>Start a conversation</span>
            <i aria-hidden="true" />
          </div>

          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              placeholder="Your name"
            />
            {errors.name ? <p id="name-error" role="alert">{errors.name}</p> : null}
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@example.com"
            />
            {errors.email ? <p id="email-error" role="alert">{errors.email}</p> : null}
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell me what you’re exploring…"
            />
            {errors.message ? <p id="message-error" role="alert">{errors.message}</p> : null}
          </div>

          <button className="button button--primary contact-form__submit" type="submit">
            Create email
            <ArrowUpRight aria-hidden="true" size={17} />
          </button>
          <p className="contact-form__note">This form opens your email app. No data is stored.</p>
        </form>
      </div>
    </section>
  );
}
