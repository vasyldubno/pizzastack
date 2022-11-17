import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardInfo } from "./CardInfo";

export default {
  title: "CardInfo",
  component: CardInfo,
  argTypes: {},
} as ComponentMeta<typeof CardInfo>;

const Template: ComponentStory<typeof CardInfo> = () => <CardInfo />;

export const Primary = Template.bind({});
Primary.args = {};
