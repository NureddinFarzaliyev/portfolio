import Image from "next/image";

const CompanyBadge = ({ company }) => {
  if (!company || !company.logo || !company.title) {
    return null;
  }

  return (
    <div className="bg-white/[0.05] rounded-lg p-1 pr-2 flex items-center text-sm w-fit">
      <Image
        src={company.logo}
        alt={company.title}
        height={32}
        width={32}
        className="rounded-lg shrink-0"
      />
      <span className="ml-2 text-sm opacity-90">@{company.title}</span>
    </div>
  );
};

export default CompanyBadge;
