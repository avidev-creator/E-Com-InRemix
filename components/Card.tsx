import { FC } from "react";

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
}

const Card: FC<CardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="group relative w-64 h-20 rounded-full bg-gray-800/40 backdrop-blur-md shadow-lg hover:w-96 hover:h-80 hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden cursor-pointer border border-white/10 hover:border-white/20 hover:bg-gray-800/60">
      <div className="absolute inset-0 w-full h-full">
        {/* Initial pill state */}
        <div className="flex items-center h-full px-4 group-hover:opacity-0 transition-opacity duration-200">
          <div className="p-3 rounded-full bg-white/10 text-indigo-300 backdrop-blur-xl shadow-inner border border-white/20 flex-shrink-0">
            {icon}
          </div>
          <h3 className="ml-3 text-sm font-semibold text-white/90 truncate">
            {title}
          </h3>
        </div>

        {/* Expanded state */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <div className="relative">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
          </div>
          <div className="p-4 bg-gray-900/50 backdrop-blur-lg">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
