// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
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
      } catch (e) {
        console.error("Error running page script:", e);
      }
    };
    runScript();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
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
        }` }} />
      <div className="bg-background text-on-surface">{/* Top Navigation Bar */}
<header className="fixed top-0 z-50 w-full h-16 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-lg border-b border-outline-variant/20 flex justify-between items-center px-margin-desktop">
<div className="flex items-center gap-8">
<h1 className="font-headline-lg-mobile text-primary dark:text-primary font-bold tracking-tight">CityLearn Intelligence</h1>
<div className="hidden md:flex flex-col">
<span className="text-body-sm text-on-surface font-medium">Welcome back, Alex Rivera</span>
<span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Current Location: San Francisco, CA</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<button className="flex items-center gap-2 hover:bg-on-surface/5 p-2 rounded-lg transition-colors">
<img alt="Alex Rivera" className="w-8 h-8 rounded-full border border-outline/30 object-cover" data-alt="A professional headshot of a Hispanic male in his late 30s with a clean-cut beard and stylish modern glasses. He is wearing a dark navy executive blazer over a crisp white shirt, posing against a blurred high-tech city operations center background. The lighting is cool-toned and cinematic, reflecting a high-end enterprise software aesthetic with deep blacks and vibrant blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_cjf245v-hK_9glAM36tV9NZIQ4FfZUveKGqFLp7dDMzIAOkkC7QbjDXu6Wcfzdvlc1nlfh7H7_M6KLcDnvJTungneL-8UKms6NADMCFfVOdnMrpQX2qqJBQw7rK0e6tjUO6N2SiWFYVmP66emBnc3GctKcEN7maY-1ES8L5PZUTEeZsIIul36WozOpZi_LeNuvfgLy0Si7kqpd7_XFB06RUFuNn6lx3rl6bfuTORfLttCfIqTqEBJetSzRRsk-3m4e9l7EC7458"/>
<span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
</button>
{/* Dropdown Menu */}
<div className="absolute right-0 top-full mt-2 w-48 bg-surface-container border border-outline-variant/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
<div className="p-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface bg-secondary-container dark:bg-secondary-container/30 rounded-lg" href="/profile">
<span className="material-symbols-outlined text-[18px]">person</span> View Profile
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined text-[18px]">history</span> Activity
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface-variant hover:bg-surface-variant transition-colors rounded-lg" href="/profile">
<span className="material-symbols-outlined text-[18px]">settings</span> Settings
                        </a>
<div className="h-px bg-outline-variant/20 my-1"></div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-error hover:bg-error-container/20 transition-colors rounded-lg" href="#">
<span className="material-symbols-outlined text-[18px]">logout</span> Sign Out
                        </a>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-on-surface/5 rounded-full transition-colors">dark_mode</button>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-on-surface/5 rounded-full transition-colors relative">
                    notifications
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
</button>
</div>
</div>
</header>
{/* Side Navigation Bar */}
<aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-[280px] bg-surface-container-lowest/90 backdrop-blur-xl border-r border-outline-variant/10 py-6 px-4 hidden md:flex flex-col space-y-2 overflow-y-auto">
<div className="px-4 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">location_city</span>
</div>
<div>
<p className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface">City Operations</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Mission Control</p>
</div>
</div>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="/dashboard">
<span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
<span className="font-label-mono text-label-mono uppercase">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="/analysis-engine">
<span className="material-symbols-outlined group-hover:text-primary">analytics</span>
<span className="font-label-mono text-label-mono uppercase">Analysis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="/predictive-intelligence">
<span className="material-symbols-outlined group-hover:text-primary">online_prediction</span>
<span className="font-label-mono text-label-mono uppercase">Predictions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:translate-x-1 transition-all duration-200 rounded-lg group" href="/scenario-simulator">
<span className="material-symbols-outlined group-hover:text-primary">model_training</span>
<span className="font-label-mono text-label-mono uppercase">Simulator</span>
</a>
<div className="pt-4 pb-2 px-4 text-[10px] font-bold text-outline uppercase tracking-widest">Administrative</div>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container/30 text-secondary rounded-lg" href="/profile">
<span className="material-symbols-outlined">person</span>
<span className="font-label-mono text-label-mono uppercase">Profile</span>
</a>
</nav>
<button className="w-full mt-auto py-3 bg-primary text-on-primary font-bold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">play_arrow</span> Run Simulation
        </button>
</aside>
{/* Main Content Canvas */}
<main className="md:pl-[280px] pt-16 min-h-screen">
<div className="max-w-[1200px] mx-auto p-margin-desktop space-y-gutter">
{/* Hero Profile Section */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 glass-card bg-surface-container-low/50 border border-outline-variant/10 rounded-xl p-8 relative overflow-hidden flex items-end">
{/* Background Shader Decor */}
<div className="absolute top-0 right-0 w-2/3 h-full opacity-30 pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-center md:items-end gap-8 relative z-10">
<div className="relative">
<div className="w-40 h-40 rounded-xl overflow-hidden border-4 border-surface shadow-2xl">
<img alt="Alex Rivera" className="w-full h-full object-cover" data-alt="Close up of a professional architect in a sleek mission control setting. The man is looking thoughtfully into the distance, wearing a modern dark suit jacket. Behind him, glowing blue data interfaces and holographic maps of a city are subtly visible through a soft bokeh effect. The lighting is sophisticated, with blue and teal highlights cutting across the dark, minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACVQnt-rJcIEaj8Zesz9MBf202MGlkB06ZVjxbP89q41K35mVAh7BoZ8PdYs-isZTcp5qit1kGpgN1lhFPIA3h98_R6-8-q4WMq7zDlJrmW4l9N2L8Hv7kOE1VABccz8RMfML1BKD3T4C2JDWugDilheruhvpiq14e88M_MWIxBpl1zjJSX_rwROAl3_xCNYT_0rQoFMOhcUwIXfWG8FXfnONrHq2zGtZT6R9Z17ZvjwWPtzUmEjGbUVrma55dABB6-Q4dtyjTniA"/>
</div>
<button className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary-container text-on-primary-container rounded-lg shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<div className="text-center md:text-left space-y-2">
<div className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-[10px] font-bold uppercase tracking-widest mb-2">Verified Expert</div>
<h2 className="font-headline-xl text-on-surface leading-tight">Alex Rivera</h2>
<p className="text-on-surface-variant font-body-md">Senior Urban Logistics Architect • City Operations AI</p>
<div className="flex items-center justify-center md:justify-start gap-4 text-sm text-outline mt-4">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> San Francisco, CA, USA</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">mail</span> a.rivera@citylearn.gov</span>
</div>
</div>
</div>
</div>
{/* Action Panel */}
<div className="glass-card bg-surface-container-high/50 border border-outline-variant/10 rounded-xl p-6 flex flex-col justify-between">
<h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6 flex items-center justify-between">
                        Quick Actions
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
</h3>
<div className="space-y-3">
<button className="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">person_edit</span>
<span className="font-body-md font-medium">Edit Profile</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">map</span>
<span className="font-body-md font-medium">Location Settings</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
<button className="w-full group flex items-center justify-between p-4 bg-surface-variant/50 hover:bg-surface-variant border border-outline-variant/20 rounded-lg transition-all duration-200">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">security</span>
<span className="font-body-md font-medium">Security &amp; Access</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant/20">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-on-surface-variant uppercase font-bold">Account Health</span>
<span className="text-xs text-primary font-mono-data">98% Secure</span>
</div>
<div className="w-full h-1 bg-outline-variant/20 rounded-full overflow-hidden">
<div className="h-full bg-primary w-[98%] shadow-[0_0_8px_rgba(165,231,255,0.5)]"></div>
</div>
</div>
</div>
</section>
{/* Stats Grid */}
<section className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-colors">
<p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Events Analyzed</p>
<h4 className="font-mono-data text-headline-lg text-primary">12,482</h4>
<p className="text-[10px] text-primary/60 mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> +12% this month
                    </p>
</div>
<div className="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-colors">
<p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Predictions</p>
<h4 className="font-mono-data text-headline-lg text-secondary">842</h4>
<p className="text-[10px] text-secondary/60 mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check_circle</span> 94% Accuracy
                    </p>
</div>
<div className="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-tertiary/30 transition-colors">
<p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Approved</p>
<h4 className="font-mono-data text-headline-lg text-tertiary">319</h4>
<p className="text-[10px] text-tertiary/60 mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">bolt</span> High Impact Rank
                    </p>
</div>
<div className="glass-card bg-surface-container/60 p-6 rounded-xl border border-outline-variant/10 hover:border-outline/30 transition-colors">
<p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4">Simulations</p>
<h4 className="font-mono-data text-headline-lg text-on-surface">56</h4>
<p className="text-[10px] text-on-surface-variant mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">timer</span> 4.2h Avg/Week
                    </p>
</div>
</section>
{/* Performance Visualization */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 glass-card bg-surface-container/40 p-8 rounded-xl border border-outline-variant/10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-headline-lg-mobile text-on-surface">Impact Velocity</h3>
<p className="text-on-surface-variant text-sm">Quantifying operational efficiency over the last 30 days.</p>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-xs text-on-surface-variant font-mono-data uppercase">Active Output</span>
</div>
</div>
{/* SVG Chart Representation */}
<div className="h-64 w-full relative">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
<defs>
<linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{"stopColor": "rgba(165,231,255,0.2)", "stopOpacity": "1"}}></stop>
<stop offset="100%" style={{"stopColor": "rgba(165,231,255,0)", "stopOpacity": "1"}}></stop>
</linearGradient>
</defs>
{/* Grid lines */}
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
{/* Area Path */}
<path d="M0,180 Q100,160 200,120 T400,100 T600,140 T800,40 L800,200 L0,200 Z" fill="url(#chartGradient)"></path>
{/* Line Path */}
<path className="chart-line-anim" d="M0,180 Q100,160 200,120 T400,100 T600,140 T800,40" fill="none" stroke="#a5e7ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
{/* Interaction Dots */}
<circle className="animate-pulse shadow-glow" cx="200" cy="120" fill="#a5e7ff" r="4"></circle>
<circle cx="800" cy="40" fill="#a5e7ff" r="4"></circle>
</svg>
{/* Axis Labels */}
<div className="flex justify-between mt-4 text-[10px] font-mono-data text-outline uppercase tracking-wider">
<span>Wk 01</span>
<span>Wk 02</span>
<span>Wk 03</span>
<span>Wk 04 (Current)</span>
</div>
</div>
</div>
{/* Recent Activity Feed */}
<div className="glass-card bg-surface-container/40 p-8 rounded-xl border border-outline-variant/10">
<h3 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-6">Recent Activity</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary-container/50 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/30"></div>
</div>
<div>
<p className="text-sm text-on-surface font-medium">Simulation Approved</p>
<p className="text-xs text-on-surface-variant">L-9 Urban Corridor Optimization</p>
<p className="text-[10px] text-outline mt-1 uppercase font-mono-data">2 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-primary-container/50 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-outline-variant/30"></div>
</div>
<div>
<p className="text-sm text-on-surface font-medium">Dataset Analysis Complete</p>
<p className="text-xs text-on-surface-variant">SF Transit Grid (Batch #442)</p>
<p className="text-[10px] text-outline mt-1 uppercase font-mono-data">5 hours ago</p>
</div>
</div>
<div className="flex gap-4">
<div className="">
<div className="w-10 h-10 rounded-full bg-tertiary-container/50 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-[20px]">notifications_active</span>
</div>
</div>
<div>
<p className="text-sm text-on-surface font-medium">Security Alert Handled</p>
<p className="text-xs text-on-surface-variant">API Gateway unauthorized attempt</p>
<p className="text-[10px] text-outline mt-1 uppercase font-mono-data">Yesterday</p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Bottom Navigation (Mobile Only) */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low/90 backdrop-blur-xl flex justify-around py-4 border-t border-outline-variant/10 z-50 px-6">
<a className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Dash</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="/analysis-engine">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Analysis</span>
</a>
<div className="relative -top-8">
<button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[32px]">play_arrow</span>
</button>
</div>
<a className="flex flex-col items-center gap-1 text-on-surface-variant transition-colors hover:text-primary" href="#">
<span className="material-symbols-outlined">hub</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Knowledge</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="/profile">
<span className="material-symbols-outlined font-variation-settings: 'FILL' 1">person</span>
<span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
</a>
</nav></div>
    </>
  );
}
