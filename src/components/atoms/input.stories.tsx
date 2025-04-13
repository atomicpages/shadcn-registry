import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Eye, User } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    rightIcon: {
      control: false,
    },
    leftIcon: {
      control: false,
    },
  },
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

export const InputWithRightIcon: Story = {
  render(args) {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        {...args}
        rightIcon={<Eye onClick={() => setShowPassword(!showPassword)} />}
      />
    );
  },
};

export const InputWithLeftIcon: Story = {
  render(args) {
    return <Input {...args} leftIcon={<User />} />;
  },
};
