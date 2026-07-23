import { createElement, type ComponentPropsWithoutRef, type ElementType } from "react";

type As = ElementType;

type MergeProps<SourceProps, TargetProps> = Omit<SourceProps, keyof TargetProps> & TargetProps;

type Props<T extends As> = MergeProps<
  ComponentPropsWithoutRef<T>,
  {
    as?: T;
  }
>;

export function Test<T extends As = "div">({ as, ...props }: Props<T>) {
  const Component = (as ?? "div") as T;

  const { children, className, ...rest } = props;

  return createElement(Component, {
    className,
    ...rest,
    children,
  });
}
