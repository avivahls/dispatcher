import { Meta, Story } from "@storybook/react";
import { DUMMY, DUMMY2 } from "../../MockData";
import ChartCardList from "./ChartCardList";
import DataCardList, { DataCardListProps } from "./DataCardList";

export default {
  component: DataCardList,
  title: "Components/CardLists",
} as Meta;

// const Template: Story<DataCardListProps> = (args) => <DataCardList {...args} />;
// export const V1 = Template.bind({});
// V1.args = {
//   news: [DUMMY, DUMMY2, DUMMY, DUMMY2],
// };

// const Template1: Story<ChartCardListProps> = (args) => (
//   <ChartCardList {...args} />
// );
// export const V2 = Template1.bind({});
// V2.args = {
//   news: [DUMMY, DUMMY2, DUMMY, DUMMY2],
// };
