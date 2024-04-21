import type { MouseEvent, MouseEventHandler } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createRipple(
  event: MouseEvent<HTMLButtonElement>,
  mouseEvent: MouseEventHandler | undefined,
) {
  const button = event.currentTarget;
  const { height, width, top, left } = button.getBoundingClientRect();
  const { clientX, clientY } = event;

  const x = clientX - left;
  const y = clientY - top;

  const rippleSize = Math.max(height, width, 50);

  const positionTop = clientX
    ? y - rippleSize / 2
    : rippleSize / 2 - height / 2;
  const positionLeft = clientY
    ? x - rippleSize / 2
    : width / 2 - rippleSize / 2;

  const span = document.createElement("span");
  span.classList.add("ripple");
  span.style.cssText = `
      transform: scale(0);
      top: ${positionTop}px;
      left: ${positionLeft}px;
      width: ${rippleSize}px;
      height: ${rippleSize}px;
    `;
  button.append(span);

  span.addEventListener("animationend", () => {
    span.remove();
  });

  if (mouseEvent) {
    mouseEvent(event);
  }
}
