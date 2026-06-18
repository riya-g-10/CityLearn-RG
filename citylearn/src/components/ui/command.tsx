"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CommandContextType {
  search: string;
  setSearch: (search: string) => void;
  itemCount: number;
  registerItem: (id: string, matches: boolean) => () => void;
}

const CommandContext = React.createContext<CommandContextType | null>(null);

export function Command({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [search, setSearch] = React.useState("");
  const [registeredItems, setRegisteredItems] = React.useState<Record<string, boolean>>({});

  const registerItem = React.useCallback((id: string, matches: boolean) => {
    setRegisteredItems((prev) => {
      if (prev[id] === matches) return prev;
      return { ...prev, [id]: matches };
    });
    return () => {
      setRegisteredItems((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    };
  }, []);

  const visibleCount = React.useMemo(() => {
    return Object.values(registeredItems).filter(Boolean).length;
  }, [registeredItems]);

  return (
    <CommandContext.Provider value={{ search, setSearch, itemCount: visibleCount, registerItem }}>
      <div className={cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-foreground", className)}>
        {children}
      </div>
    </CommandContext.Provider>
  );
}

export function CommandInput({
  className,
  placeholder,
  value,
  onValueChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  onValueChange?: (value: string) => void;
}) {
  const context = React.useContext(CommandContext);
  const search = context ? context.search : "";
  const setSearch = context ? context.setSearch : () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    if (onValueChange) onValueChange(val);
  };

  return (
    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
      <span className="material-symbols-outlined text-muted-foreground mr-2 text-base">search</span>
      <input
        className={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder={placeholder}
        value={value !== undefined ? value : search}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}

export function CommandList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-h-[200px] overflow-y-auto overflow-x-hidden p-1", className)}>
      {children}
    </div>
  );
}

export function CommandEmpty({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(CommandContext);
  if (!context) return null;

  if (context.itemCount > 0) return null;

  return (
    <div className={cn("py-6 text-center text-sm text-muted-foreground", className)}>
      {children}
    </div>
  );
}

export function CommandGroup({
  children,
  heading,
  className,
}: {
  children: React.ReactNode;
  heading?: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden p-1 text-foreground", className)}>
      {heading && (
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {heading}
        </div>
      )}
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

export function CommandItem({
  children,
  className,
  onSelect,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  onSelect?: (value: string) => void;
  value?: string;
}) {
  const context = React.useContext(CommandContext);
  const search = context ? context.search : "";
  const registerItem = context ? context.registerItem : () => () => {};

  const id = React.useId();
  const itemValue = value || (typeof children === "string" ? children : "");
  const isVisible = !search || itemValue.toLowerCase().includes(search.toLowerCase());

  React.useEffect(() => {
    const unregister = registerItem(id, isVisible);
    return unregister;
  }, [id, isVisible, registerItem]);

  if (!isVisible) return null;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect?.(itemValue);
      }}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-muted hover:text-foreground transition-colors font-sans",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
