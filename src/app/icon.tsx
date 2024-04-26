/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw="flex h-full w-full items-center justify-center rounded-full bg-black" />
    ),
    { ...size },
  );
}
