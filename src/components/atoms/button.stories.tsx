import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariants } from "./button";
import { HouseIcon } from "lucide-react";

const variants: ButtonVariants["variant"][] = [
  "default",
  "destructive",
  "ghost",
  "link",
  "outline",
  "secondary",
];

const meta: Meta<typeof Button> = {
  title: "Components/Button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description:
        "The visual appearance of the button is controlled by variants.",
      options: variants,
      control: { type: "select" },
      table: {
        defaultValue: { summary: "primary" },
        type: {
          summary: "string",
          detail: `Possible values are\n\n${variants.join("\n")}`,
        },
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "Set true to enable the button loader.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Set true to disable the button.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    auto: {
      control: { type: "boolean" },
      description: "Set true to make the button 100% width.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    leftIcon: {
      control: { type: "text", disable: true },
      description: "The left icon of the button.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    rightIcon: {
      control: { type: "text", disable: true },
      description: "The right icon of the button.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SampleButton: Story = {
  args: {
    children: "Testing",
  },
};

export const LoadingButton: Story = {
  args: {
    children: "Testing",
    loading: true,
  },
};

export const LeftIconButton: Story = {
  args: {
    children: "Testing",
    leftIcon: <HouseIcon />,
  },
};

export const RightIconButton: Story = {
  args: {
    children: "Testing",
    rightIcon: <HouseIcon />,
  },
};
