// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
        let currentStep = 1;
        const totalSteps = 3;

        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        const stepTitle = document.getElementById('step-title');
        const stepSubtitle = document.getElementById('step-subtitle');
        const passwordInput = document.getElementById('password');
        const strengthBar = document.getElementById('strength-bar');

        const stepContents = {
            1: document.getElementById('step-1-content'),
            2: document.getElementById('step-2-content'),
            3: document.getElementById('step-3-content')
        };

        const titles = {
            1: "Personal Identity",
            2: "Professional Context",
            3: "Geospatial Data"
        };

        const subtitles = {
            1: "Step 1: Define your access credentials.",
            2: "Step 2: Help us tailor your mission control dashboard.",
            3: "Step 3: Regional deployment settings."
        };

        function updateUI() {
            // Hide all content
            Object.values(stepContents).forEach(content => {
                content.classList.add('hidden', 'opacity-0', 'translate-x-10');
            });

            // Show current content
            const activeContent = stepContents[currentStep];
            activeContent.classList.remove('hidden');
            setTimeout(() => {
                activeContent.classList.remove('opacity-0', 'translate-x-10');
            }, 50);

            // Update text
            stepTitle.innerText = titles[currentStep];
            stepSubtitle.innerText = subtitles[currentStep];

            // Update indicators
            for(let i = 1; i <= totalSteps; i++) {
                const dot = document.getElementById(`dot-${i}`);
                if(i <= currentStep) {
                    dot.classList.replace('bg-surface-variant', 'bg-primary');
                } else {
                    dot.classList.replace('bg-primary', 'bg-surface-variant');
                }
            }

            // Update buttons
            if (currentStep === 1) {
                prevBtn.classList.add('invisible');
            } else {
                prevBtn.classList.remove('invisible');
            }

            if (currentStep === totalSteps) {
                nextBtn.querySelector('span').innerText = "Create Account";
                nextBtn.querySelector('.material-symbols-outlined').innerText = "how_to_reg";
            } else {
                nextBtn.querySelector('span').innerText = "Next Step";
                nextBtn.querySelector('.material-symbols-outlined').innerText = "arrow_forward";
            }
        }

        nextBtn.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateUI();
            } else {
                // Submit logic
                nextBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">progress_activity</span> Deploying...';
                setTimeout(() => {
                    alert("Account initialization sequence complete. Redirecting to Dashboard.");
                    window.location.href = '/dashboard';
                }, 2000);
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateUI();
            }
        });

        passwordInput.addEventListener('input', (e) => {
            const val = e.target.value;
            let strength = 0;
            if (val.length > 5) strength += 25;
            if (val.match(/[A-Z]/)) strength += 25;
            if (val.match(/[0-9]/)) strength += 25;
            if (val.match(/[^A-Za-z0-9]/)) strength += 25;

            strengthBar.style.width = strength + '%';
            
            if (strength < 30) strengthBar.style.backgroundColor = '#ffb4ab'; // error
            else if (strength < 70) strengthBar.style.backgroundColor = '#ffba4a'; // warning
            else strengthBar.style.backgroundColor = '#a5e7ff'; // success/primary
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
            background-color: #0e1417;
            overflow-x: hidden;
            font-family: 'Nunito Sans', sans-serif;
        }
        .glass-panel {
            background: rgba(26, 33, 35, 0.8);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        input:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(165, 231, 255, 0.3);
        }
        .step-transition {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .password-strength-meter {
            height: 4px;
            border-radius: 2px;
            background: #2f3639;
            overflow: hidden;
        }
        .strength-bar {
            height: 100%;
            width: 0%;
            transition: width 0.3s ease, background-color 0.3s ease;
        }` }} />
      <div className="min-h-screen flex items-center justify-center p-4">{/* Background Animation Container */}
<div className="fixed inset-0 z-0"></div>
{/* Main Registration Shell */}
<main className="relative z-10 w-full max-w-2xl">
<div className="glass-panel rounded-xl overflow-hidden flex flex-col md:flex-row">
{/* Left Branding Column (Visible on Desktop) */}
<div className="hidden md:flex md:w-1/3 bg-primary-container p-10 flex-col justify-between text-on-primary-container relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
{/* Subtle Pattern */}
<div className="absolute inset-0" style={{"backgroundImage": "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", "backgroundSize": "24px 24px"}}></div>
</div>
<div className="relative z-10">
<h1 className="font-headline-lg text-headline-lg leading-tight mb-4">CityLearn Intelligence</h1>
<p className="font-body-sm text-body-sm opacity-80">Next-generation urban operations and predictive modeling for resilient cities.</p>
</div>
<div className="relative z-10 flex items-center gap-2">
<span className="material-symbols-outlined text-[32px]">hub</span>
<span className="font-label-mono text-label-mono uppercase tracking-widest">Global Network</span>
</div>
</div>
{/* Right Form Column */}
<div className="flex-1 p-8 md:p-12">
{/* Multi-step Indicator */}
<div className="flex items-center justify-between mb-8">
<div className="flex gap-2 w-full" id="step-indicator">
<div className="h-1 flex-1 bg-primary rounded-full transition-all duration-500" id="dot-1"></div>
<div className="h-1 flex-1 bg-surface-variant rounded-full transition-all duration-500" id="dot-2"></div>
<div className="h-1 flex-1 bg-surface-variant rounded-full transition-all duration-500" id="dot-3"></div>
</div>
</div>
<div className="mb-8">
<h2 className="font-headline-lg text-on-surface mb-1" id="step-title">Personal Identity</h2>
<p className="font-body-sm text-on-surface-variant" id="step-subtitle">Step 1: Define your access credentials.</p>
</div>
<form className="space-y-6" id="signup-form">
{/* Step 1: Personal Details */}
<div className="step-transition space-y-4" id="step-1-content">
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Full Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" name="name" placeholder="Alex Morgan" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Email Address</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" name="email" placeholder="a.morgan@city.gov" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" id="password" placeholder="••••••••" type="password"/>
<div className="password-strength-meter mt-2">
<div className="strength-bar" id="strength-bar"></div>
</div>
</div>
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Confirm Password</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
{/* Step 2: Professional Details (Hidden by default) */}
<div className="step-transition space-y-4 hidden opacity-0 translate-x-10" id="step-2-content">
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Organization / Department</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" placeholder="Department of Urban Planning" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Role / Designation</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50 appearance-none">
<option>Senior Data Analyst</option>
<option>Operations Manager</option>
<option>City Planner</option>
<option>System Architect</option>
<option>Emergency Coordinator</option>
</select>
</div>
</div>
{/* Step 3: Location (Hidden by default) */}
<div className="step-transition space-y-4 hidden opacity-0 translate-x-10" id="step-3-content">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">City</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" placeholder="Singapore" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">State/Region</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" placeholder="Central" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Country</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body-md transition-all focus:border-primary/50" placeholder="Singapore" type="text"/>
</div>
<div className="flex items-start gap-3 pt-4">
<input className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-lowest" id="terms" type="checkbox"/>
<label className="font-body-sm text-on-surface-variant" htmlFor="terms">
                                I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Data Governance Protocol</a> of CityLearn Intelligence.
                            </label>
</div>
</div>
{/* Actions */}
<div className="flex flex-col gap-4 pt-6">
<button className="w-full py-4 bg-primary text-on-primary rounded-lg font-body-md font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2" id="next-btn" type="button">
<span>Next Step</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<div className="flex items-center justify-between">
<button className="invisible py-2 px-4 text-on-surface-variant hover:text-on-surface font-body-sm flex items-center gap-1 transition-colors" id="prev-btn" type="button">
<span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back
                            </button>
<a className="font-body-sm text-on-surface-variant" href="/sign-in">
                                Already registered? <span className="text-primary hover:underline">Sign In</span>
</a>
</div>
</div>
</form>
</div>
</div>
<div className="mt-8 text-center">
<p className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest opacity-50">
                Encrypted with 256-bit AES • Infrastructure Resilience Protocol 4.2
            </p>
</div>
</main></div>
    </>
  );
}
