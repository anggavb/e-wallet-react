const FeatureCard = ({ iconSrc, title, description }) => (
  <div className="flex flex-col items-center bg-blue-700 bg-linear-to-b from-blue-600 to-blue-800 text-white p-[30px_20px] rounded-xl text-center shadow-[0_15px_30px_rgba(59,91,255,0.2)] hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-center justify-center w-12.5 h-12.5 mb-5 bg-white rounded-full">
      {iconSrc}
    </div>
    <h3 className="mb-5 text-[18px] font-semibold">{title}</h3>
    <p className="text-[13px] opacity-90 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
