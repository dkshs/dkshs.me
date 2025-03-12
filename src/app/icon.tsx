/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable react/no-unknown-property */
import { ImageResponse } from "next/og";

export const size = { width: 52, height: 52 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
        DK
      </div>
    ),
    { ...size },
  );
}
