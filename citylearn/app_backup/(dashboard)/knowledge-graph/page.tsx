<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CityLearn Intelligence | Knowledge Graph</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;family=Space+Mono:wght@400;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }
        .neural-pulse { animation: pulse-dot 2s infinite ease-in-out; }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neon-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 5s linear infinite;
        }

        @keyframes dash {
            to { stroke-dashoffset: 0; }
        }

        .node-glow {
            filter: drop-shadow(0 0 8px var(--tw-shadow-color));
        }

        /* Custom scrollbar for high-tech feel */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
        ::-webkit-scrollbar-thumb { background: #47d6ff; border-radius: 10px; }
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
<body class="bg-background text-on-surface font-body-md selection:bg-primary/30 overflow-hidden h-screen flex">
<!-- Side Navigation Bar -->
<aside class="docked left-0 h-screen w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl flex flex-col py-8 z-50">
<div class="px-6 mb-10 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">hub</span>
</div>
<div>
<h1 class="font-headline-md text-headline-md font-bold text-primary leading-none">CityLearn</h1>
<p class="text-[10px] font-label-caps text-on-surface-variant uppercase tracking-widest mt-1">Neural Intelligence</p>
</div>
</div>
<nav class="flex-1 space-y-1 px-4">
<!-- Navigation Items Mapping -->
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">dashboard</span>
<span>Dashboard</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">analytics</span>
<span>Analysis</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">compare_arrows</span>
<span>Similar Events</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">online_prediction</span>
<span>Predictions</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">recommend</span>
<span>Recommendations</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">precision_manufacturing</span>
<span>Simulator</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">replay</span>
<span>Replay</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group bg-white/5 text-primary font-bold border-r-2 border-primary" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">hub</span>
<span>Knowledge Graph</span>
</a>
<a class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all group hover:bg-white/5 text-on-surface-variant font-body-md" href="#">
<span class="material-symbols-outlined group-hover:text-primary">psychology</span>
<span>Learning Loop</span>
</a>
</nav>
<div class="px-6 pt-6 mt-6 border-t border-white/5">
<div class="flex items-center gap-3 p-3 bg-white/5 rounded-2xl">
<img alt="Administrator Profile" class="w-10 h-10 rounded-full border border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRztDtabZEiPWRMHXpELzIwlUQm1mgzM1QjimqmbNbHuOppNZQQ4QEmKss5suwl7T2hrrN-pNyvZ9G4F7kYKaXNURCk_gpYrQ18Vn_Wb5ltl7UsRJlYHQmUPMuRSFebrn3Mo6sB2sTf6_eoxKHNdqtF5QHKhIB3lpOc0PjRc0-Ave8M8THkQEqGfsPiKAea7FFLZbZvnNf7qsyBde3fe2LbThhON87fcCt26CW4C50y0cUvn6aSHtpUVg7wPCpfb4TcyWu5ijAfq4"/>
<div class="flex-1 overflow-hidden">
<p class="text-on-surface font-bold text-sm truncate">Admin_Root</p>
<p class="text-xs text-on-surface-variant truncate">Institutional Tier</p>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<main class="flex-1 flex flex-col relative overflow-hidden">
<!-- Top App Bar -->
<header class="flex justify-between items-center w-full px-8 h-16 border-b border-white/10 bg-surface/10 backdrop-blur-3xl z-40">
<div class="flex items-center gap-8">
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input class="bg-white/5 border-none rounded-full pl-10 pr-6 py-1.5 w-64 focus:ring-1 focus:ring-primary text-sm font-body-md transition-all" placeholder="Search institutional data..." type="text"/>
</div>
</div>
<div class="flex items-center gap-6">
<div class="flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
<div class="w-2 h-2 rounded-full bg-primary neural-pulse"></div>
<span class="text-[10px] font-label-caps text-primary tracking-widest">LIVE NEURAL SYNC</span>
</div>
<div class="flex gap-4">
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">sensors</button>
<button class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
</div>
</div>
</header>
<!-- Canvas Background -->
<div class="absolute inset-0 z-0 opacity-40">
</div>
<!-- Graph Viewport -->
<div class="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing" id="graph-container">
<!-- Node Connectivity (SVG Overlay) -->
<svg class="absolute inset-0 w-full h-full pointer-events-none" id="graph-edges">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style="stop-color:#a5e7ff;stop-opacity:0.2"></stop>
<stop offset="50%" style="stop-color:#a5e7ff;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#a5e7ff;stop-opacity:0.2"></stop>
</lineargradient>
</defs>
<!-- Animated Paths (Calculated via JS) -->
</svg>
<!-- Nodes Layer -->
<div class="relative w-full h-full p-20" id="nodes-layer">
<!-- Concert Node -->
<div class="absolute top-[20%] left-[10%] node group" data-id="node-1">
<div class="glass-card p-6 rounded-2xl border-primary/30 w-56 transform transition hover:scale-105 hover:border-primary cursor-pointer shadow-[0_0_20px_rgba(71,214,255,0.1)]">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-primary text-3xl">festival</span>
<div class="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-label-caps text-primary">ROOT EVENT</div>
</div>
<h3 class="font-headline-md text-sm font-bold text-on-surface">Summer Festival</h3>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">ID: EV-8892-C</p>
</div>
</div>
<!-- Road Closure Node -->
<div class="absolute top-[15%] left-[35%] node group" data-id="node-2">
<div class="glass-card p-6 rounded-2xl border-secondary/30 w-56 transform transition hover:scale-105 hover:border-secondary cursor-pointer">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-secondary text-3xl">block</span>
<div class="px-2 py-0.5 bg-secondary/10 border border-secondary/20 rounded text-[10px] font-label-caps text-secondary">CAUSALITY</div>
</div>
<h3 class="font-headline-md text-sm font-bold text-on-surface">Main St. Closure</h3>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">Radius: 2.4km</p>
</div>
</div>
<!-- Congestion Node -->
<div class="absolute top-[45%] left-[45%] node group" data-id="node-3">
<div class="glass-card p-6 rounded-2xl border-error/30 w-56 transform transition hover:scale-105 hover:border-error cursor-pointer">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-error text-3xl">traffic</span>
<div class="px-2 py-0.5 bg-error/10 border border-error/20 rounded text-[10px] font-label-caps text-error">IMPACT</div>
</div>
<h3 class="font-headline-md text-sm font-bold text-on-surface">Gridlock Cascade</h3>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">Severity: CRITICAL</p>
</div>
</div>
<!-- Diversion Strategy Node -->
<div class="absolute top-[65%] left-[20%] node group" data-id="node-4">
<div class="glass-card p-6 rounded-2xl border-tertiary/30 w-56 transform transition hover:scale-105 hover:border-tertiary cursor-pointer">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-tertiary text-3xl">route</span>
<div class="px-2 py-0.5 bg-tertiary/10 border border-tertiary/20 rounded text-[10px] font-label-caps text-tertiary">STRATEGY</div>
</div>
<h3 class="font-headline-md text-sm font-bold text-on-surface">Neural Rerouting</h3>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">Confidence: 94%</p>
</div>
</div>
<!-- Outcome Node -->
<div class="absolute top-[75%] left-[60%] node group" data-id="node-5">
<div class="glass-card p-6 rounded-2xl border-primary/30 w-56 transform transition hover:scale-105 hover:border-primary cursor-pointer ring-1 ring-primary/20">
<div class="flex items-center justify-between mb-4">
<span class="material-symbols-outlined text-primary text-3xl">task_alt</span>
<div class="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-[10px] font-label-caps text-primary">OUTCOME</div>
</div>
<h3 class="font-headline-md text-sm font-bold text-on-surface">Latency Reduced</h3>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">Δ Efficiency: +18%</p>
</div>
</div>
</div>
</div>
<!-- Floating Control Bar -->
<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-surface-container/60 backdrop-blur-xl border border-white/10 rounded-full z-40">
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-on-surface transition-colors">
<span class="material-symbols-outlined">zoom_in</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-on-surface transition-colors">
<span class="material-symbols-outlined">zoom_out</span>
</button>
<div class="w-px h-6 bg-white/10 mx-1"></div>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-on-surface transition-colors">
<span class="material-symbols-outlined">filter_center_focus</span>
</button>
<button class="px-4 py-2 bg-primary text-on-primary font-bold rounded-full text-xs font-label-caps hover:bg-primary-container transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-sm">play_arrow</span> RUN SIMULATION
            </button>
</div>
</main>
<!-- Side Panel: Metadata -->
<aside class="w-80 h-screen border-l border-white/10 bg-surface/15 backdrop-blur-3xl z-50 flex flex-col">
<div class="p-8 border-b border-white/10">
<h2 class="font-headline-md text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary">database</span>
                Node Metadata
            </h2>
<p class="text-xs text-on-surface-variant mt-2 font-data-mono">Selected: OBJECT_774</p>
</div>
<div class="flex-1 overflow-y-auto p-8 space-y-8">
<!-- Details Section -->
<section>
<h3 class="font-label-caps text-xs text-on-surface-variant mb-4 uppercase">Causality Analysis</h3>
<div class="space-y-4">
<div class="p-4 bg-white/5 rounded-xl border border-white/5">
<p class="text-xs text-on-surface-variant mb-1">Impact Probability</p>
<div class="flex items-center gap-3">
<div class="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[85%]"></div>
</div>
<span class="font-data-mono text-sm text-primary">85%</span>
</div>
</div>
<div class="p-4 bg-white/5 rounded-xl border border-white/5">
<p class="text-xs text-on-surface-variant mb-1">Propagation Delay</p>
<div class="flex items-center gap-3">
<div class="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[42%]"></div>
</div>
<span class="font-data-mono text-sm text-secondary">12ms</span>
</div>
</div>
</div>
</section>
<!-- Relationships -->
<section>
<h3 class="font-label-caps text-xs text-on-surface-variant mb-4 uppercase">Interconnected Hubs</h3>
<div class="grid grid-cols-2 gap-3">
<div class="glass-card p-3 rounded-lg flex flex-col items-center text-center">
<span class="material-symbols-outlined text-primary mb-2">subway</span>
<span class="text-[10px] font-bold">Transit</span>
</div>
<div class="glass-card p-3 rounded-lg flex flex-col items-center text-center">
<span class="material-symbols-outlined text-secondary mb-2">emergency</span>
<span class="text-[10px] font-bold">EMS</span>
</div>
<div class="glass-card p-3 rounded-lg flex flex-col items-center text-center">
<span class="material-symbols-outlined text-tertiary mb-2">local_police</span>
<span class="text-[10px] font-bold">Patrol</span>
</div>
<div class="glass-card p-3 rounded-lg flex flex-col items-center text-center">
<span class="material-symbols-outlined text-on-surface-variant mb-2">visibility_off</span>
<span class="text-[10px] font-bold">Hidden</span>
</div>
</div>
</section>
<!-- History Trace -->
<section>
<h3 class="font-label-caps text-xs text-on-surface-variant mb-4 uppercase">Neural Trace</h3>
<div class="relative space-y-4 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
<div class="flex items-start gap-4 relative">
<div class="w-4 h-4 rounded-full bg-primary mt-1 border-4 border-background z-10"></div>
<div>
<p class="text-xs font-bold text-on-surface">Event Ingested</p>
<p class="text-[10px] text-on-surface-variant">Today at 14:22:01</p>
</div>
</div>
<div class="flex items-start gap-4 relative">
<div class="w-4 h-4 rounded-full bg-secondary mt-1 border-4 border-background z-10"></div>
<div>
<p class="text-xs font-bold text-on-surface">Causality Mapping</p>
<p class="text-[10px] text-on-surface-variant">Today at 14:22:05</p>
</div>
</div>
<div class="flex items-start gap-4 relative">
<div class="w-4 h-4 rounded-full bg-tertiary mt-1 border-4 border-background z-10"></div>
<div>
<p class="text-xs font-bold text-on-surface">Predictive Logic Run</p>
<p class="text-[10px] text-on-surface-variant">Today at 14:22:12</p>
</div>
</div>
</div>
</section>
</div>
<div class="p-8 border-t border-white/10">
<button class="w-full py-4 glass-card rounded-2xl text-xs font-label-caps hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm">download</span> EXPORT GRAPH DATA
            </button>
</div>
</aside>
<script>
        // Simple script to draw "neon lines" between nodes on the canvas
        function drawEdges() {
            const svg = document.getElementById('graph-edges');
            const nodes = document.querySelectorAll('.node');
            const container = document.getElementById('nodes-layer').getBoundingClientRect();
            
            svg.innerHTML = `
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
            `;

            const connections = [
                ['node-1', 'node-2'],
                ['node-2', 'node-3'],
                ['node-3', 'node-4'],
                ['node-4', 'node-5'],
                ['node-1', 'node-4']
            ];

            connections.forEach(([fromId, toId]) => {
                const fromNode = document.querySelector(`[data-id="${fromId}"]`).getBoundingClientRect();
                const toNode = document.querySelector(`[data-id="${toId}"]`).getBoundingClientRect();

                const x1 = fromNode.left + fromNode.width / 2 - container.left;
                const y1 = fromNode.top + fromNode.height / 2 - container.top;
                const x2 = toNode.left + toNode.width / 2 - container.left;
                const y2 = toNode.top + toNode.height / 2 - container.top;

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                // Use a curve for a more fluid "neural" look
                const midX = (x1 + x2) / 2;
                const d = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
                
                path.setAttribute('d', d);
                path.setAttribute('stroke', '#47d6ff');
                path.setAttribute('stroke-width', '1');
                path.setAttribute('fill', 'none');
                path.setAttribute('class', 'neon-line opacity-50');
                path.setAttribute('filter', 'url(#glow)');
                
                svg.appendChild(path);
            });
        }

        // Initialize and re-calculate on resize
        window.addEventListener('load', drawEdges);
        window.addEventListener('resize', drawEdges);

        // Basic pan interaction logic simulation
        let isDragging = false;
        let startPos = { x: 0, y: 0 };
        const container = document.getElementById('graph-container');
        const layer = document.getElementById('nodes-layer');
        const svg = document.getElementById('graph-edges');

        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            startPos = { x: e.clientX, y: e.clientY };
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startPos.x;
            const dy = e.clientY - startPos.y;
            layer.style.transform = `translate(${dx}px, ${dy}px)`;
            svg.style.transform = `translate(${dx}px, ${dy}px)`;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Highlight interactions
        document.querySelectorAll('.node').forEach(node => {
            node.addEventListener('click', () => {
                document.querySelectorAll('.node > div').forEach(n => n.classList.remove('border-primary', 'ring-2', 'ring-primary'));
                node.querySelector('div').classList.add('border-primary', 'ring-2', 'ring-primary');
            });
        });
    </script>
</body></html>