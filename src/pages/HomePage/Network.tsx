import { Image } from "antd";
import NetworkImage from "../../assets/network.png";

const Network = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="text-5xl font-bold text-center uppercase text-orange-700">
          NETWORKING
        </div>
        <div className="text-center text-xl font-medium">
          DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ
          hội thực tập và đầu ra việc làm cho sinh viên.
        </div>
        <Image src={NetworkImage} alt="Network" preview={false} />
      </div>
    </div>
  );
};

export default Network;
