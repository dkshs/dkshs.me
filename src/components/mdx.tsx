import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import { Link } from "./ui/link";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

import { Hash } from "lucide-react";

function HeadingLinks({ id }: { id: string }) {
  return (
    <NextLink
      href={`#${id}`}
      aria-label="Link to section"
      className="absolute -ml-7 opacity-0 duration-200 focus-visible:opacity-70 group-hover:opacity-70"
    >
      <Hash />
    </NextLink>
  );
}

function AnchorLink({
  href,
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInside = href ? href.startsWith("#") || href.startsWith("/") : false;

  return (
    <Link
      href={href}
      asChild={!!isInside}
      className={cn("no-underline", className)}
      {...props}
    >
      {isInside ? <NextLink href={href!}>{children}</NextLink> : children}
    </Link>
  );
}

export const components = {
  h1: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "group relative mt-2 flex scroll-m-20 items-center text-4xl font-bold tracking-tight",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h1>
  ),
  h2: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "group mt-10 flex scroll-m-20 items-center border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h2>
  ),
  h3: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "group mt-8 flex scroll-m-20 items-center text-2xl font-semibold tracking-tight",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h3>
  ),
  h4: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "group mt-8 flex scroll-m-20 items-center text-xl font-semibold tracking-tight",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h4>
  ),
  h5: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "group mt-8 flex scroll-m-20 items-center text-lg font-semibold tracking-tight",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h5>
  ),
  h6: ({ className, id, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "group mt-8 flex scroll-m-20 items-center text-base font-semibold tracking-tight",
        className,
      )}
      id={id}
      {...props}
    >
      {id && <HeadingLinks id={id} />}
      {props.children}
    </h6>
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <AnchorLink {...props} />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 list-disc pl-8", className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 list-decimal pl-8", className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("my-1 marker:text-zinc-200", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-zinc-600 pl-3 font-normal text-zinc-400 [&>*]:text-zinc-400",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn(
        "my-0 rounded-md border border-zinc-800 shadow-xl shadow-violet-950/10",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-900/80 px-0 py-4",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        "relative rounded bg-zinc-400/20 px-1.5 py-1 font-mono",
        className,
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
