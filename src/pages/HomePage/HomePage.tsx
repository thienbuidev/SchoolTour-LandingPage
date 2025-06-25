import { Layout } from "antd";
import Introduction from "./Introduction";
import Ready4AIPrograms from "./Ready4AIPrograms";
import AchievementSection from "./Achievement";
import SchoolTour from "./SchoolTour";
import Activities from "./Activities";
import Discussion from "./Discussion";
import Network from "./Network";
import HeaderDevplus from "./HeaderDevplus";
// import FooterDevplus from "./FooterDevplus";
import "./homepage.css";
import Speaker from "./Speaker";
import { useEffect, useRef, useState } from "react";
import FooterDevplus from "./FooterDevplus";

const sectionIds = [
  "introduction",
  "schooltour",
  "activities",
  "learning",
  "achievement",
  "discussion",
  "network",
  "speakers",
];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Lấy section gần top nhất
          const topMost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveSection(topMost.target.id);
        }
      },
      { threshold: 0.3 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-orange-300/40 to-orange-500/30 rounded-full blur-3xl backdrop-blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-gradient-to-bl from-orange-400/35 to-orange-600/25 rounded-full blur-3xl backdrop-blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-orange-200/45 to-orange-300/35 rounded-full blur-2xl backdrop-blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-white/30 to-orange-100/40 rounded-full blur-2xl backdrop-blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-gradient-to-l from-orange-200/40 to-white/35 rounded-full blur-xl backdrop-blur-2xl"></div>

        <div className="absolute top-20 left-3/4 w-32 h-32 bg-white/25 rounded-full blur-lg backdrop-blur-sm animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-orange-100/30 rounded-full blur-lg backdrop-blur-sm animate-pulse delay-1000"></div>
      </div>

      <div className="!z-99">
        <HeaderDevplus activeSection={activeSection} />
        <div
          id="introduction"
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="scroll-mt-24"
        >
          <Introduction />
        </div>
        <div
          id="schooltour"
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="scroll-mt-28"
        >
          <SchoolTour />
        </div>
        <div
          id="activities"
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="scroll-mt-16"
        >
          <Activities />
        </div>
        <div
          id="learning"
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          className="scroll-mt-16"
        >
          <Ready4AIPrograms />
        </div>
        <div
          id="achievement"
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          className="scroll-mt-16"
        >
          <AchievementSection />
        </div>
        <div
          id="discussion"
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          className="scroll-mt-16"
        >
          <Discussion />
        </div>
        <div
          id="network"
          ref={(el) => {
            sectionRefs.current[6] = el;
          }}
          className="scroll-mt-16"
        >
          <Network />
        </div>
        <div
          id="speakers"
          ref={(el) => {
            sectionRefs.current[7] = el;
          }}
          className="scroll-mt-16"
        >
          <Speaker />
        </div>
      </div>
      <FooterDevplus />
    </Layout>
  );
};

export default HomePage;
