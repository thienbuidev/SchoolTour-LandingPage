import { Image } from 'antd';
import Devplus2 from '../../assets/devplus5D.png';
import { useEffect, useRef, useState } from 'react';

const SchoolTour = () => {
  const [zoomed, setZoomed] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setZoomed(true);
        }
      },
      { threshold: 0.5 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#faf0e4] w-full">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 max-w-[1400px] mx-auto md:p-8 lg:p-16 p-4">
        <div className="flex flex-col justify-center items-center">
          <div className="md:text-5xl lg:text-6xl text-3xl font-bold text-center md:mb-10 mb-6 uppercase bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
            SCHOOL TOUR 2025
          </div>
          <p className="md:text-lg text-sm text-justify font-base sm:max-w-xl indent-6">
            Phát huy thành công từ các mùa trước, #Ready4AI School Tour 2025
            không chỉ là một buổi nói chuyện – mà là trải nghiệm đáng nhớ và tác
            động sâu sắc đến sinh viên trong kỷ nguyên AI. Chương trình được
            thiết kế xoay quanh vai trò chủ động của người học: sinh viên sẽ
            trực tiếp tham gia Challenge Day – hoạt động thực hành giúp rèn
            luyện tư duy phản biện, năng lực cộng tác và hành động linh hoạt
            ngay tại sự kiện.
          </p>
          <p className="md:text-lg text-sm text-justify font-base sm:max-w-xl indent-6 mt-2">
            Song song đó là phần chia sẻ từ các diễn giả "người thật – việc
            thật": những cá nhân đang tiên phong ứng dụng Khung năng lực mới để
            chuyển mình thành công trong công việc và doanh nghiệp.
          </p>
          <p className="md:text-lg text-sm text-justify font-base sm:max-w-xl indent-6 mt-2">
            Đây là nơi sinh viên không chỉ được truyền cảm hứng – mà còn bắt đầu
            vẽ nên lộ trình sự nghiệp của riêng mình trong thời đại AI.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div
            ref={imgRef}
            className={`transition-transform duration-700 ease-out ${
              zoomed ? 'scale-100' : 'scale-90 opacity-0'
            }`}
          >
            <Image
              src={Devplus2}
              alt="Devplus2"
              preview={false}
              className="md:!w-[440px] !w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolTour;
