import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardError } from "./CardError";

export default {
  title: "CardError",
  component: CardError,
  argTypes: {},
} as ComponentMeta<typeof CardError>;

const Template: ComponentStory<typeof CardError> = () => <CardError />;

export const Primary = Template.bind({});
Primary.args = {};
