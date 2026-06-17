// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
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
      } catch (e) {
        console.error("Error running page script:", e);
      }
    };
    runScript();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `:root {
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
        }` }} />
      <div className="font-body-md text-on-surface">{/* Top AppBar */}
<header className="fixed top-0 left-0 right-0 z-50 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center w-full px-spacing-margin-desktop h-16">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">CityLearn</span>
<div className="h-4 w-px bg-white/20"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant">Neural Intelligence</span>
</div>
<div className="hidden md:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full w-96">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full text-on-surface placeholder:text-on-surface-variant" placeholder="Search neural pathways..." type="text"/>
</div>
<div className="flex items-center gap-6">
<button className="relative hover:text-primary transition-colors">
<span className="material-symbols-outlined">sensors</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-tertiary rounded-full neural-pulse"></span>
</button>
<button className="hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-8 h-8 rounded-full border border-primary/30 p-0.5">
<img alt="Administrator Profile" className="w-full h-full rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI2ScOCsbQdKwozCclBzk7h-MoMCoD8aytDHBKFQQ3exJsElXSUcksKwX9nJ5AONIMec72-Ya6fWuYq6WW2cKiL3edpzbcuIXEHDWQrGATpOkpmw9LUv2yh5gcuaUVTO5ehIiW7IYJ0ZSiPZzFBg53yMbVPARTLzPgHcWNyVKyXzQZOnNnH5ZjMXIN4p4d34yHP9N8Vi_0LPMGRteGC6ITQ0w7ohrc70Mn2md3WEu63goN1NodfY87sZdeywx4Zcnd-ojHhubNM4Q"/>
</div>
</div>
</header>
<div className="flex h-screen pt-16">
{/* Side Navigation */}
<aside className="hidden md:flex flex-col w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl py-spacing-margin-desktop">
<nav className="flex-1 px-4 space-y-2">
{/* Navigation Items */}
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/dashboard">
<span className="material-symbols-outlined group-hover:scale-110 duration-200">dashboard</span>
<span className="font-label-caps text-label-caps">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-primary/5 rounded-lg group" href="/analysis-engine">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-caps text-label-caps">Analysis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/institutional-memory-match">
<span className="material-symbols-outlined">compare_arrows</span>
<span className="font-label-caps text-label-caps">Similar Events</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/predictive-intelligence">
<span className="material-symbols-outlined">online_prediction</span>
<span className="font-label-caps text-label-caps">Predictions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/strategic-recommendations">
<span className="material-symbols-outlined">recommend</span>
<span className="font-label-caps text-label-caps">Recommendations</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/scenario-simulator">
<span className="material-symbols-outlined">precision_manufacturing</span>
<span className="font-label-caps text-label-caps">Simulator</span>
</a>
<div className="pt-8 pb-2 px-4">
<span className="text-[10px] text-on-surface-variant/50 font-label-caps">SYSTEM CORE</span>
</div>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/knowledge-graph">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-caps text-label-caps">Knowledge Graph</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all rounded-lg group" href="/learning-loop">
<span className="material-symbols-outlined">psychology</span>
<span className="font-label-caps text-label-caps">Learning Loop</span>
</a>
</nav>
<div className="px-6 py-4 mt-auto">
<div className="glass-card p-4 rounded-xl border-primary/20 bg-primary/5">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="text-[10px] font-label-caps text-tertiary">NEURAL LINK ACTIVE</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">System observing real-time urban evolution in Zone 4.</p>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 overflow-y-auto p-spacing-margin-desktop bg-[#0a0a0c]">
<div className="max-w-container-max mx-auto h-full flex flex-col md:flex-row gap-spacing-gutter">
{/* Left Column: Event Form */}
<section className="flex-1 flex flex-col space-y-6">
<div className="space-y-2">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Analyze New Event</h1>
<p className="text-on-surface-variant font-body-md max-w-lg">Input urban dynamics to trigger CityLearn’s signature recognition and similarity mapping engine.</p>
</div>
<form className="glass-card p-8 rounded-xl space-y-6 relative overflow-hidden group">
<div className="scanning-line opacity-20"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-primary/70">EVENT TYPE</label>
<select className="w-full bg-surface-container border border-white/10 rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
<option>Public Assembly</option>
<option>Infrastructure Failure</option>
<option>Transit Surge</option>
<option>Dynamic Maintenance</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-primary/70">LOCATION</label>
<div className="relative">
<input className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-3 text-on-surface-variant font-data-mono cursor-not-allowed" readOnly="" type="text" value="Zone 4"/>
<span className="absolute right-3 top-3 material-symbols-outlined text-sm opacity-50">lock</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-primary/70">DURATION (EST.)</label>
<div className="flex gap-2">
<input className="w-full bg-surface-container border border-white/10 rounded-lg p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type="number" value="120"/>
<span className="flex items-center px-3 font-label-caps text-xs bg-white/5 rounded-lg border border-white/10">MIN</span>
</div>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-primary/70">CLOSURE STATUS</label>
<div className="flex items-center gap-4 bg-surface-container border border-white/10 rounded-lg p-3 h-[50px]">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
<span className="ms-3 font-body-md text-sm">Full Closure</span>
</label>
</div>
</div>
</div>
<div className="space-y-2">
<label className="font-label-caps text-label-caps text-primary/70">ATTENDANCE ESTIMATE</label>
<input className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" type="range"/>
<div className="flex justify-between font-data-mono text-[10px] text-on-surface-variant uppercase">
<span>Low Density</span>
<span>15,000 Nodes</span>
<span>Extreme Surge</span>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-primary-container text-on-primary-container font-headline-md py-4 rounded-xl flex items-center justify-center gap-3 glow-button-primary group/btn overflow-hidden relative" type="button">
<span className="relative z-10">Run Neural Synthesis</span>
<span className="material-symbols-outlined relative z-10 group-hover/btn:translate-x-2 transition-transform">bolt</span>
</button>
</div>
</form>
<div className="grid grid-cols-3 gap-4">
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1">
<span className="text-on-surface-variant font-label-caps text-[10px]">SIMILARITY</span>
<span className="text-primary font-headline-md text-2xl font-bold">89%</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1 border-tertiary/20">
<span className="text-on-surface-variant font-label-caps text-[10px]">CONFIDENCE</span>
<span className="text-tertiary font-headline-md text-2xl font-bold">94%</span>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col items-center justify-center space-y-1">
<span className="text-on-surface-variant font-label-caps text-[10px]">LATENCY</span>
<span className="text-on-surface font-headline-md text-2xl font-bold">12ms</span>
</div>
</div>
</section>
{/* Right Column: Visualization */}
<section className="flex-1 flex flex-col space-y-6">
<div className="flex items-center justify-between">
<h2 className="font-label-caps text-label-caps text-on-surface-variant">Signature Recognition Canvas</h2>
<span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-label-caps text-primary">REAL-TIME EMBEDDING</span>
</div>
<div className="glass-card flex-1 rounded-xl relative p-8 flex flex-col items-center justify-center overflow-hidden">
{/* Background ThreeJS Placeholder */}
<div className="absolute inset-0 opacity-40 pointer-events-none"></div>
{/* Neural DNA Display */}
<div className="relative z-10 w-full max-w-md space-y-8">
<div className="text-center space-y-2">
<h3 className="font-headline-md text-on-surface">CityLearn Signature</h3>
<p className="text-on-surface-variant text-sm font-data-mono">Hash: 0xFD44...88BE</p>
</div>
{/* DNA-Style Signature Visualizer */}
<div className="space-y-4 py-8">
<div className="flex items-center gap-4">
<div className="dna-segment w-[40%]"></div>
<div className="dna-segment w-[20%] opacity-20"></div>
<div className="dna-segment w-[30%]"></div>
</div>
<div className="flex items-center gap-4 flex-row-reverse">
<div className="dna-segment w-[60%]"></div>
<div className="dna-segment w-[10%]"></div>
<div className="dna-segment w-[25%] opacity-40"></div>
</div>
<div className="flex items-center gap-4">
<div className="dna-segment w-[15%]"></div>
<div className="dna-segment w-[45%]"></div>
<div className="dna-segment w-[35%] opacity-60"></div>
</div>
<div className="flex items-center gap-4 flex-row-reverse">
<div className="dna-segment w-[30%] opacity-30"></div>
<div className="dna-segment w-[50%]"></div>
<div className="dna-segment w-[15%]"></div>
</div>
<div className="flex items-center gap-4">
<div className="dna-segment w-[20%]"></div>
<div className="dna-segment w-[20%]"></div>
<div className="dna-segment w-[50%]"></div>
</div>
</div>
{/* Node Graph Embedding (Mini) */}
<div className="glass-card p-6 rounded-xl bg-black/40 border-white/5 relative">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-sm text-primary">hub</span>
<span className="text-[10px] font-label-caps">Feature Embedding Projection</span>
</div>
<div className="grid grid-cols-5 gap-6 h-32 items-center justify-items-center">
<div className="relative">
<div className="w-2 h-2 rounded-full bg-primary neural-pulse"></div>
<div className="absolute inset-0 bg-primary/20 blur-md"></div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-secondary neural-pulse" style={{"animationDelay": "0.5s"}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-primary-container neural-pulse" style={{"animationDelay": "1.2s"}}></div>
<div className="w-1 h-1 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-tertiary neural-pulse" style={{"animationDelay": "0.8s"}}></div>
<div className="w-1 h-1 rounded-full bg-white/10"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="w-1 h-1 rounded-full bg-white/10"></div>
</div>
{/* Connection Lines (SVG Pattern) */}
<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" stroke="white" strokeWidth="0.5">
<line x1="20%" x2="40%" y1="30%" y2="70%"></line>
<line x1="40%" x2="80%" y1="70%" y2="40%"></line>
<line x1="80%" x2="50%" y1="40%" y2="20%"></line>
<line x1="50%" x2="20%" y1="20%" y2="30%"></line>
</svg>
</div>
</div>
{/* Data Summary Floating Badge */}
<div className="absolute bottom-8 right-8 flex flex-col items-end gap-2">
<div className="flex items-center gap-3 bg-surface-container-highest/60 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
<span className="font-label-caps text-[10px] text-on-surface-variant">NODE CLUSTER IDENTIFIED</span>
<span className="text-tertiary font-bold font-data-mono">V4-Z4-S9</span>
</div>
</div>
</div>
{/* Recommended Action Module */}
<div className="glass-card p-6 rounded-xl flex items-center justify-between border-primary/10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>recommend</span>
</div>
<div>
<h4 className="font-headline-md text-sm text-on-surface">Primary Recommendation</h4>
<p className="text-xs text-on-surface-variant">Redirect Transit Line 84 due to high similarity with 'Olympiad Surge 2022'</p>
</div>
</div>
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-label-caps transition-all">VIEW CASE</button>
</div>
</section>
</div>
</main>
</div>
{/* Micro-interaction Script */}</div>
    </>
  );
}
