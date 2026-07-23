import type {
  ComponentPropsWithoutRef,
  ComponentRef,
  ElementType,
  ReactElement,
} from "react";

export type As = ElementType;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T>;

export type MergeProps<SourceProps, TargetProps> = Omit<
  SourceProps,
  keyof TargetProps
> &
  TargetProps;

export type PolymorphicProps<
  T extends As,
  OwnProps extends object = Record<string, never>,
> = MergeProps<
  PropsOf<T>,
  OwnProps & {
    as?: T;
  }
>;

export type PolymorphicRef<T extends As> = ComponentRef<T>;

export interface PolymorphicComponent<
  DefaultAs extends As,
  OwnProps extends object = Record<string, never>,
> {
  <T extends As = DefaultAs>(
    props: PolymorphicProps<T, OwnProps>,
  ): ReactElement | null;
}
