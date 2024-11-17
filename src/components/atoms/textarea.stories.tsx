import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const SampleTextarea: Story = {
  args: {
    label: "Enter in your name",
    help: "Enter in a valid name",
    defaultValue: "Elmer Fudd",
    required: true,
    error: true,
  },
};
