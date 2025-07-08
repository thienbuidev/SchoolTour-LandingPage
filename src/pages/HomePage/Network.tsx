import DevPlusLogo from '../../assets/devplus.png';
import SKHCNLogo from '../../assets/skhcn.png';
import GDGLogo from '../../assets/gdg.png';
import AILeaderLogo from '../../assets/aileadervn.png';
import CompanyCard from './CompanyCard';

import RSNLogo from '../../assets/company/MOZIASOFT.png';
import SalesforceLogo from '../../assets/company/chatfly.svg';
import MXLogo from '../../assets/company/cmc-global.png';
import SamsungLogo from '../../assets/company/edtronaut.png';
import AHEALogo from '../../assets/company/EM&AI.png';
import AdvizexLogo from '../../assets/company/Enable-Startup.png';
import TwoCRSILogo from '../../assets/company/enouvo.png';
import CDWLogo from '../../assets/company/GDG.png';
import HPCLogo from '../../assets/company/heatmob.png';
import AMAXLogo from '../../assets/company/Logo-Rikkei.png';
import NVIDIAGLogo from '../../assets/company/madison-technologies.png';
import EnouvoLogo from '../../assets/company/Mor.png';
import RikeiLogo from '../../assets/company/MOZIASOFT.png';
import RikaiLogo from '../../assets/company/mrp.png';
import CMCLogo from '../../assets/company/Napa global.png';
import EnableStartupLogo from '../../assets/company/Paracel.png';
import STLogo from '../../assets/company/PSCD.png';
import ParacelLogo from '../../assets/company/RIKAI.png';
import NAPALogo from '../../assets/company/techchain.png';
import SYNOPSYLogo from '../../assets/company/tomosia.png';

const organizations = [
  {
    name: 'DevPlus',
    image: DevPlusLogo,
  },
  {
    name: 'SKHCN',
    image: SKHCNLogo,
  },
];

const companion = [
  {
    name: 'GDG',
    image: GDGLogo,
  },
  {
    name: 'AILeader',
    image: AILeaderLogo,
  },
];

const partners = [
  {
    name: 'MOZIASOFT',
    image: RSNLogo,
  },
  {
    name: 'AVOCA',
    image: SalesforceLogo,
  },
  {
    name: 'chatfly',
    image: MXLogo,
  },
  {
    name: 'cmc',
    image: SamsungLogo,
  },
  {
    name: 'emai',
    image: AHEALogo,
  },
  {
    name: 'enablestartup',
    image: AdvizexLogo,
  },
  {
    name: 'enouvo',
    image: TwoCRSILogo,
  },
  {
    name: 'gdg',
    image: CDWLogo,
  },
  {
    name: 'heatmob',
    image: HPCLogo,
  },
  {
    name: 'edtronaut',
    image: AMAXLogo,
  },
  {
    name: 'pscd',
    image: NVIDIAGLogo,
  },
  {
    name: 'rikai',
    image: EnouvoLogo,
  },
  {
    name: 'Rikei',
    image: RikeiLogo,
  },
  {
    name: 'madison',
    image: RikaiLogo,
  },
  {
    name: 'mor',
    image: CMCLogo,
  },
  {
    name: 'mrp',
    image: EnableStartupLogo,
  },
  {
    name: 'napa',
    image: STLogo,
  },
  {
    name: 'Paracel',
    image: ParacelLogo,
  },
  {
    name: 'techchain',
    image: NAPALogo,
  },
  {
    name: 'tomosia',
    image: SYNOPSYLogo,
  },
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
          <div className="md:text-5xl text-3xl font-bold text-center uppercase text-[#ff6900] animate-fade-in-up transition-all duration-1000 hover:scale-105 hover:text-orange-800">
            Kết nối
          </div>
          <div className="text-center md:text-xl text-lg font-medium animate-fade-in-up delay-200 transition-all duration-1000 hover:text-orange-700">
            DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ
            hội thực tập và đầu ra việc làm cho sinh viên.
          </div>
          {/* <Image src={NetworkImage} alt="Network" preview={false} /> */}
          <div className="flex flex-col gap-4 animate-fade-in-up delay-400 transition-all duration-1000">
            <div className="md:text-2xl text-xl font-bold text-center uppercase text-[#ff6900] transition-all duration-300 hover:scale-105 hover:text-orange-800">
              Đơn vị tổ chức
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              {organizations.map((org, index) => (
                <div
                  key={org.name}
                  className="animate-fade-in-up transition-all duration-500"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <CompanyCard org={org} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-up delay-600 transition-all duration-1000">
            <div className="text-2xl font-bold text-center uppercase text-[#ff6900] transition-all duration-300 hover:scale-105 hover:text-orange-800">
              Đơn vị đồng hành
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              {companion.map((org, index) => (
                <div
                  key={org.name}
                  className="animate-fade-in-up transition-all duration-500"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <CompanyCard org={org} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-up delay-800 transition-all duration-1000">
            <div className="text-2xl font-bold text-center uppercase text-[#ff6900] transition-all duration-300 hover:scale-105 hover:text-orange-800">
              Mạng lưới đối tác
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
