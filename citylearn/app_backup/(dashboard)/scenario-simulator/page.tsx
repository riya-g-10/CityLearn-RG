<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn | Scenario Simulator</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
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
                        "body-md": ["Nunito Sans"],
                        "label-caps": ["Space Mono"],
                        "headline-lg": ["Nunito Sans"],
                        "headline-md": ["Nunito Sans"],
                        "data-mono": ["Space Mono"],
                        "body-lg": ["Nunito Sans"],
                        "headline-xl": ["Nunito Sans"]
                    }
                }
            }
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
            border: 1px solid transparent;
            background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
        }
        .glow-button {
            transition: all 0.3s ease;
            box-shadow: 0 0 0px rgba(0, 210, 255, 0);
        }
        .glow-button:hover {
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
            transform: translateY(-1px);
        }
        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #47d6ff, transparent);
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
        }
        input:focus + .scanline {
            animation: scan 1.5s infinite linear;
        }
        @keyframes scan {
            from { transform: translateX(-100%); }
            to { transform: translateX(100%); }
        }
        .neural-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #00fd9b;
            box-shadow: 0 0 10px #00fd9b;
            animation: pulse-dot 2s infinite ease-in-out;
        }
        @keyframes pulse-dot {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.4); opacity: 1; }
        }
        .custom-slider {
            -webkit-appearance: none;
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 2px;
        }
        .custom-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 16px;
            height: 16px;
            background: #a5e7ff;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 0 10px #a5e7ff;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="font-body-md text-body-md">
<!-- Top Navigation -->
<header class="fixed top-0 z-50 w-full bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center px-spacing-margin-desktop h-16">
<div class="flex items-center gap-6">
<div class="font-headline-md text-headline-md font-bold text-primary tracking-tight">CityLearn Intelligence</div>
<div class="hidden md:flex relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="w-full bg-white/5 border-none rounded-full py-2 pl-10 text-body-md focus:ring-1 focus:ring-primary" placeholder="Explore scenarios..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<div class="neural-dot"></div>
<span class="font-label-caps text-label-caps text-tertiary">NEURAL LINK ACTIVE</span>
</div>
<div class="flex items-center gap-4 text-on-surface-variant">
<button class="hover:text-primary transition-colors"><span class="material-symbols-outlined">sensors</span></button>
<button class="hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<div class="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
<img alt="Administrator Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcrIdyKRQN1uXkXc6EcikiXyqrb2M2us_yV2rQI3OjgdeXykKqNrOQXd6onbkxn4V9K5-DaxI1kFnTVCj8VmYTekfW20Mps0VrBgwNnXaVD1ya8l13fpN-KYaWmpC4EmLOaJyMBYo6lynYaYAG37FDQe7YQRlngSqEUXkviwFy0YVGpWK-HOxd9jbgLFJU1kXz7MqYtunnJv-vWSmhgEwxzeR1KFDjelayfojiW_03PXlpRey6nioaxEkKtG_V0_FmUyxmiiN-Ck"/>
</div>
</div>
</div>
</header>
<!-- Sidebar Navigation -->
<aside class="fixed left-0 top-0 h-screen w-64 bg-surface/15 backdrop-blur-2xl border-r border-white/10 flex flex-col py-spacing-margin-desktop z-40 hidden md:flex">
<div class="px-6 mb-12 mt-8">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">hub</span>
</div>
<div>
<h2 class="font-headline-md text-[18px] font-bold text-primary leading-tight">CityLearn</h2>
<p class="font-label-caps text-[10px] text-on-surface-variant">Neural Intelligence</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-1">
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
            Dashboard
        </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">analytics</span>
            Analysis
        </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-2 border-primary bg-primary/10" href="#">
<span class="material-symbols-outlined">precision_manufacturing</span>
            Simulator
        </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">online_prediction</span>
            Predictions
        </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">hub</span>
            Knowledge Graph
        </a>
<a class="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">psychology</span>
            Learning Loop
        </a>
</nav>
<div class="px-6 pt-6 border-t border-white/10">
<div class="p-4 rounded-xl bg-primary-container/10 border border-primary/20">
<p class="text-xs text-primary mb-2 font-label-caps">GPU UTILIZATION</p>
<div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[74%]"></div>
</div>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="md:ml-64 pt-24 px-spacing-margin-mobile md:px-spacing-margin-desktop pb-12">
<div class="max-w-container-max mx-auto">
<div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 class="font-headline-xl text-[48px] font-bold text-on-surface leading-[56px] tracking-tight">Scenario Simulator</h1>
<p class="text-on-surface-variant mt-2 font-body-lg text-[18px]">Predicting the impact of urban interventions through the "What happens if?" neural engine.</p>
</div>
<div class="flex gap-3">
<button class="px-6 py-2 rounded-full border border-primary/30 text-primary font-label-caps hover:bg-primary/10 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">history</span> REPLAY LOGS
                </button>
