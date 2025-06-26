import { Image } from "antd";

import HoangPhamImg from "../../assets/hoangpham.png";

const speakers = [
  {
    name: "Nguyễn Văn A",
    position: "CEO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
  {
    name: "Nguyễn Văn B",
    position: "CTO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
  {
    name: "Nguyễn Văn C",
    position: "CFO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
  {
    name: "Nguyễn Văn D",
    position: "CFO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
  {
    name: "Nguyễn Văn E",
    position: "CFO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
  {
    name: "Nguyễn Văn F",
    position: "CFO",
    image: HoangPhamImg,
    description: "Description of speaker",
  },
];

const Speaker = () => {
  return (
    <div className="bg-orange-700 md:p-8 lg:p-16 p-4 pb-8">
      <div className="flex flex-col gap-2 max-w-[1000px] mx-auto">
        <div className="md:text-5xl text-3xl font-bold text-center md:mb-12 mb-2 uppercase text-white">
          Diễn giả
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
              <div className="flex flex-col gap-1 md:p-4 p-2 bg-orange-800 rounded-b-lg text-white">
                <div>
                  <div className="font-semibold text-xl">{speaker.name}</div>
                  <div className="">{speaker.position}</div>
                </div>
                <div className="text-md text-blue-200">
                  {speaker.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speaker;
