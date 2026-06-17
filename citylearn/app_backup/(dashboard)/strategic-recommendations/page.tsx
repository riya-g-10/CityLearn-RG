<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn Recommendations | Sector 7-G</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;display=swap" rel="stylesheet"/>
<style>
        @layer base {
            body {
                @apply bg-background text-on-surface font-body-md;
                margin: 0;
                overflow-x: hidden;
            }
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
        }

        .glass-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
            pointer-events: none;
        }

        .glow-primary {
            box-shadow: 0 0 20px rgba(71, 214, 255, 0.4);
        }

        .glow-button:hover {
            box-shadow: 0 0 30px rgba(0, 210, 255, 0.6);
            transform: translateY(-2px);
        }

        .pulse-neural {
            animation: neural-pulse 3s infinite ease-in-out;
        }

        @keyframes neural-pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }

        .neon-line {
            stroke-dasharray: 8;
            animation: dash 20s linear infinite;
        }

        @keyframes dash {
            to { stroke-dashoffset: -1000; }
        }

        .map-container {
            mask-image: radial-gradient(circle at center, black 60%, transparent 100%);
        }
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
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "data-mono": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                        "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-background flex">
<!-- SideNavBar -->
<aside class="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 border-r border-white/10 bg-surface/15 backdrop-blur-2xl py-8 z-[60] shadow-[0_0_20px_rgba(71,214,255,0.1)]">
<div class="px-6 mb-10 flex items-center gap-3">
<div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-on-primary text-sm">hub</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary leading-tight">CityLearn</h1>
<p class="font-label-caps text-[10px] text-on-surface-variant opacity-60">Neural Intelligence</p>
</div>
</div>
<nav class="flex-1 space-y-1">
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">dashboard</span>Dashboard
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">analytics</span>Analysis
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">compare_arrows</span>Similar Events
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">online_prediction</span>Predictions
            </a>
<!-- Active Tab -->
<a class="flex items-center px-6 py-3 text-primary font-bold border-r-2 border-primary bg-white/5 transition-all" href="#">
<span class="material-symbols-outlined mr-4">recommend</span>Recommendations
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">precision_manufacturing</span>Simulator
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">replay</span>Replay
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">hub</span>Knowledge Graph
            </a>
<a class="flex items-center px-6 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span class="material-symbols-outlined mr-4">psychology</span>Learning Loop
            </a>