<button class="px-6 py-2 rounded-full bg-primary text-on-primary font-label-caps glow-button flex items-center gap-2">
<span class="material-symbols-outlined text-sm">play_arrow</span> RUN SIMULATION
                </button>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Simulation Controls (Glass Panel) -->
<div class="lg:col-span-4 flex flex-col gap-gutter">
<section class="glass-card p-6 rounded-xl">
<div class="flex items-center justify-between mb-6">
<h3 class="font-headline-md text-[18px] font-semibold text-primary">Simulation Controls</h3>
<span class="material-symbols-outlined text-on-surface-variant">tune</span>
</div>
<div class="space-y-8">
<div class="space-y-4">
<div class="flex justify-between items-center">
<label class="font-label-caps text-label-caps text-on-surface-variant">OFFICER COUNT</label>
<span class="font-data-mono text-primary bg-primary/10 px-2 py-0.5 rounded">142 Units</span>
</div>
<input class="w-full custom-slider" max="300" min="50" type="range" value="142"/>
</div>
<div class="space-y-4">
<div class="flex justify-between items-center">
<label class="font-label-caps text-label-caps text-on-surface-variant">ROAD CLOSURES</label>
<span class="font-data-mono text-primary bg-primary/10 px-2 py-0.5 rounded">8 Sectors</span>
</div>
<input class="w-full custom-slider" max="24" min="0" type="range" value="8"/>
</div>
<div class="space-y-4">
<div class="flex justify-between items-center">
<label class="font-label-caps text-label-caps text-on-surface-variant">EVENT DURATION</label>
<span class="font-data-mono text-primary bg-primary/10 px-2 py-0.5 rounded">6.5 Hours</span>
</div>
<input class="w-full custom-slider" max="24" min="1" type="range" value="6.5"/>
</div>
<div class="pt-4 space-y-4">
<div class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
<span class="font-body-md text-on-surface">Dynamic Re-routing</span>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
</div>
<div class="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
<span class="font-body-md text-on-surface">Crowd Density Cap</span>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
</div>
</div>
</div>
</section>
<section class="glass-card p-6 rounded-xl h-64 relative overflow-hidden group">
<div class="relative z-10">
<h3 class="font-headline-md text-[18px] font-semibold text-tertiary mb-2">Spatial Distribution</h3>
<p class="text-xs text-on-surface-variant font-data-mono">REAL-TIME HEATMAP OVERLAY</p>
</div>
<div class="absolute bottom-4 left-4 z-10 flex gap-2">
<div class="bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-data-mono border border-white/10">COORD: 34.05 / -118.24</div>
</div>
</section>
</div>
<!-- Simulation Results -->
<div class="lg:col-span-8 flex flex-col gap-gutter">
<!-- Outcome Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="glass-card p-5 rounded-xl border-l-4 border-l-tertiary">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-1">BEST CASE</p>
<h4 class="font-headline-md text-tertiary text-[24px] font-bold">98.4%</h4>
<p class="text-sm text-on-surface-variant mt-2">Flow Optimization</p>
<div class="mt-4 flex items-center gap-2 text-tertiary text-xs">
<span class="material-symbols-outlined text-sm">trending_up</span> +14% vs Current
                        </div>
</div>
<div class="glass-card p-5 rounded-xl border-l-4 border-l-primary">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-1">EXPECTED CASE</p>
<h4 class="font-headline-md text-primary text-[24px] font-bold">82.1%</h4>
<p class="text-sm text-on-surface-variant mt-2">Resource Efficiency</p>
<div class="mt-4 flex items-center gap-2 text-primary text-xs">
<span class="material-symbols-outlined text-sm">analytics</span> Optimal Threshold
                        </div>
</div>
<div class="glass-card p-5 rounded-xl border-l-4 border-l-error">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-1">WORST CASE</p>
<h4 class="font-headline-md text-error text-[24px] font-bold">45.9%</h4>
<p class="text-sm text-on-surface-variant mt-2">Congestion Risk</p>
<div class="mt-4 flex items-center gap-2 text-error text-xs">
<span class="material-symbols-outlined text-sm">warning</span> Critical Blockage
                        </div>
