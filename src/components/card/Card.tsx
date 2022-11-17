import { FC } from "react";

interface CardProps {
  imagePath: string;
  title: string;
  ingredients: string;
  weight: string;
  price: string;
}

export const Card: FC<CardProps> = ({
  imagePath,
  ingredients,
  price,
  title,
  weight,
}) => {
  return (
    <div className="w-96 shadow-xl rounded-2xl">
      <div className="relative">
        <img
          className="object-cover object-center w-full h-[247px] rounded-t-2xl"
          src={imagePath}
          alt="manhattan"
        />
        <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[32px]">
          {weight} г
        </span>
      </div>
      <div className="p-8">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="pt-2 font-normal text-base">{ingredients}</p>
        <p className="pt-8 font-semibold text-xl">{price} грн</p>
      </div>
    </div>
  );
};
