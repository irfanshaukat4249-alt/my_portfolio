import { Mail, Phone, Briefcase, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center text-sm text-muted sm:flex-row sm:text-left">
        <div>
          <p>&copy; {new Date().getFullYear()} Data Analyst. All rights reserved.</p>
          <p className="mt-1">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              Next.js
            </a>{" "}
            &middot; Design by me
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:irfanshaukat4249@gmail.com"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="Email"
          >
            <Mail size={14} />
          </a>
          <a
            href="tel:03334004249"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="Phone"
          >
            <Phone size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-shaukat4249"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Briefcase size={14} />
          </a>
          <a
            href="https://github.com/irfanshaukat4249-alt/Irfan-Shaukat"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Code2 size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
