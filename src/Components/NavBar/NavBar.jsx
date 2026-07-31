import React from "react";
import LatitudeText from "../LatitudeText/latitudeText";
import { Link, useLocation, useNavigate } from "react-router";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isResumePage = location.pathname === "/resume";
  return (
    <>
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .local-animate-slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }
      `}</style>

      <nav className="fixed local-animate-slide-down w-full bg-[#f8f7f2] z-400">
        <div className="flex justify-between items-center border-b border-olive-400 min-h-20 py-2 w-[95%] sm:w-[90%] md:w-[80%] m-auto px-1 sm:px-4 gap-2">
          {/* Left Section: Brand / Name */}
          <div className="flex items-center min-w-0 flex-shrink overflow-hidden">
            <span className="font-semibold text-xs xs:text-sm sm:text-lg md:text-2xl font-mono text-[#181511] whitespace-nowrap overflow-hidden text-ellipsis">
              {/* Displays full name on sm screens and up, shortened on mobile to prevent collision */}
              <Link to="/">
                <span className="hidden sm:inline">
                  <LatitudeText text="Nishant Pratap Singh" />
                </span>
                <span className="inline sm:hidden">
                  <LatitudeText text="Nishant P." />
                </span>
              </Link>
            </span>
          </div>

          {/* Right Section: Navigation & Status */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8 font-mono text-[#181511] text-xs sm:text-sm md:text-md flex-shrink-0">
            <Link
              to={location.pathname === "/resume" ? "/" : "/resume"}
              className="hover:text-orange-600 transition-colors whitespace-nowrap"
              onClick={() => navigate(isResumePage ? "/" : "/resume")}
            >
              {isResumePage ? "home" : "resume"}
            </Link>

            <a
              href="#projects"
              className="hidden md:block hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              projects
            </a>

            <a
              href="#about"
              className="hidden md:block hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              about
            </a>

            <button className="flex items-center gap-1 sm:gap-2 border border-orange-600 rounded-full px-2 sm:px-3 py-1 hover:bg-orange-50 transition-colors whitespace-nowrap text-[10px] sm:text-xs md:text-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full border border-orange-600 bg-orange-600"></span>
              </span>
              <span>Open to work</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
