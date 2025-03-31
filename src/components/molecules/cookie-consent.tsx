// heavily inspired by https://github.com/r2hu1/shadcn-cookie-consent
// thanks r2hu1!

import { useCallback, useEffect, useState } from "react";

import { CookieIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

type CookieConsentProps = {
  onAcceptCallback?: VoidFunction;
  onDeclineCallback?: VoidFunction;
  onSavePreferences: SaveFunction;
  config?: ConfigRow[];
};

const setCookie = () =>
  (document.cookie =
    "cookie-consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/");

const CookieContent = () => (
  <p className="text-sm font-normal text-start">
    We use cookies to ensure you get the best experience on our website. For
    more information on how we use cookies, please see our privacy policy.
  </p>
);

type SaveFunction = <
  T extends Record<string, boolean> = Record<string, boolean>,
>(
  config: T,
) => void;

type ConfigRow = {
  title: string;
  name: string;
  alwaysEnabled?: boolean;
  checked?: boolean;
};

const CookieOptionRow: React.FC<ConfigRow> = ({
  title,
  name,
  alwaysEnabled,
  checked,
}) => {
  return (
    <div className="flex justify-between items-center w-full p-3 rounded-md bg-zinc-100">
      <p className="text-sm">{title}</p>
      <span className="inline-flex gap-x-4">
        {alwaysEnabled && (
          <Badge variant="secondary" className="bg-white">
            Always enabled
          </Badge>
        )}
        <Switch
          name={name}
          defaultChecked={alwaysEnabled ?? checked}
          disabled={alwaysEnabled}
        />
      </span>
    </div>
  );
};

const CookieConsentManager: React.FC<{
  onAcceptAll?: VoidFunction;
  onRejectAll?: VoidFunction;
  onSavePreferences: SaveFunction;
  config: ConfigRow[];
}> = ({ config, onAcceptAll, onRejectAll, onSavePreferences }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(!open)} variant="ghost" auto>
          Manage preferences
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          className="flex flex-col gap-y-4"
          onSubmit={(e) => {
            e.preventDefault();

            const data = Object.fromEntries(new FormData(document.forms[0]));

            onSavePreferences(
              Object.entries(data).reduce(
                (acc, [key, value]) => {
                  acc[key] = value === "on";

                  return acc;
                },
                {} as Record<string, boolean>,
              ),
            );

            setCookie();
            setOpen(false);
          }}>
          <DialogHeader>
            <DialogTitle>Consent preferences</DialogTitle>
          </DialogHeader>
          <div className="border-t border-border pt-4">
            <CookieContent />
          </div>
          {config.map((opts) => (
            <CookieOptionRow key={opts.name} {...opts} />
          ))}
          <DialogFooter className="flex w-full gap-x-4 mt-6">
            <div className="flex-grow w-full">
              <Button
                variant="secondary"
                onClick={() => {
                  onAcceptAll?.();
                  setOpen(false);
                }}>
                Accept all
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  onRejectAll?.();
                  setOpen(false);
                }}>
                Reject all
              </Button>
            </div>
            <Button type="submit" variant="default">
              Save preferences
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const defaultConfig: ConfigRow[] = [
  {
    title: "Strictly necessary cookies",
    name: "default-cookies",
    alwaysEnabled: true,
    checked: true,
  },
  {
    title: "Analytics cookies",
    name: "analytics",
    checked: true,
  },
];

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAcceptCallback,
  onDeclineCallback,
  onSavePreferences,
  config = defaultConfig,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    setCookie();

    setTimeout(() => {
      setHide(true);
    }, 700);
  }, []);

  const accept = useCallback(() => {
    close();
    onAcceptCallback?.();
  }, [onAcceptCallback]);

  const decline = useCallback(() => {
    close();
    onDeclineCallback?.();
  }, [onDeclineCallback]);

  useEffect(() => {
    setIsOpen(true);

    if (document.cookie.includes("cookie-consent=true")) {
      setIsOpen(false);

      setTimeout(() => {
        setHide(true);
      }, 700);
    }
  }, []);

  return (
    <div
      suppressHydrationWarning
      className={cn(
        "fixed z-10 bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden",
      )}>
      <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">We use cookies</h1>
            <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
          </div>
          <div className="p-4">
            <CookieContent />
            <p>
              <br />
              <br />
              <span className="text-xs">
                By clicking &ldquo;
                <span className="font-medium opacity-80">Accept</span>
                &rdquo;, you agree to our use of cookies.
              </span>
              <br />
              <a href="#" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-2 p-4 py-5 border-t border-border flex-col dark:bg-background/20">
            <Button onClick={() => accept()} className="w-full">
              Accept
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>

            <CookieConsentManager
              onRejectAll={decline}
              onAcceptAll={accept}
              onSavePreferences={(config) => {
                close();
                onSavePreferences(config);
              }}
              config={config}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
