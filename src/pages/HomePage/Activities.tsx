import { Image } from "antd";

import Dev7 from "../../assets/hinh7.jpg";
import Dev8 from "../../assets/hinh8.jpg";
import Dev9 from "../../assets/hinh9.jpg";
import Dev10 from "../../assets/hinh10.jpg";

const activities = [
  {
    image: Dev7,
    title: "AI Challenges",
    description: [
      "Tham gia bài test đánh giá năng lực ứng dụng AI thực tế, giúp sinh viên khám phá khả năng và vị trí của mình trong lộ trình AI.",
      // "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev8,
    title: "Trải nghiệm – Phản tư – Kết nối cộng đồng",
    description: [
      "Trực tiếp tương tác với AI, hoạt động nhóm, kết nối mentor – sinh viên",
      // "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev9,
    title: "SEMINAR: #ReadyforAI",
    description: [
      "Truyền cảm hứng và nâng cao nhận thức về ứng dụng AI trong ngành CNTT.",
      // "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
  {
    image: Dev10,
    title: "Trải Nghiệm Gian Hàng Doanh Nghiệp",
    description: [
      "Khu vực trưng bày, trải nghiệm sản phẩm và công nghệ từ các doanh nghiệp đồng hành.",
      // "Đồng thời, biến buổi Workshop thành một trải nghiệm đáng nhớ nơi sinh viên đóng vai trò chủ động trong hành trình khám phá và định hình tương lai của chính mình.",
    ],
  },
];

const Activities = () => {
  return (
    <div className="bg-orange-100/50 md:p-10 lg:p-16 py-6">
      <div className="md:text-4xl lg:text-5xl text-2xl font-bold text-center md:mb-12 mb-6 uppercase text-orange-700">
        AUDIENCES AND ACTIVITIES
      </div>
      <div className="flex flex-col max-w-[1200px] mx-auto">
        {activities.map((activity, idx) => (
          <div
            key={activity.title}
            className={`
              block
              md:flex
              ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}
              w-full
            `}
          >
            <div className="w-full md:w-1/2 flex md:justify-end justify-center">
              <Image
                src={activity.image}
                alt={activity.title}
                preview={false}
                className="object-cover md:!h-[600px] !w-[100%] max-h-[600px]"
              />
            </div>
            <div className="flex flex-col gap-4 md:p-8 p-4 w-full md:w-1/2 justify-start">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
