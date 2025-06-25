import { Image } from "antd";

const CompanyCard = ({ org }: { org: { name: string; image: string } }) => {
  return (
    <div className="rounded-lg p-3 bg-white border-r-4 border-b-4 border-orange-500 flex items-center justify-center">
      <div className="flex flex-col gap-2 w-[200px] items-center justify-center">
        <Image
          className="rounded-lg object-contain hover:scale-115 transition-all duration-300"
          src={org.image}
          alt={org.name}
          preview={false}
          height={60}
        />
      </div>
    </div>
  );
};

export default CompanyCard;
