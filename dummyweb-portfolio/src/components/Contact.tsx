import { Mail, Briefcase, Code2, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-4 text-muted">
          Have a question or want to collaborate? Drop me a message.
        </p>

        <form
          action="mailto:irfanshaukat4249@gmail.com"
          method="post"
          encType="text/plain"
          className="mt-10 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-none rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex items-center gap-6">
          <a
            href="mailto:irfanshaukat4249@gmail.com"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Mail size={16} /> Email
          </a>
          <a
            href="tel:03334004249"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Phone size={16} /> 03334004249
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-shaukat4249?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Briefcase size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/irfanshaukat4249-alt/Irfan-Shaukat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <Code2 size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
