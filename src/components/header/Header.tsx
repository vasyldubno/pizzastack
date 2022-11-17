import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="h-12 shadow-xl px-6 flex items-center mb-12">
      <div>
        <a href="/" className="text-xl font-semibold">
          PizzaStack
        </a>
      </div>
    </div>
  );
};
