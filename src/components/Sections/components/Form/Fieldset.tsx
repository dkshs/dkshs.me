import { forwardRef } from "react";
import { type HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { homeAnimation } from "../../animationVariants";

interface FieldsetProps extends HTMLMotionProps<"fieldset"> {}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.fieldset
        className={cn("mb-6 flex flex-col space-y-2.5", className)}
        variants={homeAnimation.item}
        transition={{ duration: 0.5 }}
        ref={ref}
        {...props}
      />
    );
  },
);
Fieldset.displayName = "Fieldset";
