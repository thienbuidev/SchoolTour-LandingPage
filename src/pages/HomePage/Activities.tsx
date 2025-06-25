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
    <div className="bg-orange-100/50 p-20">
      <div className="text-5xl font-bold text-center mb-12 uppercase text-orange-700">
        AUDIENCES AND ACTIVITIES
      </div>
      <div className="flex flex-col max-w-[1200px] mx-auto">
        {activities.map((activity, idx) => (
          <div
            className={`grid grid-cols-2 ${
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
                  height={700}
                  className="object-cover"
                />
                <div className="flex flex-col gap-4 p-10">
                  <div className="text-2xl font-bold">{activity.title}</div>
                  <div className="text-lg flex flex-col gap-2 text-justify">
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
                <div className="flex flex-col gap-4 p-10">
                  <div className="text-2xl font-bold">{activity.title}</div>
                  <div className="text-lg">{activity.description}</div>
                </div>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  preview={false}
                  height={700}
                  className="object-cover"
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
