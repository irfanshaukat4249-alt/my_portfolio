export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            I am a Data Analyst with expertise in transforming raw data into
            meaningful business insights through analytics, visualization, and
            business intelligence solutions. I specialize in Python, SQL, Power
            BI, and Advanced Excel, helping organizations make data-driven
            decisions using accurate analysis and interactive dashboards.
          </p>
          <p>
            My technical expertise includes Python with Pandas, NumPy,
            Matplotlib, and Seaborn for data cleaning, exploratory data
            analysis (EDA), statistical analysis, and visualization. I have
            strong knowledge of Advanced SQL, including complex joins, Common
            Table Expressions (CTEs), Window Functions, Subqueries, Views,
            Stored Procedures, and Query Optimization for efficient data
            extraction and analysis.
          </p>
          <p>
            I design interactive Power BI dashboards using DAX, KPIs, Drill
            Down, Drill Through, Slicers, Bookmarks, and Dynamic
            Visualizations. My portfolio includes projects such as Customer
            Churn Analysis, RFM Customer Segmentation, Sales Analytics
            Dashboard, HR Analytics Dashboard, and Business Intelligence
            Reporting.
          </p>
          <p>
            With a strong analytical mindset and problem-solving approach, I
            enjoy converting complex datasets into clear, actionable insights
            that improve business performance. I am continuously learning
            modern data technologies and best practices to deliver high-quality
            analytics solutions.
          </p>
          <div className="rounded-lg border border-border bg-background p-4 text-sm leading-relaxed text-muted">
            <span className="font-semibold text-foreground">
              Technical Skills:{" "}
            </span>
            Python &bull; Pandas &bull; NumPy &bull; Matplotlib &bull; Seaborn
            &bull; SQL &bull; Advanced SQL &bull; Power BI &bull; DAX &bull;
            Advanced Excel &bull; Power Query &bull; Data Cleaning &bull; Data
            Visualization &bull; Exploratory Data Analysis (EDA) &bull;
            Dashboard Development &bull; KPI Reporting &bull; Business
            Intelligence &bull; Customer Churn Analysis &bull; RFM Analysis
            &bull; Data Analytics
          </div>
        </div>
      </div>
    </section>
  );
}
