export function TeamMemberPlaceholder({
  className,
  variant = "avatar",
}: {
  className: string;
  variant?: "avatar" | "mark";
}) {
  return (
    <span aria-hidden="true" className={className} data-variant={variant}>
      {variant === "avatar" ? (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 240 240">
          <circle cx="120" cy="79" fill="currentColor" r="45" />
          <path
            d="M34 240v-20c0-52 37-89 86-89s86 37 86 89v20H34Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" focusable="false" viewBox="0 0 64 64">
          <path
            d="M32 7 53 54c-8-2-14 0-18 5h-6c-4-5-10-7-18-5L32 7Zm0 12L19 48c5 0 10 2 13 6 3-4 8-6 13-6L32 19Zm0 10 7 17c-3 1-5 2-7 5-2-3-4-4-7-5l7-17Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      )}
    </span>
  );
}
