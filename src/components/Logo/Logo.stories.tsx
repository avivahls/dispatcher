import { Meta, Story } from "@storybook/react";
import { BigLogo, SmallLogo } from "./LogoStyle";

export default {
  component: SmallLogo,
  title: "Components/Logo",
} as Meta;

const TemplateSmall: Story = (args) => <SmallLogo {...args} />;
export const small = TemplateSmall.bind({});

const TemplateBig: Story = (args) => <BigLogo {...args} />;
export const big = TemplateBig.bind({});