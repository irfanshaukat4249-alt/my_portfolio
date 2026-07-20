import { BarChart3, FileSpreadsheet, ArrowUpRight, ChartLine, Eye, TrendingUp, MapPin, BarChart4, Layers } from "lucide-react";

const projects = [
  {
    title: "End-to-End Retail Sales Analytics & Advanced RFM Segmentation",
    description:
      "A comprehensive, data-driven Business Intelligence solution leveraging Python, MySQL, and Power BI to analyze retail performance, predict customer churn, and optimize marketing strategies through advanced RFM segmentation.",
    tools: ["Data Analytics", "RFM Segmentation", "Power BI Dashboards", "SQL Data Modeling", "Python EDA"],
    image: "/projects/sales-rfm.jpg",
    pdf: "/projects/end-to-end-sales.pdf",
    icon: BarChart3,
    gallery: [
      {
        image: "/projects/sales-exec-overview.jpg",
        label: "Executive Overview Dashboard",
        icon: Eye,
        insight:
          "Provides a macroeconomic view of the business, tracking Total Sales, Total Profit, and Profit Margins. It features time-series forecasting for monthly sales trends and breaks down revenue by product categories to identify top-performing business units.",
      },
      {
        image: "/projects/sales-rfm.jpg",
        label: "Advanced RFM Customer Segmentation",
        icon: ChartLine,
        insight:
          "Advanced analytical framework classifying customer behavior based on Recency, Frequency, and Monetary values. Segments the customer base into actionable cohorts (e.g., Champions, Loyal Customers, At-Risk) to maximize Customer Lifetime Value (CLV).",
      },
      {
        image: "/projects/sales-churn.jpg",
        label: "Customer Churn & Retention Metrics",
        icon: TrendingUp,
        insight:
          "Identifies drop-off patterns and isolates the core factors leading to customer churn. By mapping churn metrics against loyalty tiers, the business can proactively implement retention strategies for high-value segments.",
      },
    ],
  },
  {
    title: "Advanced Excel Business Intelligence Dashboard",
    description:
      "An end-to-end Business Intelligence solution built completely in Microsoft Excel. This project features a centralized executive-level dashboard designed to track high-level sales performance and critical operational metrics.",
    tools: ["Excel BI", "Data Visualization", "Executive Dashboard", "Data Transformation"],
    image: "/projects/excel-dashboard.png",
    pdf: "/projects/excel-dashboard-report.pdf",
    icon: FileSpreadsheet,
    gallery: [
      {
        image: "/projects/excel-dashboard.png",
        label: "Executive Sales Command Center",
        icon: Eye,
        insight:
          "A dynamic, dark-themed visual layout tracking total revenue, transactional volume, and dynamic performance trends at a single glance. Serves as the primary operational homepage for quick stakeholder review.",
      },
      {
        image: "/projects/excel-p2.png",
        label: "Regional Performance & Breakdown",
        icon: MapPin,
        insight:
          "Provides granular deep-dives into regional metrics, product category performance, and seasonal trends to uncover localized growth opportunities.",
      },
      {
        image: "/projects/excel-p3.png",
        label: "Trend Analysis & Core Data Architecture",
        icon: BarChart4,
        insight:
          "Displays underlying volume trends and distributions. Built using automated data transformations, nested formulations, complex Pivot Tables, and interactive cross-report Slicers for seamless data filtering.",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <div className="mt-10 flex flex-col gap-16">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.pdf && (
                      <a
                        href={project.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-accent transition-colors hover:text-accent-hover"
                      >
                        View Report <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="border-t border-border">
                  <div className="grid gap-0 md:grid-cols-3">
                    {project.gallery.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="group flex flex-col border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                        >
                          <div className="aspect-video w-full overflow-hidden rounded-lg bg-background shadow-md shadow-black/20">
                            <img
                              src={item.image}
                              alt={item.label}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-4 flex items-start gap-2">
                            <div className="mt-0.5 shrink-0 text-accent">
                              <ItemIcon size={16} />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold">{item.label}</h4>
                              <p className="mt-1 text-xs leading-relaxed text-muted">{item.insight}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
