import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  value: String | undefined | boolean;
  onClick: () => void;
}
const Button = ({
  children,
  color = "primary",
  value = true,
  onClick,
}: Props) => {
  return (
    <button disabled={value} className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
