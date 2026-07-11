import {
  Code2,
  Database,
  BarChart3,
  Table,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    description:
      "Data cleaning, analysis, and visualization\n\u2022 Pandas, NumPy\n\u2022 Matplotlib, Seaborn",
    icon: Code2,
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
  },
  {
    name: "SQL",
    description:
      "Complex queries and database optimization\n\u2022 Joins, subqueries, window functions\n\u2022 Query performance tuning",
    icon: Database,
    iconBg: "bg-orange-500/10",
    iconText: "text-orange-400",
  },
  {
    name: "Power BI",
    description:
      "Interactive dashboards and data modeling\n\u2022 DAX measures, Power Query\n\u2022 KPI scorecards, forecasting",
    icon: BarChart3,
    iconBg: "bg-yellow-500/10",
    iconText: "text-yellow-400",
  },
  {
    name: "Advanced Excel",
    description:
      "Spreadsheet analysis and automation\n\u2022 Pivot tables, VLOOKUP/XLOOKUP\n\u2022 Power Query, macros, modeling",
    icon: Table,
    iconBg: "bg-green-500/10",
    iconText: "text-green-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
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
