import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        <div className="shrink-0">
          <div className="h-48 w-48 overflow-hidden rounded-full ring-1 ring-accent/30 ring-offset-2 ring-offset-background shadow-xl shadow-accent/20 md:h-56 md:w-56">
            <img
              src="/mypic1.jpg"
              alt="Irfan Shaukat"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-medium text-accent">
            Data Analyst
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-accent">Irfan Shaukat</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
            Turning Data into Actionable Insights
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I analyze complex datasets, build interactive dashboards, and deliver
            data-driven solutions that help businesses make smarter decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent bg-transparent px-6 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/10"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
