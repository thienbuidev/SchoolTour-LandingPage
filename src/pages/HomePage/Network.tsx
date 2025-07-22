import DevPlusLogo from "../../assets/devplus.png";
import SKHCNLogo from "../../assets/skhcn.png";
import GDGLogo from "../../assets/gdg.png";
import AILeaderLogo from "../../assets/aileadervn.png";
import CompanyCard from "./CompanyCard";

import Company1CMCGlobal from "../../assets/company/1.cmc-global.png";
import Company2Mor from "../../assets/company/2.Mor.png";
import Company3NapaGlobal from "../../assets/company/3.Napaglobal.png";
import Company4LogoRIKAI from "../../assets/company/4.logoRIKAI.png";
import Company5EnouvoLogo from "../../assets/company/5.enouvologo.png";
import Company6LogoRikkei from "../../assets/company/6.Logo-Rikkei.png";
import Company7Tomosia from "../../assets/company/7.tomosia.png";
import Company8Paracel from "../../assets/company/8.Paracel.png";
import Company9MadisonTechnologies from "../../assets/company/9.madison-technologies.png";
import Company10MOZIASOFT from "../../assets/company/10.MOZIASOFT.png";
import Company11Techchain from "../../assets/company/11.techchain.png";
import Company12Avoca from "../../assets/company/12.Avoca.png";
import Company13EnableStartup from "../../assets/company/13.Enable-Startup.png";
import Company14LOGOPSCd from "../../assets/company/14.PSCD.png";
import Company15EMAI from "../../assets/company/15.EM&AI.png";
import Company16Mrp from "../../assets/company/16.mrp.png";
import Company17Heatmob from "../../assets/company/17.heatmob.png";
import Company18EvvoLabs from "../../assets/company/18.EvvoLabs.png";
import Company19Amit from "../../assets/company/19.AMIT.png";
import Company20Spereax from "../../assets/company/20.spereax.png";
import Company21Edtronaut from "../../assets/company/21.logoedtronaut.png";
import Company22Aiaivn from "../../assets/company/22.AIAIVN.png";
import Company23Antie from "../../assets/company/23.antie.png";
import Company24Chatfly from "../../assets/company/24.chatfly.png";

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
  { name: "CMC Global", image: Company1CMCGlobal },
  { name: "Mor", image: Company2Mor },
  { name: "Napa Global", image: Company3NapaGlobal },
  { name: "Logo RIKAI", image: Company4LogoRIKAI },
  { name: "Enouvo", image: Company5EnouvoLogo },
  { name: "Logo Rikkei", image: Company6LogoRikkei },
  { name: "Tomosia", image: Company7Tomosia },
  { name: "Paracel", image: Company8Paracel },
  { name: "Madison Technologies", image: Company9MadisonTechnologies },
  { name: "MOZIASOFT", image: Company10MOZIASOFT },
  { name: "Techchain", image: Company11Techchain },
  { name: "Avoca", image: Company12Avoca },
  { name: "Enable Startup", image: Company13EnableStartup },
  { name: "PSCD", image: Company14LOGOPSCd },
  { name: "EM&AI", image: Company15EMAI },
  { name: "Mrp", image: Company16Mrp },
  { name: "Heatmob", image: Company17Heatmob },
  { name: "Evvo Labs", image: Company18EvvoLabs },
  { name: "AMIT", image: Company19Amit },
  { name: "Spereax", image: Company20Spereax },
  { name: "Edtronaut", image: Company21Edtronaut },
  { name: "AIAIVN", image: Company22Aiaivn },
  { name: "Antie", image: Company23Antie },
  { name: "Chatfly", image: Company24Chatfly },
];

const Network = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-white transition-all duration-1000"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-orange-300/40 to-orange-500/30 rounded-full blur-3xl backdrop-blur-3xl animate-pulse transition-all duration-3000"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-gradient-to-bl from-orange-400/35 to-orange-600/25 rounded-full blur-3xl backdrop-blur-3xl animate-pulse delay-1000 transition-all duration-3000"></div>
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-orange-200/45 to-orange-300/35 rounded-full blur-2xl backdrop-blur-3xl animate-pulse delay-2000 transition-all duration-3000"></div>

        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-white/30 to-orange-100/40 rounded-full blur-2xl backdrop-blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500 transition-all duration-3000"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-gradient-to-l from-orange-200/40 to-white/35 rounded-full blur-xl backdrop-blur-2xl animate-pulse delay-1500 transition-all duration-3000"></div>

        <div className="absolute top-20 left-3/4 w-32 h-32 bg-white/25 rounded-full blur-lg backdrop-blur-sm animate-pulse transition-all duration-2000"></div>
        <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-orange-100/30 rounded-full blur-lg backdrop-blur-sm animate-pulse delay-1000 transition-all duration-2000"></div>
      </div>
      <div className="md:p-20 p-4 relative">
        <div className="flex flex-col sm:gap-8 md:gap-10 gap-4 max-w-[1200px] mx-auto">
          <div className="md:text-5xl lg:text-6xl text-3xl font-bold text-center uppercase text-[#ff6900]">
            Đối tác
          </div>
          <div className="text-center md:text-xl text-lg font-medium ">
            DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ
            hội thực tập và đầu ra việc làm cho sinh viên.
          </div>
          {/* <Image src={NetworkImage} alt="Network" preview={false} /> */}
          <div className="flex flex-col md:gap-4 gap-2">
            <div className="lg:text-2xl text-xl md:text-xl font-bold text-center uppercase text-[#ff6900]">
              Đơn vị tổ chức
            </div>
            <div className="flex flex-row items-center justify-center md:gap-4 gap-2">
              {organizations.map((org, index) => (
                <div
                  key={org.name}
                  className="animate-fade-in-up transition-all duration-500 w-[calc(50%-4px)] lg:w-[286px] md:w-[228px] sm:w-[140px]"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <CompanyCard org={org} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:gap-4 gap-2">
            <div className="lg:text-2xl text-xl md:text-xl font-bold text-center uppercase text-[#ff6900]">
              Đơn vị đồng hành
            </div>
            <div className="flex flex-row items-center justify-center md:gap-4 gap-2 box-border">
              {companion.map((org, index) => (
                <div
                  key={org.name}
                  className="animate-fade-in-up transition-all duration-500 w-[calc(50%-4px)] lg:w-[286px] md:w-[228px] sm:w-[140px]"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <CompanyCard org={org} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-up delay-800 transition-all duration-1000">
            <div className="lg:text-2xl text-xl md:text-xl font-bold text-center uppercase text-[#ff6900]">
              Mạng lưới doanh nghiệp
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
              {partners.map((org, index) => (
                <div
                  key={org.name}
                  className="animate-fade-in-up transition-all duration-500"
                  style={{ animationDelay: `${1000 + index * 100}ms` }}
                >
                  <CompanyCard org={org} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Network;
