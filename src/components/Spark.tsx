export default function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`spark ${className}`}
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        d="M12 1.5c.3 4.2 1.4 7.1 3.3 8.9 1.9 1.8 4.8 2.7 8.7 2.8-4.1.3-6.9 1.4-8.7 3.3C13.5 18.3 12.4 21.3 12 22.5c-.4-4.2-1.5-7.1-3.3-8.9-1.9-1.8-4.8-2.7-8.7-2.8 4.1-.3 6.9-1.4 8.7-3.3C10.5 5.7 11.6 2.7 12 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}
