import Image from "next/image";

const CompanyBadge = ({ company }) => {
  if (!company || !company.logo || !company.title) {
    return null;
  }

  return (
    <div className="bg-[#1F1F23] rounded-lg pl-0.5 pr-2 flex items-center text-sm w-fit h-8">
      <Image
        src={company.logo}
        alt={company.title}
        height={28}
        width={28}
        className="rounded-lg shrink-0"
      />
      <span className="ml-2 text-sm">@{company.title}</span>
    </div>
  );
};

export default CompanyBadge;
