import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectModal from "../ProjectModal/ProjectModal";

const BinderClip = () => (
  <div className="absolute left-1/2 -translate-x-1/2 -top-7 sm:-top-8 z-20 flex flex-col items-center">
    <div className="relative w-6 h-6 sm:w-8 sm:h-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-6 sm:h-8 border-2 border-gray-400 rounded-t-full border-b-0 z-0 transform -skew-x-6 origin-bottom"></div>
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-6 sm:h-8 border-2 border-gray-300 rounded-t-full border-b-0 z-20 transform skew-x-6 origin-bottom"></div>
    </div>
    <div className="relative -mt-2 w-8 sm:w-10 h-6 sm:h-8 rounded-sm z-10 shadow-md flex items-center justify-center bg-[#ff4136]">
      <div className="absolute top-1 left-1 w-full h-[1px] bg-neutral-700 opacity-50"></div>
      <div className="absolute bottom-0 w-full h-1 bg-black opacity-40"></div>
    </div>
  </div>
);

// Desktop Hanging Item (Horizontal Absolute Layout)
const DesktopHangingItem = ({ children, xPosition, yPosition, index }) => {
  const dropDelay = index * 0.12;

  return (
    <motion.div
      className="absolute w-[280px] lg:w-[320px] cursor-grab active:cursor-grabbing hover:z-40"
      style={{
        left: xPosition,
        top: yPosition,
        x: "-50%",
        transformOrigin: "top center",
      }}
      variants={{
        initial: { opacity: 0, y: -60, scale: 0.9 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: dropDelay,
            ease: [0.175, 0.885, 0.32, 1.275],
          },
        },
      }}
    >
      <motion.div
        animate={{ rotate: [3, -3, 3] }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: dropDelay + 0.6,
          },
          scale: { duration: 0.2 },
        }}
      >
        <BinderClip />
        <div className="relative z-10 pt-4">{children}</div>
      </motion.div>
    </motion.div>
  );
};

