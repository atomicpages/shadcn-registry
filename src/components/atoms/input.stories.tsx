import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const SampleInput: Story = {
  args: {
    label: "Enter in your name",
    help: "Enter in a valid name",
    defaultValue: "Elmer Fudd",
    required: true,
    error: true,
  },
};
