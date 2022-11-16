import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { App } from "../App";

export default {
  title: "Example/Button",
  component: App,
  argTypes: {},
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: "Button",
// };
