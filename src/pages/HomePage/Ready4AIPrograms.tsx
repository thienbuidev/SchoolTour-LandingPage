import { Image } from 'antd';
import PymaridIC from '../../assets/pymarid.png';

const Ready4AIPrograms = () => {
  return (
    <div className="flex flex-col gap-16 bg-orange-100/90 py-6 md:py-20 px-4 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-16">
        <Image
          src={PymaridIC}
          alt="Ready4AI"
          preview={false}
          className="w-full max-w-sm sm:min-w-xs md:min-w-sm lg:min-w-lg p-2 md:p-0"
        />

        <div className="relative text-left md:text-justify max-w-full md:max-w-xl lg:max-w-2xl pl-4 md:pl-6">
          <div className="before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-yellow-400 before:to-red-500" />

          <div className="ml-2 md:ml-4 space-y-4">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                KHUNG NĂNG LỰC
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 drop-shadow-lg">
                READY FOR AI
              </span>
            </div>

            <p className="text-base sm:text-lg text-gray-700">
              Khung năng lực Ready for AI của DevPlus được xác lập dựa trên yêu
              cầu thực tế từ doanh nghiệp và được Sở Khoa học & Công nghệ ghi
              nhận như một tiêu chuẩn định hướng đào tạo nguồn lực AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready4AIPrograms;
