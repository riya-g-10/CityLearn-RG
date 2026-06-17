// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
        // Simple Interaction Logic
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mousedown', () => {
                card.style.transform = 'scale(0.98)';
            });
            card.addEventListener('mouseup', () => {
                card.style.transform = 'scale(1)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1)';
            });
        });

        // Pulsing AI status indicator simulation
        const statusDot = document.querySelector('.neural-dot');
        setInterval(() => {
            statusDot.style.opacity = Math.random() > 0.5 ? '1' : '0.4';
        }, 800);
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
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: #47d6ff33;
            box-shadow: 0 0 20px rgba(71, 214, 255, 0.1);
        }
        .glow-border {
            position: relative;
        }
        .glow-border::after {
            content: '';
            position: absolute;
            inset: -1px;
            background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
            z-index: -1;
            border-radius: inherit;
        }
        .neon-text-glow {
            text-shadow: 0 0 10px rgba(71, 214, 255, 0.5);
        }
        @keyframes pulse-neural {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
        }
        .neural-dot {
            animation: pulse-neural 2s infinite ease-in-out;
        }
        .radar-grid {
            stroke: rgba(187, 201, 207, 0.2);
            stroke-width: 1;
        }
        .radar-area {
            fill: rgba(71, 214, 255, 0.2);
            stroke: #47d6ff;
            stroke-width: 2;
        }` }} />
      <div className="bg-background text-on-surface font-body-md selection:bg-primary/30 selection:text-primary overflow-x-hidden">{/* Top Navigation Bar */}
<header className="fixed top-0 z-50 w-full bg-surface/10 backdrop-blur-3xl border-b border-white/10 px-spacing-margin-desktop h-16 flex justify-between items-center">
<div className="flex items-center gap-6">
<h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight">CityLearn Intelligence</h1>
<div className="hidden md:flex relative group">
<span className="absolute inset-y-0 left-3 flex items-center text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">search</span>
</span>
<input className="bg-white/5 border-none rounded-full pl-10 pr-4 py-1 text-sm focus:ring-1 focus:ring-primary w-64 transition-all" placeholder="Query historical memory..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">sensors</span>
</button>
<div className="relative">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full neural-dot"></span>
</div>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-primary/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxqYDRpz6vOTphfYIqLfBSbuU9hhBz6JZWvmH2Es6TxL8k2edIg_j2vmoyBg69gvKBReBqe3tRYUwDhM7z6deVdTvXhCn9JacbhI-M5pehqblOVwXBUzEa7SsUA8OXAAK8QqsonvBcaxIINkgCgmyT-sZvqpZNIzZC3QMiFM-u8EnsHx3zD8rwu5Dl4C5dFDgsx49Fa4KvIUGZpp1Z-QRRFYfDoiujHjT_zIcguDIuygYNnRE8euMJfWIVIwfbVBCBfxTb5_9T9aI"/>
</div>
</header>
<div className="flex min-h-screen pt-16">
{/* Sidebar Navigation */}
<aside className="fixed left-0 h-[calc(100vh-64px)] w-64 bg-surface/15 backdrop-blur-2xl border-r border-white/10 flex flex-col py-8 overflow-y-auto hidden md:flex">
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/dashboard">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/analysis-engine">
<span className="material-symbols-outlined">analytics</span>
<span>Analysis</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-primary font-bold border-r-2 border-primary bg-white/5 scale-95 transition-all" href="/institutional-memory-match">
<span className="material-symbols-outlined">compare_arrows</span>
<span>Similar Events</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/predictive-intelligence">
<span className="material-symbols-outlined">online_prediction</span>
<span>Predictions</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/strategic-recommendations">
<span className="material-symbols-outlined">recommend</span>
<span>Recommendations</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/scenario-simulator">
<span className="material-symbols-outlined">precision_manufacturing</span>
<span>Simulator</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">replay</span>
<span>Replay</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/knowledge-graph">
<span className="material-symbols-outlined">hub</span>
<span>Knowledge Graph</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant font-body-md hover:bg-white/5 hover:text-primary transition-all" href="/learning-loop">
<span className="material-symbols-outlined">psychology</span>
<span>Learning Loop</span>
</a>
</nav>
<div className="px-8 mt-auto pt-8 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-tertiary rounded-full neural-dot"></div>
<span className="text-xs font-label-caps text-tertiary">Neural Link Active</span>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="flex-1 md:ml-64 p-spacing-margin-mobile md:p-spacing-margin-desktop overflow-hidden">
{/* Page Header */}
<div className="mb-8">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-label-caps rounded">AI ANALYTICS</span>
<span className="text-on-surface-variant font-label-caps text-[10px]">MATCH ENGINE v4.2</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Historical Match Engine</h2>
<p className="text-on-surface-variant font-body-md max-w-2xl">Retrieving spatial-temporal patterns from Institutional Memory. Current event: <span className="text-primary font-bold">Downtown Fleet Migration (ID: 99x-A)</span>.</p>
</div>
{/* Dashboard Grid */}
<div className="grid grid-cols-12 gap-gutter">
{/* Radar Chart Section */}
<div className="col-span-12 lg:col-span-5 glass-card rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px]">
<h3 className="w-full text-left font-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">hub</span> Similarity Radar
                    </h3>
<div className="relative w-full h-64 flex items-center justify-center">
{/* Custom Radar Chart Visualization */}
<svg className="w-full h-full max-w-[300px]" viewBox="0 0 200 200">
{/* Grid */}
<circle className="radar-grid fill-none" cx="100" cy="100" r="80"></circle>
<circle className="radar-grid fill-none" cx="100" cy="100" r="60"></circle>
<circle className="radar-grid fill-none" cx="100" cy="100" r="40"></circle>
<line className="radar-grid" x1="100" x2="100" y1="20" y2="180"></line>
<line className="radar-grid" x1="20" x2="180" y1="100" y2="100"></line>
{/* Active Memory Shape */}
<polygon className="radar-area" points="100,40 160,100 100,150 50,100"></polygon>
{/* Labels */}
<text className="fill-on-surface-variant text-[8px] font-label-caps" text-anchor="middle" x="100" y="15">Density</text>
<text className="fill-on-surface-variant text-[8px] font-label-caps" text-anchor="start" x="185" y="105">Speed</text>
<text className="fill-on-surface-variant text-[8px] font-label-caps" text-anchor="middle" x="100" y="195">Risk</text>
<text className="fill-on-surface-variant text-[8px] font-label-caps" text-anchor="end" x="15" y="105">Duration</text>
</svg>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 w-full">
<div className="bg-white/5 rounded p-3">
<span className="block text-[10px] font-label-caps text-on-surface-variant">Master Match</span>
<span className="text-primary font-bold text-lg">94.2%</span>
</div>
<div className="bg-white/5 rounded p-3">
<span className="block text-[10px] font-label-caps text-on-surface-variant">Pattern Drift</span>
<span className="text-tertiary font-bold text-lg">±2.4%</span>
</div>
</div>
</div>
{/* Lessons Learned Expandable */}
<div className="col-span-12 lg:col-span-7 glass-card rounded-xl p-6 overflow-hidden">
<h3 className="font-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">psychology</span> Lessons Learned
                    </h3>
<div className="space-y-4">
{/* Expandable 1 */}
<details className="group bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-primary/20 transition-all" open="">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">check_circle</span>
<span className="font-bold">Protocol: Dynamic Rerouting Alpha</span>
</div>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-on-surface-variant border-t border-white/5 pt-3">
<p className="mb-2">Automated signal timing adjustments in Sector 7 successfully mitigated 85% of predicted bottlenecking during the 2023 Marathon event.</p>
<div className="flex gap-2">
<span className="bg-tertiary/10 text-tertiary text-[10px] font-label-caps px-2 py-0.5 rounded">Retain Strategy</span>
<span className="bg-white/5 text-on-surface-variant text-[10px] font-label-caps px-2 py-0.5 rounded">High Confidence</span>
</div>
</div>
</details>
{/* Expandable 2 */}
<details className="group bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-error/20 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error">cancel</span>
<span className="font-bold">Protocol: Static Perimeter Lock</span>
</div>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-on-surface-variant border-t border-white/5 pt-3">
<p className="mb-2">The 'Stadium Opening' event proved that hard perimeters lead to secondary congestion points. Neural drift suggests adaptive zones instead.</p>
<div className="flex gap-2">
<span className="bg-error/10 text-error text-[10px] font-label-caps px-2 py-0.5 rounded">Deprecate</span>
<span className="bg-white/5 text-on-surface-variant text-[10px] font-label-caps px-2 py-0.5 rounded">Root Cause Identified</span>
</div>
</div>
</details>
{/* Expandable 3 */}
<details className="group bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-secondary/20 transition-all">
<summary className="flex items-center justify-between p-4 cursor-pointer list-none">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary">info</span>
<span className="font-bold">Citizen Messaging Latency</span>
</div>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="px-4 pb-4 text-sm text-on-surface-variant border-t border-white/5 pt-3">
<p className="mb-2">Manual notification approval delays response time. Recommend switching to AI-driven situational broadcasts.</p>
<div className="flex gap-2">
<span className="bg-secondary/10 text-secondary text-[10px] font-label-caps px-2 py-0.5 rounded">Iterate</span>
<span className="bg-white/5 text-on-surface-variant text-[10px] font-label-caps px-2 py-0.5 rounded">Automation Potential</span>
</div>
</div>
</details>
</div>
</div>
{/* Top Historical Matches Grid */}
<div className="col-span-12 mt-8">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-caps text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">history</span> Top Historical Matches
                        </h3>
<div className="flex gap-2">
<button className="bg-white/5 hover:bg-white/10 p-2 rounded transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
<button className="bg-white/5 hover:bg-white/10 p-2 rounded transition-colors">
<span className="material-symbols-outlined text-[20px]">sort</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* Match Card 1 */}
<div className="glass-card rounded-xl overflow-hidden flex flex-col group">
<div className="relative h-40 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A cinematic low angle shot of a city marathon at dawn. Thousands of runners fill a wide urban boulevard between glowing glass skyscrapers. The morning light is cool and blue with golden sun rays piercing through the architecture. High contrast, professional urban photography style with a futuristic city vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnxR0ccKBqqHeNPLE5PRBsr8yAvLT65LvcZ_3oQTaQKzJ3yZYXmkIf5xVhvmXyMWZaAEVDGXTJDmUy9ZgKoXe1s1aWtg6fzOrX_Xp_ZywlyC2EW4-bC9BFLf_MXec6IdwGGkE6ibdUy1l9JMgj4zI0P5IrC7E7Y4P1vWxKtFGdIvQewp1ocw0dhNItpxRlBBdybyB0Sn2HZ4toy_80qXAF3jGSaFp1g9P1FybhMCvDw-HQr9ENkR26NfieWrSGlGCWn4Twjmy6PqI"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] font-label-caps bg-primary text-on-primary px-2 py-0.5 rounded mb-2 inline-block">MOST SIMILAR</span>
<h4 className="font-bold text-lg leading-tight">City Marathon 2023</h4>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Similarity</span>
<span className="font-data-mono text-primary text-xl">96.8%</span>
</div>
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Outcome</span>
<span className="font-data-mono text-tertiary text-xl">Success</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 mb-4">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> Resolution Time
                                    </span>
<span className="font-data-mono text-sm">04:12:44</span>
</div>
<button className="mt-auto w-full py-2 bg-primary/10 border border-primary/20 text-primary font-label-caps text-xs rounded hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                                    ANALYZE ARCHIVE <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/* Match Card 2 */}
<div className="glass-card rounded-xl overflow-hidden flex flex-col group">
<div className="relative h-40 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A wide architectural shot of a massive modern stadium glowing with neon purple lights against a deep night sky. Crowds of people are visualized as light trails moving toward the entrance. The scene is futuristic and energetic with a dark, moody atmosphere and high-tech cinematic lighting. Digital art aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB49qcoE98LwWbc2IA2N2UN_pZiEdk1n7q7DCSx2oAmTyaREomdfpjxsoplkMqqacN0hE17ikbYY5K4ZU2qI7qwEXUpfZfKw0YhEfLi_VRbDGY0KyGkjQcMvlwlCYadXaI8AftwQNmvoOGkuxwxjxmMY6f3JwUrPafh4Sn3ZDVcxmBe0VGKWZ2A_82Sxnw5Z6c-MmFEWePaMKnx9GWOXeVrqVmxeumUIrSsX2sBbbJBm-kvyA4X3pJvphluq_zgQX_DmjcDjNHf0hI"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h4 className="font-bold text-lg leading-tight">Stadium Opening Night</h4>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Similarity</span>
<span className="font-data-mono text-primary text-xl">82.1%</span>
</div>
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Outcome</span>
<span className="font-data-mono text-error text-xl">Critical</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 mb-4">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> Resolution Time
                                    </span>
<span className="font-data-mono text-sm">08:45:12</span>
</div>
<button className="mt-auto w-full py-2 bg-white/5 border border-white/10 text-on-surface font-label-caps text-xs rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    VIEW REPLAY <span className="material-symbols-outlined text-[16px]">play_circle</span>
</button>
</div>
</div>
{/* Match Card 3 */}
<div className="glass-card rounded-xl overflow-hidden flex flex-col group">
<div className="relative h-40 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="An aerial view of a smart city network at dusk with digital data overlays. Glowing blue lines trace the flow of autonomous vehicles through a complex interchange. The image has a sophisticated corporate intelligence feel, with deep navy and electric blue tones. Sharp, detailed, and high-tech visualization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_qg2ul5JaJVcRBYwQUFQ36kA5-HWIX5UmQfXMPdLB9t_gH3E65PZjdrfdJYwDeOBPSBIwHX2m1Fj1GhrV6YKPgC2BwU6NJ2pIGEycSaDl3wZDCzGruQognaVSFRdnawhVdG-16mMBf4MfG_eCFtcoYh0Wj3F5I6x4cZB8So6dZo71iRcNOwQtv9XeOu0fpk33YtoOVO9npeiRpXpv91HARZf6umCXMlWH4pgRKy-vrgD2pbxD4ohBHN1Xh2CaNdW-NBuplPZ88Y"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h4 className="font-bold text-lg leading-tight">Fleet System Reboot</h4>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Similarity</span>
<span className="font-data-mono text-primary text-xl">74.5%</span>
</div>
<div>
<span className="block text-[10px] font-label-caps text-on-surface-variant">Outcome</span>
<span className="font-data-mono text-tertiary text-xl">Success</span>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5 mb-4">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span> Resolution Time
                                    </span>
<span className="font-data-mono text-sm">01:30:00</span>
</div>
<button className="mt-auto w-full py-2 bg-white/5 border border-white/10 text-on-surface font-label-caps text-xs rounded hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    ANALYZE ARCHIVE <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
{/* Background Atmospheric Effect */}
<div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{"animationDelay": "2s"}}></div>
</div></div>
    </>
  );
}
