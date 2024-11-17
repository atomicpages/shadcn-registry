import type { Meta, StoryObj } from "@storybook/react";
import { HelpIcon } from "./help-icon";

const meta: Meta<typeof HelpIcon> = {
  title: "Components/HelpIcon",
  component: HelpIcon,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HelpIcon>;

export const SampleAvatar: Story = {
  args: {
    children: "Help!",
  },
};
