import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionHeading = ({ children }: Props) => {
  return <h2 className="text-3xl font-medium mb-8">{children}</h2>;
};

export default SectionHeading;