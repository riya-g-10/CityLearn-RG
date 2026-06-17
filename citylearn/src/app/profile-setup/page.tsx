// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
        // Micro-interactions for form inputs
        document.querySelectorAll('input, select').forEach(el => {
            el.addEventListener('focus', () => {
                // Potential for adding SFX or dynamic glow effects
            });
        });

        // Simulating the "Complete Setup" logic
        document.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            const btn = e.currentTarget;
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> <span class="font-label-mono">SYNCHRONIZING...</span>';
            
            setTimeout(() => {
                btn.classList.add('bg-secondary', 'text-on-secondary');
                btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> <span class="font-label-mono">AUTHORIZED</span>';
                setTimeout(() => {
                    alert('Profile Initialized. Redirecting to City Dashboard.');
                    window.location.href = '/dashboard';
                }, 800);
            }, 1500);
        });
      } catch (e) {
        console.error("Error running page script:", e);
      }
    };
    runScript();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `body {
            font-family: 'Nunito Sans', sans-serif;
            background-color: #0e1417;
            color: #dde3e7;
            overflow-x: hidden;
        }
        .glass-panel {
            background: rgba(22, 29, 31, 0.8);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .step-active {
            color: #a5e7ff;
            border-bottom: 2px solid #a5e7ff;
        }
        .input-focus-ring:focus {
            outline: none;
            border-color: #47d6ff;
            box-shadow: 0 0 0 1px #47d6ff;
        }
        /* Custom scrollbar for data-heavy feel */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0e1417; }
        ::-webkit-scrollbar-thumb { background: #2f3639; border-radius: 2px; }` }} />
      <div className="bg-background text-on-background min-h-screen flex flex-col">{/* TopAppBar */}
<header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-lg text-primary dark:text-primary border-b border-outline-variant/20 docked full-width top-0 z-50 flex justify-between items-center w-full px-margin-desktop h-16">
<div className="flex items-center gap-4">
<span className="font-headline-lg-mobile text-primary dark:text-primary font-bold tracking-tight">CityLearn Intelligence</span>
<div className="h-6 w-[1px] bg-outline-variant/30 hidden md:block"></div>
<span className="font-label-mono text-on-surface-variant uppercase tracking-widest text-[10px] hidden md:block">Profile Provisioning Engine</span>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4 items-center">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">dark_mode</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
<span className="material-symbols-outlined text-primary cursor-pointer">account_circle</span>
</div>
</div>
</header>
<main className="flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto mt-16 overflow-hidden">
{/* Left: Contextual Visualizer (Atmospheric) */}
<section className="hidden lg:flex w-1/3 p-margin-desktop flex-col justify-between border-r border-outline-variant/10 relative overflow-hidden">
<div className="absolute inset-0 z-0"></div>
<div className="relative z-10">
<p className="font-label-mono text-primary text-[10px] uppercase mb-2">System Initializing</p>
<h1 className="font-headline-xl text-on-surface leading-tight">Welcome to the<br/>Core Network.</h1>
<p className="font-body-md text-on-surface-variant mt-4 max-w-xs">Initialize your operational profile to access city-wide intelligence, simulation engines, and predictive analytics.</p>
</div>
<div className="relative z-10 glass-panel p-6 rounded-lg">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="font-label-mono text-xs uppercase text-on-surface">Biometric Link: Pending</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
<span className="font-label-mono text-xs uppercase text-on-surface-variant">Geo-spatial Lock: Unassigned</span>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20">
<p className="font-label-mono text-[10px] text-on-surface-variant leading-relaxed">
                            SECURE_HANDSHAKE: 0x8F92...<br/>
                            LATENCY: 14ms<br/>
                            ENCRYPTION: AES-256-GCM
                        </p>
