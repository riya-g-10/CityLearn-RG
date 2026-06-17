// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
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
      } catch (e) {
        console.error("Error running page script:", e);
      }
    };
    runScript();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `body {
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
        }` }} />
      <div className="flex min-h-screen bg-background">{/* SideNavBar Component */}
<aside className="fixed left-0 h-screen w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl z-50 hidden md:flex flex-col py-spacing-margin-desktop">
<div className="px-6 mb-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary">hub</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">CityLearn</h1>
<p className="font-label-caps text-[10px] text-on-surface-variant/70 tracking-widest uppercase">Neural Intelligence</p>
</div>
</div>
<nav className="flex-1 px-4 space-y-2 overflow-y-auto">
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/dashboard">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/analysis-engine">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
                Analysis
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/institutional-memory-match">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">compare_arrows</span>
                Similar Events
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/predictive-intelligence">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">online_prediction</span>
                Predictions
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/strategic-recommendations">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">recommend</span>
                Recommendations
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/scenario-simulator">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">precision_manufacturing</span>
                Simulator
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">replay</span>
                Replay
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/knowledge-graph">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">hub</span>
                Knowledge Graph
            </a>
<a className="flex items-center gap-4 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-primary/5 font-body-md transition-all active:scale-95 duration-200" href="/learning-loop">
<span className="material-symbols-outlined">psychology</span>
                Learning Loop
            </a>
