import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

const steps = [
  {
    title: "Bộ khung Năng lực #Ready4AI",
    subtitle: "(Mindset/Skillset/Toolset):",
    description:
      "Sinh viên được xác định mức độ sẵn sàng và tự xây dựng lộ trình phát triển bộ khung năng lực thời đại AI.",
    classNameMd:
      "sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:-right-8 sm:bottom-auto",
    iconClass: "sm:rotate-0",
  },
  {
    title: "Nắm vững kỹ năng thực chiến",
    subtitle: "",
    description:
      "Sinh viên sẽ được phát triển đồng bộ bộ khung năng lực thông qua môi trường sandbox đầu tư dựa trên sự dẫn dắt của mentors.",
    classNameMd:
      "sm:translate-x-0 sm:-translate-y-1/2 sm:-left-8 sm:-bottom-12 lg:translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:-right-6 lg:left-auto lg:bottom-auto",
    iconClass: "sm:rotate-135 lg:rotate-0",
  },
  {
    title: "Xây dựng Portfolio ấn tượng",
    subtitle: "",
    description:
      "Mỗi sinh viên sẽ hoàn thành chương trình với một danh mục dự án AI mạnh mẽ và đa dạng, trực tiếp chứng minh năng lực và kinh nghiệm của mình về lĩnh vực dữ liệu.",
    classNameMd:
      "sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:-right-8 sm:bottom-auto",
    iconClass: "sm:rotate-0",
  },
  {
    title: "Giới thiệu công việc khi ra trường",
    subtitle: "",
    description:
      "#Ready4AI kết nối sinh viên đạt khung năng lực với các vai trò chuyên môn giá trị cao sau khi tốt nghiệp.",
    classNameMd:
      "sm:translate-x-0 sm:top-1/2 sm:-translate-y-1/2 sm:-right-8 sm:bottom-auto",
  },
];

const StepCard = ({
  title,
  subtitle,
  description,
  delay,
  length,
  classNameMd,
  iconClass,
}: {
  title: string;
  subtitle: string;
  description: string;
  delay: number;
  length: number;
  classNameMd?: string;
  iconClass?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`
        bg-white shadow-sm border-2 border-transparent
        bg-gradient-to-r from-orange-500 to-yellow-500 p-[1px] rounded-lg
        transform transition-all duration-700 ease-out h-full
        ${
          isVisible
            ? "translate-x-0 opacity-100 scale-100"
            : "translate-x-8 opacity-0 scale-95"
        }
      `}
      style={{
        transitionDelay: `${delay}ms`,
        minHeight: "200px",
      }}
    >
      <div className="bg-white rounded-lg p-6 h-full">
        <div className="text-center h-full flex flex-col justify-start">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          {subtitle && (
            <p className="text-sm text-gray-600 font-medium mb-2">{subtitle}</p>
          )}
          <p className="text-md text-gray-500 leading-relaxed">{description}</p>
        </div>
      </div>
      {length < steps.length - 1 && (
        <div
          className={`absolute -bottom-8 right-1/2 translate-x-1/2 ${classNameMd} z-999`}
        >
          <ArrowRightOutlined
            className={`text-2xl ${iconClass} rotate-90 text-orange-700`}
            style={{ color: "#FF7F50" }}
          />
        </div>
      )}
    </div>
  );
};

const Ready4AI = () => {
  return (
    <div className="bg-gradient-to-br from-orange-200 via-orange-50 to-orange-100 p-4 md:py-24 -mt-16">
      <div className="max-w-6xl mx-auto mb-12">
        <div
          className={`
            text-center transform transition-all duration-1000 ease-out
          `}
        >
          <h1 className="md:text-5xl text-3xl font-bold text-center uppercase mb-4 text-orange-700">
            #READY4AI
          </h1>
          <p className="md:text-xl text-lg font-bold text-center text-gray-600 max-w-2xl mx-auto">
            Đánh giá và Xây dựng Bộ Khung Năng lực phù hợp Thời đại AI
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 sm:gap-8 lg:gap-10 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center flex-col h-full`}
            >
              <StepCard
                length={index}
                title={step.title}
                subtitle={step.subtitle}
                description={step.description}
                delay={800 + index * 400}
                classNameMd={step.classNameMd}
                iconClass={step.iconClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ready4AI;
