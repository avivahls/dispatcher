import { Meta, Story } from "@storybook/react";
import { Dropdown, DropdownProps } from "./Dropdown";

export default {
  component: Dropdown,
  title: "Components/Dropdown",
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;
export const small = Template.bind({});
small.args={
    title: 'Sources',
    items: ['Mako', 'Ynet', 'Walla']
}
