import React, { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, ScrollRestoration } from "react-router"; // 1. Import ScrollRestoration

import NavBar from "./Components/NavBar/NavBar";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import FooterSection from "./Components/FooterSection/FooterSection";
import MobileNotice from "./Components/MobileText/MobileText";
import Loader from "./Components/Loader/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* 2. Place ScrollRestoration here to handle route navigation reset */}
      <ScrollRestoration />

      {/* Loader Overlay */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsReady(true);
        }}
      >
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Portfolio Content */}
      {isReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <MobileNotice />
          <CustomCursor />
          <NavBar />

          <Outlet />

          <FooterSection />
        </motion.div>
      )}
    </div>
  );
}