// Mobile Hanging Item (Vertical Flow Layout)
const MobileHangingItem = ({ children, index }) => {
  const dropDelay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: dropDelay }}
      className="relative w-full max-w-[320px] mx-auto pt-6"
    >
      {/* Vertical Wire Extension */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gray-400/50" />

      <motion.div
        animate={{ rotate: [1.5, -1.5, 1.5] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <BinderClip />
        <div className="relative z-10 pt-2">{children}</div>
      </motion.div>
    </motion.div>
  );
};

const HangingProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let targetScroll = container.scrollLeft;
    let animationFrameId;

    const handleWheel = (e) => {
      // Apply horizontal lerp scroll only on desktop displays (width >= 768px)
      if (window.innerWidth < 768) return;

      e.preventDefault();

      const maxScroll = container.scrollWidth - container.clientWidth;
      targetScroll += e.deltaY * 1.2;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

      cancelAnimationFrame(animationFrameId);

      const updateScroll = () => {
        const distance = targetScroll - container.scrollLeft;
        container.scrollLeft += distance * 0.08;

        if (Math.abs(distance) > 0.5) {
          animationFrameId = requestAnimationFrame(updateScroll);
        } else {
          container.scrollLeft = targetScroll;
        }
      };

      animationFrameId = requestAnimationFrame(updateScroll);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const projectsData = [
    {
      id: 1,
      title: "Starva Fitness",
      description:
        "Modern fitness trackers collect millions of health records every day, capturing physical activity, sleep behavior, heart rate, calorie expenditure, and metabolic intensity.",
      extendedDescription:
        "Modern fitness trackers collect millions of health records every day, capturing physical activity, sleep behavior, heart rate, calorie expenditure, and metabolic intensity.This project analyzes Fitbit wearable device data to understand user lifestyle patterns, identify behavioral trends, evaluate health indicators, and generate actionable recommendations for fitness platforms.The project combines Python, PostgreSQL, SQL, and Power BI to build a complete end-to-end analytics solution.",
      techDetails:
        "Python, Pandas, NumPy, Matplotlib, Seaborn, PostgreSQL, SQL, Power BI, Jupyter",
      achievements: [
        "The majority of users achieve between 2,000–8,000 daily steps, below the commonly recommended 10,000-step goal.",
        "Users spend a significant portion of their day inactive, indicating modern desk-bound lifestyle patterns.",
        "Daily steps, distance traveled, and activity intensity show strong positive relationships with calories burned.",
        "Average sleep duration is close to 7 hours, but users display irregular sleep schedules and only moderate sleep efficiency.",
      ],
      tags: ["Python", "Power BI"],
      image: "../Strava.png",
      link: "https://your-live-dashboard-url.com",
      github: "https://github.com/npstanwar/strava-fitness-analytics",
    },
    {
      id: 2,
      title: "Ola Ride Analysis",
      description:
        "This project is an end-to-end data analytics solution built to analyze Ola ride data.",
      extendedDescription:
        "This project is an end-to-end data analytics solution built to analyze Ola ride data. It covers data cleaning, SQL-based analysis, interactive dashboards, and a Streamlit web application for presentation.",
      techDetails:
        "Python (Pandas, NumPy), PostgreSQL, Power BI, Streamlit, Plotly",
      achievements: [
        "62% ride completion rate indicates strong operational efficiency, but ~38% losses highlight optimization opportunities.",
        "Driver cancellations (≈18%) exceed customer cancellations, suggesting driver-side supply or incentive issues.",
        "Lost revenue (~₹21.45M) from cancellations represents a significant recovery opportunity through driver allocation improvements.",
        "Cash and UPI dominate payments, indicating low credit-card penetration among users.",
      ],
      tags: ["Python ", "PostgreSQL", "Power BI", "Streamlit"],
      image: "../OLA.jpg",
      link: "https://your-live-dashboard-url.com",
      github: "https://github.com/npstanwar/OLA-Ride-Analysis",
    },
    {
      id: 3,
      title: "Tennis Analytics",
      description:
        "The Tennis Analytics Platform is a comprehensive analytics solution designed to analyze global tennis competition data across ATP and WTA tours...",
      extendedDescription:
        "The Tennis Analytics Platform is a comprehensive analytics solution designed to analyze global tennis competition data across ATP and WTA tours. The platform transforms raw ranking and competition data into an interactive business intelligence dashboard that enables users to explore player performance, country-wise participation, rankings, tournaments, and competitive trends through an intuitive Streamlit interface. The project was developed as a collaborative team project, where my primary responsibility was designing and developing the complete Streamlit dashboard, integrating the analytical modules with the data warehouse, and creating an interactive user experience.",
      techDetails:
        "Streamlit, Plotly, HTML, CSS, Python, SQL Server, SQLAlchemy, Star Schema Data Warehouse, MongoDB, ETL Pipeline",
      achievements: [
        "Over 1,000 active competitors participate across more than 70 countries.",
        "More than 6,500 competitions are tracked across ATP and WTA tours.",
        "The USA has the highest player participation globally.",
        "WTA rankings show a higher maximum points ceiling than ATP rankings.",
      ],
      tags: ["Python", "MongoDB", "SQL Server", "Streamlit"],
      image: "../Tennis.webp",
      github: "https://github.com/npstanwar/tennis-analytics",
    },
    {
      id: 4,
      title: "Medibuddy User Behavior Analysis",
      description: "Predictive model for premiums.",
      extendedDescription:
        "Supervised machine learning exploration parsing demographic features and health traits to evaluate risk indexes and pricing adjustments.",
      techDetails:
        "Executed with Python, Scikit-Learn, XGBoost, and Matplotlib libraries targeting minimum root-mean-squared error distributions.",
      achievements: [
        "Attained an R-squared value of 0.89 leveraging gradient-boosted ensembles after proper outlier scaling.",
        "Replaced hardcoded calculation logic with data-driven predictive classification parameters.",
        "Delivered a detailed correlation map revealing major dependencies within premium risk assignments.",
      ],
      tags: ["Python", "ML"],
      image: "../MediBuddy.jpg",
      github: "https://github.com/npstanwar/medibuddy-user-behavior-analysis",
    },
    {
      id: 5,
      title: "Video Game Sales & Player Engagement",
      description:
        "This project explores the relationship between player engagement and commercial performance in the global video game industry.",
      extendedDescription:
        "This project explores the relationship between player engagement and commercial performance in the global video game industry.Two independent datasets were integrated to investigate whether engagement metrics such as ratings, plays, wishlists, and backlogs can explain or predict a game's commercial success.The project follows a complete analytics workflow starting from raw data preparation in Python, relational data storage in PostgreSQL, SQL-based analysis, and interactive dashboard creation in Power BI.",
      techDetails:
        "Executed with Python, Pandas, PostgreSQL, SQL, Power BI, Jupyter Notebook and Matplotlib.",
      achievements: [
        "Games with higher player activity generally demonstrate stronger commercial performance.",
        "User ratings show only a weak relationship with global sales, indicating that critically acclaimed games are not always commercial successes.",
        "Wishlist counts indicate player interest but are not sufficient for forecasting commercial performance.",
        "North America contributes the highest share of global sales, followed by Europe and Japan.",
      ],
      tags: ["Python", "PostgreSQL", "Power BI"],
      image: "../VideoGames.jpg",
      github:
        "https://github.com/npstanwar/video-game-sales-engagement-analysis",
    },

    {
      id: 6,
      title: "Apple iTunes Music Analysis",
      description:
        "This project analyzes the Apple iTunes relational database using SQL to generate business insights into customer behavior...",
      extendedDescription:
        "This project analyzes the Apple iTunes relational database using SQL to generate business insights into customer behavior, sales performance, product popularity, artist performance, operational efficiency, and geographic trends. The project demonstrates advanced SQL techniques including joins, Common Table Expressions (CTEs), window functions, aggregate functions, subqueries, and ranking functions to answer real-world business questions and support data-driven decision making.",
      techDetails: "Executed with PostgreSQL, SQL, and CSV Dataset.",
      achievements: [
        "Approximately 1,697 tracks have never been purchased, indicating significant catalog inefficiency.",
        "Revenue contribution is evenly distributed across employees.",
        "Rock accounts for more than half of total revenue and dominates sales globally.",
        "The customer base is geographically diverse, with the USA contributing the largest customer base.",
      ],
      tags: ["SQL", "PostgreSQL"],
      image: "../ITunes.jpg",
      github: "https://github.com/npstanwar/apple-itunes-music-analysis",
    },
    {
      id: 7,
      title: "Bike Purchase Analysis",
      description:
        "This project analyzes customer demographics and purchasing behavior to identify the key factors influencing bike purchases....",
      extendedDescription:
        "This project analyzes customer demographics and purchasing behavior to identify the key factors influencing bike purchases. Using Excel/Google Sheets, raw customer data was cleaned, transformed using Pivot Tables, and visualized through an interactive dashboard with dynamic slicers and KPI cards.The goal is to help businesses understand their target audience and make data-driven marketing decisions.",
      techDetails:
        "Executed with Google Sheets, Pivot Tables, Pivot Charts, Interactive Slicers and Conditional Formatting.",
      achievements: [
        "Customers aged 35–44 have the highest bike purchase rate (59.52%).",
        "The Pacific region records the highest purchase rate (58.85%).",
        "Customers with medium commute distances (2–5 miles) have the highest purchase rate.",
        "Customers aged 55+ show the lowest purchase probability.",
      ],
      tags: ["Google Sheets", "Conditional Formatting"],
      image: "../Cycle.jpg",
      github: "https://github.com/npstanwar/apple-itunes-music-analysis",
    },
    {
      id: 8,
      title: "Netflix Data Analysis",
      description:
        "This project explores the Netflix titles dataset to uncover patterns and insights. It includes two main ...",
      extendedDescription:
        "This project explores the Netflix titles dataset to uncover patterns and insights. It includes two main components: SQL Analysis: Using SQL queries to explore, clean, and analyze the raw data. Power BI Dashboard: Visualizing the key findings in an interactive dashboard.",
      techDetails: "Executed with SQL, and CSV Dataset.",
      achievements: [
        "The typical Netflix movie has an average runtime of ~99 minutes.",
        "The U.S. dominates Netflix’s catalog, but countries like India, the U.K., and Japan also emerge as strong contributors.",
        "A large number of titles were added in recent years, indicating Netflix’s aggressive content expansion strategy",
        "The dataset provides thousands of Netflix titles, with a higher share of Tv shows compared to Movies.",
      ],
      tags: ["SQL", "CSV Dataset"],
      image: "../Netflix.webp",
      github: "https://github.com/npstanwar/apple-itunes-music-analysis",
    },
  ];

  const totalProjects = projectsData.length;
  const canvasWidthPercent = Math.max(100, (totalProjects / 3) * 100);

  return (
    <div className="w-full mt-10 sm:mt-16 md:mt-20 pb-8 sm:pb-12">
      {/* Mobile Flow Layout (< md) */}
      <div className="block md:hidden space-y-8 px-4">
        {projectsData.map((project, index) => (
          <MobileHangingItem key={project.id} index={index}>
            <ProjectCard
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          </MobileHangingItem>
        ))}
      </div>

      {/* Desktop Horizontal Wire Canvas (>= md) */}
      <div
        ref={scrollContainerRef}
        className="hidden md:block w-full overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
          className="relative h-[580px] lg:h-[620px] bg-transparent perspective-[1000px]"
          style={{
            width: `${canvasWidthPercent}%`,
            minWidth: `${totalProjects * 340}px`,
          }}
        >
          {/* Wire Path */}
          <svg
            className="absolute top-0 left-0 w-full h-24 pointer-events-none z-0"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
          >
            <path
              d="M0,5 Q 50,20 100,5"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1.5"
              transform="translate(0, 2)"
            />
            <motion.path
              d="M0,5 Q 50,20 100,5"
              fill="none"
              stroke="#F3EFE2"
              strokeWidth="0.8"
              variants={{
                initial: { pathLength: 0, opacity: 0 },
                animate: { pathLength: 1, opacity: 1 },
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          {/* Dynamic Wire Nodes */}
          {projectsData.map((project, index) => {
            const t = (index + 0.5) / totalProjects;
            const xPos = `${t * 100}%`;

            const P0 = 5;
            const P1 = 20;
            const P2 = 5;

            const viewBoxY =
              Math.pow(1 - t, 2) * P0 +
              2 * (1 - t) * t * P1 +
              Math.pow(t, 2) * P2;

            const yPosPixels = (viewBoxY / 20) * 120;
            const yPos = `${yPosPixels - 12}px`;

            return (
              <DesktopHangingItem
                key={project.id}
                xPosition={xPos}
                yPosition={yPos}
                index={index}
              >
                <ProjectCard
                  {...project}
                  onClick={() => setSelectedProject(project)}
                />
              </DesktopHangingItem>
            );
          })}
        </motion.div>
      </div>

      {/* Modal Dialog */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default HangingProjects;
