import type { SectionsProps } from "@/utils/types";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from ".";
import { Button } from "@/components/ui/button";

import { Menu, X } from "lucide-react";

interface NavMenuProps {
  sections: SectionsProps;
}

export function NavMenu({ sections }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          className="flex items-center gap-2 md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </Button>
      </Dialog.Trigger>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[9999] bg-black/50"
              />
            </Dialog.Overlay>
            <Dialog.Content className="fixed right-0 top-0 z-[9999] h-screen w-[calc(100vw-40%)]">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(100%)" }}
                animate={{ opacity: 1, transform: "translateX(0%)" }}
                exit={{ opacity: 0, transform: "translateX(100%)" }}
                transition={{ duration: 0.5 }}
                className="h-full w-full bg-black/40 shadow-2xl shadow-violet-900/40"
              >
                <Dialog.Close asChild>
                  <Button className="absolute right-6 top-3">
                    <X size={24} />
                  </Button>
                </Dialog.Close>
                <ul className="flex h-full w-full flex-col items-center space-y-10 px-2.5 pb-10 pt-28 uppercase">
                  {Object.entries(sections).map(([key, value], i) => (
                    <li key={key}>
                      <NavLink
                        href={i === 0 ? "/" : `#${value.id}`}
                        className="text-xl font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {value.id}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}