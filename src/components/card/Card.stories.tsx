import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imagePath: "/assets/img/pizza/manhattan.jpeg",
  ingredients:
    "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
  price: "215",
  weight: "555",
  title: "Піца Мангеттен",
};
