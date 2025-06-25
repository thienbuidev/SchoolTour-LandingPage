import { Image, Layout } from "antd";

const { Footer } = Layout;

import Logo from "../../assets/devplus2.png";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa";

const FooterDevplus = () => {
  return (
    <Footer className="bg-orange-700 flex items-center justify-between max-w-screen-2xl mx-auto md:gap-2 gap-4 !p-4">
      <div className="md:p-4 p-0">
        <Image
          src={Logo}
          alt="Devplus"
          preview={false}
          className="md:!h-[200px] !h-[100px]"
        />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
        <div className="flex flex-col gap-2 items-start justify-center">
          <div className="text-orange-500 md:text-2xl text-2xl font-bold ">
            READY FOR AI
          </div>
          <div className="text-orange-500 md:text-xl text-sm font-semibold">
            VỮNG BƯỚC TƯƠNG LAI CÙNG DEVPLUS
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-orange-500 md:text-lg text-base p-2 border-2 border-orange-500 rounded-full">
              <FaPhone />
            </div>
            <div className="text-black md:text-lg text-base">
              +84 905 610 229
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-orange-500 md:text-lg text-base p-2 border-2 border-orange-500 rounded-full">
              <FaEnvelope />
            </div>
            <div className="text-black md:text-lg text-base">
              marketing@devplus.edu.vn
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="text-orange-500 md:text-lg text-base p-2 border-2 border-orange-500 rounded-full">
              <FaGlobe />
            </div>
            <div className="text-black md:text-lg text-base">
              devplus.edu.vn
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterDevplus;
