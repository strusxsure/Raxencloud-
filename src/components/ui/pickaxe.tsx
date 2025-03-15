import React from "react";
import { cn } from "@/lib/utils";

interface PickaxeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const Pickaxe = ({ size = 24, className, ...props }: PickaxeProps) => {
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
      className={cn("lucide lucide-pickaxe", className)}
      {...props}
    >
      <path d="M14 10l5.196-5.196a2 2 0 0 0 0-2.828l-1.172-1.172a2 2 0 0 0-2.828 0L10 6" />
      <path d="m10 14-5.196 5.196a2 2 0 0 0 0 2.828l1.172 1.172a2 2 0 0 0 2.828 0L14 18" />
      <path d="m6 18 8-8" />
    </svg>
  );
};

export default Pickaxe;
