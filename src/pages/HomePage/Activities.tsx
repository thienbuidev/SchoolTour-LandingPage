import { Image } from "antd";

import Dev7 from "../../assets/hinh7.jpg";
import Dev8 from "../../assets/hinh8.jpg";
import Dev9 from "../../assets/hinh9.jpg";
import Dev10 from "../../assets/hinh10.jpg";

const activities = [
  {
    image: Dev7,
    title: "AI Challenges – Khám phá năng lực AI của chính bạn",
    content: "Tham gia bài đánh giá ứng dụng AI thực tiễn, giúp bạn:",
    description: [
      "Hiểu rõ điểm mạnh và hạn chế khi sử dụng AI",
      "Xác định vị trí hiện tại trong hành trình phát triển năng lực số",
      "Nhận bản đồ năng lực cá nhân hóa kèm định hướng theo ngành học",
      "Đây là bước khởi đầu giúp sinh viên làm chủ công cụ, nâng cao tư duy, và sẵn sàng chuyển mình trong kỷ nguyên AI.    ",
    ],
  },
  {
    image: Dev8,
    title: "SEMINAR: #ReadyforAI",
    description: [
      "Được truyền cảm hứng từ chuyên gia và người thật – việc thật, đang tiên phong ứng dụng AI trong ngành Công nghệ Thông tin",
      "Cập nhật góc nhìn thực tiễn về sự phát triển và ứng dụng AI trong học tập, công việc và phát triển phần mềm",
      "Phân tích tác động của AI đến các vai trò nghề nghiệp trong ngành CNTT, đặc biệt là lập trình viên và kỹ sư phần mềm",
      "Định hình lại tư duy nghề nghiệp và xác định kỹ năng cốt lõi cần chuẩn bị để thích nghi và phát triển bền vững trong kỷ nguyên AI",
    ],
  },
  {
    image: Dev9,
    title: "Trải nghiệm – Kết nối cộng đồng",
    description: [
      "Trải nghiệm đánh giá năng lực cùng AI, tham gia hoạt động nhóm thực tiễn, và kết nối cùng mentor, diễn giả, doanh nghiệp.",
      "Làm việc nhóm – cùng giải quyết thử thách trong thời gian thực",
      "Giao lưu cùng mentor và các khách mời đã ứng dụng AI vào công việc",
      "Mở rộng kết nối với cộng đồng sinh viên, chuyên gia và các tổ chức đang dẫn đầu chuyển đổi số",
    ],
    conclusion:
      "Đây là cơ hội để sinh viên thực hành – phản biện – kết nối và bắt đầu hành trình khám phá năng lực bản thân trong kỷ nguyên AI.",
  },
  {
    image: Dev10,
    title: "Trải Nghiệm Gian Hàng Doanh Nghiệp",
    content:
      "Khám phá khu vực trưng bày và tương tác trực tiếp với các sản phẩm, công nghệ đến từ các doanh nghiệp đồng hành cùng chương trình.",
    reason: "Tại đây, sinh viên sẽ có cơ hội:",
    description: [
      "Trải nghiệm sản phẩm công nghệ thực tế ngay tại sự kiện",
      "Tìm hiểu cách công nghệ được triển khai trong môi trường doanh nghiệp",
      "Giao lưu, trao đổi cùng đại diện các công ty công nghệ – từ startup đến doanh nghiệp lớn",
    ],
    conclusion:
      "Một không gian mở để sinh viên kết nối, quan sát thực tiễn và hiểu rõ hơn về cách công nghệ vận hành trong đời sống và công việc.",
  },
];

const Activities = () => {
  return (
    <div className="bg-orange-100/50 md:p-10 lg:p-16 py-6">
      <div className="md:text-4xl lg:text-5xl text-2xl font-bold text-center md:mb-6 mb-2 uppercase text-orange-700">
        Hoạt động
      </div>
      <div className="text-center md:text-xl text-lg font-medium animate-fade-in-up delay-200 md:mb-6 mb-2 p-4 transition-all duration-1000 hover:text-orange-700">
        DevPlus kết nối với nhiều đối tác doanh nghiệp uy tín để đảm bảo cơ hội
        thực tập và đầu ra việc làm cho sinh viên.
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
              <div
                className={`md:text-2xl text-lg font-bold text-orange-600 ${
                  idx % 2 === 1 ? "md:text-right" : "md:text-left"
                }`}
              >
                {activity.title}
              </div>
              {activity.content && (
                <div className="md:text-lg text-sm flex flex-col gap-2 text-justify font-semibold">
                  {activity.content}
                </div>
              )}
              {activity.reason && (
                <div className="md:text-lg text-sm flex flex-col gap-2 text-justify font-medium">
                  {activity.reason}
                </div>
              )}
              <div className="md:text-lg text-sm flex flex-col gap-2 text-justify">
                {Array.isArray(activity.description) ? (
                  <ul className="list-disc pl-6">
                    {activity.description.map((desc) => (
                      <li key={desc} className="mb-1">
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  activity.description
                )}
              </div>
              {activity.conclusion && (
                <div className="md:text-lg text-sm flex flex-col gap-2 text-justify font-semibold">
                  {activity.conclusion}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