</nav>
<div class="px-6 mt-auto">
<div class="p-4 rounded-xl glass-card">
<p class="font-label-caps text-[10px] text-tertiary mb-1">SYSTEM UPTIME</p>
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary pulse-neural"></span>
<span class="font-data-mono text-xs text-on-surface">99.98% Synced</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 md:ml-64 min-h-screen flex flex-col relative overflow-hidden">
<!-- Background Animation -->
<!-- TopAppBar -->
<header class="sticky top-0 z-50 flex justify-between items-center w-full px-8 h-16 bg-surface/10 backdrop-blur-3xl border-b border-white/10">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5">
<span class="material-symbols-outlined text-primary text-sm">search</span>
<input class="bg-transparent border-none focus:ring-0 text-body-md text-on-surface-variant w-64 placeholder-on-surface-variant/40" placeholder="Search neural patterns..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<button class="text-on-surface-variant hover:text-primary transition-colors">
<span class="material-symbols-outlined">sensors</span>
</button>
<button class="text-on-surface-variant hover:text-primary transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full"></span>
</button>
<div class="h-8 w-[1px] bg-white/10"></div>
<div class="flex items-center gap-3">
<span class="text-right hidden sm:block">
<p class="font-label-caps text-[10px] text-on-surface">ADMIN_04</p>
<p class="font-data-mono text-[9px] text-on-surface-variant">L7 ACCESS</p>
</span>
<img alt="Administrator Profile" class="w-10 h-10 rounded-full border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMtJNatcTcZGzwDTRdBsTwkVXdEwj9Rpuc4asNYkuAYP1UZWCGfgT_cNeHB67Z_eSBIx1q86nu8vX_loqVp1K264sf3YlqWVDO8G47P-wxzu6Sv-DivbflDlCO59ORusWLsN655u1TQTlae2tZDN8EdlIvwLsGLqwoUT6fS-idroDtx_l-XRByWLDz5vVfPKfSy4MTR9tThgyb1Ouku8DVbYj4XnNu6i9VxudTp8sRN0N253KlfNAY-uHAxPjzwiDADhFD-Q7FM2E"/>
</div>
</div>
</header>
<!-- Page Content -->
<div class="flex-1 px-8 py-8 relative z-10 grid grid-cols-12 gap-8">
<!-- Header Section -->
<div class="col-span-12 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
<div>
<div class="flex items-center gap-3 mb-2">
<span class="px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full font-label-caps text-[10px]">PREDICTIVE RESPONSE</span>
<span class="text-on-surface-variant font-data-mono text-xs">LOG_ID: #X7G-ANOMALY-0092</span>
</div>
<h2 class="font-headline-xl text-headline-xl text-on-surface leading-none tracking-tight">Response Strategies for Sector 7-G Anomaly</h2>
</div>
<div class="flex gap-4">
<div class="glass-card px-6 py-4 rounded-xl min-w-[160px]">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-1">IMPACT SCORE</p>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-primary text-3xl">94</span>
<span class="font-data-mono text-sm text-on-surface-variant">/ 100</span>
</div>
</div>
<div class="glass-card px-6 py-4 rounded-xl min-w-[160px]">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-1">EFFICIENCY</p>
<div class="flex items-baseline gap-2">
<span class="font-headline-md text-tertiary text-3xl">+22%</span>
<span class="material-symbols-outlined text-tertiary text-sm">trending_up</span>
</div>
</div>
</div>
</div>
<!-- Main Map View (Bento Grid Style) -->
<div class="col-span-12 lg:col-span-8 space-y-8">
<div class="glass-card rounded-2xl h-[500px] relative overflow-hidden group">
<div class="absolute inset-0 bg-[#0e0e10]">
<img class="w-full h-full object-cover opacity-20 grayscale scale-110 blur-sm" data-alt="A dark, high-contrast overhead map of a futuristic urban city grid with complex street patterns. The lighting is moody and technological, using a palette of deep blacks, greys, and faint digital glows. The map shows intricate details of intersections and buildings, providing a realistic yet stylized foundation for a neural intelligence monitoring system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQKhfAB-NqVn4jrd8F9yh22RO0Sz0KzRTcQYzP8x0Ag5Y1cCiA4pPp55_Vq0UAcxV0xrwFyV5C3RqHw0Af4zRN8rHIJ77WeJgzP_Om88txChfruf_RZD54Eux7uvUAjn3DY7yYlNLAy0NXZQ0_9fHUczE93RdmhOA_NzQDYW7ektCLzCpSdnlXnVoNc6FQW3Zlxu_FZFj9pPHMqESi1NjhUVQa2WmrtiMclksru9E2im1z0CZvzz3YhMrna1vXxfA5eRmLg2gahmU"/>
<!-- Animated SVG Map Overlay -->
<svg class="absolute inset-0 w-full h-full map-container" fill="none" viewbox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
<!-- Intersection Points -->
<circle class="pulse-neural" cx="300" cy="200" fill="#47d6ff" r="4"></circle>
<circle class="pulse-neural" cx="500" cy="400" fill="#47d6ff" r="4" style="animation-delay: 1s;"></circle>
<circle class="pulse-neural" cx="700" cy="250" fill="#47d6ff" r="4" style="animation-delay: 2s;"></circle>
<!-- Glowing Routes -->
<path class="neon-line" d="M300 200 L500 400 L700 250" stroke="#00d2ff" stroke-dasharray="10 15" stroke-width="3" style="filter: drop-shadow(0 0 8px #00d2ff);"></path>
<path class="neon-line" d="M300 200 L150 150 M500 400 L550 550 M700 250 L850 300" stroke="#00d2ff" stroke-dasharray="5 10" stroke-width="2"></path>
<!-- Zone Highlights -->
<rect fill="#00d2ff" fill-opacity="0.05" height="100" stroke="#00d2ff" stroke-width="1" width="100" x="450" y="350"></rect>
<text fill="#00d2ff" font-family="Space Mono" font-size="10" x="460" y="375">SECTOR_ANOMALY_CORE</text>
</svg>
</div>
<div class="absolute top-6 left-6 flex flex-col gap-2">
<div class="glass-card bg-surface/80 border-white/20 rounded-lg px-4 py-2 flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm">navigation</span>
<span class="font-data-mono text-xs text-on-surface">LIVE: Diversion Vectors Active</span>
</div>
</div>
<div class="absolute bottom-6 right-6">
<div class="glass-card bg-surface/90 border-white/20 p-4 rounded-xl flex flex-col gap-2 min-w-[200px]">
<p class="font-label-caps text-[10px] text-on-surface-variant">COST ESTIMATE</p>
<p class="font-headline-md text-on-surface text-2xl">$4.2k <span class="text-xs font-normal opacity-50">/ deployment</span></p>
</div>
</div>
</div>
<!-- Recommendation Cards Cluster -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all cursor-pointer">
<div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">local_police</span>
</div>
<h4 class="font-headline-md text-on-surface mb-2">Officer Deployment</h4>
<p class="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Primary response unit allocation for localized containment and traffic stabilization.</p>
<div class="flex justify-between items-center pt-4 border-t border-white/10">
<span class="font-label-caps text-[10px] text-primary">PRIORITY: HIGH</span>
<span class="material-symbols-outlined text-on-surface-variant text-sm">arrow_forward</span>
</div>
</div>
<div class="glass-card p-6 rounded-2xl group hover:border-secondary/50 transition-all cursor-pointer">
<div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
<span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">fence</span>
</div>
<h4 class="font-headline-md text-on-surface mb-2">Barricade Plan</h4>
<p class="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Hard control measures involving autonomous barrier systems to prevent corridor saturation.</p>
<div class="flex justify-between items-center pt-4 border-t border-white/10">
<span class="font-label-caps text-[10px] text-secondary">MODE: HARD CONTROL</span>
<span class="material-symbols-outlined text-on-surface-variant text-sm">arrow_forward</span>
</div>
</div>
<div class="glass-card p-6 rounded-2xl group hover:border-tertiary/50 transition-all cursor-pointer">
<div class="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6 border border-tertiary/20 group-hover:bg-tertiary/20 transition-colors">
<span class="material-symbols-outlined text-tertiary" style="font-variation-settings: 'FILL' 1;">alt_route</span>
</div>
<h4 class="font-headline-md text-on-surface mb-2">Diversion Strategy</h4>
<p class="font-body-md text-on-surface-variant text-sm mb-4 leading-relaxed">Dynamic rerouting through smart-infrastructure signal manipulation to optimize flow.</p>
<div class="flex justify-between items-center pt-4 border-t border-white/10">
<span class="font-label-caps text-[10px] text-tertiary">TYPE: FLOW OPT</span>
<span class="material-symbols-outlined text-on-surface-variant text-sm">arrow_forward</span>
</div>
</div>
</div>
</div>
<!-- Sidebar Statistics -->
<div class="col-span-12 lg:col-span-4 space-y-8">
<div class="glass-card p-8 rounded-3xl h-full flex flex-col">
<div class="mb-10">
<h3 class="font-headline-md text-on-surface mb-6">Neural Analysis</h3>
<div class="space-y-6">
<div class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary-container">savings</span>
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">RESOURCE SAVINGS</p>
<p class="font-headline-md text-on-surface">18.4%</p>
</div>
</div>
<span class="font-data-mono text-[10px] text-tertiary">ESTIMATED</span>
</div>
<div class="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-secondary">speed</span>
<div>
<p class="font-label-caps text-[10px] text-on-surface-variant">OPTIMIZATION TIME</p>
<p class="font-headline-md text-on-surface">142ms</p>
</div>
</div>
<span class="font-data-mono text-[10px] text-tertiary">PEAK</span>
</div>
</div>
</div>
<div class="mb-10">
<p class="font-label-caps text-[10px] text-on-surface-variant mb-4">CONFIDENCE THRESHOLD</p>
<div class="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary glow-primary w-[88%]"></div>
</div>
<div class="flex justify-between mt-2">
<span class="font-data-mono text-[10px] text-on-surface-variant">Min: 70%</span>
<span class="font-data-mono text-[10px] text-primary">Current: 88%</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-end gap-6">
<div class="p-4 rounded-2xl bg-primary/5 border border-primary/20">
<p class="font-body-md text-on-surface-variant text-sm italic">"Implementing current diversion vectors will reduce gridlock in adjacent Sector 7-F by approximately 14% within 10 minutes of activation."</p>
</div>
<button class="glow-button glow-primary w-full py-6 bg-primary text-on-primary rounded-2xl font-headline-md flex items-center justify-center gap-3 transition-all active:scale-95">
<span class="material-symbols-outlined">verified</span>
                            Approve Recommendation
                        </button>
<button class="w-full py-4 bg-transparent border border-white/10 text-on-surface-variant rounded-2xl font-label-caps text-xs hover:bg-white/5 transition-all">
                            SIMULATE VARIANT B
                        </button>
</div>
</div>
</div>
</div>
<!-- Footer / Global Status -->
<footer class="px-8 py-4 bg-surface/5 border-t border-white/5 mt-auto flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span class="font-data-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Mainframe Connected</span>
</div>
<div class="w-[1px] h-4 bg-white/10"></div>
<p class="font-data-mono text-[10px] text-on-surface-variant">STABILITY_METRIC: 0.99224</p>
</div>
<div class="flex items-center gap-6 font-data-mono text-[10px] text-on-surface-variant/60">
<span>VER: 4.1.2-ALPHA</span>
<span>© 2024 CITYLEARN INTELLIGENCE</span>
</div>
</footer>
</main>
<script>
        // Micro-interaction for hover effects and dynamic mapping
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Pulsing Neural Indicator randomization
        const pulses = document.querySelectorAll('.pulse-neural');
        pulses.forEach(p => {
            p.style.animationDuration = (2 + Math.random() * 3) + 's';
            p.style.animationDelay = Math.random() * 2 + 's';
        });
    </script>
</body></html>