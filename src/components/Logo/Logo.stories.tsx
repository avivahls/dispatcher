import { Meta, Story } from "@storybook/react";
import { Logo, LogoProps, LogoType } from "./Logo";

export default {
  component: Logo,
  title: "Components/Logo",
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const smallLogo = Template.bind({});
smallLogo.args = {
    className: LogoType.SMALL
};

export const bigLogo = Template.bind({});
bigLogo.args = {
    className: LogoType.BIG
};
