const variants = {
  gray: "bg-zinc-100 text-zinc-600",
  indigo: "bg-indigo-100 text-indigo-700",
  green: "bg-emerald-100 text-emerald-700",
  red: "bg-red-100 text-red-700",
};

export default function Badge({ label, color = "gray", className = "" }) {
  const styles = variants[color] ?? variants.gray;

  return (
    <span
      className={`${styles} inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-mono font-medium uppercase tracking-wider ${className}`}
    >
      {label}
    </span>
  );
}
