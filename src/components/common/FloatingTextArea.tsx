import React from 'react';

interface FloatingTextAreaProps {
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
}: FloatingTextAreaProps) {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={4}
        required
        className="peer w-full rounded-xl border border-gray-200 bg-transparent px-4 py-3.5 text-sm outline-none transition-all focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/10 resize-none"
      />

      <label
        className="
          pointer-events-none absolute left-4 top-5 text-sm text-gray-400 transition-all duration-200
          peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
          peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#2e7d32] peer-focus:bg-white peer-focus:px-2
        "
        style={{
          top: value ? '0px' : '',
          backgroundColor: value ? '#ffffff' : '',
          paddingLeft: value ? '8px' : '',
          paddingRight: value ? '8px' : '',
          fontSize: value ? '12px' : '',
          color: value ? '#2e7d32' : ''
        }}
      >
        {label}
      </label>
    </div>
  );
}