import { Layout } from "antd";

const { Header } = Layout;

const navs = [
  { id: "introduction", label: "Giới thiệu" },
  { id: "ready4ai", label: "#Ready4AI" },
  { id: "schooltour", label: "School Tour 2025" },
  { id: "activities", label: "Hoạt động" },
  { id: "learning", label: "Học tập" },
  { id: "achievement", label: "Thành tựu" },
  { id: "discussion", label: "Tọa đàm" },
  { id: "network", label: "Kết nối" },
  { id: "speakers", label: "Diễn giả" },
];

const HeaderDevplus = ({ activeSection }: { activeSection: string }) => {
  return (
    <Header className="hidden sticky top-0 left-0 right-0 z-99999 md:flex flex-row items-center gap-4 md:text-md !text-orange-800 font-medium !bg-orange-100/50 !backdrop-blur-2xl md:overflow-x-auto whitespace-nowrap lg:justify-center justify-start px-2">
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
