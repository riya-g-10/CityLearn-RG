// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
        // Micro-interaction: Animated Reveal Logic
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
        }` }} />
      <div className="font-body-md text-body-md flex h-screen overflow-hidden">{/* Sidebar Navigation Shell */}
<aside className="docked left-0 h-screen w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl flex flex-col py-32 hidden md:flex z-50">
<div className="px-6 mb-12">
<div className="flex items-center gap-3">
<span className="font-headline-md text-headline-md font-bold text-primary">CityLearn</span>
<div className="w-2 h-2 bg-primary rounded-full pulse-neural shadow-[0_0_10px_#47d6ff]"></div>
</div>
<p className="font-label-caps text-[10px] text-on-surface-variant mt-1 tracking-widest">Neural Intelligence</p>
</div>
<nav className="flex-1 space-y-1">
{/* Navigation Items Mapping */}
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/dashboard">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/analysis-engine">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">analytics</span>
<span>Analysis</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/institutional-memory-match">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">compare_arrows</span>
<span>Similar Events</span>
</a>
{/* ACTIVE TAB */}
<a className="flex items-center gap-4 px-6 py-4 text-primary font-bold border-r-2 border-primary bg-white/5 transition-all group" href="/predictive-intelligence">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>online_prediction</span>
<span>Predictions</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/strategic-recommendations">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">recommend</span>
<span>Recommendations</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/scenario-simulator">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">precision_manufacturing</span>
<span>Simulator</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">replay</span>
<span>Replay</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/knowledge-graph">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">hub</span>
<span>Knowledge Graph</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all group" href="/learning-loop">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">psychology</span>
<span>Learning Loop</span>
</a>
</nav>
<div className="px-6 py-8 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-white/20">
<img alt="Administrator Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a professional city administrator in a high-tech control center environment. The lighting is dominated by soft cool blue and warm purple tones reflecting off their concentrated face. In the background, blurred holographic city maps and data feeds suggest a state-of-the-art urban management facility. The aesthetic is clean, sophisticated, and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrriZQwPmKw03IhYI4N4USn-PlC3Jv7BEWcrYidnOEowHvYUNGysmb84Vq1THsT-E1S83k96KZ935y1rQb8LO4kTG1xXfSFqyaTrNsdywKw1C1wcrHktE_vIvwkHC629zKp4x2cdZ8d19Qk0WCDiSfS_7BRrxYlCNdes1uxWHPbN7n0dx37zYxqmWp567rkcNmHmE9VoUhcy06lyGBHnqDO4KS-egyI2rzwSA4VeAz4WNJgnEfd4HdbhSEXN7jFKxa4p2APC0pgL4"/>
</div>
<div>
<p className="text-[12px] font-bold">Admin-04</p>
<p className="text-[10px] text-on-surface-variant">System Level 9</p>
</div>
</div>
</div>
</aside>
{/* Main Content Canvas */}
<main className="flex-1 flex flex-col relative overflow-hidden">
{/* Background Animation */}
{/* Top App Bar */}
<header className="docked full-width top-0 z-40 bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center w-full px-8 h-16">
<div className="flex items-center gap-8">
<div className="flex items-center gap-3 md:hidden">
<span className="font-headline-md text-headline-md font-bold text-primary">CL</span>
</div>
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:ring-1 focus:ring-primary focus:outline-none w-64 transition-all" placeholder="Scan neural nodes..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">sensors</span>
</button>
<div className="relative">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<span className="absolute top-0 right-0 w-2 h-2 bg-secondary rounded-full border border-surface-dim"></span>
</div>
</div>
<div className="h-6 w-[1px] bg-white/10 mx-2"></div>
<span className="font-label-caps text-[11px] tracking-widest text-primary hidden lg:block">System Status: Optimal</span>
</div>
</header>
{/* Dashboard Content */}
<div className="flex-1 overflow-y-auto p-8 pt-24 space-y-8 z-10">
{/* Header Section */}
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">System Predictions</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-2">Real-time neural forecasting for urban resource distribution and critical infrastructure maintenance.</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-2.5 bg-surface-variant border border-white/10 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
<span className="material-symbols-outlined text-[20px]">refresh</span>
                            Rerun Simulation
                        </button>
<button className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold shadow-[0_0_20px_rgba(71,214,255,0.4)] hover:scale-105 active:scale-95 transition-all">
                            Export Intelligence
                        </button>
</div>
</div>
{/* Bento Grid Predictions */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Prediction Card 1: Main Focus */}
<div className="md:col-span-8 glass-card rounded-xl p-8 prediction-reveal">
<div className="flex justify-between items-start mb-12">
<div>
<span className="font-label-caps text-[12px] text-primary tracking-widest mb-2 block uppercase">Current High Priority</span>
<h3 className="font-headline-md text-headline-md font-bold">Transit Node Beta Congestion</h3>
</div>
<div className="px-4 py-1.5 bg-secondary/10 border border-secondary/30 rounded-full">
<span className="font-label-caps text-[12px] text-secondary">Risk Score: 8.2/10</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
<div className="space-y-1">
<p className="text-on-surface-variant text-sm">Predicted Resolution</p>
<p className="font-headline-md text-headline-md text-primary font-bold">45m <span className="text-xs font-normal text-on-surface-variant">Est.</span></p>
</div>
<div className="space-y-1">
<p className="text-on-surface-variant text-sm">Severity Level</p>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
<p className="font-headline-md text-headline-md text-error font-bold uppercase">High</p>
</div>
</div>
<div className="space-y-1">
<p className="text-on-surface-variant text-sm">AI Confidence</p>
<p className="font-headline-md text-headline-md text-tertiary font-bold">94.2%</p>
</div>
</div>
{/* Mini Trend Graph */}
<div className="relative h-48 w-full">
<div className="absolute inset-0 flex items-end justify-between px-2">
<div className="w-[8%] bg-white/5 h-[40%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[55%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/10 h-[70%] rounded-t-sm border-t border-primary/40"></div>
<div className="w-[8%] bg-primary/20 h-[85%] rounded-t-sm border-t border-primary relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#47d6ff]"></div>
</div>
<div className="w-[8%] bg-white/10 h-[60%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[45%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[30%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[20%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[15%] rounded-t-sm"></div>
<div className="w-[8%] bg-white/5 h-[10%] rounded-t-sm"></div>
</div>
<div className="absolute bottom-0 w-full h-[1px] bg-white/10"></div>
<p className="absolute bottom-[-24px] left-0 text-[10px] font-label-caps text-on-surface-variant tracking-widest">TIMELINE: NEXT 4 HOURS</p>
</div>
<div className="scanline opacity-30"></div>
</div>
{/* Prediction Card 2: Confidence Gauge */}
<div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center prediction-reveal" style={{"animationDelay": "0.1s"}}>
<span className="font-label-caps text-[12px] text-on-surface-variant tracking-widest mb-6 block uppercase">Intelligence Reliability</span>
<div className="relative w-48 h-48 mb-6">
{/* SVG Gauge */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
<circle className="gauge-path" cx="50" cy="50" fill="none" id="confidence-circle" r="45" stroke="url(#gradient-blue)" strokeDasharray="282.7" strokeDashoffset="30" strokeWidth="8"></circle>
<defs>
<linearGradient id="gradient-blue" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#47d6ff"></stop>
<stop offset="100%" stop-color="#edb1ff"></stop>
</linearGradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-xl text-headline-xl font-bold leading-none">89</span>
<span className="text-xs text-on-surface-variant uppercase tracking-tighter">Confidence Index</span>
</div>
</div>
<p className="text-sm text-on-surface-variant px-4">Neural models are reporting a <span className="text-primary">high convergence</span> of environmental and civic data points.</p>
</div>
{/* Prediction Card 3: Neural Map Widget */}
<div className="md:col-span-4 glass-card rounded-xl overflow-hidden prediction-reveal" style={{"animationDelay": "0.2s"}}>
<div className="relative h-64 w-full">
<div className="absolute inset-0 bg-surface-dim/40 z-10 flex items-center justify-center">
<div className="px-4 py-2 glass-card rounded-full flex items-center gap-2 border-primary/30">
<span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<span className="font-label-caps text-[10px] text-white">Active Grid: Sector 7</span>
</div>
</div>
<img className="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="A stylized, top-down isometric view of a futuristic city map with glowing neon blue and purple road networks. The aesthetic is dark and high-contrast, representing a digital twin of a metropolis. Thin luminous lines represent traffic flow, with small pulsing dots indicating active neural sensor nodes. The atmosphere is sophisticated and evokes a high-security intelligence dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdTpjWUbnqUSORlpIZLKHbFPjAleZ_h7NUeKbqI4gm63BcO2GMWu8s0wxe1UWApw_xw31V4IJbMs2257Gi8OZzuQk3buWbHG9npnct_4ohed6qIbBjN0YSSsdOaRTZui2FjEbvrQ1gKO4lDks_Xk7gNvpNs3eutLMQi0qXki68CCTyysME5YlYivmgF-MspoUYD5qNrEQavpR71_9oR57k6tlco-jZAXG0z6956sS2PBTkwlbyZgY6sfi7wvYZWJ7-MFiBjc6Kf48"/>
</div>
<div className="p-6">
<h4 className="font-bold mb-2">Grid Stability Forecast</h4>
<div className="flex items-center gap-4">
<div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-tertiary shadow-[0_0_10px_#00fd9b]"></div>
</div>
<span className="font-data-mono text-xs text-tertiary">75% Stable</span>
</div>
</div>
</div>
{/* Prediction Card 4: Forecast Summary */}
<div className="md:col-span-8 glass-card rounded-xl p-8 prediction-reveal" style={{"animationDelay": "0.3s"}}>
<h4 className="font-bold mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">trending_up</span>
                            Predictive Congestion Trends
                        </h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-primary">
<span className="material-symbols-outlined">commute</span>
</div>
<div>
<p className="font-bold text-sm">Public Transit Load</p>
<p className="text-xs text-on-surface-variant">Predicted spike at 17:30</p>
</div>
</div>
<div className="text-right">
<p className="font-data-mono text-error font-bold">+22%</p>
<p className="text-[10px] uppercase text-on-surface-variant">Variance</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">bolt</span>
</div>
<div>
<p className="font-bold text-sm">Energy Demand</p>
<p className="text-xs text-on-surface-variant">Optimal distribution forecast</p>
</div>
</div>
<div className="text-right">
<p className="font-data-mono text-tertiary font-bold">-14%</p>
<p className="text-[10px] uppercase text-on-surface-variant">Efficiency</p>
</div>
</div>
<div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">water_drop</span>
</div>
<div>
<p className="font-bold text-sm">Fluid Infrastructure</p>
<p className="text-xs text-on-surface-variant">Maintenance window at 02:00</p>
</div>
</div>
<div className="text-right">
<p className="font-data-mono text-secondary font-bold">Stable</p>
<p className="text-[10px] uppercase text-on-surface-variant">Status</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Floating Quick Action (FAB) Suppression check: Active on Dashboard/Predictions */}
<button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_0_30px_rgba(71,214,255,0.6)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
<span className="material-symbols-outlined text-[28px]">psychology</span>
<div className="absolute right-20 bg-surface-bright px-4 py-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
<p className="text-xs font-bold">Ask CityLearn AI</p>
</div>
</button>
</main>
{/* Mobile Bottom Navigation Shell */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/15 backdrop-blur-2xl border-t border-white/10 flex justify-around items-center h-16 px-4 z-50">
<a className="text-on-surface-variant flex flex-col items-center gap-1" href="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-label-caps">Home</span>
</a>
<a className="text-primary flex flex-col items-center gap-1" href="/profile">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>online_prediction</span>
<span className="text-[10px] font-label-caps">AI</span>
</a>
<div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center -translate-y-4 border border-primary/40 shadow-lg">
<span className="material-symbols-outlined text-primary">add</span>
</div>
<a className="text-on-surface-variant flex flex-col items-center gap-1" href="#">
<span className="material-symbols-outlined">hub</span>
<span className="text-[10px] font-label-caps">Grid</span>
</a>
<a className="text-on-surface-variant flex flex-col items-center gap-1" href="/profile">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-label-caps">Admin</span>
</a>
</nav></div>
    </>
  );
}
