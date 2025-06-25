import { Image } from "antd";
import Devplus2 from "../../assets/devplus4D.png";
import { useEffect, useRef, useState } from "react";

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
    <div className="grid grid-cols-2 gap-10 max-w-[1400px] mx-auto p-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-6xl font-bold text-center mb-12 uppercase bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
          SCHOOL TOUR 2025
        </div>
        <p className="text-xl text-justify font-medium">
          Truyền cảm hứng và trang bị cho sinh viên tầm nhìn chiến lược về kỷ
          nguyên AI, từ đó giúp sinh viên xác định các bước hành động cụ thể để
          phát triển kỹ năng và nuôi dưỡng tư duy đúng đắn để kiến tạo con đường
          sự nghiệp bền vững, đột phá. Đồng thời, biến buổi Workshop thành một
          trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành
          trình khám phá và định hình tương lai của chính mình.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div
          ref={imgRef}
          className={`transition-transform duration-700 ease-out ${
            zoomed ? "scale-100" : "scale-90 opacity-0"
          }`}
        >
          <Image src={Devplus2} alt="Devplus2" preview={false} />
        </div>
      </div>
    </div>
  );
};

export default SchoolTour;
