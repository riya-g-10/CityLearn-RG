// @ts-nocheck
"use client";

import React, { useEffect, useState } from "react";

const ACCURACY_DATA = [72.1, 74.5, 73.8, 76.2, 78.0, 77.4, 80.1, 81.9, 82.4, 83.7, 85.0, 84.6, 86.3, 87.1, 88.4, 89.0, 90.2, 91.5, 92.0, 91.8, 93.1, 93.9, 94.4, 94.8];
const KNOWLEDGE_DATA = [12, 18, 22, 28, 35, 41, 48, 57, 65, 70, 78, 84, 89, 95, 102, 108, 118, 127, 135, 142, 151, 162, 175, 188];

const NEURAL_PATTERNS = [
  { id: "4829", time: "2m ago", color: "primary", label: "THERMAL", confidence: 97, desc: "Cyclical thermal shift detected in residential sector A. Recalibrating HVAC load distribution across 14 nodes.", tags: ["Thermal", "High-Confidence"] },
  { id: "4830", time: "15m ago", color: "secondary", label: "MOBILITY", confidence: 88, desc: "New mobility cluster forming at Central Plaza. Adjusting traffic signal phase for western corridor.", tags: ["Mobility", "Unsupervised"] },
  { id: "4831", time: "42m ago", color: "amber", label: "ENERGY", confidence: 91, desc: "Energy efficiency anomaly resolved in Grid Node 7. Pattern locked to long-term memory with 91% fidelity.", tags: ["Energy", "Critical"] },
  { id: "4832", time: "1h ago", color: "primary", label: "TRANSIT", confidence: 84, desc: "Bus route 14C surge pattern matched to historical event EP-889. Proactive diversion initiated.", tags: ["Transit", "Predicted"] },
  { id: "4833", time: "2h ago", color: "secondary", label: "SAFETY", confidence: 79, desc: "Pedestrian density spike near commercial zone B detected. Emergency alert threshold not breached.", tags: ["Safety", "Low-Risk"] },
];

const CONSOLIDATION_HISTORY = [
  { id: "#EP-992", focus: "Quantum Traffic Flow", gain: "+142.4 GB", efficiency: "+18.2%", status: "Completed", time: "0.12ms", domain: "Mobility" },
  { id: "#EP-991", focus: "Hyper-Local Weather Patterns", gain: "+89.1 GB", efficiency: "+11.4%", status: "Completed", time: "0.15ms", domain: "Climate" },
  { id: "#EP-990", focus: "Human-AI Collaborative Flux", gain: "+214.7 GB", efficiency: "+24.1%", status: "Processing", time: "0.08ms", domain: "Hybrid" },
  { id: "#EP-989", focus: "Emergency Response Simulation", gain: "+67.3 GB", efficiency: "+8.9%", status: "Completed", time: "0.21ms", domain: "EMS" },
  { id: "#EP-988", focus: "Pedestrian Flow Optimization", gain: "+158.9 GB", efficiency: "+20.3%", status: "Completed", time: "0.09ms", domain: "Mobility" },
  { id: "#EP-987", focus: "Grid Voltage Stabilization", gain: "+44.2 GB", efficiency: "+5.7%", status: "Completed", time: "0.17ms", domain: "Energy" },
  { id: "#EP-986", focus: "Festival Crowd Prediction", gain: "+201.5 GB", efficiency: "+22.6%", status: "Queued", time: "—", domain: "Public Safety" },
];

