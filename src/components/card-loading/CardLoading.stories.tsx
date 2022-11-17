import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardLoading } from "./CardLoading";

export default {
  title: "CardLoading",
  component: CardLoading,
  argTypes: {},
} as ComponentMeta<typeof CardLoading>;

const Template: ComponentStory<typeof CardLoading> = () => <CardLoading />;

export const Primary = Template.bind({});
Primary.args = {};
