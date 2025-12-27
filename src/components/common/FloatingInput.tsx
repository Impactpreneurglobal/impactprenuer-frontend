interface FloatingInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
}: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full rounded-md border border-[#4CAF50] bg-transparent px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4CAF50]/30"
      />

      <label
        className="
          pointer-events-none absolute left-4 top-1/2 -translate-y-1/2
          bg-[#4CAF50]/20 px-3 py-1 text-xs text-[#2e7d32]
          rounded-pill transition-all
          peer-placeholder-shown:top-1/2
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
