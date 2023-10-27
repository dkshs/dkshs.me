import { ImageResponse } from "next/og";
import { z } from "zod";

import { data } from "@/data";

export const runtime = "edge";

const ogSchema = z.object({
  title: z.string().optional().default(data.name),
  description: z.string().optional().default(data.description),
  isProject: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

export async function GET(request: Request) {
  const fontData = await fetch(
    new URL("../../../public/fonts/Inter-SemiBold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

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
              } font-semibold tracking-tighter`}
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
            data: fontData,
            style: "normal",
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
