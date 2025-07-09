import { Image } from 'antd';

import DuongTranImg from '../../assets/speakers/DuongTran.png';
import HaiNguyenImg from '../../assets/speakers/HaiNguyen.png';
import HoangPhamImg from '../../assets/speakers/HoangPham.jpg';
import QuocThaoImg from '../../assets/speakers/QuocThao.jpg';
import STEPHENWARRENImg from '../../assets/speakers/STEPHENWARREN.jpg';
import SourmackDarbouyImg from '../../assets/speakers/SourmackDarbouy.jpg';
const speakers = [
  {
    name: 'Mr. Duong Tran',
    position: ['Head of Engineering Alpha Bits', 'CTO Co-founder at SENCAR'],
    image: DuongTranImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Hai Nguyen',
    position: ['Co-founder & CEO at AvocaAI'],
    image: HaiNguyenImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Hoang Pham',
    position: ['CEO Dev Plus'],
    image: HoangPhamImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Quoc Thao',
    position: ['CEO AMIT'],
    image: QuocThaoImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Stephen Warren',
    position: ['Senior Project Manager Company X'],
    image: STEPHENWARRENImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Sourmack Darbouy',
    position: ['Sales Director, APAC at Atility & Abeeway'],
    image: SourmackDarbouyImg,
    description: 'Description of speaker',
  },
];

const Speaker = () => {
  return (
    <div className="md:p-8 lg:p-16 p-4 pb-8">
      <div className="flex flex-col gap-2 max-w-[1000px] mx-auto">
        <div className="md:text-5xl lg:text-6xl text-3xl font-bold text-center md:mb-12 mb-2 uppercase text-[#ff6900]">
          Chuyên gia đồng hành
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-4">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.name}
              className="flex flex-col rounded-lg bg-white border-r-4 border-b-4 border-orange-500 justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-200 hover:border-orange-600 transform hover:-translate-y-1"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                preview={false}
                className="w-full object-cover h-[180px] sm:h-[220px] md:h-[240px] rounded-t-lg"
              />
              <div className="flex-1 flex flex-col gap-1 p-4 text-white">
                <div className="font-bold text-orange-500 text-lg md:text-xl">
                  {speaker.name}
                </div>
                <div className="text-sm text-gray-800 md:text-base font-medium opacity-90">
                  {speaker.position.map((pos: string, idx: number) => (
                    <div key={idx}>{pos}</div>
                  ))}
                </div>
                {/* <div className="text-sm text-white/80">{speaker.description}</div> */}
              </div>
            </div>
          ))}
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

export default Speaker;
