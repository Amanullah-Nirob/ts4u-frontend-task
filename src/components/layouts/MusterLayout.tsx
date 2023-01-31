import React from "react";
interface LayoutProps {
  children: React.ReactNode;
}

const MusterLayout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default MusterLayout;
