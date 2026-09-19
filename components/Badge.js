const variants = {
  gray: "bg-stone-200/80 text-stone-700",
  copper: "bg-orange-100 text-orange-800",
  olive: "bg-lime-100 text-lime-800",
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
