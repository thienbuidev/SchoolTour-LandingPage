import { Image } from "antd";

const CompanyCard = ({ org }: { org: { name: string; image: string } }) => {
  return (
    <div className="rounded-lg p-3 bg-white border-r-4 border-b-4 border-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-200 hover:border-orange-600 transform hover:-translate-y-1">
      <div className="flex flex-col gap-2 md:w-[200px] w-[150px] items-center justify-center">
        <Image
          className="rounded-lg object-contain transition-all duration-300 hover:scale-110 filter hover:brightness-110 md:!h-[60px] !h-[45px]"
          src={org.image}
          alt={org.name}
          preview={false}
        />
      </div>
    </div>
  );
};

export default CompanyCard;
