import React from "react";

interface Props {
  children?: React.ReactNode;
}

const UserProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default UserProvider;
