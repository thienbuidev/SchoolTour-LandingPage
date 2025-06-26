import { Card, Image } from "antd";
import GDGIC from "../../assets/devplus2.png";

const Discussion = () => {
  return (
    <div className="bg-orange-700/90 md:p-20 p-4">
      <div className="flex flex-col md:gap-2 gap-4 max-w-[1200px] mx-auto">
        <div className="md:text-4xl lg:text-5xl text-3xl font-bold text-center md:mb-12 mb-2 uppercase text-white">
          Tọa đàm
        </div>
        <div className="flex items-center w-full bg-indigo-600 rounded-lg">
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
          <span className="mx-4 whitespace-nowrap text-base font-semibold text-white">
            7h30 AM - 8h00 AM
          </span>
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
        </div>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="md:text-2xl text-xl font-bold text-center">
              Tham gia bài kiểm tra đánh giá năng lực sử dụng AI
            </div>
            <div className="flex md:flex-row flex-col gap-4 justify-center">
              <div className="flex flex-row gap-1">
                <Image
                  className="md:!w-[60px] !w-[50px]"
                  src={GDGIC}
                  alt="Dev1"
                  preview={false}
                />
                <div className="flex flex-col justify-center items-start max-w-[200px]">
                  <div className="font-semibold">Bui Xuan Thien</div>
                  <div>Branch director at Axon Active</div>
                </div>
              </div>
              <div className="flex flex-row gap-1">
                <Image
                  className="md:!w-[60px] !w-[50px]"
                  src={GDGIC}
                  alt="Dev1"
                  preview={false}
                />
                <div className="flex flex-col justify-center items-start max-w-[200px]">
                  <div className="font-semibold">Bui Xuan Thien</div>
                  <div>Branch director at Axon Active</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex items-center w-full bg-indigo-600 rounded-md">
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
          <span className="mx-4 whitespace-nowrap text-base font-semibold text-white">
            8h00 AM - 9h00 AM
          </span>
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
        </div>
        <Card>
          <div className="flex flex-col gap-4">
            <div className="md:text-2xl text-xl font-bold text-center">
              AI: Bước Nhảy Vọt Cho Phát Triển Phần Mềm
            </div>
            <div className="flex flex-row gap-4 md:justify-center justify-start">
              <div className="flex flex-row gap-1">
                <Image
                  className="md:!w-[60px] !w-[50px]"
                  src={GDGIC}
                  alt="Dev1"
                  preview={false}
                />
                <div className="flex flex-col justify-center items-start max-w-[200px]">
                  <div className="font-semibold">Bui Xuan Thien</div>
                  <div>Branch director at Axon Active</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className="flex items-center w-full bg-indigo-600 rounded-md">
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
          <span className="mx-4 whitespace-nowrap text-base font-semibold text-white">
            9h00 AM - 9h30 AM
          </span>
          <div className="flex-grow h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <Card>
            <div className="flex flex-col gap-4">
              <div className="md:text-2xl text-lg font-bold">
                Bộ Ba Quyền Lực: Công Cụ, Kỹ Năng & Tư Duy Cho Dev thời AI
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-1">
                  <Image
                    className="md:!w-[60px] !w-[50px]"
                    src={GDGIC}
                    alt="Dev1"
                    preview={false}
                  />
                  <div className="flex flex-col justify-center items-start max-w-[200px]">
                    <div className="font-semibold">Bui Xuan Thien</div>
                    <div>Branch director at Axon Active</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col gap-4">
              <div className="md:text-2xl text-lg font-bold">
                Bộ Ba Quyền Lực: Công Cụ, Kỹ Năng & Tư Duy Cho Dev thời AI
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-1">
                  <Image
                    className="md:!w-[60px] !w-[50px]"
                    src={GDGIC}
                    alt="Dev1"
                    preview={false}
                  />
                  <div className="flex flex-col justify-center items-start max-w-[200px]">
                    <div className="font-semibold">Bui Xuan Thien</div>
                    <div>Branch director at Axon Active</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
