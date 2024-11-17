export type AriaBaseProps = (
  | {
    label: React.ReactNode;
    "aria-label"?: undefined;
    "aria-labelledby"?: undefined;
  }
  | {
    label?: undefined;
    "aria-label": string;
    "aria-labelledby"?: undefined;
  }
  | {
    label?: undefined;
    "aria-label"?: undefined;
    "aria-labelledby": string;
  }
);

export type AriaLabelProps<T extends React.HTMLAttributes<any>> = Omit<
  T,
  "aria-label" | "aria-labelledby"
> &
  AriaBaseProps;
