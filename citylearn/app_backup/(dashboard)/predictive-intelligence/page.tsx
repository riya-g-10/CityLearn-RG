<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn Predictions | Neural Intelligence</title>
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
                    "body-lg": ["Nunito Sans"],
                    "data-mono": ["Space Mono"],
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
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
        }

        .glass-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
            pointer-events: none;
        }

        .prediction-reveal {
            animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
            transform: translateY(20px);
        }

        @keyframes reveal {
            from { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(10px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #47d6ff, transparent);
            position: absolute;
            bottom: 0;
            left: -100%;
            animation: scan 3s infinite;
        }

        @keyframes scan {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .glow-blue {
            filter: drop-shadow(0 0 8px rgba(71, 214, 255, 0.4));
        }

        .glow-purple {
            filter: drop-shadow(0 0 8px rgba(237, 177, 255, 0.4));
        }

        .pulse-neural {
            animation: neuralPulse 2s infinite ease-in-out;
        }

        @keyframes neuralPulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        .gauge-path {
            stroke-dasharray: 100, 100;
            stroke-dashoffset: 100;
            transition: stroke-dashoffset 2s ease-out;
        }
    </style>
</head>
<body class="font-body-md text-body-md flex h-screen overflow-hidden">
<!-- Sidebar Navigation Shell -->
<aside class="docked left-0 h-screen w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl flex flex-col py-32 hidden md:flex z-50">
<div class="px-6 mb-12">
<div class="flex items-center gap-3">
<span class="font-headline-md text-headline-md font-bold text-primary">CityLearn</span>
<div class="w-2 h-2 bg-primary rounded-full pulse-neural shadow-[0_0_10px_#47d6ff]"></div>
</div>
<p class="font-label-caps text-[10px] text-on-surface-variant mt-1 tracking-widest">Neural Intelligence</p>
</div>
<nav class="flex-1 space-y-1">
<!-- Navigation Items Mapping -->
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
<span>Analysis</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">compare_arrows</span>
<span>Similar Events</span>
</a>
<!-- ACTIVE TAB -->
<a class="flex items-center gap-4 px-6 py-4 text-primary font-bold border-r-2 border-primary bg-white/5 transition-all group" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">online_prediction</span>
<span>Predictions</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">recommend</span>
<span>Recommendations</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">precision_manufacturing</span>
<span>Simulator</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">replay</span>
<span>Replay</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">hub</span>
<span>Knowledge Graph</span>
</a>
<a class="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">psychology</span>
<span>Learning Loop</span>
</a>
</nav>
<div class="px-6 py-8 border-t border-white/5">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-white/20">
<img alt="Administrator Profile" class="w-full h-full object-cover" data-alt="A close-up portrait of a professional city administrator in a high-tech control center environment. The lighting is dominated by soft cool blue and warm purple tones reflecting off their concentrated face. In the background, blurred holographic city maps and data feeds suggest a state-of-the-art urban management facility. The aesthetic is clean, sophisticated, and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrriZQwPmKw03IhYI4N4USn-PlC3Jv7BEWcrYidnOEowHvYUNGysmb84Vq1THsT-E1S83k96KZ935y1rQb8LO4kTG1xXfSFqyaTrNsdywKw1C1wcrHktE_vIvwkHC629zKp4x2cdZ8d19Qk0WCDiSfS_7BRrxYlCNdes1uxWHPbN7n0dx37zYxqmWp567rkcNmHmE9VoUhcy06lyGBHnqDO4KS-egyI2rzwSA4VeAz4WNJgnEfd4HdbhSEXN7jFKxa4p2APC0pgL4"/>
</div>
<div>
<p class="text-[12px] font-bold">Admin-04</p>
<p class="text-[10px] text-on-surface-variant">System Level 9</p>
</div>
</div>
</div>
</aside>
<!-- Main Content Canvas -->
<main class="flex-1 flex flex-col relative overflow-hidden">
<!-- Background Animation -->
<!-- Top App Bar -->
<header class="docked full-width top-0 z-40 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center w-full px-8 h-16">
<div class="flex items-center gap-8">
<div class="flex items-center gap-3 md:hidden">
<span class="font-headline-md text-headline-md font-bold text-primary">CL</span>
</div>
<div class="relative hidden sm:block">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input class="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none w-64 transition-all" placeholder="Scan neural nodes..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-4">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">sensors</span>
</button>
<div class="relative">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<span class="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border border-surface-dim"></span>
</div>
</div>
<div class="h-6 w-[1px] bg-white/10 mx-2"></div>
<span class="font-label-caps text-[11px] tracking-widest text-primary hidden lg:block">System Status: Optimal</span>
</div>
</header>
<!-- Dashboard Content -->
<div class="flex-1 overflow-y-auto p-8 pt-24 space-y-8 z-10">
<!-- Header Section -->
<div class="max-w-container-max mx-auto">
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h1 class="font-headline-xl text-headline-xl text-on-surface tracking-tight">System Predictions</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">Real-time neural forecasting for urban resource distribution and critical infrastructure maintenance.</p>
</div>
<div class="flex gap-4">
<button class="px-6 py-2.5 bg-surface-variant border border-white/10 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
<span class="material-symbols-outlined text-[20px]">refresh</span>
                            Rerun Simulation
                        </button>
<button class="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold shadow-[0_0_20px_rgba(71,214,255,0.4)] hover:scale-105 active:scale-95 transition-all">
                            Export Intelligence
                        </button>
</div>
</div>
<!-- Bento Grid Predictions -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Prediction Card 1: Main Focus -->
<div class="md:col-span-8 glass-card rounded-xl p-8 prediction-reveal">
<div class="flex justify-between items-start mb-12">
<div>
<span class="font-label-caps text-[12px] text-primary tracking-widest mb-2 block uppercase">Current High Priority</span>
<h3 class="font-headline-md text-headline-md font-bold">Transit Node Beta Congestion</h3>
</div>
<div class="px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full">
<span class="font-label-caps text-[12px] text-secondary">Risk Score: 8.2/10</span>
</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
<div class="space-y-1">
<p class="text-on-surface-variant text-sm">Predicted Resolution</p>
<p class="font-headline-md text-headline-md text-primary font-bold">45m <span class="text-xs font-normal text-on-surface-variant">Est.</span></p>
</div>
<div class="space-y-1">
<p class="text-on-surface-variant text-sm">Severity Level</p>
<div class="flex items-center gap-2">
<div class="w-3 h-3 bg-error rounded-full animate-pulse"></div>
<p class="font-headline-md text-headline-md text-error font-bold uppercase">High</p>
</div>
</div>
<div class="space-y-1">
<p class="text-on-surface-variant text-sm">AI Confidence</p>
<p class="font-headline-md text-headline-md text-tertiary font-bold">94.2%</p>
</div>
</div>
<!-- Mini Trend Graph -->
<div class="relative h-48 w-full">
<div class="absolute inset-0 flex items-end justify-between px-2">
<div class="w-[8%] bg-white/5 h-[40%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[55%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/10 h-[70%] rounded-t-sm border-t border-primary/40"></div>
<div class="w-[8%] bg-primary/20 h-[85%] rounded-t-sm border-t border-primary relative">
<div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#47d6ff]"></div>
</div>
<div class="w-[8%] bg-white/10 h-[60%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[45%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[30%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[20%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[15%] rounded-t-sm"></div>
<div class="w-[8%] bg-white/5 h-[10%] rounded-t-sm"></div>
</div>
<div class="absolute bottom-0 w-full h-[1px] bg-white/10"></div>
<p class="absolute bottom-[-24px] left-0 text-[10px] font-label-caps text-on-surface-variant tracking-widest">TIMELINE: NEXT 4 HOURS</p>
</div>
<div class="scanline opacity-30"></div>
</div>
<!-- Prediction Card 2: Confidence Gauge -->
<div class="md:col-span-4 glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center prediction-reveal" style="animation-delay: 0.1s;">
<span class="font-label-caps text-[12px] text-on-surface-variant tracking-widest mb-6 block uppercase">Intelligence Reliability</span>
<div class="relative w-48 h-48 mb-6">
<!-- SVG Gauge -->
<svg class="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" stroke-width="8"></circle>
<circle class="gauge-path" cx="50" cy="50" fill="none" id="confidence-circle" r="45" stroke="url(#gradient-blue)" stroke-dasharray="282.7" stroke-dashoffset="30" stroke-width="8"></circle>
<defs>
<lineargradient id="gradient-blue" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#47d6ff"></stop>
<stop offset="100%" stop-color="#edb1ff"></stop>
</lineargradient>
</defs>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="font-headline-xl text-headline-xl font-bold leading-none">89</span>
<span class="text-xs text-on-surface-variant uppercase tracking-tighter">Confidence Index</span>
</div>
</div>
<p class="text-sm text-on-surface-variant px-4">Neural models are reporting a <span class="text-primary">high convergence</span> of environmental and civic data points.</p>
</div>
<!-- Prediction Card 3: Neural Map Widget -->
<div class="md:col-span-4 glass-card rounded-xl overflow-hidden prediction-reveal" style="animation-delay: 0.2s;">
<div class="relative h-64 w-full">
<div class="absolute inset-0 bg-surface-dim/40 z-10 flex items-center justify-center">
<div class="px-4 py-2 glass-card rounded-full flex items-center gap-2 border-primary/30">
<span class="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span class="font-label-caps text-[10px] text-white">Active Grid: Sector 7</span>
</div>
</div>
<img class="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="A stylized, top-down isometric view of a futuristic city map with glowing neon blue and purple road networks. The aesthetic is dark and high-contrast, representing a digital twin of a metropolis. Thin luminous lines represent traffic flow, with small pulsing dots indicating active neural sensor nodes. The atmosphere is sophisticated and evokes a high-security intelligence dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdTpjWUbnqUSORlpIZLKHbFPjAleZ_h7NUeKbqI4gm63BcO2GMWu8s0wxe1UWApw_xw31V4IJbMs2257Gi8OZzuQk3buWbHG9npnct_4ohed6qIbBjN0YSSsdOaRTZui2FjEbvrQ1gKO4lDks_Xk7gNvpNs3eutLMQi0qXki68CCTyysME5YlYivmgF-MspoUYD5qNrEQavpR71_9oR57k6tlco-jZAXG0z6956sS2PBTkwlbyZgY6sfi7wvYZWJ7-MFiBjc6Kf48"/>
</div>
<div class="p-6">
<h4 class="font-bold mb-2">Grid Stability Forecast</h4>
<div class="flex items-center gap-4">
<div class="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div class="w-3/4 h-full bg-tertiary shadow-[0_0_10px_#00fd9b]"></div>
</div>
<span class="font-data-mono text-xs text-tertiary">75% Stable</span>
</div>
</div>
</div>
<!-- Prediction Card 4: Forecast Summary -->
<div class="md:col-span-8 glass-card rounded-xl p-8 prediction-reveal" style="animation-delay: 0.3s;">
<h4 class="font-bold mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">trending_up</span>
                            Predictive Congestion Trends
                        </h4>
<div class="space-y-4">
<div class="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
<span class="material-symbols-outlined">commute</span>
</div>
<div>
<p class="font-bold text-sm">Public Transit Load</p>
<p class="text-xs text-on-surface-variant">Predicted spike at 17:30</p>
</div>
</div>
<div class="text-right">
<p class="font-data-mono text-error font-bold">+22%</p>
<p class="text-[10px] uppercase text-on-surface-variant">Variance</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-tertiary">
<span class="material-symbols-outlined">bolt</span>
</div>
<div>
<p class="font-bold text-sm">Energy Demand</p>
<p class="text-xs text-on-surface-variant">Optimal distribution forecast</p>
</div>
</div>
<div class="text-right">
<p class="font-data-mono text-tertiary font-bold">-14%</p>
<p class="text-[10px] uppercase text-on-surface-variant">Efficiency</p>
</div>
</div>
<div class="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-secondary">
<span class="material-symbols-outlined">water_drop</span>
</div>
<div>
<p class="font-bold text-sm">Fluid Infrastructure</p>
<p class="text-xs text-on-surface-variant">Maintenance window at 02:00</p>
</div>
</div>
<div class="text-right">
<p class="font-data-mono text-secondary font-bold">Stable</p>
<p class="text-[10px] uppercase text-on-surface-variant">Status</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Floating Quick Action (FAB) Suppression check: Active on Dashboard/Predictions -->
<button class="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(71,214,255,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
<span class="material-symbols-outlined text-[28px]">psychology</span>
<div class="absolute right-20 bg-surface-bright px-4 py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
<p class="text-xs font-bold">Ask CityLearn AI</p>
</div>
</button>
</main>
<!-- Mobile Bottom Navigation Shell -->
<nav class="md:hidden fixed bottom-0 left-0 w-full bg-surface/15 backdrop-blur-2xl border-t border-white/10 flex justify-around items-center h-16 px-4 z-50">
<a class="text-on-surface-variant flex flex-col items-center gap-1" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-label-caps">Home</span>
</a>
<a class="text-primary flex flex-col items-center gap-1" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">online_prediction</span>
<span class="text-[10px] font-label-caps">AI</span>
</a>
<div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center -translate-y-4 border border-primary/40 shadow-lg">
<span class="material-symbols-outlined text-primary">add</span>
</div>
<a class="text-on-surface-variant flex flex-col items-center gap-1" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="text-[10px] font-label-caps">Grid</span>
</a>
<a class="text-on-surface-variant flex flex-col items-center gap-1" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-[10px] font-label-caps">Admin</span>
</a>
</nav>
<script>
        // Micro-interaction: Animated Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const circle = document.getElementById('confidence-circle');
            if(circle) {
                // Trigger gauge animation
                setTimeout(() => {
                    circle.style.strokeDashoffset = '80';
                }, 500);
            }

            // Neural pulse randomization
            const dots = document.querySelectorAll('.pulse-neural');
            dots.forEach(dot => {
                dot.style.animationDelay = `${Math.random() * 2}s`;
            });

            // Simulate "New Prediction Reveal"
            setInterval(() => {
                const cards = document.querySelectorAll('.prediction-reveal');
                const randomCard = cards[Math.floor(Math.random() * cards.length)];
                
                // Temporary highlight for "reveal" effect
                randomCard.classList.add('border-primary/50');
                setTimeout(() => {
                    randomCard.classList.remove('border-primary/50');
                }, 1000);
            }, 5000);
        });
    </script>
</body></html>