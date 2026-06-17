<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>User Profile | CityLearn Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-card {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        body {
            font-family: 'Nunito Sans', sans-serif;
            background-color: #0e1417;
        }
        .font-mono-data {
            font-family: 'Space Mono', monospace;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "inverse-on-surface": "#2b3134",
                        "on-primary": "#003543",
                        "on-background": "#dde3e7",
                        "outline-variant": "#3c494e",
                        "secondary-fixed": "#b6eaff",
                        "surface-bright": "#333a3d",
                        "tertiary-fixed": "#ffddb1",
                        "on-tertiary-container": "#6c4700",
                        "inverse-surface": "#dde3e7",
                        "error-container": "#93000a",
                        "primary-container": "#00d2ff",
                        "tertiary": "#ffd79f",
                        "on-surface": "#dde3e7",
                        "surface-dim": "#0e1417",
                        "primary": "#a5e7ff",
                        "tertiary-fixed-dim": "#ffba4a",
                        "surface-variant": "#2f3639",
                        "error": "#ffb4ab",
                        "on-primary-container": "#00566a",
                        "inverse-primary": "#00677f",
                        "background": "#0e1417",
                        "on-secondary-fixed": "#001f28",
                        "on-error": "#690005",
                        "on-surface-variant": "#bbc9cf",
                        "on-tertiary": "#442b00",
                        "on-tertiary-fixed": "#291800",
                        "outline": "#859399",
                        "on-error-container": "#ffdad6",
                        "secondary-container": "#00677f",
                        "on-primary-fixed": "#001f28",
                        "surface": "#0e1417",
                        "surface-tint": "#47d6ff",
                        "surface-container-low": "#161d1f",
                        "primary-fixed-dim": "#47d6ff",
                        "secondary": "#86d1ec",
                        "surface-container-lowest": "#090f12",
                        "secondary-fixed-dim": "#86d1ec",
                        "on-secondary-fixed-variant": "#004e60",
                        "surface-container-highest": "#2f3639",
                        "primary-fixed": "#b6ebff",
                        "on-primary-fixed-variant": "#004e60",
                        "on-tertiary-fixed-variant": "#624000",
                        "surface-container": "#1a2123",
                        "on-secondary-container": "#99e3ff",
                        "on-secondary": "#003543",
                        "surface-container-high": "#242b2e",
                        "tertiary-container": "#ffb229"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-desktop": "40px",
                        "gutter": "24px",
                        "unit": "4px",
                        "margin-mobile": "16px",
                        "container-max": "1440px"
                    },
                    "fontFamily": {
                        "body-md": ["Nunito Sans"],
                        "headline-lg": ["Nunito Sans"],
                        "data-display": ["Space Mono"],
                        "body-sm": ["Nunito Sans"],
                        "headline-lg-mobile": ["Nunito Sans"],
                        "headline-xl": ["Nunito Sans"],
                        "label-mono": ["Space Mono"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "data-display": ["18px", {"lineHeight": "24px", "fontWeight": "700"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "label-mono": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
</head>
<body class="bg-background text-on-surface">
<!-- Top Navigation Bar -->
<header class="fixed top-0 z-50 w-full h-16 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-lg border-b border-outline-variant/20 flex justify-between items-center px-margin-desktop">
<div class="flex items-center gap-8">
<h1 class="font-headline-lg-mobile text-primary dark:text-primary font-bold tracking-tight">CityLearn Intelligence</h1>
<div class="hidden md:flex flex-col">
<span class="text-body-sm text-on-surface font-medium">Welcome back, Alex Rivera</span>
<span class="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Current Location: San Francisco, CA</span>
</div>
</div>
<div class="flex items-center gap-6">
<div class="relative group">
<button class="flex items-center gap-2 hover:bg-on-surface/5 p-2 rounded-lg transition-colors">
<img alt="Alex Rivera" class="w-8 h-8 rounded-full border border-outline/30 object-cover" data-alt="A professional headshot of a Hispanic male in his late 30s with a clean-cut beard and stylish modern glasses. He is wearing a dark navy executive blazer over a crisp white shirt, posing against a blurred high-tech city operations center background. The lighting is cool-toned and cinematic, reflecting a high-end enterprise software aesthetic with deep blacks and vibrant blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_cjf245v-hK_9glAM36tV9NZIQ4FfZUveKGqFLp7dDMzIAOkkC7QbjDXu6Wcfzdvlc1nlfh7H7_M6KLcDnvJTungneL-8UKms6NADMCFfVOdnMrpQX2qqJBQw7rK0e6tjUO6N2SiWFYVmP66emBnc3GctKcEN7maY-1ES8L5PZUTEeZsIIul36WozOpZi_LeNuvfgLy0Si7kqpd7_XFB06RUFuNn6lx3rl6bfuTORfLttCfIqTqEBJetSzRRsk-3m4e9l7EC7458"/>
<span class="material-symbols-outlined text-on-surface-variant">expand_more</span>
</button>
<!-- Dropdown Menu -->
<div class="absolute right-0 top-full mt-2 w-48 bg-surface-container border border-outline-variant/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
<div class="p-2 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 text-sm text-on-surface bg-secondary-container dark:bg-secondary-container/30 rounded-lg" href="/profile">
<span class="material-symbols-outlined text-[18px]">person</span> View Profile
                        </a>
<a class="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined text-[18px]">history</span> Activity
                        </a>
<a class="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined text-[18px]">settings</span> Settings
                        </a>
<div class="h-px bg-outline-variant/20 my-1"></div>
<a class="flex items-center gap-3 px-3 py-2 text-sm text-error hover:bg-error-container/20 transition-colors rounded-lg" href="#">
<span class="material-symbols-outlined text-[18px]">logout</span> Sign Out
                        </a>
</div>
</div>
</div>
<div class="flex items-center gap-2">
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-on-surface/5 rounded-full transition-colors">dark_mode</button>
<button class="material-symbols-outlined p-2 text-on-surface-variant hover:bg-on-surface/5 rounded-full transition-colors relative">
                    notifications
                    <span class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
</div>
</div>
</header>
<!-- Side Navigation Bar -->
<aside class="fixed left-0 top-16 h-[calc(100vh-64px)] w-[280px] bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/10 py-6 px-4 hidden md:flex flex-col space-y-2 overflow-y-auto">
<div class="px-4 mb-6">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary-container">location_city</span>
</div>
<div>
<p class="font-label-mono text-label-mono uppercase tracking-wider text-on-surface">City Operations</p>
<p class="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Mission Control</p>
</div>
</div>
</div>
<nav class="space-y-1 flex-1">
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">dashboard</span>
<span class="font-label-mono text-label-mono uppercase">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">analytics</span>
<span class="font-label-mono text-label-mono uppercase">Analysis</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">online_prediction</span>
<span class="font-label-mono text-label-mono uppercase">Predictions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="#">
<span class="material-symbols-outlined group-hover:text-primary">model_training</span>
<span class="font-label-mono text-label-mono uppercase">Simulator</span>
</a>
<div class="pt-4 pb-2 px-4 text-[10px] font-bold text-outline uppercase tracking-widest">Administrative</div>
<a class="flex items-center gap-3 px-4 py-3 bg-secondary-container/30 text-secondary rounded-lg" href="/profile">
<span class="material-symbols-outlined">person</span>
<span class="font-label-mono text-label-mono uppercase">Profile</span>
</a>
</nav>
<button class="w-full mt-auto py-3 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">play_arrow</span> Run Simulation
        </button>
</aside>
<!-- Main Content Canvas -->
<main class="md:pl-[280px] pt-16 min-h-screen">
<div class="max-w-[1200px] mx-auto p-margin-desktop space-y-gutter">
<!-- Hero Profile Section -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div class="lg:col-span-2 glass-card bg-surface-container-low/50 border border-outline-variant/10 rounded-xl p-8 relative overflow-hidden flex items-end">
<!-- Background Shader Decor -->
<div class="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none"></div>
<div class="flex flex-col md:flex-row items-center md:items-end gap-8 relative z-10">
<div class="relative">
<div class="w-40 h-40 rounded-xl overflow-hidden border-4 border-surface shadow-2xl">
<img alt="Alex Rivera" class="w-full h-full object-cover" data-alt="Close up of a professional architect in a sleek mission control setting. The man is looking thoughtfully into the distance, wearing a modern dark suit jacket. Behind him, glowing blue data interfaces and holographic maps of a city are subtly visible through a soft bokeh effect. The lighting is sophisticated, with blue and teal highlights cutting across the dark, minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACVQnt-rJcIEaj8Zesz9MBf202MGlkB06ZVjxbP89q41K35mVAh7BoZ8PdYs-isZTcp5qit1kGpgN1lhFPIA3h98_R6-8-q4WMq7zDlJrmW4l9N2L8Hv7kOE1VABccz8RMfML1BKD3T4C2JDWugDilheruhvpiq14e88M_MWIxBpl1zjJSX_rwROAl3_xCNYT_0rQoFMOhcUwIXfWG8FXfnONrHq2zGtZT6R9Z17ZvjwWPtzUmEjGbUVrma55dABB6-Q4dtyjTniA"/>
</div>
<button class="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-container text-on-primary-container rounded-lg shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<div class="text-center md:text-left space-y-2">
<div class="inline-flex items-center px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-[10px] font-bold uppercase tracking-widest mb-2">Verified Expert</div>
<h2 class="font-headline-xl text-on-surface leading-tight">Alex Rivera</h2>
<p class="text-on-surface-variant font-body-md">Senior Urban Logistics Architect • City Operations AI</p>
<div class="flex items-center justify-center md:justify-start gap-4 text-sm text-outline mt-4">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">location_on</span> San Francisco, CA, USA</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">mail</span> a.rivera@citylearn.gov</span>
</div>
</div>
</div>
</div>
<!-- Action Panel -->
<div class="glass-card bg-surface-container-high/50 border border-outline-variant/10 rounded-xl p-6 flex flex-col justify-between">
<h3 class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6 flex items-center justify-between">
                        Quick Actions
                        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</h3>
<div class="space-y-3">
<button class="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">person_edit</span>
<span class="font-body-md font-medium">Edit Profile</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button class="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-secondary">map</span>
<span class="font-body-md font-medium">Location Settings</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button class="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-tertiary">security</span>
<span class="font-body-md font-medium">Security &amp; Access</span>
</div>
<span class="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
<div class="mt-6 pt-6 border-t border-outline-variant/20">
<div class="flex items-center justify-between mb-2">
<span class="text-xs text-on-surface-variant uppercase font-bold">Account Health</span>
<span class="text-xs text-primary font-mono-data">98% Secure</span>
</div>
<div class="w-full h-1 bg-outline-variant/20 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[98%] shadow-[0_0_8px_rgba(165,231,255,0.5)]"></div>
</div>
</div>
</div>
</section>
<!-- Stats Grid -->
<section class="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
<div class="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
<p class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Events Analyzed</p>
<h4 class="font-mono-data text-headline-lg text-primary">12,482</h4>
<p class="text-[10px] text-primary/60 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">trending_up</span> +12% this month
                    </p>
</div>
<div class="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-colors">
<p class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Predictions</p>
<h4 class="font-mono-data text-headline-lg text-secondary">842</h4>
<p class="text-[10px] text-secondary/60 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">check_circle</span> 94% Accuracy
                    </p>
</div>
<div class="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
<p class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Approved</p>
<h4 class="font-mono-data text-headline-lg text-tertiary">319</h4>
<p class="text-[10px] text-tertiary/60 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">bolt</span> High Impact Rank
                    </p>
</div>
<div class="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-outline/30 transition-colors">
<p class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Simulations</p>
<h4 class="font-mono-data text-headline-lg text-on-surface">56</h4>
<p class="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">timer</span> 4.2h Avg/Week
                    </p>
</div>
</section>
<!-- Performance Visualization -->
<section class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div class="lg:col-span-2 glass-card bg-surface-container/40 p-8 rounded-xl border border-outline-variant/10">
<div class="flex items-center justify-between mb-8">
<div>
<h3 class="font-headline-lg-mobile text-on-surface">Impact Velocity</h3>
<p class="text-on-surface-variant text-sm">Quantifying operational efficiency over the last 30 days.</p>
</div>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="text-xs text-on-surface-variant font-mono-data uppercase">Active Output</span>
</div>
</div>
<!-- SVG Chart Representation -->
<div class="h-64 w-full relative">
<svg class="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 200">
<defs>
<lineargradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:rgba(165,231,255,0.2); stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:rgba(165,231,255,0); stop-opacity:1"></stop>
</lineargradient>
</defs>
<!-- Grid lines -->
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="rgba(255,255,255,0.05)" stroke-width="1" x1="0" x2="800" y1="150" y2="150"></line>
<!-- Area Path -->
<path d="M0,180 Q100,160 200,120 T400,100 T600,140 T800,40 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>
<!-- Line Path -->
<path class="chart-line-anim" d="M0,180 Q100,160 200,120 T400,100 T600,140 T800,40" fill="none" stroke="#a5e7ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
<!-- Interaction Dots -->
<circle class="animate-pulse shadow-glow" cx="200" cy="120" fill="#a5e7ff" r="4"></circle>
<circle cx="800" cy="40" fill="#a5e7ff" r="4"></circle>
</svg>
<!-- Axis Labels -->
<div class="flex justify-between mt-4 text-[10px] font-mono-data text-outline uppercase tracking-wider">
<span>Wk 01</span>
<span>Wk 02</span>
<span>Wk 03</span>
<span>Wk 04 (Current)</span>
</div>
</div>
</div>
<!-- Recent Activity Feed -->
<div class="glass-card bg-surface-container/40 p-8 rounded-xl border border-outline-variant/10">
<h3 class="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6">Recent Activity</h3>
<div class="space-y-6">
<div class="flex gap-4">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary text-[20px]">hub</span>
</div>
<div class="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/30"></div>
</div>
<div>
<p class="text-sm text-on-surface font-medium">Simulation Approved</p>
<p class="text-xs text-on-surface-variant">L-9 Urban Corridor Optimization</p>
<p class="text-[10px] text-outline mt-1 uppercase font-mono-data">2 hours ago</p>
</div>
</div>
<div class="flex gap-4">
<div class="relative">
<div class="w-10 h-10 rounded-full bg-primary-container/50 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-[20px]">analytics</span>
</div>
<div class="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/30"></div>
</div>
<div>
<p class="text-sm text-on-surface font-medium">Dataset Analysis Complete</p>
<p class="text-xs text-on-surface-variant">SF Transit Grid (Batch #442)</p>
<p class="text-[10px] text-outline mt-1 uppercase font-mono-data">5 hours ago</p>
</div>
</div>
<div class="flex gap-4">
<div class="">
<div class="w-10 h-10 rounded-full bg-tertiary-container/50 flex items-center justify-center">
<span class="material-symbols-outlined text-tertiary text-[20px]">notifications_active</span>
</div>
</div>
<div>
<p class="text-sm text-on-surface font-medium">Security Alert Handled</p>
<p class="text-xs text-on-surface-variant">API Gateway unauthorized attempt</p>
<p class="text-[10px] text-outline mt-1 uppercase font-mono-data">Yesterday</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Bottom Navigation (Mobile Only) -->
<nav class="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low/90 backdrop-blur-xl flex justify-around py-4 border-t border-outline-variant/10 z-50 px-6">
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-[10px] font-bold uppercase tracking-tighter">Dash</span>
</a>
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="text-[10px] font-bold uppercase tracking-tighter">Analysis</span>
</a>
<div class="relative -top-8">
<button class="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[32px]">play_arrow</span>
</button>
</div>
<a class="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="text-[10px] font-bold uppercase tracking-tighter">Knowledge</span>
</a>
<a class="flex flex-col items-center gap-1 text-primary" href="/profile">
<span class="material-symbols-outlined font-variation-settings: 'FILL' 1">person</span>
<span class="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
</a>
</nav>
<script>
        // Micro-interactions and effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => {
                button.classList.add('scale-95');
            });
            button.addEventListener('mouseup', () => {
                button.classList.remove('scale-95');
            });
        });

        // Simple parallax effect for shader container
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            const shader = document.querySelector('webgl-shader');
            if (shader) {
                shader.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    </script>
</body></html>