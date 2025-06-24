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
    <div className="bg-orange-700 p-20">
      <div className="flex flex-col gap-2 max-w-[1000px] mx-auto">
        <div className="text-5xl font-bold text-center mb-12 uppercase text-white">
          OUR SPEAKERS
        </div>
        <div className="grid grid-cols-3 gap-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col bg-white rounded-2xl"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                preview={false}
                className="!rounded-lg w-full h-full object-cover"
                height={240}
              />
              <div className="flex flex-col gap-1 p-4 bg-orange-800 rounded-b-lg text-white">
                <div>
                  <div className="font-semibold text-xl">{speaker.name}</div>
                  <div className="t">{speaker.position}</div>
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