</nav>
<div className="mt-auto px-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-3 glass-card p-3 rounded-xl">
<img alt="Administrator Profile" className="w-10 h-10 rounded-full object-cover border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7itW2c1vy52N_aL_xbjHQvPTozKgkn0O2U7PDZ8HPm1oKQExgguuxRAD9lwcf61lYLR692pZSwaVzAgZR-9JRzUB-9hHLeYZtaPrhV6r3yxzTFc1oLUOzOiedAtQvawoW2zCJhTjcvk99dyt3pIwQT1uTR-ZqgNRzmc8m3zmJvG3zB3Gzce9-Vu79cmz3I7N8LWPuUFB0VLT4DWRwjcZ3CB6E28zUA04i6UXxHH679D-KQg72YKDi15b061ZrcCuntbIOQz7ryCQ"/>
<div className="overflow-hidden">
<p className="text-on-surface text-sm font-bold truncate">Dr. Aris Thorne</p>
<p className="text-on-surface-variant text-xs truncate">System Architect</p>
</div>
</div>
</div>
</aside>
{/* Main Canvas */}
<main className="flex-1 md:ml-64 relative z-10 flex flex-col min-h-screen">
{/* TopAppBar Component */}
<header className="sticky top-0 z-50 w-full h-16 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center px-spacing-margin-desktop">
<div className="flex items-center gap-6">
<div className="relative group">
<input className="bg-white/5 border border-white/10 rounded-full px-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Search neural patterns..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-xl">search</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary neural-pulse"></span>
<span className="font-label-caps text-[10px] text-tertiary">NEURAL ENGINE ACTIVE</span>
</div>
<div className="flex gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">sensors</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
</div>
</div>
</header>
{/* Page Content */}
<div className="p-spacing-margin-desktop space-y-gutter">
<div className="grid grid-cols-12 gap-gutter">
{/* Institutional Memory Score: Central Growth Indicator */}
<section className="col-span-12 lg:col-span-8 glass-card rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[480px]">
<div className="scan-line"></div>
<div className="relative z-10">
<h2 className="font-label-caps text-label-caps text-primary uppercase mb-2">Institutional Memory Core</h2>
<h3 className="font-headline-lg text-headline-lg mb-8">Evolutionary Index</h3>
</div>
{/* Animated Growth Indicator Container */}
<div className="flex-1 flex flex-col items-center justify-center relative py-12">
{/* Score Display */}
<div className="relative z-20 text-center">
<span className="font-headline-xl text-[120px] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-surface-tint">94.8</span>
<div className="flex items-center justify-center gap-2 mt-4">
<span className="material-symbols-outlined text-tertiary">trending_up</span>
<span className="font-data-mono text-tertiary text-lg">+12.4% vs last epoch</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-6 relative z-10 pt-8 border-t border-white/5">
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">SYNAPTIC LOAD</p>
<p className="font-data-mono text-xl text-on-surface">4.2 PB/s</p>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">ACTIVE NODES</p>
<p className="font-data-mono text-xl text-on-surface">8.1M</p>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">RETENTION RATE</p>
<p className="font-data-mono text-xl text-on-surface">99.98%</p>
</div>
</div>
</section>
{/* Metrics: Predicted vs Actual & Error % */}
<section className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div className="flex-1 glass-card rounded-2xl p-6 glow-border transition-all">
<div className="flex justify-between items-start mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface-variant">Outcome Validation</h3>
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
</div>
<div className="space-y-6">
<div className="relative h-24 flex items-center px-4 bg-white/5 rounded-lg border border-white/5">
<div className="w-full">
<div className="flex justify-between text-xs mb-2">
<span className="text-on-surface-variant font-label-caps">PREDICTED</span>
<span className="text-primary font-data-mono">882.4 GWh</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{"width": "82%"}}></div>
</div>
</div>
</div>
<div className="relative h-24 flex items-center px-4 bg-white/5 rounded-lg border border-white/5">
<div className="w-full">
<div className="flex justify-between text-xs mb-2">
<span className="text-on-surface-variant font-label-caps">ACTUAL</span>
<span className="text-secondary font-data-mono">879.1 GWh</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-secondary" style={{"width": "80%"}}></div>
</div>
</div>
</div>
</div>
<div className="mt-6 p-4 rounded-xl bg-tertiary-container/10 border border-tertiary-container/30 flex items-center justify-between">
<span className="text-tertiary text-sm font-bold">Delta Accuracy</span>
<span className="font-data-mono text-tertiary text-lg">99.63%</span>
</div>
</div>
<div className="flex-1 glass-card rounded-2xl p-6 flex flex-col justify-center text-center">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">MEAN ERROR %</h3>
<div className="relative inline-flex items-center justify-center">
<svg className="w-32 h-32 transform -rotate-90">
<circle className="text-white/5" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-error" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeDasharray="351.85" strokeDashoffset="342.3" strokeWidth="8"></circle>
</svg>
<span className="absolute font-data-mono text-3xl text-error">2.7%</span>
</div>
<p className="mt-4 text-xs text-on-surface-variant px-8">System drift detected in sector 4. Automatic recalibration in 42 minutes.</p>
</div>
</section>
{/* Charts: Accuracy & Knowledge Growth Trends */}
<section className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">Accuracy Trend (24h)</h3>
<div className="flex-1 relative">
<div className="absolute inset-0 flex items-end">
<svg className="w-full h-full" viewBox="0 0 400 150">
<defs>
<linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#47d6ff" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#47d6ff" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,120 Q50,110 100,115 T200,90 T300,60 T400,40 L400,150 L0,150 Z" fill="url(#lineGrad)"></path>
<path className="drop-shadow-[0_0_8px_rgba(71,214,255,0.8)]" d="M0,120 Q50,110 100,115 T200,90 T300,60 T400,40" fill="none" stroke="#47d6ff" strokeWidth="3"></path>
</svg>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-label-caps text-on-surface-variant">
<span>00:00</span>
<span>08:00</span>
<span>16:00</span>
<span>NOW</span>
</div>
</div>
<div className="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6">Knowledge Growth</h3>
<div className="flex-1 relative">
<div className="absolute inset-0 flex items-end justify-between gap-1 px-2">
<div className="w-1/12 bg-secondary/20 h-[30%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/30 h-[45%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/40 h-[40%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/50 h-[60%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/60 h-[55%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/70 h-[75%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary/80 h-[70%] rounded-t-sm"></div>
<div className="w-1/12 bg-secondary h-[95%] rounded-t-sm drop-shadow-[0_0_8px_rgba(237,177,255,0.6)]"></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs font-body-md text-on-surface-variant">Cumulative Tokens</span>
<span className="font-data-mono text-secondary text-sm">1.8T</span>
</div>
</div>
</section>
{/* Feedback Section: New Patterns Identified */}
<section className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface-variant">Neural Pattern Feed</h3>
<span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded">LIVE</span>
</div>
<div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
<div className="p-3 bg-white/5 rounded-lg border-l-4 border-primary hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="font-label-caps text-[10px] text-primary">PATTERN #4829</span>
<span className="text-[10px] text-on-surface-variant font-data-mono">2m ago</span>
</div>
<p className="text-sm font-body-md text-on-surface leading-tight">Cyclical thermal shift detected in residential sector A. Recalibrating HVAC load.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Thermal</span>
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">High-Confidence</span>
</div>
</div>
<div className="p-3 bg-white/5 rounded-lg border-l-4 border-secondary hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="font-label-caps text-[10px] text-secondary">PATTERN #4830</span>
<span className="text-[10px] text-on-surface-variant font-data-mono">15m ago</span>
</div>
<p className="text-sm font-body-md text-on-surface leading-tight">New mobility cluster forming at Central Plaza. Adjusting traffic signal phase.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Mobility</span>
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Unsupervised</span>
</div>
</div>
<div className="p-3 bg-white/5 rounded-lg border-l-4 border-tertiary hover:bg-white/10 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="font-label-caps text-[10px] text-tertiary">PATTERN #4831</span>
<span className="text-[10px] text-on-surface-variant font-data-mono">42m ago</span>
</div>
<p className="text-sm font-body-md text-on-surface leading-tight">Energy efficiency anomaly resolved in Grid Node 7. Pattern locked to memory.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Energy</span>
<span className="text-[10px] px-2 py-0.5 bg-white/10 rounded-full text-on-surface-variant">Critical</span>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 bg-primary text-on-primary font-bold rounded-lg hover:shadow-[0_0_15px_rgba(71,214,255,0.5)] transition-all active:scale-95">
                        Initiate Global Training Loop
                    </button>
