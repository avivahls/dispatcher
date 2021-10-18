import { Meta, Story } from "@storybook/react";
import { PrimaryButton, WelcomeButton, SecondaryButton, TextButton, ButtonIcon } from "./ButtonStyle";

export default {
  component: PrimaryButton,
  title: "Components/Button",
} as Meta;

const TemplatePrimary: Story = (args) => <PrimaryButton {...args} />;
export const Primary = TemplatePrimary.bind({});
Primary.args = { children: "PRIMARY"}

// ADD BUTTON WITH ICON

const TemplateSecondary: Story = (args) => <SecondaryButton {...args} />;
export const Secondary = TemplateSecondary.bind({});
Secondary.args = { children : 'SECONDARY'}

const TemplateWelcome: Story = (args) => <WelcomeButton {...args} />;
export const Welcome = TemplateWelcome.bind({});
Welcome.args = { children : 'Welcome'}


const TemplateText: Story = (args) => <TextButton {...args} />;
export const Text = TemplateText.bind({});
Text.args = { children : 'TEXT BUTTON'}