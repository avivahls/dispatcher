import { Meta, Story } from "@storybook/react";
import SearchElement from "./SearchElement";
export default {
  component: SearchElement,
  title: "Components/Search",
} as Meta;

const Template: Story = (args) => <SearchElement {...args} />;
export const headerSearch = Template.bind({});
