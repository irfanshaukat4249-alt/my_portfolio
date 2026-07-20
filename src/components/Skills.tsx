import {
  Code2,
  Database,
  BarChart3,
  Table,
  PieChart,
} from "lucide-react";

const skills = [
  {
    name: "Advanced Python",
    description:
      "In-depth Exploratory Data Analysis (EDA), Data Cleaning, Statistical Analysis, Automation, and Advanced Analytics using Pandas, NumPy, Matplotlib, and Seaborn.",
    icon: Code2,
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
  },
  {
    name: "Advanced SQL",
    description:
      "Managing complex database schemas, writing highly optimized queries, Joins, Aggregations, CTEs, Window Functions, Views, and Stored Procedures for Query Performance Tuning.",
    icon: Database,
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
  },
  {
    name: "Power BI & BI Specialist",
    description:
      "Designing dynamic, highly interactive Power BI dashboards, advanced DAX implementation, Custom KPIs, Data Modeling, Drill-through, and Predictive Forecasting.",
    icon: BarChart3,
    iconBg: "bg-yellow-500/10",
    iconText: "text-yellow-400",
  },
  {
    name: "Advanced Excel",
    description:
      "Advanced financial modeling, automated workflows via Power Query, Pivot Tables, interactive KPI scorecards, and dynamic dashboards.",
    icon: Table,
    iconBg: "bg-green-500/10",
    iconText: "text-green-400",
  },
  {
    name: "Analytics & Domain Expertise",
    description:
      "RFM Segmentation, Customer Churn Analysis, Predictive Forecasting, KPI Tracking, Data Visualization & Storytelling, Sales Analytics, and Supply Chain & Logistics.",
    icon: PieChart,
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:bg-card-hover"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${skill.iconBg} ${skill.iconText} transition-colors group-hover:bg-white/5`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
