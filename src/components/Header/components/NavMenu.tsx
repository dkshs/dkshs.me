"use client";

import type { SectionsTypes } from "@/utils/types";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from ".";
import { Button } from "@/components/ui/button";

import { Menu, X } from "lucide-react";

interface NavMenuProps {
  sections: SectionsTypes;
}

export function NavMenu({ sections }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button
          type="button"
          className="mr-2 flex items-center gap-2 p-2 md:hidden"
          size="icon"
          variant="ghost"
          radius="full"
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
                className="fixed inset-0 z-[9999] bg-background/50"
              />
            </Dialog.Overlay>
            <Dialog.Content className="fixed right-0 top-0 z-[9999] h-screen w-[calc(100vw-40%)]">
              <motion.div
                initial={{ opacity: 0, transform: "translateX(100%)" }}
                animate={{
                  opacity: 1,
                  transform: "translateX(0%)",
                  backgroundColor: "black",
                }}
                exit={{ opacity: 0, transform: "translateX(100%)" }}
                transition={{ duration: 0.5 }}
                className="h-full w-full bg-primary/20 bg-gradient-to-b from-primary/30 to-background/60 shadow-2xl shadow-background"
              >
                <Dialog.Close asChild>
                  <Button
                    type="button"
                    className="absolute right-7 top-3 sm:right-8"
                    size="icon"
                    variant="ghost"
                    radius="full"
                  >
                    <X size={24} />
                  </Button>
                </Dialog.Close>
                <ul className="flex h-full w-full flex-col items-center space-y-10 px-2.5 pb-10 pt-28 uppercase">
                  {Object.entries(sections).map(([key, value], i) => (
                    <li key={key}>
                      <NavLink
                        href={i === 0 ? "/" : `/#${value.id}`}
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
