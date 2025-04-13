import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { LucideHeart, LucideTrash, LucideSettings } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Button/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "white",
      ],
    },
    size: {
      control: "select",
      options: ["md", "sm", "xs"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    "aria-label": "Like",
    variant: "default",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};

export const Destructive: Story = {
  args: {
    "aria-label": "Delete",
    variant: "destructive",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideTrash />
    </IconButton>
  ),
};

export const Outline: Story = {
  args: {
    "aria-label": "Settings",
    variant: "outline",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideSettings />
    </IconButton>
  ),
};

export const Secondary: Story = {
  args: {
    "aria-label": "Like",
    variant: "secondary",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};

export const Ghost: Story = {
  args: {
    "aria-label": "Like",
    variant: "ghost",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};

export const White: Story = {
  args: {
    "aria-label": "Like",
    variant: "white",
    size: "md",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Small: Story = {
  args: {
    "aria-label": "Like",
    variant: "default",
    size: "sm",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};

export const ExtraSmall: Story = {
  args: {
    "aria-label": "Like",
    variant: "default",
    size: "xs",
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};

export const Disabled: Story = {
  args: {
    "aria-label": "Like",
    variant: "default",
    size: "md",
    disabled: true,
  },
  render: (args) => (
    <IconButton {...args}>
      <LucideHeart />
    </IconButton>
  ),
};
