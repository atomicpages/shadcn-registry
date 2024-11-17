import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean", description: "Disables the checkbox" },
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description: "Sets the checked state of the checkbox",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const SampleCheckbox: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};
