import { Image } from "antd";
import SKHCNIC from "../../assets/skhcn.png";
import DevPlusIC from "../../assets/devplus.png";
import GDGIC from "../../assets/gdg.png";
import AILeaderIC from "../../assets/aileadervn.png";

const Introduction = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-50">
      <div className="flex flex-row justify-between items-center gap-40 h-full">
        <div className="flex flex-col justify-center items-center gap-3">
          <span className="text-xl font-semibold">Đơn vị tổ chức</span>
          <div className="flex flex-row justify-center items-center gap-8">
            <Image
              src={SKHCNIC}
              alt="SKHCN"
              preview={false}
              width={80}
              height={80}
            />
            <Image
              src={DevPlusIC}
              alt="DevPlus"
              preview={false}
              width={90}
              height={90}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-3 h-full">
          <span className="text-xl font-semibold">Đơn vị đồng hành</span>
          <div className="flex flex-row justify-center items-center gap-8 h-[90px]">
            <Image src={GDGIC} alt="SKHCN" preview={false} height={60} />
            <Image
              src={AILeaderIC}
              alt="DevPlus"
              preview={false}
              height={60}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-9xl font-bold p-12 items-center justify-center">
        <div className="flex flex-row gap-6 items-center justify-center">
          <div className="ready-for-text">READY FOR</div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            AI
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-2xl font-semibold">
            Tháng 6-9/2025, Thành phố Đà Nẵng
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