function AccuracyTrendChart() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const w = 400, h = 140;
  const pad = { left: 32, right: 12, top: 16, bottom: 8 };
  const chartW = w - pad.left - pad.right;
  const chartH = h - pad.top - pad.bottom;
  const minVal = 70, maxVal = 100;

  const pts = ACCURACY_DATA.map((v, i) => ({
    x: pad.left + (i / (ACCURACY_DATA.length - 1)) * chartW,
    y: pad.top + chartH - ((v - minVal) / (maxVal - minVal)) * chartH,
    val: v,
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = linePath + ` L ${pts[pts.length - 1].x} ${pad.top + chartH} L ${pts[0].x} ${pad.top + chartH} Z`;

  const yLabels = [70, 80, 90, 100];

  return (
    <div className="relative w-full" style={{ height: 160 }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="accGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Y grid lines */}
        {yLabels.map(v => {
          const y = pad.top + chartH - ((v - minVal) / (maxVal - minVal)) * chartH;
          return (
            <g key={v}>
              <line x1={pad.left} x2={w - pad.right} y1={y} y2={y} stroke="#e2e8f0" strokeWidth="0.8" />
              <text x={pad.left - 4} y={y + 3} fontSize="6" fill="#94a3b8" textAnchor="end">{v}</text>
            </g>
          );
        })}
        {/* Area fill */}
        <path d={areaPath} fill="url(#accGrad)" />
        {/* Line */}
        <path d={linePath} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round" />
        {/* Hover dots */}
        {pts.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={hoverIdx === i ? 4 : 2}
            fill={hoverIdx === i ? "hsl(var(--primary))" : "white"}
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            style={{ cursor: "pointer", transition: "r 0.1s" }}
            onMouseEnter={() => setHoverIdx(i)}
            onMouseLeave={() => setHoverIdx(null)}
          />
        ))}
        {/* Hover tooltip */}
        {hoverIdx !== null && (() => {
          const p = pts[hoverIdx];
          const tx = Math.min(p.x, w - 50);
          return (
            <g>
              <rect x={tx - 2} y={p.y - 20} width={40} height={14} rx={3} fill="hsl(var(--primary))" opacity="0.9" />
              <text x={tx + 18} y={p.y - 10} fontSize="7" fill="white" textAnchor="middle" fontWeight="bold">{p.val}%</text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}

function KnowledgeGrowthChart() {
  const maxVal = Math.max(...KNOWLEDGE_DATA);
  return (
    <div className="flex-1 relative flex items-end justify-between gap-1 px-1 mt-4" style={{ minHeight: 140 }}>
      {KNOWLEDGE_DATA.map((v, i) => {
        const heightPct = Math.round((v / maxVal) * 92);
        const isLatest = i === KNOWLEDGE_DATA.length - 1;
        return (
          <div key={i} className="relative flex-1 flex flex-col items-center justify-end group" style={{ minHeight: 140 }}>
            <div
              className={`w-full rounded-t transition-all duration-300 ${isLatest ? "bg-secondary shadow-sm" : "bg-secondary/30 hover:bg-secondary/60"}`}
              style={{ height: `${heightPct}%` }}
              title={`${v} TB processed`}
            />
            {isLatest && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-white text-[7px] font-bold px-1.5 py-0.5 rounded whitespace-nowrap">
                {v}T
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Page() {
  const [score, setScore] = useState(82.4);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchEpoch, setSearchEpoch] = useState("");
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [expandedPattern, setExpandedPattern] = useState<string | null>(null);

  useEffect(() => {
    let start = 82.4;
    const end = 94.8;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      setScore(parseFloat((start + eased * (end - start)).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    const t = setTimeout(() => requestAnimationFrame(animate), 800);
    return () => clearTimeout(t);
  }, []);

  const filteredHistory = CONSOLIDATION_HISTORY
    .filter(r => filterStatus === "All" || r.status === filterStatus)
    .filter(r => r.id.toLowerCase().includes(searchEpoch.toLowerCase()) || r.focus.toLowerCase().includes(searchEpoch.toLowerCase()))
    .sort((a, b) => {
      if (!sortCol) return 0;
      const va = a[sortCol] || "";
      const vb = b[sortCol] || "";
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
    });

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortAsc(!sortAsc);
    else { setSortCol(col); setSortAsc(true); }
  };

  const statusColor = (s: string) => {
    if (s === "Completed") return "bg-green-50 border-green-200 text-green-700";
    if (s === "Processing") return "bg-amber-50 border-amber-200 text-amber-700 animate-pulse";
    return "bg-slate-50 border-slate-200 text-slate-500";
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent);
          animation: scan 4s linear infinite;
        }
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }
        .pattern-card { transition: all 0.2s ease; }
        .pattern-card:hover { transform: translateX(2px); }
        .sort-btn { cursor: pointer; user-select: none; }
        .sort-btn:hover { color: hsl(var(--primary)); }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up { animation: fadeInUp 0.4s ease both; }
      ` }} />

      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="page-heading text-foreground">Learning Loop</h1>
          <p className="text-muted-foreground text-sm max-w-xl">
            Monitor the iterative optimization of CityLearn's neural weights and memory consolidation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Institutional Memory Core (8 Columns) */}
          <section className="col-span-12 lg:col-span-8 bg-white border border-border shadow-sm rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[480px]">
            <div className="scan-line opacity-20"></div>
            
            <div className="relative z-10 space-y-1">
              <span className="px-3.5 py-1 bg-primary/10 text-[10px] font-bold text-primary rounded-full tracking-wider uppercase">
                Institutional Memory Core
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2">Evolutionary Index</h3>
            </div>

            {/* Score Display */}
            <div className="flex-grow flex flex-col items-center justify-center py-8 relative">
              <div className="text-center">
                <span className="text-8xl md:text-[120px] font-display font-extrabold leading-none bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                  {score}
                </span>
                <div className="flex items-center justify-center gap-2 mt-4 text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 w-fit mx-auto">
                  <span className="material-symbols-outlined text-base">trending_up</span>
                  <span className="text-xs font-bold font-sans tracking-wide">+12.4% vs last epoch</span>
                </div>
              </div>
              {/* Mini sparkline under score */}
              <div className="mt-6 w-48 h-8 opacity-40">
                <svg width="100%" height="100%" viewBox="0 0 100 30">
                  <polyline points="0,28 12,22 24,24 36,18 48,15 60,10 72,8 84,5 100,2" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border relative z-10">
              <div>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Synaptic Load</p>
                <p className="text-lg font-bold text-foreground font-mono">4.2 PB/s</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Active Nodes</p>
                <p className="text-lg font-bold text-foreground font-mono">8.1M</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Retention Rate</p>
                <p className="text-lg font-bold text-foreground font-mono">99.98%</p>
              </div>
            </div>
          </section>

          {/* Outcome Validation & Error Circular Chart (4 Columns) */}
          <section className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            
            {/* Outcome Validation Card */}
            <div className="bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Outcome Validation</h3>
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-border rounded-xl space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">PREDICTED</span>
                    <span className="text-primary font-mono font-bold">882.4 GWh</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: "82%" }}></div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-border rounded-xl space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">ACTUAL</span>
                    <span className="text-secondary font-mono font-bold">879.1 GWh</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full transition-all duration-700" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200 flex items-center justify-between">
                <span className="text-green-800 text-xs font-bold">Delta Accuracy</span>
                <span className="font-mono text-sm font-bold text-green-700">99.63%</span>
              </div>
            </div>

            {/* Mean Error Chart */}
            <div className="bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center space-y-4">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Mean Error %</h3>
              
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 112 112">
                  <circle cx="56" cy="56" fill="transparent" r="48" stroke="#f1f5f9" strokeWidth="8"></circle>
                  <circle
                    cx="56" cy="56" fill="transparent" r="48"
                    stroke="hsl(0 84% 60%)"
                    strokeWidth="8"
                    strokeDasharray="301.6"
                    strokeDashoffset="293.4"
                    strokeLinecap="round"
                  ></circle>
                  {/* Secondary ring */}
                  <circle cx="56" cy="56" fill="transparent" r="38" stroke="#fef2f2" strokeWidth="4"></circle>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-mono text-2xl font-bold text-red-600">2.7%</span>
                  <span className="text-[8px] text-muted-foreground uppercase">error</span>
                </div>
              </div>
              
              <div className="w-full space-y-1.5">
                <div className="flex justify-between text-[9px] font-semibold text-muted-foreground">
                  <span>Sector 4 Drift</span>
                  <span className="text-red-500">+0.3% ↑</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: "27%" }}></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground px-2">
                Recalibration scheduled at next epoch cycle.
              </p>
            </div>
            
          </section>

          {/* Charts Row */}
          <section className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Accuracy Trend */}
            <div className="bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Accuracy Trend (24h)</h3>
                <span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">+12.4%</span>
              </div>
              <AccuracyTrendChart />
              <div className="flex justify-between mt-2 text-[9px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
                <span>00:00</span>
                <span>08:00</span>
                <span>16:00</span>
                <span>NOW</span>
              </div>
            </div>

            {/* Knowledge Growth */}
            <div className="bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Knowledge Growth</h3>
                <span className="text-[9px] font-mono font-bold text-secondary">24 epochs</span>
              </div>
              <KnowledgeGrowthChart />
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">Cumulative Tokens</span>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                  <span className="font-mono text-sm font-bold text-secondary">1.88T</span>
                </div>
              </div>
            </div>

          </section>

          {/* Neural Pattern Feed (4 Columns) */}
          <section className="col-span-12 lg:col-span-4 bg-white border border-border shadow-sm rounded-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Neural Pattern Feed</h3>
              <span className="px-2 py-0.5 bg-red-50 border border-red-200 text-red-700 text-[9px] font-bold rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block"></span>
                LIVE
              </span>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto pr-1 max-h-[380px]">
              {NEURAL_PATTERNS.map((p, idx) => {
                const borderCol = p.color === "primary" ? "border-primary" : p.color === "secondary" ? "border-secondary" : "border-amber-500";
                const labelCol = p.color === "primary" ? "text-primary" : p.color === "secondary" ? "text-secondary" : "text-amber-700";
                const confBg = p.confidence >= 90 ? "bg-green-50 text-green-700 border-green-200" : p.confidence >= 80 ? "bg-blue-50 text-blue-700 border-blue-200" : "bg-slate-50 text-slate-600 border-slate-200";
                const isExpanded = expandedPattern === p.id;
                return (
                  <div
                    key={p.id}
                    className={`pattern-card p-3 bg-slate-50 border-l-4 ${borderCol} rounded-r-lg cursor-pointer fade-in-up`}
                    style={{ animationDelay: `${idx * 80}ms` }}
                    onClick={() => setExpandedPattern(isExpanded ? null : p.id)}
                  >
                    <div className="flex justify-between items-start mb-1.5">
                      <span className={`text-[9px] font-bold tracking-wide ${labelCol}`}>PATTERN #{p.id} · {p.label}</span>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] px-1.5 py-0.5 border rounded font-bold ${confBg}`}>{p.confidence}%</span>
                        <span className="text-[9px] text-muted-foreground font-mono">{p.time}</span>
                      </div>
                    </div>
                    <p className={`text-xs text-foreground leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                      {p.desc}
                    </p>
                    {isExpanded && (
                      <div className="mt-2 flex gap-1.5 flex-wrap">
                        {p.tags.map(t => (
                          <span key={t} className="text-[9px] px-1.5 py-0.5 bg-white border border-border rounded text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-5 py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-base">play_circle</span>
              Initiate Global Training Loop
            </button>
          </section>

          {/* Memory Consolidation History (Full width) */}
          <section className="col-span-12 bg-white border border-border shadow-sm rounded-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">Memory Consolidation History</h3>
                <p className="text-muted-foreground text-xs mt-0.5">Log of neural network structural optimizations across all epoch cycles.</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {/* Status filter */}
                {["All", "Completed", "Processing", "Queued"].map(s => (
                  <button
                    key={s}
                    onClick={() => setFilterStatus(s)}
                    className={`px-3 py-1.5 border text-xs font-semibold rounded-lg transition-all ${filterStatus === s ? "bg-primary text-white border-primary" : "bg-transparent border-border hover:bg-slate-50 text-foreground"}`}
                  >{s}</button>
                ))}
                <button className="px-3 py-1.5 bg-transparent border border-border hover:bg-slate-50 text-xs font-semibold rounded-lg text-foreground transition-all flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Export
                </button>
              </div>
            </div>

            {/* Search bar */}
            <div className="relative mb-5">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">search</span>
              <input
                value={searchEpoch}
                onChange={e => setSearchEpoch(e.target.value)}
                placeholder="Search epoch ID or focus area..."
                className="w-full pl-9 pr-4 py-2.5 border border-border rounded-xl text-xs text-foreground focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-border text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                    <th className="pb-3 sort-btn" onClick={() => toggleSort("id")}>
                      Epoch ID {sortCol === "id" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th className="pb-3 sort-btn" onClick={() => toggleSort("focus")}>
                      Focus Area {sortCol === "focus" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th className="pb-3">Domain</th>
                    <th className="pb-3 sort-btn" onClick={() => toggleSort("gain")}>
                      Knowledge Gain {sortCol === "gain" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th className="pb-3">Δ Efficiency</th>
                    <th className="pb-3 sort-btn" onClick={() => toggleSort("status")}>
                      Status {sortCol === "status" ? (sortAsc ? "↑" : "↓") : ""}
                    </th>
                    <th className="pb-3 text-right">Optimization</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-foreground divide-y divide-slate-100">
                  {filteredHistory.map(row => (
                    <tr key={row.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-3 font-mono font-semibold text-primary">{row.id}</td>
                      <td className="py-3">{row.focus}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[9px] font-bold">{row.domain}</span>
                      </td>
                      <td className="py-3 text-secondary font-bold">{row.gain}</td>
                      <td className="py-3">
                        <span className="text-green-600 font-semibold font-mono">{row.efficiency}</span>
                      </td>
                      <td className="py-3">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-medium ${statusColor(row.status)}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 text-right font-mono text-muted-foreground">{row.time}</td>
                    </tr>
                  ))}
                  {filteredHistory.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-xs text-muted-foreground">No epochs match your filters.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Showing {filteredHistory.length} of {CONSOLIDATION_HISTORY.length} epoch records</span>
              <span className="font-mono">Last sync: Today at {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
          </section>

        </div>

      </div>
    </>
  );
}
