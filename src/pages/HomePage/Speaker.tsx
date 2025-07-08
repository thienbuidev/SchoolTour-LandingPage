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
    position: 'Head of Engineering Alpha Bits',
    image: DuongTranImg,
    description: 'Description of speaker',
  },
  {
    name: 'Mr. Hai Nguyen',
    position: 'CEO at AvocaAI',
    image: HaiNguyenImg,
    description: 'Description of speaker',
  },
  {
    name: 'Hoang Pham',
    position: 'CEO Devplus',
    image: HoangPhamImg,
    description: 'Description of speaker',
  },
  {
    name: 'Quoc Thao',
    position: 'CEO AMIT',
    image: QuocThaoImg,
    description: 'Description of speaker',
  },
  {
    name: 'STEPHEN WARREN',
    position: 'Sales Director, APAC at Atility & Abeeway ',
    image: STEPHENWARRENImg,
    description: 'Description of speaker',
  },
  {
    name: 'Sourmack Darbouy',
    position: 'Senior Project Manager Company X',
    image: SourmackDarbouyImg,
    description: 'Description of speaker',
  },
];

const Speaker = () => {
  return (
    <div className="bg-[] md:p-8 lg:p-16 p-4 pb-8">
      <div className="flex flex-col gap-2 max-w-[1000px] mx-auto">
        <div className="md:text-5xl text-3xl font-bold text-center md:mb-12 mb-2 uppercase text-[#ff6900]">
          Chuyên gia đồng hành
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-3">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col bg-white rounded-2xl"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                preview={false}
                className="!rounded-lg w-full object-cover md:!h-[240px] sm:!h-[220px] !h-[180px]"
              />
              <div className="flex flex-col gap-1 md:p-4 p-2 bg-orange-400 rounded-b-lg text-white">
                <div>
                  <div className="font-semibold text-xl">{speaker.name}</div>
                  <div className="">{speaker.position}</div>
                </div>
                {/* <div className="text-md text-blue-200">
                  {speaker.description}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
