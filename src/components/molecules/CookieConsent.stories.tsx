import type { Meta, StoryObj } from "@storybook/react";
import { CookieConsent } from "./CookieConsent";
import { Button } from "../ui/button";

const meta: Meta<typeof CookieConsent> = {
  title: "Molecules/CookieConsent",
  component: CookieConsent,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CookieConsent>;

export const CookieConsentExample: Story = {
  render(args) {
    return (
      <>
        <Button
          onClick={() => {
            document.cookie = "cookie-consent=; max-age=0; path=/";
          }}>
          Clear cookie
        </Button>
        <CookieConsent {...args} />
      </>
    );
  },
  args: {
    onSavePreferences(config) {
      console.log(config);
    },
  },
};
