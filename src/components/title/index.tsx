import type { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 style={{ color: "red" }}>{children}</h1>
  )
}

export default Title;