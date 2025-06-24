import { Layout } from "antd";

const { Header } = Layout;

const navs = [
  { id: "introduction", label: "Introduction" },
  { id: "schooltour", label: "School Tour 2025" },
  { id: "activities", label: "Activities" },
  { id: "learning", label: "Learning" },
  { id: "achievement", label: "Achievement" },
  { id: "discussion", label: "Panel Discussion" },
  { id: "network", label: "Networking" },
  { id: "speakers", label: "Our Speakers" },
];

const HeaderDevplus = ({ activeSection }: { activeSection: string }) => {
  return (
    <Header className="sticky top-0 left-0 right-0 z-99999 !flex !flex-row justify-center items-center gap-4 text-lg !text-orange-800 font-medium !bg-orange-100/50 !backdrop-blur-2xl">
      {navs.map((nav) => (
        <div
          key={nav.id}
          className={`!px-2 !py-1 leading-8 rounded-lg !text-md transition-all duration-200 cursor-pointer ${
            activeSection === nav.id ? "p-2 bg-orange-500 text-white" : ""
          }`}
          onClick={() => {
            const el = document.getElementById(nav.id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <p>{nav.label}</p>
        </div>
      ))}
    </Header>
  );
};

export default HeaderDevplus;
