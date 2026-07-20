"use client";

import { useState } from "react";
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

function SkillCard({ skill }: { skill: (typeof skills)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = skill.icon;

  return (
    <div className="group flex w-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:bg-card-hover sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${skill.iconBg} ${skill.iconText} transition-colors group-hover:bg-white/5`}
      >
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold">{skill.name}</h3>
      <div className="mt-2 flex-1">
        <p
          className={`text-sm leading-relaxed text-muted ${expanded ? "" : "line-clamp-2"}`}
        >
          {skill.description}
        </p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 self-start text-xs font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
