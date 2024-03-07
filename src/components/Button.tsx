import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  isDisabled: boolean;
  onClick: () => void;
}
const Button = ({
  children,
  color = "primary",
  isDisabled: value = true,
  onClick,
}: Props) => {
  return (
    <button disabled={value} className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
