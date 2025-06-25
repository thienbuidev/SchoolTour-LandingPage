import { Image } from "antd";
import SKHCNIC from "../../assets/skhcn.png";
import DevPlusIC from "../../assets/devplus.png";
import GDGIC from "../../assets/gdg.png";
import AILeaderIC from "../../assets/aileadervn.png";

const Introduction = () => {
  return (
    <div className="md:min-h-screen min-h-[520px] flex flex-col justify-start items-center pt-20 md:pt-36">
      <div className="flex flex-row justify-between items-center gap-8 md:gap-40 h-full">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-xl font-semibold">Đơn vị tổ chức</span>
          <div className="flex flex-row justify-center items-center gap-8">
            <Image
              src={SKHCNIC}
              alt="SKHCN"
              preview={false}
              className="md:!w-[80px] md:!h-[80px] !w-[70px] !h-[70px]"
            />
            <Image
              src={DevPlusIC}
              alt="DevPlus"
              preview={false}
              className="md:!w-[80px] md:!h-[80px] !w-[50px] !h-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-3 h-full">
          <span className="text-xl font-semibold">Đơn vị đồng hành</span>
          <div className="flex flex-row justify-center items-center gap-2 md:gap-8 h-[70px] md:h-[80px]">
            <Image
              src={GDGIC}
              alt="SKHCN"
              preview={false}
              className="md:!h-[50px] !h-[30px]"
            />
            <Image
              src={AILeaderIC}
              alt="DevPlus"
              preview={false}
              className="md:!h-[50px] !h-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col font-bold p-4 md:p-12 items-center justify-center gap-3">
        <div className="flex flex-row md:gap-6 gap-3 items-center justify-center mt-20 md:mt-0">
          <div className="ready-for-text md:text-9xl text-5xl">READY FOR</div>
          <div className="md:text-9xl text-5xl md:mb-1 mb-0 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            AI
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          {/* <div className="text-2xl md:text-5xl font-semibold text-black">
            10.000 SINH VIÊN ĐÀ NẴNG
          </div> */}
          <div className="text-xl md:text-2xl font-semibold text-orange-400 max-w-[1000px]">
            Chương trình xác định và phát triển bộ khung năng lực thời đại AI do
            Sở Khoa Học Công Nghệ Đà Nẵng chỉ đạo triển khai
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
