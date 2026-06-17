<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn Dashboard | Neural Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        @keyframes pulse-glow {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-pulse-glow {
            animation: pulse-glow 3s infinite ease-in-out;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
            border: 1px solid rgba(71, 214, 255, 0.3);
            box-shadow: 0 0 20px rgba(71, 214, 255, 0.1);
        }
        .glow-text {
            text-shadow: 0 0 10px rgba(71, 214, 255, 0.5);
        }
        .neon-border-primary {
            border: 1px solid #47d6ff;
            box-shadow: 0 0 15px rgba(71, 214, 255, 0.2);
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(71, 214, 255, 0.2); border-radius: 10px; }
    </style>
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
                        "headline-lg-mobile": ["Nunito Sans"],
                        "headline-md": ["Nunito Sans"],
                        "body-lg": ["Nunito Sans"],
                        "data-mono": ["Space Mono"],
                        "headline-xl": ["Nunito Sans"]
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
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden">
<!-- Top Navigation Shell -->
<header class="fixed top-0 z-50 w-full bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center px-spacing-margin-desktop h-16">
<div class="flex items-center gap-4">
<span class="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">CityLearn</span>
<div class="hidden md:flex items-center bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
<span class="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/50" placeholder="Probe neural network..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#00fd9b]"></div>
<span class="font-label-caps text-label-caps text-tertiary">SYSTEM LIVE</span>
</div>
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">sensors</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<div class="w-8 h-8 rounded-full border border-primary-container overflow-hidden">
<img alt="Administrator Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACG6SMAhkMyyuUd3uQuGZB523ol0TPyqkoOXt3tUwHJgcQcIhhdumny2_tQ2rfXa1xjIFZUPoIo-wzVs7EzxMt3ySuKjKKB5usW3FzD9PI-f49n0QkJHRaenHtINAhZU0FfLI1_N3ng7JCzgLVloVvSnayBN2lr1UMh3rwbbwAT4Z41sLqMHL2ITuojKpm8n4llFKdWst76mWEFGkAuw0-uskUkw_uxUjKPljE4phYr_MHRW8l1d6WwAFknRq24HZHsGqtXnSygCE"/>
</div>
</div>
</div>
</header>
<div class="flex pt-16 min-h-screen">
<!-- Sidebar Navigation Shell -->
<aside class="fixed left-0 h-[calc(100vh-64px)] w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl hidden md:flex flex-col py-spacing-margin-desktop">
<nav class="flex-1 px-4 space-y-2">
<!-- Dashboard Active -->
<a class="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-label-caps text-label-caps">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-caps text-label-caps">Analysis</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">compare_arrows</span>
<span class="font-label-caps text-label-caps">Similar Events</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">online_prediction</span>
<span class="font-label-caps text-label-caps">Predictions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">recommend</span>
<span class="font-label-caps text-label-caps">Recommendations</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">precision_manufacturing</span>
<span class="font-label-caps text-label-caps">Simulator</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">replay</span>
<span class="font-label-caps text-label-caps">Replay</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="font-label-caps text-label-caps">Knowledge Graph</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined">psychology</span>
<span class="font-label-caps text-label-caps">Learning Loop</span>
</a>
</nav>
<div class="px-8 mt-auto">
<div class="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
<p class="text-[10px] font-label-caps text-primary uppercase mb-2">Neural Load</p>
<div class="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div class="bg-primary h-full w-[42%]"></div>
</div>
<p class="text-[12px] font-data-mono text-on-surface-variant mt-2">14.2 tflops</p>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 md:ml-64 p-spacing-margin-mobile md:p-spacing-margin-desktop space-y-spacing-gutter">
<!-- Hero Section -->
<section class="relative h-64 md:h-80 rounded-2xl overflow-hidden flex items-center px-8 md:px-12">
<div class="relative z-10 max-w-2xl">
<h1 class="font-headline-xl text-headline-xl text-white tracking-tight leading-none mb-4">Cities Forget. <br/><span class="text-primary-container">CityLearn Remembers.</span></h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Advanced urban intelligence mapping trillions of historical data points to predict the next hour of city life.</p>
</div>
</section>
<!-- Animated Stats Row -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-spacing-gutter">
<div class="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
<div class="flex justify-between items-start mb-4">
<span class="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
<span class="font-label-caps text-label-caps text-primary">+12% vs last hour</span>
</div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Events Learned</h3>
<div class="flex items-baseline gap-2">
<p class="font-headline-xl text-headline-xl glow-text">1,482,903</p>
</div>
</div>
<div class="glass-card p-6 rounded-2xl border-l-4 border-l-tertiary">
<div class="flex justify-between items-start mb-4">
<span class="material-symbols-outlined text-tertiary text-3xl">psychology</span>
<span class="font-label-caps text-label-caps text-tertiary">Neural precision 99.4%</span>
</div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Predictions Generated</h3>
<div class="flex items-baseline gap-2">
<p class="font-headline-xl text-headline-xl glow-text">84,201</p>
</div>
</div>
<div class="glass-card p-6 rounded-2xl border-l-4 border-l-secondary">
<div class="flex justify-between items-start mb-4">
<span class="material-symbols-outlined text-secondary text-3xl">verified_user</span>
<span class="font-label-caps text-label-caps text-secondary">Risk averted</span>
</div>
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Mistakes Prevented</h3>
<div class="flex items-baseline gap-2">
<p class="font-headline-xl text-headline-xl glow-text">3,129</p>
</div>
</div>
</section>
<!-- KPI Cards & Charts Bento -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-spacing-gutter">
<!-- KPIs Column -->
<div class="md:col-span-3 space-y-4">
<div class="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span class="font-label-caps text-label-caps text-on-surface-variant">Active Events</span>
<div class="flex items-end justify-between">
<span class="font-headline-lg text-headline-lg text-white">12</span>
<div class="flex -space-x-2">
<span class="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary">EV</span>
<span class="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-[10px] text-on-tertiary">TR</span>
</div>
</div>
</div>
<div class="glass-card p-4 rounded-xl flex flex-col justify-between h-32 border-l-4 border-l-error">
<span class="font-label-caps text-label-caps text-on-surface-variant">Critical Alerts</span>
<div class="flex items-end justify-between">
<span class="font-headline-lg text-headline-lg text-error">3</span>
<span class="material-symbols-outlined text-error animate-pulse">warning</span>
</div>
</div>
<div class="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span class="font-label-caps text-label-caps text-on-surface-variant">Predicted Risk Index</span>
<div class="flex flex-col gap-2">
<div class="flex justify-between">
<span class="font-headline-lg text-headline-lg text-white">74%</span>
<span class="text-tertiary text-sm">Elevated</span>
</div>
<div class="w-full bg-white/5 h-1.5 rounded-full">
<div class="bg-gradient-to-r from-primary to-error h-full rounded-full" style="width: 74%"></div>
</div>
</div>
</div>
<div class="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span class="font-label-caps text-label-caps text-on-surface-variant">Avg Resolution Time</span>
<div class="flex items-end justify-between">
<span class="font-headline-lg text-headline-lg text-white">22<span class="text-xl">m</span></span>
<span class="material-symbols-outlined text-on-surface-variant">timer</span>
</div>
</div>
</div>
<!-- Interactive Map Section -->
<div class="md:col-span-6 glass-card rounded-2xl relative overflow-hidden min-h-[400px]">
<div class="absolute top-4 left-4 z-10 flex flex-col gap-2">
<div class="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 border-primary/20">
<span class="material-symbols-outlined text-primary text-sm">location_on</span>
<span class="font-label-caps text-[10px]">DOWNTOWN HUB</span>
</div>
</div>
<div class="absolute bottom-4 right-4 z-10">
<div class="glass-card p-3 rounded-xl border-white/10 space-y-2">
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-error"></div>
<span class="text-[10px] font-label-caps">TRAFFIC CLOSURE</span>
</div>
<div class="flex items-center gap-2">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="text-[10px] font-label-caps">LIVE SENSOR</span>
</div>
</div>
</div>
<!-- Map Placeholder -->
<div class="w-full h-full grayscale contrast-[1.2] brightness-[0.4]" data-alt="A top-down architectural blueprint style map of a sprawling modern metropolis at night, featuring glowing neon blue traffic flow lines and pulsing red nodes indicating congestion zones." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDql_4s-y4hmIfyXBeCLklYKjBnHbV78WsOags18kLSDyl6g6_RN0KprZpC9lKnbaIe73cLS9dWBse534ptnRdcAWSVd5_vVQdFlfGrg8Jg7ALmqEQfAoA42a7Vgtv1b0xpYZV89LD1Wc1VhCmwNLUYIcm6Y73grCY8SHH4-gmPBvPEUeeZ6TBiuTsWfnp74Uv_sru79clqMLYT8m2mFXc6XTukBw75gKKzv7bewRjdvQHkUF2WAjyz-eVZXTmCi870YfcYnjJEO5c'); background-size: cover; background-position: center;"></div>
<!-- Neon Pulse Markers Overlay -->
<div class="absolute inset-0 pointer-events-none">
<div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div class="w-4 h-4 bg-error rounded-full relative">
<div class="absolute inset-0 bg-error rounded-full animate-ping opacity-75"></div>
<div class="absolute inset-0 bg-error rounded-full animate-pulse-glow"></div>
</div>
</div>
<div class="absolute top-2/3 left-1/4">
<div class="w-3 h-3 bg-primary rounded-full relative">
<div class="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
</div>
</div>
<div class="absolute bottom-1/4 right-1/3">
<div class="w-3 h-3 bg-primary rounded-full relative">
<div class="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" style="animation-delay: 1s;"></div>
</div>
</div>
</div>
</div>
<!-- Activity Feed Column -->
<div class="md:col-span-3 glass-card rounded-2xl p-6 overflow-hidden flex flex-col">
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">Recent Activities</h3>
<div class="flex-1 space-y-6 overflow-y-auto pr-2">
<!-- Feed Item -->
<div class="relative pl-6 border-l border-white/10 pb-2">
<div class="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
<span class="text-[10px] font-data-mono text-primary uppercase">14:22 — CONCERT</span>
<p class="font-body-md text-white mt-1">Madison Sq. Arena inflow starting. Prediction: +20% congestion.</p>
</div>
<div class="relative pl-6 border-l border-white/10 pb-2">
<div class="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary"></div>
<span class="text-[10px] font-data-mono text-secondary uppercase">13:45 — SPORTS</span>
<p class="font-body-md text-white mt-1">Match ended. Crowd dispersal patterns detected in Sector 4.</p>
</div>
<div class="relative pl-6 border-l border-white/10 pb-2">
<div class="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-error"></div>
<span class="text-[10px] font-data-mono text-error uppercase">12:10 — ACCIDENT</span>
<p class="font-body-md text-white mt-1">Gridlock detected at Cross St &amp; 5th. Rerouting algorithms active.</p>
</div>
<div class="relative pl-6 border-l border-white/10 pb-2">
<div class="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-tertiary"></div>
<span class="text-[10px] font-data-mono text-tertiary uppercase">11:05 — RECOVERY</span>
<p class="font-body-md text-white mt-1">Neural loop updated: Rainy weather impact on speed reduced by 5%.</p>
</div>
</div>
<button class="mt-4 w-full py-2 rounded-lg border border-white/10 font-label-caps text-[10px] hover:bg-white/5 transition-all uppercase tracking-widest">Audit Full Stream</button>
</div>
</section>
<!-- Charts Row -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-spacing-gutter">
<div class="glass-card p-6 rounded-2xl">
<div class="flex justify-between items-center mb-6">
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Event Trends</h3>
<div class="flex gap-2">
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-primary"></div>
<span class="text-[10px] font-data-mono">PLANNED</span>
</div>
<div class="flex items-center gap-1.5">
<div class="w-2 h-2 rounded-full bg-secondary"></div>
<span class="text-[10px] font-data-mono">ANOMALY</span>
</div>
</div>
</div>
<div class="h-48 w-full relative">
<!-- Chart Mockup -->
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">
<defs>
<lineargradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#47d6ff" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#47d6ff" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 Q50,75 100,40 T200,60 T300,20 T400,50 L400,100 L0,100 Z" fill="url(#chart-grad)"></path>
<path d="M0,80 Q50,75 100,40 T200,60 T300,20 T400,50" fill="none" stroke="#47d6ff" stroke-width="2"></path>
<path d="M0,90 Q50,85 100,70 T200,80 T300,50 T400,60" fill="none" stroke="#edb1ff" stroke-dasharray="4" stroke-width="2"></path>
</svg>
<div class="absolute inset-0 grid grid-cols-6 pointer-events-none">
<div class="border-r border-white/5 h-full"></div>
<div class="border-r border-white/5 h-full"></div>
<div class="border-r border-white/5 h-full"></div>
<div class="border-r border-white/5 h-full"></div>
<div class="border-r border-white/5 h-full"></div>
</div>
</div>
<div class="flex justify-between mt-4 text-[10px] font-data-mono text-on-surface-variant">
<span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>00:00</span>
</div>
</div>
<div class="glass-card p-6 rounded-2xl">
<div class="flex justify-between items-center mb-6">
<h3 class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Congestion Matrix</h3>
<span class="font-data-mono text-[10px] text-tertiary">NEURAL SYNC: OPTIMAL</span>
</div>
<div class="h-48 flex items-end gap-1">
<!-- Histogram Bars -->
<div class="flex-1 bg-white/5 rounded-t h-[40%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[60%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[35%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[85%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-primary rounded-t h-[95%] shadow-[0_0_15px_rgba(71,214,255,0.4)]"></div>
<div class="flex-1 bg-white/5 rounded-t h-[75%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[55%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[45%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[30%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[20%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[15%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div class="flex-1 bg-white/5 rounded-t h-[10%] hover:bg-primary/40 transition-all cursor-pointer"></div>
</div>
<div class="mt-6 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-[10px] font-label-caps text-on-surface-variant uppercase">Peak Hour</span>
<span class="font-body-md text-white">17:45 - High Density</span>
</div>
<button class="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-[10px] font-bold shadow-[0_0_15px_#47d6ff]">ADJUST SENSORS</button>
</div>
</div>
</section>
</main>
</div>
<!-- Mobile Nav Anchor -->
<div class="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl border-t border-white/10 h-16 flex justify-around items-center px-4 z-50">
<button class="flex flex-col items-center text-primary">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[8px] font-label-caps">HUB</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined">analytics</span>
<span class="text-[8px] font-label-caps">ANALYSIS</span>
</button>
<button class="w-12 h-12 -mt-8 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
<span class="material-symbols-outlined">psychology</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined">online_prediction</span>
<span class="text-[8px] font-label-caps">PREDICT</span>
</button>
<button class="flex flex-col items-center text-on-surface-variant">
<span class="material-symbols-outlined">hub</span>
<span class="text-[8px] font-label-caps">GRAPH</span>
</button>
</div>
<script>
    // Simple Interaction: Mouse move parallax effect on hero
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('section');
        if (hero) {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Neural Dot Randomizer
    setInterval(() => {
        const bars = document.querySelectorAll('.flex-1.bg-white\\/5');
        bars.forEach(bar => {
            if (Math.random() > 0.9) {
                bar.classList.add('bg-primary/20');
                setTimeout(() => bar.classList.remove('bg-primary/20'), 500);
            }
        });
    }, 1000);
</script>
</body></html>