// src/components/navigation/TopAppBar.tsx
"use client";

import React from "react";
import { Search, Bell, Activity, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function TopAppBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search urban nodes..." 
            className="w-full bg-muted/50 border border-border rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Neural Engine Active</span>
        </div>

        <div className="h-4 w-px bg-border mx-2" />

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
        </Button>

        <div className="flex items-center gap-3 pl-2 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold">14:02</p>
            <p className="text-[9px] text-muted-foreground font-semibold uppercase">Nov 24, 2023</p>
          </div>
          <Activity className="w-5 h-5 text-primary" />
        </div>
      </div>
    </header>
  );
}
