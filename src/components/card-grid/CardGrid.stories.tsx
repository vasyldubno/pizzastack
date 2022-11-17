import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardGrid } from "./CardGrid";
import pizzaItems from "../../pizza.json";

export default {
  title: "CardGrid",
  component: CardGrid,
  argTypes: {},
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => (
  <CardGrid {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: pizzaItems,
};
