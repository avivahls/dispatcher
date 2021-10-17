import { Meta, Story } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

export default {
  component: Tag,
  title: "Components/Tag",
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const V1 = Template.bind({});
V1.args = {
    text: "Israel"
};
