# Shadcn Starter

My starter for most shadcn projects. This includes more sensible defaults around
shadcn + radix. In the same vain as shadcn, this is not a component library.
Eventually I'll get around to creating a CLI like shadcn so it's more portable.
For passersby, feel free to copy and paste components.

## Button

An enhanced button component that includes:

- a loading state
- left icons
- right icons
- type enhancements

## Input

An accessible input component that:

- adds type-guards to ensure inputs are accessible except when `type="hidden"`
- `label` props to add accessible labels
- `required` asterisk marker on `label`
- enforce use of `aria-label` or `aria-labelledby` when `label` is not defined
- icon support
- `help` text support
- `error` statuses
- `tooltip` overlays

## Avatar

Adds:

- an `alert` prop that can be used to indicate messages or some other user
  status

## Skeleton (wip)

Add skeleton templates including:

- cards
- tables
- sensible colors

## HelpIcon

A small help icon component that includes a `?` with a tooltip
