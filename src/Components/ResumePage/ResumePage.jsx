import React from "react";
import { motion } from "framer-motion";

// Stagger parent variant for smooth component load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Fade up animation for sections and blocks
const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen py-12 px-4 md:px-8 font-sans text-[#181511] antialiased overflow-x-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* TOP HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full relative mb-12 py-12 px-6 md:px-12 rounded-xl bg-[#FBF9F5]/40 border border-black/10 backdrop-blur-sm overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(#181511 1px, transparent 1px), linear-gradient(90deg, #181511 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-3xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-black text-xs font-mono font-semibold uppercase tracking-wider mb-6 bg-white"
            >
              <span className="bg-black text-white px-1.5 py-0.5 rounded-full text-[10px]">
                CV
              </span>
              <span>Reviewing My Journey</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6 text-[#181511]"
            >
              My experience,
              <br />
              skills & impact.
            </motion.h1>
          </div>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-6 right-8 font-serif italic text-blue-600 text-sm flex items-center space-x-1"
          >
            <span>look closer</span>
            <span>↓</span>
          </motion.div>
        </motion.div>

        {/* PRINT / DOWNLOAD ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-full flex justify-end space-x-4 mb-6"
        >
          <a href="../Resume.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-[#181511] text-white border-2 border-black font-mono text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#FF4128] hover:shadow-[2px_2px_0px_0px_#FF4128] transition-all flex items-center space-x-2"
            >
              <span>Download Resume PDF</span>
              <span>→</span>
            </motion.button>
          </a>
        </motion.div>

        {/* RESUME PAPER SHEET */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="w-full bg-[#FAF9F5] border border-black/10 shadow-2xl p-8 md:p-14 text-[#181511] relative"
        >
          {/* HEADER SECTION */}
          <motion.header
            variants={fadeUpVariants}
            className="border-b border-black pb-8 mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
              Nishant Pratap Singh
            </h1>
            <p className="text-base font-serif text-[#181511]/80 mb-4">
              Data Analyst
            </p>

            <div className="font-mono text-xs text-blue-600 flex flex-wrap gap-x-4 gap-y-1">
              <span>•</span>
              <a
                href="mailto:npstanwar09@gmail.com"
                className="hover:underline"
              >
                npstanwar09@gmail.com
              </a>
              <span>•</span>
              <span>+91 930634322</span>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/npstanwar/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin
              </a>
              <span>•</span>
              <a
                href="https://github.com/npstanwar"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github
              </a>
              <span>•</span>
              <span className="text-gray-500">New Delhi</span>
            </div>
          </motion.header>

          {/* PROFILE SUMMARY */}
          <motion.section
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-8 border-b border-gray-300 mb-8"
          >
            <div className="md:col-span-3 font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70">
              PROFILE
            </div>
            <div className="md:col-span-9 font-serif text-base text-[#181511]/90 leading-relaxed">
              Data Analyst with experience building end-to-end analytics
              solutions using Python, SQL, Power BI, and Streamlit. Delivered 10
              end-to-end Business Intelligence dashboards and analyzed datasets
              over 3.8 million records across sports, healthcare, retail, and
              fitness domains.
            </div>
          </motion.section>

          {/* METRICS ROW */}
          <motion.section
            variants={fadeUpVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-gray-300 mb-10"
          >
            {[
              { val: "10+", label: "Analytics Projects" },
              { val: "4M+", label: "Records Processed" },
              { val: "10+", label: "BI Dashboards" },
              { val: "4", label: "Industries" },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-black tracking-tight">
                  {metric.val}
                </div>
                <div className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* MAIN 2-COLUMN LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* LEFT COLUMN: EXPERIENCE & EDUCATION */}
            <main className="md:col-span-8 space-y-10 border-r-0 md:border-r border-gray-200 md:pr-8">
              <motion.div
                variants={fadeUpVariants}
                className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-6"
              >
                EXPERIENCE
              </motion.div>

              {/* Role 1 */}
              <motion.article variants={fadeUpVariants} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold font-serif">
                    Data Analyst Intern
                  </h3>
                  <span className="font-mono text-xs text-gray-500">
                    December 2025 – June 2026
                  </span>
                </div>
                <div className="text-xs font-serif text-gray-600 italic">
                  Labmentix Pvt. Ltd.
                </div>
                <ul className="list-disc list-inside font-serif text-sm text-[#181511]/85 space-y-2 pt-2 leading-relaxed">
                  <li>
                    Provided 10 end-to-end Business Intelligence dashboards for
                    sports, insurance, retail, and fitness projects using Power
                    BI and Streamlit, enabling stakeholders to monitor KPIs
                    through interactive visualizations.
                  </li>
                  <li>
                    Improved reporting accuracy and data consistency across 5+
                    data sources totaling over 4 million entries by automating
                    ETL pipelines and data cleaning workflows using Python
                    (Pandas, NumPy) and SQL.
                  </li>
                  <li>
                    Conducted Exploratory Data Analysis (EDA) and feature
                    engineering on large-scale datasets to identify trend
                    anomalies and operational inefficiencies supporting
                    stakeholder decision-making.
                  </li>
                  <li>
                    Optimized API integration and client-side application
                    performance for the Tennis Analytics Platform, improving
                    dashboard responsiveness and real-time query performance.
                  </li>
                </ul>
              </motion.article>

              {/* Role 2 */}
              <motion.article variants={fadeUpVariants} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold font-serif">
                    Tennis Analytics Platform (Team Project){" "}
                  </h3>
                  <span className="font-mono text-xs text-gray-500">
                    May 2026 – Jun 2026
                  </span>
                </div>
                <ul className="list-disc list-inside font-serif text-sm text-[#181511]/85 space-y-2 pt-2 leading-relaxed">
                  <li>
                    Built an interactive Streamlit frontend for a tennis
                    analytics platform using the SportRadar API, providing
                    real-time analytics across 1,000+ players and 6,500+
                    competitions.
                  </li>
                  <li>
                    Integrated SQL Server and MongoDB to manage structured
                    ranking data and semi-structured match data supporting
                    player and tournament analysis.
                  </li>
                  <li>
                    Developed player search and benchmarking modules supporting
                    1,000+ players across 74 countries, enabling faster athlete
                    comparison.
                  </li>
                  <li>
                    Implemented responsive filtering and UI state
                    synchronization to support smooth exploration of 1,000+
                    player profiles during complex searches.
                  </li>
                </ul>
              </motion.article>

              {/* Role 3 */}
              <motion.article variants={fadeUpVariants} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold font-serif">
                    Strava Fitness Analytics
                  </h3>
                  <span className="font-mono text-xs text-gray-500">
                    Mar 2026 – Apr 2026
                  </span>
                </div>
                <ul className="list-disc list-inside font-serif text-sm text-[#181511]/85 space-y-2 pt-2 leading-relaxed">
                  <li>
                    Consolidated 8 Fitbit exports containing over 3.8 million
                    observations using Python and PostgreSQL
                  </li>
                  <li>
                    Performed exploratory data analysis on 2.4M+ heart-rate
                    measurements and 1.3M+ MET observations to identify activity
                    and health trends.
                  </li>
                  <li>
                    Designed an interactive Power BI dashboard with 20+ KPIs
                    visualizing sleep, activity, calories, and cardiovascular
                    metrics
                  </li>
                  <li>
                    Segmented users into behavioral groups to generate
                    actionable insights for personalized fitness
                    recommendations, strengthening user engagement and
                    retention.
                  </li>
                </ul>
              </motion.article>

              {/* Role 4 */}
              <motion.article variants={fadeUpVariants} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-bold font-serif">
                    Healthcare Insurance Risk Modeling
                  </h3>
                  <span className="font-mono text-xs text-gray-500">
                    Jan 2026 – Feb 2026
                  </span>
                </div>
                <ul className="list-disc list-inside font-serif text-sm text-[#181511]/85 space-y-2 pt-2 leading-relaxed">
                  <li>
                    Evaluated 4 regression models using Python, Pandas, and
                    Scikit-learn selecting Gradient Boosting with R² = 0.879,
                    RMSE = 4335 as the best-performing model.
                  </li>
                  <li>
                    Analyzed 6 customer features through EDA and feature
                    engineering, identifying Smoking Status (67.7%), BMI
                    (19.0%),and Age (11.9%) as the major cost drivers.
                  </li>
                  <li>
                    Created preprocessing pipelines using ColumnTransformer,
                    OneHotEncoder, and GridSearchCV to evaluate 4 regression
                    algorithms within a unified machine learning workflow.
                  </li>
                  <li>
                    Presented business recommendations that prioritized 3 major
                    pricing factors (Smoking Status, BMI, and Age) for premium
                    estimation and underwriting decisions
                  </li>
                </ul>
              </motion.article>

              {/* EDUCATION SECTION */}
              <motion.div
                variants={fadeUpVariants}
                className="pt-6 border-t border-gray-300 space-y-2"
              >
                <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-3">
                  EDUCATION
                </div>

                <div>
                  {/* Degree Title & Date aligned using Flexbox */}
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h4 className="font-serif text-sm font-bold text-[#181511]">
                      Bachelor of Science (B.Sc.G)
                    </h4>
                    <span className="font-mono text-xs text-gray-500">
                      July 2019 – July 2024
                    </span>
                  </div>

                  {/* Institution Name */}
                  <p className="font-serif text-sm text-gray-600 font-normal mt-0.5">
                    Indira Gandhi National Open University (IGNOU)
                  </p>
                </div>
              </motion.div>
            </main>

            {/* RIGHT COLUMN: SIDEBAR SKILLS & TOOLS */}
            <aside className="md:col-span-4 space-y-8">
              {/* Core Expertise */}
              <motion.div variants={fadeUpVariants}>
                <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-3">
                  Languages and Databases
                </div>
                <ul className="font-serif text-sm space-y-1.5 text-[#181511]/85">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>MySQL</li>
                  <li> PostgreSQL</li>
                </ul>
              </motion.div>

              {/* Machine Learning */}
              <motion.div variants={fadeUpVariants}>
                <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-3">
                  METHODS
                </div>
                <ul className="font-serif text-sm space-y-1.5 text-[#181511]/85">
                  <li>Scikit-learn</li>
                  <li>Predictive Modeling</li>
                  <li>Feature Engineering</li>
                  <li>Gradient Boosting</li>
                  <li>Statistical Analysis</li>
                </ul>
              </motion.div>

              {/* Product Domains */}
              <motion.div variants={fadeUpVariants}>
                <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-3">
                  BI and Visualization
                </div>
                <ul className="font-serif text-sm space-y-1.5 text-[#181511]/85">
                  <li>Power BI</li>
                  <li> Streamlit</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                  <li>Data Visualization</li>
                  <li>Plotly</li>
                </ul>
              </motion.div>

              {/* Tools */}
              <motion.div variants={fadeUpVariants}>
                <div className="font-mono text-xs uppercase font-bold tracking-widest text-[#181511]/70 mb-3">
                  Tools and Analytics
                </div>
                <ul className="font-serif text-sm space-y-1.5 text-[#181511]/85">
                  <li>Git</li>
                  <li>Jupyter Notebook</li>
                  <li>ETL Pipelines</li>
                  <li>KPI Reporting</li>
                  <li>EDA</li>
                  <li>Data Cleaning</li>
                  <li>Stakeholder Communication</li>
                  <li>Data-Driven Decision Making</li>
                </ul>
              </motion.div>
            </aside>
          </div>

          {/* Decorative Corner Glow Accent */}
        </motion.div>
      </div>
    </div>
  );
}
