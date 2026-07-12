import { BarChart3, Truck, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "End-to-End Sales Project",
    description:
      "Comprehensive sales analysis covering revenue trends, product performance, regional breakdowns, and RFM customer segmentation using Power BI.",
    tools: ["Power BI", "Excel", "SQL"],
    image: "/projects/sales-overview.jpg",
    pdf: "/projects/end-to-end-sales.pdf",
    icon: BarChart3,
  },
  {
    title: "Supply Chain Dashboard",
    description:
      "Supply chain performance tracking with executive KPI scorecards, logistics and geographic performance views, and profitability simulation & forecasting.",
    tools: ["Power BI", "Excel"],
    image: "/projects/supply-kpi.jpg",
    pdf: "/projects/supply-chain-dashboard.pdf",
    icon: Truck,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-background shadow-md shadow-black/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      View Report <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
