import DevPlusLogo from "../../assets/devplus.png";
import SKHCNLogo from "../../assets/skhcn.png";
import GDGLogo from "../../assets/gdg.png";
import AILeaderLogo from "../../assets/aileadervn.png";
import CompanyCard from "./CompanyCard";

import RSNLogo from "../../assets/rsn.png";
import SalesforceLogo from "../../assets/salesforce.png";
import MXLogo from "../../assets/mx.png";
import SamsungLogo from "../../assets/samsung.png";
import AHEALogo from "../../assets/ahead.png";
import AdvizexLogo from "../../assets/advizex.png";
import TwoCRSILogo from "../../assets/2crsi.png";
import CDWLogo from "../../assets/cdw.webp";
import HPCLogo from "../../assets/hpc.webp";
import AMAXLogo from "../../assets/amax.png";
import NVIDIAGLogo from "../../assets/nvidia.png";
import EnouvoLogo from "../../assets/enouvo.png";
import RikeiLogo from "../../assets/Rikei.png";
import RikaiLogo from "../../assets/rikai.png";
import CMCLogo from "../../assets/cmc.webp";
import EnableStartupLogo from "../../assets/enablestatup.webp";
import STLogo from "../../assets/st.png";
import MadisonLogo from "../../assets/madison.webp";
import ParacelLogo from "../../assets/paracel.png";
import NAPALogo from "../../assets/napa.jpg";
import SYNOPSYLogo from "../../assets/sysnosys.png";

const organizations = [
  {
    name: "DevPlus",
    image: DevPlusLogo,
  },
  {
    name: "SKHCN",
    image: SKHCNLogo,
  },
];

const companion = [
  {
    name: "GDG",
    image: GDGLogo,
  },
  {
    name: "AILeader",
    image: AILeaderLogo,
  },
];

const partners = [
  {
    name: "RSN",
    image: RSNLogo,
  },
  {
    name: "Salesforce",
    image: SalesforceLogo,
  },
  {
    name: "MX",
    image: MXLogo,
  },
  {
    name: "Samsung",
    image: SamsungLogo,
  },
  {
    name: "AHEAD",
    image: AHEALogo,
  },
  {
    name: "Advizex",
    image: AdvizexLogo,
  },
  {
    name: "2CRSI",
    image: TwoCRSILogo,
  },
  {
    name: "CDW",
    image: CDWLogo,
  },
  {
    name: "HPC",
    image: HPCLogo,
  },
  {
    name: "AMAX",
    image: AMAXLogo,
  },
  {
    name: "NVIDIA",
    image: NVIDIAGLogo,
  },
  {
    name: "Enouvo",
    image: EnouvoLogo,
  },
  {
    name: "Rikei",
    image: RikeiLogo,
  },
  {
    name: "Rikai",
    image: RikaiLogo,
  },
  {
    name: "CMC",
    image: CMCLogo,
  },
  {
    name: "EnableStartup",
    image: EnableStartupLogo,
  },
  {
    name: "ST",
    image: STLogo,
  },
  {
    name: "Madison",
    image: MadisonLogo,
  },
  {
    name: "Paracel",
    image: ParacelLogo,
  },
  {
    name: "NAPA",
    image: NAPALogo,
  },
  {
    name: "SYNOPSYS",
    image: SYNOPSYLogo,
  },
];

const Network = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="text-5xl font-bold text-center uppercase text-orange-700">
          NETWORKING
        </div>
        <div className="text-center text-xl font-medium">
          DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ
          hội thực tập và đầu ra việc làm cho sinh viên.
        </div>
        {/* <Image src={NetworkImage} alt="Network" preview={false} /> */}
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-center uppercase text-orange-700">
            Đơn vị tổ chức
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {organizations.map((org) => (
              <CompanyCard key={org.name} org={org} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-center uppercase text-orange-700">
            Đơn vị đồng hành
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            {companion.map((org) => (
              <CompanyCard key={org.name} org={org} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-center uppercase text-orange-700">
            Partners
          </div>
          <div className="grid grid-cols-4 gap-4">
            {partners.map((org) => (
              <CompanyCard key={org.name} org={org} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
