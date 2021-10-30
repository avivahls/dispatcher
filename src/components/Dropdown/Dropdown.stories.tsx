import { Meta, Story } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";
import { SideBarDropdown } from "./DropdownStyle";
import { SideDropdown } from "./SideBarDropdown";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
export const regular = Template.bind({});
regular.args = {
  title: "Sources",
  items: ["Mako", "Ynet", "Walla"],
};
const Template1: Story<DropdownProps> = (args) => <SideDropdown {...args} />;
export const side = Template1.bind({});
side.args = {
  title: "Sources",
  items: ["Mako", "Ynet", "Walla"],
};
