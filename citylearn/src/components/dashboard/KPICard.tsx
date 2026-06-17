// src/components/dashboard/KPICard.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  color?: "primary" | "secondary" | "success" | "warning" | "destructive";
}

export default function KPICard({ title, value, change, isPositive, icon: Icon, color = "primary" }: KPICardProps) {
  const colorMap = {
    primary: "text-primary bg-primary/10",
    secondary: "text-purple-500 bg-purple-500/10",
    success: "text-green-500 bg-green-500/10",
    warning: "text-amber-500 bg-amber-500/10",
    destructive: "text-red-500 bg-red-500/10",
  };

  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className={cn("p-2 rounded-lg", colorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <span className={cn(
            "text-[10px] font-bold px-2 py-0.5 rounded-full",
            isPositive ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
          )}>
            {change}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold tracking-tight mt-1">{value}</h3>
      </div>
    </div>
  );
}
