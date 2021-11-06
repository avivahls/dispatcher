import { Meta, Story } from "@storybook/react";
import SmallScreenRecentSearch, {
  RecentSearchProps,
} from "./SmallRecentSearch";

export default {
  component: SmallScreenRecentSearch,
  title: "Components/RecentSearch",
} as Meta;

const Template1: Story<RecentSearchProps> = (args) => (
  <SmallScreenRecentSearch {...args} />
);
export const data = Template1.bind({});
data.args = {
  items: ["tgtgt", "gggg", "fffff"],
};