</div>
</div>
</div>
</section>
{/* Right: The Setup Form */}
<section className="flex-1 h-[calc(100vh-64px)] overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-container-lowest/50">
<div className="max-w-3xl mx-auto space-y-12 pb-24">
{/* Section 1: Professional Identity */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
<span className="material-symbols-outlined text-primary">badge</span>
<h2 className="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Professional Identity</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">User Name</label>
<input className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all" placeholder="e.g. Alex Chen" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Department</label>
<select className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all">
<option>Urban Planning</option>
<option>Emergency Response</option>
<option>Transit Authority</option>
<option>Grid Management</option>
<option>Data Science</option>
</select>
</div>
<div className="space-y-2 md:col-span-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Designation</label>
<input className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all" placeholder="e.g. Senior Simulation Analyst" type="text"/>
</div>
</div>
</div>
{/* Section 2: Geo-Spatial Context */}
<div className="space-y-6">
<div className="flex items-center justify-between border-b border-outline-variant/20 pb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
<h2 className="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Geo-Spatial Context</h2>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded border border-primary/30 text-primary font-label-mono text-xs hover:bg-primary/10 transition-colors uppercase">
<span className="material-symbols-outlined text-sm">my_location</span>
                            Use Current Location
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Country</label>
<select className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>United States</option>
<option>Singapore</option>
<option>Germany</option>
<option>Japan</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">State/Region</label>
<select className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>California</option>
<option>Bavaria</option>
<option>Tokyo Prefecture</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Primary City</label>
<select className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>San Francisco</option>
<option>Munich</option>
<option>Tokyo</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Primary Zone / District</label>
<input className="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring" placeholder="e.g. North Sector 7" type="text"/>
</div>
{/* Mini Map Card */}
<div className="w-full h-48 rounded-lg overflow-hidden border border-outline-variant/20 relative group">
<img className="w-full h-full object-cover filter grayscale brightness-50 group-hover:brightness-75 transition-all duration-700" data-alt="A highly detailed 3D topographic map of a modern city center at night, with glowing blue and teal grid lines highlighting traffic flow and infrastructure layers. The aesthetic is clean and futuristic, similar to a mission control console display, with deep shadows and vibrant digital overlays in electric blue." data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8iHcq4PAzDwEoO1irwxMvjiwfn1uZiEx06-Cxpy9dYlHO--RUBujRVcKNct35qwgib25yeNa6OJmJm_4bldXoZTTqedaK_D-lCUkkiUWTpfQS8tfgCNS6CMoaMge-8wBSoUub7p9FQFrNyPnGQQ2it9TFEO4OxHfnG2W5ZBY2mb6nNm3RyHoK-YSsjfSVNMmhF5FR9_U76P3GQWmFw409Dad8r_QJQFHzVp7T7_JA36iiAzKktJDkwla9xkRDeTfOqb9oIz0nos"/>
<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>location_on</span>
<span className="font-label-mono text-xs uppercase text-on-surface font-bold tracking-widest">Network Lock: Central Grid</span>
</div>
</div>
</div>
</div>
{/* Section 3: Interface Preferences */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
<span className="material-symbols-outlined text-primary">settings_suggest</span>
<h2 className="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Mission Control Preferences</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Dashboard Layout Select */}
<div className="space-y-4">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Preferred Dashboard Layout</label>
<div className="grid grid-cols-2 gap-4">
<div className="border border-primary bg-primary/5 p-4 rounded-lg cursor-pointer transition-all">
<div className="flex flex-col gap-2">
<div className="flex gap-1">
<div className="w-full h-4 bg-primary/40 rounded-sm"></div>
</div>
<div className="flex gap-1">
<div className="w-1/2 h-8 bg-primary/20 rounded-sm"></div>
<div className="w-1/2 h-8 bg-primary/20 rounded-sm"></div>
</div>
<span className="font-label-mono text-[10px] text-primary text-center mt-2">ANALYTICS PRIME</span>
</div>
</div>
<div className="border border-outline-variant/40 hover:border-primary/50 p-4 rounded-lg cursor-pointer transition-all">
<div className="flex flex-col gap-2">
<div className="flex gap-1">
<div className="w-1/3 h-12 bg-on-surface-variant/20 rounded-sm"></div>
<div className="w-2/3 h-12 bg-on-surface-variant/20 rounded-sm"></div>
</div>
<span className="font-label-mono text-[10px] text-on-surface-variant text-center mt-2 group-hover:text-on-surface">SIMULATOR FLOW</span>
</div>
</div>
</div>
</div>
{/* Notifications */}
<div className="space-y-4">
<label className="font-label-mono text-xs text-on-surface-variant uppercase">Notification Protocol</label>
<div className="space-y-3">
<label className="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span className="font-body-sm text-on-surface group-hover:text-primary transition-colors">Critical System Alerts</span>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-on-primary rounded-full"></div>
</div>
</label>
<label className="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span className="font-body-sm text-on-surface group-hover:text-primary transition-colors">Simulation Reports</span>
<div className="w-10 h-5 bg-outline-variant/40 rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-on-surface-variant rounded-full"></div>
</div>
</label>
<label className="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span className="font-body-sm text-on-surface group-hover:text-primary transition-colors">Anomaly Detection Triggers</span>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-on-primary rounded-full"></div>
</div>
</label>
</div>
</div>
</div>
</div>
{/* Complete Action */}
<div className="pt-12 flex justify-end">
<a className="group relative inline-flex items-center gap-4 bg-primary px-8 py-4 rounded font-bold text-on-primary hover:bg-primary-container transition-all active:scale-95 duration-200" href="/dashboard">
<span className="font-label-mono text-sm tracking-widest uppercase">Complete Setup</span>
<span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</section>
</main>
{/* Background Decoration */}
<div className="fixed bottom-0 right-0 p-8 pointer-events-none opacity-20">
<span className="font-label-mono text-[8rem] leading-none text-outline-variant select-none">INIT</span>
</div></div>
    </>
  );
}
