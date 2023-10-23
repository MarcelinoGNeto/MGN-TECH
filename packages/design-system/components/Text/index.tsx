import React from "react";
import "../../styles/style.scss";

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";  
  children: React.ReactNode;
}

export function Text({ tag, children, ...props }: TextProps) {
  const className = `StyledText ${tag}`;

  return (
    <p className={className} {...props}>
      {children}
    </p>
  )
}
