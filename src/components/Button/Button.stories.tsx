import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: ButtonType.PRIMARY,
  text: "Primary",
  hasIcon: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  className:ButtonType.SECONDARY,
  text: "Secondery",
  hasIcon: false
};

export const TextBtn = Template.bind({});
TextBtn.args = {
  className:ButtonType.TEXT,
  text: "Text Button",
  hasIcon: false
};

export const welcome = Template.bind({});
welcome.args = {
  className:ButtonType.WELCOME,
  text: "welcome",
  hasIcon: false
};