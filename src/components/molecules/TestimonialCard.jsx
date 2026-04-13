import { StarIcon } from "@components/atoms/icons";

const TestimonialCard = ({ name, imageSrc, rating, quote }) => {
  return (
    <div className="bg-gray-50 p-[30px_12px] md:p-[53.5px_16px] rounded-xl flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={name}
        className="w-14.5 h-14.5 rounded-full mb-4.75 object-cover border-2 border-white shadow-sm"
      />
      <h4 className="font-bold text-[18px] mb-4.75 text-neutral-800">{name}</h4>
      <div className="flex items-center gap-2.5 sm:gap-3.75 mb-4.75">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
        <span className="font-medium text-neutral-800">
          {rating.toFixed(1)}
        </span>
      </div>
      <div className="text-[3rem] font-black text-gray-400 mb-2.5 leading-none">
        “
      </div>
      <p className="text-gray-500 italic">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
