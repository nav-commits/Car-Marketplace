"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={clsx("relative w-48", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full rounded-md px-3 py-2 text-sm"
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
