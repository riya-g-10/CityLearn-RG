<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn Intelligence | Event Analysis</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        :root {
            --glass-bg: rgba(255, 255, 255, 0.1);
            --glass-border: rgba(255, 255, 255, 0.1);
            --neon-blue: #47d6ff;
            --neon-purple: #edb1ff;
        }

        body {
            background-color: #0a0a0c;
            color: #e5e1e4;
            overflow-x: hidden;
        }

        .glass-card {
            backdrop-filter: blur(20px);
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-image: linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent) 1;
        }

        .glow-button-primary {
            box-shadow: 0 0 15px rgba(71, 214, 255, 0.4);
            transition: all 0.3s ease;
        }
        .glow-button-primary:hover {
            box-shadow: 0 0 25px rgba(71, 214, 255, 0.6);
            transform: translateY(-1px);
        }

        .neural-pulse {
            animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
            100% { opacity: 0.4; transform: scale(1); }
        }

        .dna-segment {
            height: 4px;
            border-radius: 2px;
            background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
            opacity: 0.6;
            transition: width 1s ease-out;
        }

        .scanning-line {
            position: absolute;
            height: 2px;
            width: 100%;
            background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
            top: 0;
            animation: scan 3s infinite linear;
        }

        @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
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
<body class="font-body-md text-on-surface">
<!-- Top AppBar -->
<header class="fixed top-0 left-0 right-0 z-50 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center w-full px-spacing-margin-desktop h-16">
<div class="flex items-center gap-4">
<span class="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">CityLearn</span>
<div class="h-4 w-px bg-white/20"></div>
<span class="font-label-caps text-label-caps text-on-surface-variant">Neural Intelligence</span>
</div>
<div class="hidden md:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full w-96">
<span class="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input class="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant" placeholder="Search neural pathways..." type="text"/>
</div>
<div class="flex items-center gap-6">
<button class="relative hover:text-primary transition-colors">
<span class="material-symbols-outlined">sensors</span>
<span class="absolute top-0 right-0 w-2 h-2 bg-tertiary rounded-full neural-pulse"></span>
</button>
<button class="hover:text-primary transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="w-8 h-8 rounded-full border border-primary/30 p-0.5">
<img alt="Administrator Profile" class="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2ScOCsbQdKwozCclBzk7h-MoMCoD8aytDHBKFQQ3exJsElXSUcksKwX9nJ5AONIMec72-Ya6fWuYq6WW2cKiL3edpzbcuIXEHDWQrGATpOkpmw9LUv2yh5gcuaUVTO5ehIiW7IYJ0ZSiPZzFBg53yMbVPARTLzPgHcWNyVKyXzQZOnNnH5ZjMXIN4p4d34yHP9N8Vi_0LPMGRteGC6ITQ0w7ohrc70Mn2md3WEu63goN1NodfY87sZdeywx4Zcnd-ojHhubNM4Q"/>
</div>
</div>
</header>
<div class="flex h-screen pt-16">
<!-- Side Navigation -->
<aside class="hidden md:flex flex-col w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl py-spacing-margin-desktop">
<nav class="flex-1 px-4 space-y-2">
<!-- Navigation Items -->
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined group-hover:scale-110 duration-200">dashboard</span>
<span class="font-label-caps text-label-caps">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-primary/5 rounded-lg group" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-label-caps text-label-caps">Analysis</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">compare_arrows</span>
<span class="font-label-caps text-label-caps">Similar Events</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">online_prediction</span>
<span class="font-label-caps text-label-caps">Predictions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">recommend</span>
<span class="font-label-caps text-label-caps">Recommendations</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">precision_manufacturing</span>
<span class="font-label-caps text-label-caps">Simulator</span>
</a>
<div class="pt-8 pb-2 px-4">
<span class="text-[10px] text-on-surface-variant/50 font-label-caps">SYSTEM CORE</span>
</div>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="font-label-caps text-label-caps">Knowledge Graph</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="#">
<span class="material-symbols-outlined">psychology</span>
<span class="font-label-caps text-label-caps">Learning Loop</span>
</a>
</nav>
<div class="px-6 py-4 mt-auto">
<div class="glass-card p-4 rounded-xl border-primary/20 bg-primary/5">
<div class="flex items-center gap-2 mb-2">
<span class="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span class="text-[10px] font-label-caps text-tertiary">NEURAL LINK ACTIVE</span>
</div>
<p class="text-xs text-on-surface-variant leading-relaxed">System observing real-time urban evolution in Zone 4.</p>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 overflow-y-auto p-spacing-margin-desktop bg-[#0a0a0c]">
<div class="max-w-container-max mx-auto h-full flex flex-col md:flex-row gap-spacing-gutter">
<!-- Left Column: Event Form -->
<section class="flex-1 flex flex-col space-y-6">
<div class="space-y-2">
<h1 class="font-headline-lg text-headline-lg text-on-surface">Analyze New Event</h1>
<p class="text-on-surface-variant font-body-md max-w-lg">Input urban dynamics to trigger CityLearn’s signature recognition and similarity mapping engine.</p>
</div>
<form class="glass-card p-8 rounded-xl space-y-6 relative overflow-hidden group">
<div class="scanning-line opacity-20"></div>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="font-label-caps text-label-caps text-primary/70">EVENT TYPE</label>
<select class="w-full bg-surface-container border border-white/10 rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
<option>Public Assembly</option>
<option>Infrastructure Failure</option>
<option>Transit Surge</option>
<option>Dynamic Maintenance</option>
</select>
</div>
<div class="space-y-2">
<label class="font-label-caps text-label-caps text-primary/70">LOCATION</label>
<div class="relative">
<input class="w-full bg-surface-container/50 border border-white/10 rounded-lg p-3 text-on-surface-variant font-data-mono cursor-not-allowed" readonly="" type="text" value="Zone 4"/>
<span class="absolute right-3 top-3 material-symbols-outlined text-sm opacity-50">lock</span>
</div>
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="font-label-caps text-label-caps text-primary/70">DURATION (EST.)</label>
<div class="flex gap-2">
<input class="w-full bg-surface-container border border-white/10 rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="number" value="120"/>
<span class="flex items-center px-3 font-label-caps text-xs bg-white/5 rounded-lg border border-white/10">MIN</span>
</div>
</div>
<div class="space-y-2">
<label class="font-label-caps text-label-caps text-primary/70">CLOSURE STATUS</label>
<div class="flex items-center gap-4 bg-surface-container border border-white/10 rounded-lg p-3 h-[50px]">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox"/>
<div class="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
<span class="ms-3 font-body-md text-sm">Full Closure</span>
</label>
</div>
</div>
</div>
<div class="space-y-2">
<label class="font-label-caps text-label-caps text-primary/70">ATTENDANCE ESTIMATE</label>
<input class="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
<div class="flex justify-between font-data-mono text-[10px] text-on-surface-variant uppercase">
<span>Low Density</span>
<span>15,000 Nodes</span>
<span>Extreme Surge</span>
</div>
</div>
<div class="pt-4">
<button class="w-full bg-primary-container text-on-primary-container font-headline-md py-4 rounded-xl flex items-center justify-center gap-3 glow-button-primary group/btn overflow-hidden relative" type="button">
<span class="relative z-10">Run Neural Synthesis</span>
<span class="material-symbols-outlined relative z-10 group-hover/btn:translate-x-2 transition-transform">bolt</span>
</button>
</div>
</form>
<div class="grid grid-cols-3 gap-4">
<div class="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1">
<span class="text-on-surface-variant font-label-caps text-[10px]">SIMILARITY</span>
<span class="text-primary font-headline-md text-2xl font-bold">89%</span>
</div>
<div class="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1 border-tertiary/20">
<span class="text-on-surface-variant font-label-caps text-[10px]">CONFIDENCE</span>
<span class="text-tertiary font-headline-md text-2xl font-bold">94%</span>
</div>
<div class="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1">
<span class="text-on-surface-variant font-label-caps text-[10px]">LATENCY</span>
<span class="text-on-surface font-headline-md text-2xl font-bold">12ms</span>
</div>
</div>
</section>
<!-- Right Column: Visualization -->
<section class="flex-1 flex flex-col space-y-6">
<div class="flex items-center justify-between">
<h2 class="font-label-caps text-label-caps text-on-surface-variant">Signature Recognition Canvas</h2>
<span class="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-label-caps text-primary">REAL-TIME EMBEDDING</span>
</div>
<div class="glass-card flex-1 rounded-xl relative p-8 flex flex-col items-center justify-center overflow-hidden">
<!-- Background ThreeJS Placeholder -->
<div class="absolute inset-0 opacity-40 pointer-events-none"></div>
<!-- Neural DNA Display -->
<div class="relative z-10 w-full max-w-md space-y-8">
<div class="text-center space-y-2">
<h3 class="font-headline-md text-on-surface">CityLearn Signature</h3>
<p class="text-on-surface-variant text-sm font-data-mono">Hash: 0xFD44...88BE</p>
</div>
<!-- DNA-Style Signature Visualizer -->
<div class="space-y-4 py-8">
<div class="flex items-center gap-4">
<div class="dna-segment w-[40%]"></div>
<div class="dna-segment w-[20%] opacity-20"></div>
<div class="dna-segment w-[30%]"></div>
</div>
<div class="flex items-center gap-4 flex-row-reverse">
<div class="dna-segment w-[60%]"></div>
<div class="dna-segment w-[10%]"></div>
<div class="dna-segment w-[25%] opacity-40"></div>
</div>
<div class="flex items-center gap-4">
<div class="dna-segment w-[15%]"></div>
<div class="dna-segment w-[45%]"></div>
<div class="dna-segment w-[35%] opacity-60"></div>
</div>
<div class="flex items-center gap-4 flex-row-reverse">
<div class="dna-segment w-[30%] opacity-30"></div>
<div class="dna-segment w-[50%]"></div>
<div class="dna-segment w-[15%]"></div>
</div>
<div class="flex items-center gap-4">
<div class="dna-segment w-[20%]"></div>
<div class="dna-segment w-[20%]"></div>
<div class="dna-segment w-[50%]"></div>
</div>
</div>
<!-- Node Graph Embedding (Mini) -->
<div class="glass-card p-6 rounded-xl bg-black/40 border-white/5 relative">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-sm text-primary">hub</span>
<span class="text-[10px] font-label-caps">Feature Embedding Projection</span>
</div>
<div class="grid grid-cols-5 gap-6 h-32 items-center justify-items-center">
<div class="relative">
<div class="w-2 h-2 rounded-full bg-primary neural-pulse"></div>
<div class="absolute inset-0 bg-primary/20 blur-md"></div>
</div>
<div class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div class="w-2 h-2 rounded-full bg-secondary neural-pulse" style="animation-delay: 0.5s"></div>
<div class="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div class="w-3 h-3 rounded-full bg-primary-container neural-pulse" style="animation-delay: 1.2s"></div>
<div class="w-1 h-1 rounded-full bg-white/10"></div>
<div class="w-2.5 h-2.5 rounded-full bg-tertiary neural-pulse" style="animation-delay: 0.8s"></div>
<div class="w-1 h-1 rounded-full bg-white/10"></div>
<div class="w-2 h-2 rounded-full bg-white/40"></div>
<div class="w-1 h-1 rounded-full bg-white/10"></div>
</div>
<!-- Connection Lines (SVG Pattern) -->
<svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20" stroke="white" stroke-width="0.5">
<line x1="20%" x2="40%" y1="30%" y2="70%"></line>
<line x1="40%" x2="80%" y1="70%" y2="40%"></line>
<line x1="80%" x2="50%" y1="40%" y2="20%"></line>
<line x1="50%" x2="20%" y1="20%" y2="30%"></line>
</svg>
</div>
</div>
<!-- Data Summary Floating Badge -->
<div class="absolute bottom-8 right-8 flex flex-col items-end gap-2">
<div class="flex items-center gap-3 bg-surface-container-highest/60 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
<span class="font-label-caps text-[10px] text-on-surface-variant">NODE CLUSTER IDENTIFIED</span>
<span class="text-tertiary font-bold font-data-mono">V4-Z4-S9</span>
</div>
</div>
</div>
<!-- Recommended Action Module -->
<div class="glass-card p-6 rounded-xl flex items-center justify-between border-primary/10">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1">recommend</span>
</div>
<div>
<h4 class="font-headline-md text-sm text-on-surface">Primary Recommendation</h4>
<p class="text-xs text-on-surface-variant">Redirect Transit Line 84 due to high similarity with 'Olympiad Surge 2022'</p>
</div>
</div>
<button class="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-label-caps transition-all">VIEW CASE</button>
</div>
</section>
</div>
</main>
</div>
<!-- Micro-interaction Script -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const dnaSegments = document.querySelectorAll('.dna-segment');
        
        // Randomize DNA segment widths slightly on a loop to simulate active processing
        setInterval(() => {
            dnaSegments.forEach(segment => {
                const baseWidth = parseInt(segment.style.width) || 40;
                const jitter = (Math.random() - 0.5) * 10;
                const newWidth = Math.max(10, Math.min(90, baseWidth + jitter));
                segment.style.width = `${newWidth}%`;
            });
        }, 3000);

        // Pulse effect for analysis button
        const runBtn = document.querySelector('.glow-button-primary');
        if (runBtn) {
            runBtn.addEventListener('mousedown', () => {
                runBtn.style.transform = 'scale(0.95)';
            });
            runBtn.addEventListener('mouseup', () => {
                runBtn.style.transform = 'scale(1)';
            });
        }
    });
</script>
</body></html>