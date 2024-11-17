import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonTable } from "./skeleton";
import { Skeleton } from "../ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  subcomponents: { SkeletonTable },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonTable>;

export const LoadingTable: Story = {
  render: () => <SkeletonTable rows={5} cols={5} />,
};
