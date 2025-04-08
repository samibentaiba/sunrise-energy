import * as React from "react";

import { cn } from "@/libs/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full  rounded-md shadow-sm border-input bg-background px-3 py-2 text-base font-semibold text-primary tracking-wide ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{color:"black"}}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
