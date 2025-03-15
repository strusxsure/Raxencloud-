import React from "react";
import { cn } from "@/lib/utils";

interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const Check = ({ size = 24, className, ...props }: CheckProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-check", className)}
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default Check;
