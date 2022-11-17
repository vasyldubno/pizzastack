import { FC } from "react";
import { Card } from "../card/Card";

type Pizza = {
  id: string;
  imagePath: string;
  weight: string;
  title: string;
  ingredients: string;
  price: string;
};

type CardGridProps = {
  items: Pizza[];
};

export const CardGrid: FC<CardGridProps> = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center mb-28">
      {items.map((card) => (
        <Card {...card} key={card.id} />
      ))}
    </div>
  );
};