</div>
</div>
<!-- Comparison Graph Section -->
<section class="glass-card p-8 rounded-xl flex-1 flex flex-col">
<div class="flex justify-between items-start mb-10">
<div>
<h3 class="font-headline-md text-[24px] font-bold text-on-surface">Intervention Impact</h3>
<p class="text-on-surface-variant font-body-md">Comparative analysis: Baseline vs. Simulated Strategy</p>
</div>
<div class="flex gap-4">
<div class="flex items-center gap-2">
<div class="w-3 h-3 bg-white/20 rounded-sm"></div>
<span class="text-xs font-label-caps">BASELINE</span>
</div>
<div class="flex items-center gap-2">
<div class="w-3 h-3 bg-primary rounded-sm shadow-[0_0_8px_rgba(165,231,255,0.6)]"></div>
<span class="text-xs font-label-caps text-primary">SIMULATED</span>
</div>
</div>
</div>
<div class="flex-1 flex items-end gap-6 h-64 min-h-[300px] mb-6">
<!-- Chart Bar 1 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[40%] transition-all group-hover:bg-white/20"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[65%] z-10 transition-all group-hover:h-[70%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">08:00</span>
</div>
<!-- Chart Bar 2 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[60%]"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[85%] z-10 transition-all group-hover:h-[90%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">10:00</span>
</div>
<!-- Chart Bar 3 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[85%]"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[55%] z-10 transition-all group-hover:h-[60%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">12:00</span>
</div>
<!-- Chart Bar 4 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[70%]"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[40%] z-10 transition-all group-hover:h-[45%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">14:00</span>
</div>
<!-- Chart Bar 5 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[45%]"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[25%] z-10 transition-all group-hover:h-[30%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">16:00</span>
</div>
<!-- Chart Bar 6 -->
<div class="flex-1 flex flex-col justify-end gap-1 group">
<div class="relative w-full flex flex-col justify-end items-center">
<div class="absolute bottom-0 w-2/3 bg-white/10 rounded-t-sm h-[30%]"></div>
<div class="w-1/2 bg-primary/40 border-t-2 border-primary rounded-t-sm h-[20%] z-10 transition-all group-hover:h-[25%] shadow-[0_-5px_15px_rgba(0,210,255,0.1)]"></div>
</div>
<span class="text-center font-data-mono text-[10px] text-on-surface-variant mt-4">18:00</span>
</div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div class="p-3 bg-white/5 rounded border border-white/5">
<p class="text-[10px] font-label-caps text-on-surface-variant">PEAK LOAD REDUCTION</p>
<p class="text-xl font-headline-md text-tertiary font-bold">-34.2%</p>
</div>
<div class="p-3 bg-white/5 rounded border border-white/5">
<p class="text-[10px] font-label-caps text-on-surface-variant">AVG. RESPONSE TIME</p>
<p class="text-xl font-headline-md text-primary font-bold">-4m 12s</p>
</div>
<div class="p-3 bg-white/5 rounded border border-white/5">
<p class="text-[10px] font-label-caps text-on-surface-variant">ENERGY SAVED</p>
<p class="text-xl font-headline-md text-tertiary font-bold">1.2 GWh</p>
</div>
<div class="p-3 bg-white/5 rounded border border-white/5">
<p class="text-[10px] font-label-caps text-on-surface-variant">SAFETY INDEX</p>
<p class="text-xl font-headline-md text-secondary font-bold">+12.8%</p>
</div>
</div>
</section>
</div>
</div>
<!-- Detailed Analysis Matrix -->
<section class="mt-gutter">
<div class="glass-card p-6 rounded-xl overflow-hidden">
<div class="flex items-center justify-between mb-8">
<h3 class="font-headline-md text-[24px] font-bold">Sector Reliability Matrix</h3>
<div class="flex bg-white/5 rounded-lg p-1 border border-white/10">
<button class="px-4 py-1.5 rounded-md bg-primary text-on-primary text-xs font-bold transition-all">HEATMAP</button>
<button class="px-4 py-1.5 rounded-md text-on-surface-variant text-xs font-bold hover:text-white transition-all">TABULAR</button>
</div>
</div>
<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1">
<!-- Simulated Grid for visualization -->
<script>
                        for(let i=0; i<72; i++) {
                            const opacity = Math.random();
                            const color = opacity > 0.8 ? 'bg-primary' : (opacity > 0.5 ? 'bg-primary/40' : 'bg-white/5');
                            document.write(`<div class="${color} aspect-square rounded-sm border border-black/20 hover:scale-110 transition-transform cursor-crosshair relative group">
                                <div class="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black/90 text-[10px] font-data-mono px-2 py-1 rounded border border-primary/30 z-20 pointer-events-none">
                                    ID:SEC-${i}<br>VAL:${(opacity*100).toFixed(1)}%
                                </div>
                            </div>`);
                        }
                    </script>
</div>
</div>
</section>
</div>
</main>
<script>
    document.querySelectorAll('.custom-slider').forEach(slider => {
        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            const sibling = e.target.previousElementSibling.querySelector('.font-data-mono');
            if (sibling) {
                const label = sibling.innerText.split(' ')[1];
                sibling.innerText = `${val} ${label || ''}`;
            }
            
            // Micro-interaction: Randomize dots slightly when sliders move
            document.querySelectorAll('.neural-dot').forEach(dot => {
                dot.style.animationDuration = (Math.random() * 2 + 0.5) + 's';
            });
        });
    });

    // Add scanline effect to generic inputs
    document.querySelectorAll('input[type="text"]').forEach(input => {
        const container = input.parentElement;
        const scanline = document.createElement('div');
        scanline.className = 'scanline';
        container.appendChild(scanline);
        container.style.position = 'relative';
        container.style.overflow = 'hidden';
    });
</script>
</body></html>