</section>
</div>
{/* Contextual Learning Activity */}
<section className="glass-card rounded-2xl p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Memory Consolidation History</h2>
<p className="text-on-surface-variant font-body-md">Log of neural network structural optimizations.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">Past 7 Days</button>
<button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">Export Knowledge</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="text-left border-b border-white/10">
<th className="pb-4 font-label-caps text-[10px] text-on-surface-variant">EPOCH ID</th>
<th className="pb-4 font-label-caps text-[10px] text-on-surface-variant">FOCUS AREA</th>
<th className="pb-4 font-label-caps text-[10px] text-on-surface-variant">KNOWLEDGE GAIN</th>
<th className="pb-4 font-label-caps text-[10px] text-on-surface-variant">STATUS</th>
<th className="pb-4 font-label-caps text-[10px] text-on-surface-variant text-right">OPTIMIZATION</th>
</tr>
</thead>
<tbody className="text-sm font-body-md">
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 font-data-mono text-primary">#EP-992</td>
<td className="py-4">Quantum Traffic Flow</td>
<td className="py-4 text-tertiary">+142.4 GB</td>
<td className="py-4"><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Completed</span></td>
<td className="py-4 text-right font-data-mono text-on-surface-variant">0.12ms</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 font-data-mono text-primary">#EP-991</td>
<td className="py-4">Hyper-Local Weather Patterns</td>
<td className="py-4 text-tertiary">+89.1 GB</td>
<td className="py-4"><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Completed</span></td>
<td className="py-4 text-right font-data-mono text-on-surface-variant">0.15ms</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
<td className="py-4 font-data-mono text-primary">#EP-990</td>
<td className="py-4">Human-AI Collaborative Flux</td>
<td className="py-4 text-secondary">+214.7 GB</td>
<td className="py-4"><span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> Processing</span></td>
<td className="py-4 text-right font-data-mono text-on-surface-variant">0.08ms</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Mobile Bottom Nav */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-3xl border-t border-white/10 flex justify-around items-center h-16 px-4 z-50">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">dashboard</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">analytics</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>psychology</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">settings</span>
</button>
</nav>
</main></div>
    </>
  );
}
