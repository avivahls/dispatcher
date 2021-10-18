import { Meta, Story } from "@storybook/react";
import { TagStyle } from "./TagStyle";

export default {
  component: TagStyle,
  title: "Components/Tag",
} as Meta;

const Template: Story = (args) => <TagStyle {...args} />;
export const V1 = Template.bind({});
V1.args = {children: '#tag'}
