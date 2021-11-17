import { Meta, Story } from "@storybook/react";
import RecentSearch, { RecentSearchProps } from "./RecentSearch";

export default {
  component: RecentSearch,
  title: "Components/RecentSearch",
} as Meta;

const Template1: Story<RecentSearchProps> = (args) => (
  <RecentSearch {...args} />
);
export const data = Template1.bind({});
data.args = {
  isSmallScrean: true,
  items: ["tgtgt", "gggg", "fffff"],
};
