interface FloatingTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: FloatingTextareaProps) {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={4}
        className="peer w-full rounded-md border border-[#4CAF50] bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4CAF50]/30 resize-none"
      />

      <label
        className="
          pointer-events-none absolute left-4 top-4
          bg-[#4CAF50]/20 px-3 py-1 text-xs text-[#2e7d32]
          rounded-pill transition-all
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-muted-foreground
          peer-focus:top-[-10px]
          peer-focus:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}
