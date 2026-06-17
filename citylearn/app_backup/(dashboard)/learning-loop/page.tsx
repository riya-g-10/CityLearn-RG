<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn | Learning Loop</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-tint": "#47d6ff",
                    "on-secondary-fixed-variant": "#6e208c",
                    "on-surface": "#e5e1e4",
                    "on-tertiary": "#00391f",
                    "surface-dim": "#131315",
                    "surface-container-low": "#1c1b1d",
                    "primary-fixed": "#b6ebff",
                    "secondary": "#edb1ff",
                    "primary": "#a5e7ff",
                    "secondary-container": "#6e208c",
                    "outline-variant": "#3c494e",
                    "surface-container": "#201f21",
                    "on-error": "#690005",
                    "inverse-primary": "#00677f",
                    "background": "#131315",
                    "tertiary-fixed-dim": "#00e38b",
                    "surface": "#131315",
                    "outline": "#859399",
                    "primary-container": "#00d2ff",
                    "surface-bright": "#39393b",
                    "on-background": "#e5e1e4",
                    "on-primary-fixed-variant": "#004e60",
                    "on-secondary": "#520070",
                    "on-tertiary-fixed": "#002110",
                    "tertiary-container": "#00dd87",
                    "on-primary": "#003543",
                    "secondary-fixed": "#f9d8ff",
                    "on-secondary-container": "#e498ff",
                    "error-container": "#93000a",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#edb1ff",
                    "on-secondary-fixed": "#320046",
                    "on-surface-variant": "#bbc9cf",
                    "tertiary": "#00fd9b",
                    "on-tertiary-fixed-variant": "#00522f",
                    "on-tertiary-container": "#005b35",
                    "surface-container-high": "#2a2a2c",
                    "tertiary-fixed": "#56ffa8",
                    "error": "#ffb4ab",
                    "surface-variant": "#353437",
                    "inverse-on-surface": "#313032",
                    "on-primary-fixed": "#001f28",
                    "on-primary-container": "#00566a",
                    "surface-container-highest": "#353437",
                    "inverse-surface": "#e5e1e4",
                    "primary-fixed-dim": "#47d6ff",
                    "surface-container-lowest": "#0e0e10"
            },
            "borderRadius": {
                    "DEFAULT": "0.125rem",
                    "lg": "0.25rem",
                    "xl": "0.5rem",
                    "full": "0.75rem"
            },
            "spacing": {
                    "margin-mobile": "16px",
                    "unit": "4px",
                    "gutter": "16px",
                    "container-max": "1440px",
                    "margin-desktop": "32px"
            },
            "fontFamily": {
                    "body-md": ["'Nunito Sans'"],
                    "label-caps": ["Space Mono"],
                    "headline-lg": ["'Nunito Sans'"],
                    "headline-lg-mobile": ["'Nunito Sans'"],
                    "headline-md": ["'Nunito Sans'"],
                    "body-lg": ["'Nunito Sans'"],
                    "data-mono": ["Space Mono"],
                    "headline-xl": ["'Nunito Sans'"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "label-caps": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "700"}],
                    "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                    "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "data-mono": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #0a0a0c;
            color: #e5e1e4;
            overflow-x: hidden;
            font-family: 'Nunito Sans', sans-serif;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
        }
        .glass-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            pointer-events: none;
        }
        .glow-border:hover {
            border-color: #47d6ff;
            box-shadow: 0 0 20px rgba(71, 214, 255, 0.2);
        }
        .neural-pulse {
            animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }
        .scan-line {
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #47d6ff, transparent);
            animation: scan 3s linear infinite;
        }
        @keyframes scan {
            0% { top: -10%; }
            100% { top: 110%; }
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="flex min-h-screen bg-background">
<!-- SideNavBar Component -->
<aside class="fixed left-0 h-screen w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl z-50 hidden md:flex flex-col py-spacing-margin-desktop">
<div class="px-6 mb-10 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary">hub</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary">CityLearn</h1>
<p class="font-label-caps text-[10px] text-on-surface-variant/70 tracking-widest uppercase">Neural Intelligence</p>
</div>
</div>
<nav class="flex-1 px-4 space-y-2 overflow-y-auto">
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                Dashboard
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
                Analysis
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">compare_arrows</span>
                Similar Events
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">online_prediction</span>
                Predictions
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">recommend</span>
                Recommendations
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">precision_manufacturing</span>
                Simulator
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">replay</span>
                Replay
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">hub</span>
                Knowledge Graph
            </a>
<a class="flex items-center gap-4 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-primary/5 font-body-md transition-all active:scale-95 duration-200" href="#">
<span class="material-symbols-outlined">psychology</span>
                Learning Loop
            </a>
</nav>
<div class="mt-auto px-6 pt-6 border-t border-white/5">
<div class="flex items-center gap-3 glass-card p-3 rounded-xl">
<img alt="Administrator Profile" class="w-10 h-10 rounded-full object-cover border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7itW2c1vy52N_aL_xbjHQvPTozKgkn0O2U7PDZ8HPm1oKQExgguuxRAD9lwcf61lYLR692pZSwaVzAgZR-9JRzUB-9hHLeYZtaPrhV6r3yxzTFc1oLUOzOiedAtQvawoW2zCJhTjcvk99dyt3pIwQT1uTR-ZqgNRzmc8m3zmJvG3zB3Gzce9-Vu79cmz3I7N8LWPuUFB0VLT4DWRwjcZ3CB6E28zUA04i6UXxHH679D-KQg72YKDi15b061ZrcCuntbIOQz7ryCQ"/>
<div class="overflow-hidden">
<p class="text-on-surface text-sm font-bold truncate">Dr. Aris Thorne</p>
<p class="text-on-surface-variant text-xs truncate">System Architect</p>
</div>
</div>
</div>
</aside>
<!-- Main Canvas -->
<main class="flex-1 md:ml-64 relative z-10 flex flex-col min-h-screen">
<!-- TopAppBar Component -->
<header class="sticky top-0 z-50 w-full h-16 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center px-spacing-margin-desktop">
<div class="flex items-center gap-6">
<div class="relative group">
<input class="bg-white/5 border border-white/10 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search neural patterns..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-xl">search</span>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary neural-pulse"></span>
<span class="font-label-caps text-[10px] text-tertiary">NEURAL ENGINE ACTIVE</span>
</div>
<div class="flex gap-4">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">sensors</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
</div>
</div>
</header>
<!-- Page Content -->
<div class="p-spacing-margin-desktop space-y-gutter">
<div class="grid grid-cols-12 gap-gutter">
<!-- Institutional Memory Score: Central Growth Indicator -->
<section class="col-span-12 lg:col-span-8 glass-card rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[480px]">
<div class="scan-line"></div>
<div class="relative z-10">
<h2 class="font-label-caps text-label-caps text-primary uppercase mb-2">Institutional Memory Core</h2>
<h3 class="font-headline-lg text-headline-lg mb-8">Evolutionary Index</h3>
</div>
<!-- Animated Growth Indicator Container -->
<div class="flex-1 flex flex-col items-center justify-center relative py-12">
<!-- Score Display -->
<div class="relative z-20 text-center">
<span class="font-headline-xl text-[120px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-surface-tint">94.8</span>
<div class="flex items-center justify-center gap-2 mt-4">
<span class="material-symbols-outlined text-tertiary">trending_up</span>
<span class="font-data-mono text-tertiary text-lg">+12.4% vs last epoch</span>
</div>
</div>
</div>
<div class="grid grid-cols-3 gap-6 relative z-10 pt-8 border-t border-white/5">
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">SYNAPTIC LOAD</p>
<p class="font-data-mono text-xl text-on-surface">4.2 PB/s</p>
</div>
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">ACTIVE NODES</p>
<p class="font-data-mono text-xl text-on-surface">8.1M</p>
</div>
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">RETENTION RATE</p>
<p class="font-data-mono text-xl text-on-surface">99.98%</p>
</div>
</div>
</section>
<!-- Metrics: Predicted vs Actual & Error % -->
<section class="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div class="flex-1 glass-card rounded-2xl p-6 glow-border transition-all">
<div class="flex justify-between items-start mb-6">
<h3 class="font-label-caps text-label-caps text-on-surface-variant">Outcome Validation</h3>
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">verified</span>
</div>
<div class="space-y-6">
<div class="relative h-24 flex items-center px-4 bg-white/5 rounded-lg border border-white/5">
<div class="w-full">
<div class="flex justify-between text-xs mb-2">
<span class="text-on-surface-variant font-label-caps">PREDICTED</span>
<span class="text-primary font-data-mono">882.4 GWh</span>
</div>
<div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary" style="width: 82%;"></div>
</div>
</div>
</div>
<div class="relative h-24 flex items-center px-4 bg-white/5 rounded-lg border border-white/5">
<div class="w-full">
<div class="flex justify-between text-xs mb-2">
<span class="text-on-surface-variant font-label-caps">ACTUAL</span>
<span class="text-secondary font-data-mono">879.1 GWh</span>
</div>
<div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-secondary" style="width: 80%;"></div>
</div>
</div>
</div>
</div>
<div class="mt-6 p-4 rounded-xl bg-tertiary-container/10 border border-tertiary-container/30 flex items-center justify-between">
<span class="text-tertiary text-sm font-bold">Delta Accuracy</span>
<span class="font-data-mono text-tertiary text-lg">99.63%</span>
</div>
</div>
<div class="flex-1 glass-card rounded-2xl p-6 flex flex-col justify-center text-center">
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-4">MEAN ERROR %</h3>
<div class="relative inline-flex items-center justify-center">
<svg class="w-32 h-32 transform -rotate-90">
<circle class="text-white/5" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" stroke-width="8"></circle>
<circle class="text-error" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" stroke-dasharray="351.85" stroke-dashoffset="342.3" stroke-width="8"></circle>
</svg>
<span class="absolute font-data-mono text-3xl text-error">2.7%</span>
</div>
<p class="mt-4 text-xs text-on-surface-variant px-8">System drift detected in sector 4. Automatic recalibration in 42 minutes.</p>
</div>
</section>
<!-- Charts: Accuracy & Knowledge Growth Trends -->
<section class="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div class="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col">
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-6">Accuracy Trend (24h)</h3>
<div class="flex-1 relative">
<div class="absolute inset-0 flex items-end">
<svg class="w-full h-full" viewbox="0 0 400 150">
<defs>
<lineargradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#47d6ff" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#47d6ff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,120 Q50,110 100,115 T200,90 T300,60 T400,40 L400,150 L0,150 Z" fill="url(#lineGrad)"></path>
<path class="drop-shadow-[0_0_8px_rgba(71,214,255,0.8)]" d="M0,120 Q50,110 100,115 T200,90 T300,60 T400,40" fill="none" stroke="#47d6ff" stroke-width="3"></path>
</svg>
</div>
</div>
<div class="flex justify-between mt-4 text-[10px] font-label-caps text-on-surface-variant">
<span>00:00</span>
<span>08:00</span>
<span>16:00</span>
<span>NOW</span>
</div>
</div>
<div class="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col">
<h3 class="font-label-caps text-label-caps text-on-surface-variant mb-6">Knowledge Growth</h3>
<div class="flex-1 relative">
<div class="absolute inset-0 flex items-end justify-between gap-1 px-2">
<div class="w-1/12 bg-secondary/20 h-[30%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/30 h-[45%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/40 h-[40%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/50 h-[60%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/60 h-[55%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/70 h-[75%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary/80 h-[70%] rounded-t-sm"></div>
<div class="w-1/12 bg-secondary h-[95%] rounded-t-sm drop-shadow-[0_0_8px_rgba(237,177,255,0.6)]"></div>
</div>
</div>
<div class="mt-4 flex items-center justify-between">
<span class="text-xs font-body-md text-on-surface-variant">Cumulative Tokens</span>
<span class="font-data-mono text-secondary text-sm">1.8T</span>
</div>
</div>
</section>
<!-- Feedback Section: New Patterns Identified -->
<section class="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 overflow-hidden">
<div class="flex items-center justify-between mb-6">
<h3 class="font-label-caps text-label-caps text-on-surface-variant">Neural Pattern Feed</h3>
<span class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">LIVE</span>
</div>
<div class="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
<div class="p-3 bg-white/5 rounded-lg border-l-4 border-primary hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-1">
<span class="font-label-caps text-[10px] text-primary">PATTERN #4829</span>
<span class="text-[10px] text-on-surface-variant font-data-mono">2m ago</span>
</div>
<p class="text-sm font-body-md text-on-surface leading-tight">Cyclical thermal shift detected in residential sector A. Recalibrating HVAC load.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Thermal</span>
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">High-Confidence</span>
</div>
</div>
<div class="p-3 bg-white/5 rounded-lg border-l-4 border-secondary hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-1">
<span class="font-label-caps text-[10px] text-secondary">PATTERN #4830</span>
<span class="text-[10px] text-on-surface-variant font-data-mono">15m ago</span>
</div>
<p class="text-sm font-body-md text-on-surface leading-tight">New mobility cluster forming at Central Plaza. Adjusting traffic signal phase.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Mobility</span>
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Unsupervised</span>
</div>
</div>
<div class="p-3 bg-white/5 rounded-lg border-l-4 border-tertiary hover:bg-white/10 transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-1">
<span class="font-label-caps text-[10px] text-tertiary">PATTERN #4831</span>
<span class="text-[10px] text-on-surface-variant font-data-mono">42m ago</span>
</div>
<p class="text-sm font-body-md text-on-surface leading-tight">Energy efficiency anomaly resolved in Grid Node 7. Pattern locked to memory.</p>
<div class="mt-2 flex gap-2">
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Energy</span>
<span class="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Critical</span>
</div>
</div>
</div>
<button class="w-full mt-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-[0_0_15px_rgba(71,214,255,0.5)] transition-all active:scale-95">
                        Initiate Global Training Loop
                    </button>
</section>
</div>
<!-- Contextual Learning Activity -->
<section class="glass-card rounded-2xl p-8">
<div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 class="font-headline-md text-headline-md text-on-surface">Memory Consolidation History</h2>
<p class="text-on-surface-variant font-body-md">Log of neural network structural optimizations.</p>
</div>
<div class="flex gap-2">
<button class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">Past 7 Days</button>
<button class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">Export Knowledge</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full border-collapse">
<thead>
<tr class="text-left border-b border-white/10">
<th class="pb-4 font-label-caps text-[10px] text-on-surface-variant">EPOCH ID</th>
<th class="pb-4 font-label-caps text-[10px] text-on-surface-variant">FOCUS AREA</th>
<th class="pb-4 font-label-caps text-[10px] text-on-surface-variant">KNOWLEDGE GAIN</th>
<th class="pb-4 font-label-caps text-[10px] text-on-surface-variant">STATUS</th>
<th class="pb-4 font-label-caps text-[10px] text-on-surface-variant text-right">OPTIMIZATION</th>
</tr>
</thead>
<tbody class="text-sm font-body-md">
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-4 font-data-mono text-primary">#EP-992</td>
<td class="py-4">Quantum Traffic Flow</td>
<td class="py-4 text-tertiary">+142.4 GB</td>
<td class="py-4"><span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Completed</span></td>
<td class="py-4 text-right font-data-mono text-on-surface-variant">0.12ms</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-4 font-data-mono text-primary">#EP-991</td>
<td class="py-4">Hyper-Local Weather Patterns</td>
<td class="py-4 text-tertiary">+89.1 GB</td>
<td class="py-4"><span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Completed</span></td>
<td class="py-4 text-right font-data-mono text-on-surface-variant">0.15ms</td>
</tr>
<tr class="border-b border-white/5 hover:bg-white/5 transition-colors">
<td class="py-4 font-data-mono text-primary">#EP-990</td>
<td class="py-4">Human-AI Collaborative Flux</td>
<td class="py-4 text-secondary">+214.7 GB</td>
<td class="py-4"><span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Processing</span></td>
<td class="py-4 text-right font-data-mono text-on-surface-variant">0.08ms</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
<!-- Mobile Bottom Nav -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-3xl border-t border-white/10 flex justify-around items-center h-16 px-4 z-50">
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">dashboard</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">analytics</span>
</button>
<button class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">psychology</span>
</button>
<button class="flex flex-col items-center gap-1 text-on-surface-variant">
<span class="material-symbols-outlined">settings</span>
</button>
</nav>
</main>
<script>
        const scoreDisplay = document.querySelector('.font-headline-xl');
        if(scoreDisplay) {
            scoreDisplay.addEventListener('mouseover', () => {
                scoreDisplay.style.filter = 'drop-shadow(0 0 30px rgba(71, 214, 255, 0.4))';
            });
            scoreDisplay.addEventListener('mouseleave', () => {
                scoreDisplay.style.filter = 'none';
            });
        }

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = (progress * (end - start) + start).toFixed(1);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        setTimeout(() => {
            animateValue(scoreDisplay, 82.4, 94.8, 2000);
        }, 1000);
    </script>
</body></html>