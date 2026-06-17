// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
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
      } catch (e) {
        console.error("Error running page script:", e);
      }
    };
    runScript();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes pulse-glow {
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
        ::-webkit-scrollbar-thumb { background: rgba(71, 214, 255, 0.2); border-radius: 10px; }` }} />
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">{/* Top Navigation Shell */}
<header className="fixed top-0 z-50 w-full bg-surface/10 backdrop-blur-3xl border-b border-white/10 flex justify-between items-center px-spacing-margin-desktop h-16">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tighter">CityLearn</span>
<div className="hidden md:flex items-center bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/50" placeholder="Probe neural network..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#00fd9b]"></div>
<span className="font-label-caps text-label-caps text-tertiary">SYSTEM LIVE</span>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">sensors</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
<div className="w-8 h-8 rounded-full border border-primary-container overflow-hidden">
<img alt="Administrator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACG6SMAhkMyyuUd3uQuGZB523ol0TPyqkoOXt3tUwHJgcQcIhhdumny2_tQ2rfXa1xjIFZUPoIo-wzVs7EzxMt3ySuKjKKB5usW3FzD9PI-f49n0QkJHRaenHtINAhZU0FfLI1_N3ng7JCzgLVloVvSnayBN2lr1UMh3rwbbwAT4Z41sLqMHL2ITuojKpm8n4llFKdWst76mWEFGkAuw0-uskUkw_uxUjKPljE4phYr_MHRW8l1d6WwAFknRq24HZHsGqtXnSygCE"/>
</div>
</div>
</div>
</header>
<div className="flex pt-16 min-h-screen">
{/* Sidebar Navigation Shell */}
<aside className="fixed left-0 h-[calc(100vh-64px)] w-64 border-r border-white/10 bg-surface/15 backdrop-blur-2xl hidden md:flex flex-col py-spacing-margin-desktop">
<nav className="flex-1 px-4 space-y-2">
{/* Dashboard Active */}
<a className="flex items-center gap-3 px-4 py-3 text-primary font-bold border-r-2 border-primary bg-white/5 transition-all" href="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-caps text-label-caps">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/analysis-engine">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-caps text-label-caps">Analysis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/institutional-memory-match">
<span className="material-symbols-outlined">compare_arrows</span>
<span className="font-label-caps text-label-caps">Similar Events</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/predictive-intelligence">
<span className="material-symbols-outlined">online_prediction</span>
<span className="font-label-caps text-label-caps">Predictions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/strategic-recommendations">
<span className="material-symbols-outlined">recommend</span>
<span className="font-label-caps text-label-caps">Recommendations</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/scenario-simulator">
<span className="material-symbols-outlined">precision_manufacturing</span>
<span className="font-label-caps text-label-caps">Simulator</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">replay</span>
<span className="font-label-caps text-label-caps">Replay</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/knowledge-graph">
<span className="material-symbols-outlined">hub</span>
<span className="font-label-caps text-label-caps">Knowledge Graph</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/learning-loop">
<span className="material-symbols-outlined">psychology</span>
<span className="font-label-caps text-label-caps">Learning Loop</span>
</a>
</nav>
<div className="px-8 mt-auto">
<div className="p-4 rounded-xl bg-primary-container/10 border border-primary-container/20">
<p className="text-[10px] font-label-caps text-primary uppercase mb-2">Neural Load</p>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[42%]"></div>
</div>
<p className="text-[12px] font-data-mono text-on-surface-variant mt-2">14.2 tflops</p>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 p-spacing-margin-mobile md:p-spacing-margin-desktop space-y-spacing-gutter">
{/* Hero Section */}
<section className="relative h-64 md:h-80 rounded-2xl overflow-hidden flex items-center px-8 md:px-12">
<div className="relative z-10 max-w-2xl">
<h1 className="font-headline-xl text-headline-xl text-white tracking-tight leading-none mb-4">Cities Forget. <br/><span className="text-primary-container">CityLearn Remembers.</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Advanced urban intelligence mapping trillions of historical data points to predict the next hour of city life.</p>
</div>
</section>
{/* Animated Stats Row */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-spacing-gutter">
<div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
<span className="font-label-caps text-label-caps text-primary">+12% vs last hour</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Events Learned</h3>
<div className="flex items-baseline gap-2">
<p className="font-headline-xl text-headline-xl glow-text">1,482,903</p>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-l-tertiary">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-tertiary text-3xl">psychology</span>
<span className="font-label-caps text-label-caps text-tertiary">Neural precision 99.4%</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Predictions Generated</h3>
<div className="flex items-baseline gap-2">
<p className="font-headline-xl text-headline-xl glow-text">84,201</p>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-l-secondary">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
<span className="font-label-caps text-label-caps text-secondary">Risk averted</span>
</div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Mistakes Prevented</h3>
<div className="flex items-baseline gap-2">
<p className="font-headline-xl text-headline-xl glow-text">3,129</p>
</div>
</div>
</section>
{/* KPI Cards & Charts Bento */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-spacing-gutter">
{/* KPIs Column */}
<div className="md:col-span-3 space-y-4">
<div className="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span className="font-label-caps text-label-caps text-on-surface-variant">Active Events</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-white">12</span>
<div className="flex -space-x-2">
<span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary">EV</span>
<span className="w-6 h-6 rounded-full bg-tertiary flex items-center justify-center text-[10px] text-on-tertiary">TR</span>
</div>
</div>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col justify-between h-32 border-l-4 border-l-error">
<span className="font-label-caps text-label-caps text-on-surface-variant">Critical Alerts</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-error">3</span>
<span className="material-symbols-outlined text-error animate-pulse">warning</span>
</div>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span className="font-label-caps text-label-caps text-on-surface-variant">Predicted Risk Index</span>
<div className="flex flex-col gap-2">
<div className="flex justify-between">
<span className="font-headline-lg text-headline-lg text-white">74%</span>
<span className="text-tertiary text-sm">Elevated</span>
</div>
<div className="w-full bg-white/5 h-1.5 rounded-full">
<div className="bg-gradient-to-r from-primary to-error h-full rounded-full" style={{"width": "74%"}}></div>
</div>
</div>
</div>
<div className="glass-card p-4 rounded-xl flex flex-col justify-between h-32">
<span className="font-label-caps text-label-caps text-on-surface-variant">Avg Resolution Time</span>
<div className="flex items-end justify-between">
<span className="font-headline-lg text-headline-lg text-white">22<span className="text-xl">m</span></span>
<span className="material-symbols-outlined text-on-surface-variant">timer</span>
</div>
</div>
</div>
{/* Interactive Map Section */}
<div className="md:col-span-6 glass-card rounded-2xl relative overflow-hidden min-h-[400px]">
<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
<div className="glass-card px-3 py-1.5 rounded-full flex items-center gap-2 border-primary/20">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="font-label-caps text-[10px]">DOWNTOWN HUB</span>
</div>
</div>
<div className="absolute bottom-4 right-4 z-10">
<div className="glass-card p-3 rounded-xl border-white/10 space-y-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-error"></div>
<span className="text-[10px] font-label-caps">TRAFFIC CLOSURE</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] font-label-caps">LIVE SENSOR</span>
</div>
</div>
</div>
{/* Map Placeholder */}
<div className="w-full h-full grayscale contrast-[1.2] brightness-[0.4]" data-alt="A top-down architectural blueprint style map of a sprawling modern metropolis at night, featuring glowing neon blue traffic flow lines and pulsing red nodes indicating congestion zones." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDql_4s-y4hmIfyXBeCLklYKjBnHbV78WsOags18kLSDyl6g6_RN0KprZpC9lKnbaIe73cLS9dWBse534ptnRdcAWSVd5_vVQdFlfGrg8Jg7ALmqEQfAoA42a7Vgtv1b0xpYZV89LD1Wc1VhCmwNLUYIcm6Y73grCY8SHH4-gmPBvPEUeeZ6TBiuTsWfnp74Uv_sru79clqMLYT8m2mFXc6XTukBw75gKKzv7bewRjdvQHkUF2WAjyz-eVZXTmCi870YfcYnjJEO5c')", "backgroundSize": "cover", "backgroundPosition": "center"}}></div>
{/* Neon Pulse Markers Overlay */}
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-error rounded-full relative">
<div className="absolute inset-0 bg-error rounded-full animate-ping opacity-75"></div>
<div className="absolute inset-0 bg-error rounded-full animate-pulse-glow"></div>
</div>
</div>
<div className="absolute top-2/3 left-1/4">
<div className="w-3 h-3 bg-primary rounded-full relative">
<div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
</div>
</div>
<div className="absolute bottom-1/4 right-1/3">
<div className="w-3 h-3 bg-primary rounded-full relative">
<div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" style={{"animationDelay": "1s"}}></div>
</div>
</div>
</div>
</div>
{/* Activity Feed Column */}
<div className="md:col-span-3 glass-card rounded-2xl p-6 overflow-hidden flex flex-col">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-6">Recent Activities</h3>
<div className="flex-1 space-y-6 overflow-y-auto pr-2">
{/* Feed Item */}
<div className="relative pl-6 border-l border-white/10 pb-2">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
<span className="text-[10px] font-data-mono text-primary uppercase">14:22 — CONCERT</span>
<p className="font-body-md text-white mt-1">Madison Sq. Arena inflow starting. Prediction: +20% congestion.</p>
</div>
<div className="relative pl-6 border-l border-white/10 pb-2">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-secondary"></div>
<span className="text-[10px] font-data-mono text-secondary uppercase">13:45 — SPORTS</span>
<p className="font-body-md text-white mt-1">Match ended. Crowd dispersal patterns detected in Sector 4.</p>
</div>
<div className="relative pl-6 border-l border-white/10 pb-2">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-error"></div>
<span className="text-[10px] font-data-mono text-error uppercase">12:10 — ACCIDENT</span>
<p className="font-body-md text-white mt-1">Gridlock detected at Cross St &amp; 5th. Rerouting algorithms active.</p>
</div>
<div className="relative pl-6 border-l border-white/10 pb-2">
<div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-tertiary"></div>
<span className="text-[10px] font-data-mono text-tertiary uppercase">11:05 — RECOVERY</span>
<p className="font-body-md text-white mt-1">Neural loop updated: Rainy weather impact on speed reduced by 5%.</p>
</div>
</div>
<button className="mt-4 w-full py-2 rounded-lg border border-white/10 font-label-caps text-[10px] hover:bg-white/5 transition-all uppercase tracking-widest">Audit Full Stream</button>
</div>
</section>
{/* Charts Row */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-spacing-gutter">
<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Event Trends</h3>
<div className="flex gap-2">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-[10px] font-data-mono">PLANNED</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
<span className="text-[10px] font-data-mono">ANOMALY</span>
</div>
</div>
</div>
<div className="h-48 w-full relative">
{/* Chart Mockup */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
<defs>
<linearGradient id="chart-grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#47d6ff" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#47d6ff" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,80 Q50,75 100,40 T200,60 T300,20 T400,50 L400,100 L0,100 Z" fill="url(#chart-grad)"></path>
<path d="M0,80 Q50,75 100,40 T200,60 T300,20 T400,50" fill="none" stroke="#47d6ff" strokeWidth="2"></path>
<path d="M0,90 Q50,85 100,70 T200,80 T300,50 T400,60" fill="none" stroke="#edb1ff" strokeDasharray="4" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
</div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-data-mono text-on-surface-variant">
<span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>00:00</span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Congestion Matrix</h3>
<span className="font-data-mono text-[10px] text-tertiary">NEURAL SYNC: OPTIMAL</span>
</div>
<div className="h-48 flex items-end gap-1">
{/* Histogram Bars */}
<div className="flex-1 bg-white/5 rounded-t h-[40%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[60%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[35%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[85%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-primary rounded-t h-[95%] shadow-[0_0_15px_rgba(71,214,255,0.4)]"></div>
<div className="flex-1 bg-white/5 rounded-t h-[75%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[55%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[45%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[30%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[20%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[15%] hover:bg-primary/40 transition-all cursor-pointer"></div>
<div className="flex-1 bg-white/5 rounded-t h-[10%] hover:bg-primary/40 transition-all cursor-pointer"></div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Peak Hour</span>
<span className="font-body-md text-white">17:45 - High Density</span>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-[10px] font-bold shadow-[0_0_15px_#47d6ff]">ADJUST SENSORS</button>
</div>
</div>
</section>
</main>
</div>
{/* Mobile Nav Anchor */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl border-t border-white/10 h-16 flex justify-around items-center px-4 z-50">
<button className="flex flex-col items-center text-primary">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[8px] font-label-caps">HUB</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[8px] font-label-caps">ANALYSIS</span>
</button>
<button className="w-12 h-12 -mt-8 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
<span className="material-symbols-outlined">psychology</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant">
<span className="material-symbols-outlined">online_prediction</span>
<span className="text-[8px] font-label-caps">PREDICT</span>
</button>
<button className="flex flex-col items-center text-on-surface-variant">
<span className="material-symbols-outlined">hub</span>
<span className="text-[8px] font-label-caps">GRAPH</span>
</button>
</div></div>
    </>
  );
}
