import { Image } from "antd";

import Dev7 from "../../assets/hinh7.jpg";
import Dev8 from "../../assets/hinh8.jpg";
import Dev9 from "../../assets/hinh9.jpg";
import Dev10 from "../../assets/hinh10.jpg";

const activities = [
  {
    image: Dev7,
    title: "Networking Opportunities for IT Students",
    description: [
      "Truyền cảm hứng và trang bị cho sinh viên tầm nhìn chiến lược về kỷ nguyên AI, từ đó giúp sinh viên xác định các bước hành động cụ thể để phát triển kỹ năng và nuôi dưỡng tư duy đúng đắn để kiến tạo con đường sự nghiệp bền vững, đột phá. ",
      "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev8,
    title: "Recruitment Opportunities for Employers",
    description: [
      "Truyền cảm hứng và trang bị cho sinh viên tầm nhìn chiến lược về kỷ nguyên AI, từ đó giúp sinh viên xác định các bước hành động cụ thể để phát triển kỹ năng và nuôi dưỡng tư duy đúng đắn để kiến tạo con đường sự nghiệp bền vững, đột phá. ",
      "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev9,
    title: "Carrer Advancement for Students",
    description: [
      "Truyền cảm hứng và trang bị cho sinh viên tầm nhìn chiến lược về kỷ nguyên AI, từ đó giúp sinh viên xác định các bước hành động cụ thể để phát triển kỹ năng và nuôi dưỡng tư duy đúng đắn để kiến tạo con đường sự nghiệp bền vững, đột phá. ",
      "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev10,
    title: "Career Advancement for Employers",
    description: [
      "Truyền cảm hứng và trang bị cho sinh viên tầm nhìn chiến lược về kỷ nguyên AI, từ đó giúp sinh viên xác định các bước hành động cụ thể để phát triển kỹ năng và nuôi dưỡng tư duy đúng đắn để kiến tạo con đường sự nghiệp bền vững, đột phá. ",
      "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
];

const Activities = () => {
  return (
    <div className="bg-orange-100/50 md:p-20 py-6">
      <div className="md:text-5xl text-2xl font-bold text-center md:mb-12 mb-6 uppercase text-orange-700">
        AUDIENCES AND ACTIVITIES
      </div>
      <div className="flex flex-col max-w-[1200px] mx-auto">
        {activities.map((activity, idx) => (
          <div
            className={`grid md:grid-cols-2 grid-cols-1 ${
              idx % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            key={activity.title}
          >
            {idx % 2 === 0 ? (
              <>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  preview={false}
                  className="object-cover md:!h-[600px] !h-[400px]"
                />
                <div className="flex flex-col gap-4 md:p-10 p-6">
                  <div className="md:text-2xl text-lg font-bold">
                    {activity.title}
                  </div>
                  <div className="md:text-lg text-sm flex flex-col gap-2 text-justify">
                    {Array.isArray(activity.description)
                      ? activity.description.map((desc) => (
                          <div key={desc}>{desc}</div>
                        ))
                      : activity.description}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-4 md:p-10 p-6">
                  <div className="md:text-2xl text-lg font-bold">
                    {activity.title}
                  </div>
                  <div className="md:text-lg text-sm text-justify">
                    {activity.description}
                  </div>
                </div>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  preview={false}
                  className="object-cover md:h-[700px] !h-[400px]"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
