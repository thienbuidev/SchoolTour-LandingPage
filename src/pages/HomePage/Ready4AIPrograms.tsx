import { Image } from "antd";
// import { FaChalkboardTeacher, FaRobot, FaUsers } from "react-icons/fa";
import PymaridIC from "../../assets/pymarid.png";

const Ready4AIPrograms = () => {
  return (
    <div className="flex flex-col gap-30 !bg-orange-100/90 md:!py-20 py-6">
      {/* <div className="">
        <div className="text-6xl font-bold text-center mb-26 uppercase text-orange-700">
          Lộ trình học tập
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
          <div className="transition-all duration-300 bg-gray-100 rounded-2xl shadow-md p-8 text-center relative border-b-6 border-orange-500 hover:shadow-3xl hover:scale-105">
            <div className="absolute -top-10 left-0 right-0 flex justify-center">
              <div className="bg-orange-500 rounded-full p-5 text-white text-3xl">
                <FaUsers />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">#Ready4AI Workshop</h3>
            <p className="text-gray-700 text-lg text-justify mt-4">
              Tổ chức hội thảo với sự tham gia của diễn giả từ Sở KH-CN,
              Devplus, đại diện doanh nghiệp / nhà tuyển dụng. Mục tiêu giới
              thiệu Khung năng lực AI phía doanh nghiệp đang yêu cầu, giới thiệu
              chương trình nâng cao khung năng lực #Ready4AI cho sinh viên.
            </p>
          </div>
          <div className="transition-all duration-300 bg-gray-100 rounded-2xl shadow-md p-8 text-center relative border-b-6 border-orange-500 hover:shadow-3xl hover:scale-105">
            <div className="absolute -top-10 left-0 right-0 flex justify-center">
              <div className="bg-orange-500 rounded-full p-5 text-white text-3xl">
                <FaRobot />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">#Ready4AI Challenge Day</p>
              <p className="text-2xl font-bold">&amp; #Ready4AI Platform</p>
            </div>
            <p className="text-gray-700 text-lg text-justify mt-4">
              Bắt đầu bằng việc đánh giá mức độ phù hợp của khung năng lực hiện
              tại và xây dựng lộ trình cá nhân cho sinh viên.
            </p>
          </div>
          <div className="transition-all duration-300 bg-gray-100 rounded-2xl shadow-md p-8 text-center relative border-b-6 border-orange-500 hover:shadow-3xl hover:scale-105">
            <div className="absolute -top-10 left-0 right-0 flex justify-center">
              <div className="bg-orange-500 rounded-full p-5 text-white text-3xl">
                <FaChalkboardTeacher />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">#Ready4AI MentorME</p>
              <p className="text-2xl font-bold">&amp; Fast Track programs</p>
            </div>
            <p className="text-gray-700 text-lg text-justify mt-4">
              Các chương trình xây dựng khung năng lực mindset / skillset /
              toolset cho sinh viên.
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-30 gap-4 ">
        <Image
          src={PymaridIC}
          alt="Ready4AI"
          preview={false}
          className="p-4 md:p-0"
        />
        <div className="flex gap-2 flex-row md:flex-col relative text-3xl md:text-5xl lg:text-6xl md:px-6 mt-0 md:mt-4 py-2 pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-yellow-400 before:to-red-500">
          <h1 className="font-semibold">DevPlus</h1>
          <h1 className="text-orange-500 font-semibold">Philosophy</h1>
        </div>
      </div>
    </div>
  );
};

export default Ready4AIPrograms;
