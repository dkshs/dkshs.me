type AboutParagraphProps = {
  text: string;
  i: number;
  contentLength: number;
};

export function AboutParagraph({
  text,
  i,
  contentLength,
}: AboutParagraphProps) {
  const isLast = contentLength - 1 === i;

  return (
    <p
      className={`${
        isLast ? "mb-10" : "mb-2.5"
      } max-w-xl text-base leading-loose text-gray-200`}
    >
      {text}
    </p>
  );
}
