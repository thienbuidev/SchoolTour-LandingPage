import { Image, Layout } from "antd";

const { Footer } = Layout;

import Logo from "../../assets/devplus2.png";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

const FooterDevplus = () => {
  return (
    <Footer className="bg-orange-700 flex items-center justify-between max-w-screen-2xl mx-auto gap-10">
      <div className="p-4">
        <Image src={Logo} alt="Devplus" preview={false} height={200} />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="text-orange-500 text-2xl font-bold ">READY FOR AI</div>
        <div className="text-orange-500 text-xl font-semibold">
          VỮNG BƯỚC TƯƠNG LAI CÙNG DEVPLUS
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-orange-500 text-lg p-2 border-2 border-orange-500 rounded-full">
            <FaPhone />
          </div>
          <div className="text-black text-lg">+84 905 610 229</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-orange-500 text-lg p-2 border-2 border-orange-500 rounded-full">
            <FaEnvelope />
          </div>
          <div className="text-black text-lg">marketing@devplus.edu.vn</div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="text-orange-500 text-lg p-2 border-2 border-orange-500 rounded-full">
            <FaGlobe />
          </div>
          <div className="text-black text-lg">devplus.edu.vn</div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterDevplus;
