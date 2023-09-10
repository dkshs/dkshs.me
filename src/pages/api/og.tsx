import type { NextRequest } from "next/server";

import { ImageResponse } from "@vercel/og";
import { z } from "zod";

import { data } from "@/data";

export const config = {
  runtime: "edge",
};

const mediumFontI = fetch(
  new URL("../../../public/fonts/Inter-Medium.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

const boldFontI = fetch(
  new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

const ogSchema = z.object({
  title: z.string().optional().default(data.name),
  description: z.string().optional().default(data.description),
  isProject: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

export default async function handler(request: NextRequest) {
  const [mediumFont, boldFont] = await Promise.all([mediumFontI, boldFontI]);

  try {
    const { searchParams } = new URL(request.url);
    const params = Object.fromEntries(searchParams);
    const { title, description, isProject } = ogSchema.parse(params);

    return new ImageResponse(
      (
        <div
          tw="flex w-full h-full flex-col items-center justify-center text-center text-white bg-[#270B5B]"
          style={{
            backgroundImage: "radial-gradient(circle, #270B5B 0%, #000000 95%)",
          }}
        >
          <div
            tw={`flex flex-col ${
              isProject ? "pt-52" : "pt-40"
            } items-center w-full h-full text-white`}
          >
            <h1
              tw={`${
                isProject ? "text-8xl" : "text-[164px]"
              } font-bold tracking-tighter`}
            >
              {title}
            </h1>
            <div tw="max-w-screen-xl mx-auto flex">
              <p
                tw={`${
                  isProject ? "text-4xl" : "text-5xl"
                } text-center font-medium tracking-tight`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1686,
        height: 882,
        fonts: [
          {
            name: "Inter",
            data: mediumFont,
            style: "normal",
            weight: 500,
          },
          {
            name: "Inter",
            data: boldFont,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(`${err.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
