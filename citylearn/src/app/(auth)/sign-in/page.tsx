// @ts-nocheck
"use client";

import React, { useEffect } from "react";

export default function Page() {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const runScript = () => {
      try {
        // Theme Toggle Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                themeIcon.textContent = 'light_mode';
            } else {
                html.classList.add('dark');
                themeIcon.textContent = 'dark_mode';
            }
        });

        // Password Visibility Toggle
        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');

        togglePassword.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            togglePassword.querySelector('span').textContent = isPassword ? 'visibility_off' : 'visibility';
        });

        // Form Submission Interaction
        const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<span class="material-symbols-outlined animate-spin">refresh</span> Validating...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btn.innerHTML = '<span class="material-symbols-outlined">check_circle</span> Authenticated';
                btn.classList.replace('bg-primary', 'bg-tertiary-container');
                btn.classList.replace('text-on-primary', 'text-on-tertiary-container');
                setTimeout(() => { window.location.href = '/profile-setup'; }, 800);
            }, 1500);
        });

        // Micro-interaction for inputs
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                const icon = input.parentElement.querySelector('.material-symbols-outlined');
                if (icon) icon.style.color = 'var(--tw-color-primary)';
            });
            input.addEventListener('blur', () => {
                const icon = input.parentElement.querySelector('.material-symbols-outlined');
                if (icon) icon.style.color = '';
            });
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
        }
        .glass-card {
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }
        input:focus {
            outline: none;
            box-shadow: 0 0 0 2px rgba(71, 214, 255, 0.3);
        }
        /* Custom scrollbar for clean UI */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(133, 147, 153, 0.2);
            border-radius: 10px;
        }` }} />
      <div className="bg-background text-on-surface font-body-md transition-colors duration-300 overflow-hidden">{/* Background Layer: Crowd Animation */}
<div className="fixed inset-0 z-0 pointer-events-none opacity-40 grayscale contrast-125 dark:opacity-20 dark:grayscale-0">
</div>
{/* Navigation Header (Reduced for Auth) */}
<header className="fixed top-0 left-0 right-0 z-50 h-16 flex justify-between items-center px-margin-desktop bg-surface/40 backdrop-blur-md border-b border-outline-variant/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>network_intelligence</span>
<h1 className="font-headline-lg-mobile text-primary font-bold tracking-tight">CityLearn</h1>
</div>
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors group" id="theme-toggle">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" id="theme-icon">dark_mode</span>
</button>
</header>
<main className="relative z-10 w-full min-h-screen flex items-center justify-center px-margin-mobile">
{/* Auth Card Container */}
<div className="w-full max-w-[440px]">
{/* Branding/Tagline Section */}
<div className="mb-10 text-center space-y-2">
<p className="font-label-mono text-primary uppercase tracking-widest text-[10px]">Mission Control Access</p>
<h2 className="font-headline-lg text-on-surface">Secure Authentication</h2>
<p className="font-body-md text-on-surface-variant italic">"Cities Forget. CityLearn Remembers."</p>
</div>
{/* Glassmorphic AuthCard */}
<div className="glass-card bg-surface-container-low/80 dark:bg-surface-container-lowest/90 border border-outline-variant/20 rounded-xl p-8 shadow-2xl">
<form className="space-y-6" id="login-form">
{/* Email Field */}
<div className="space-y-2">
<label className="font-label-mono text-on-surface-variant block uppercase" htmlFor="email">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">mail</span>
<input className="w-full bg-surface-variant/50 border border-outline-variant rounded-lg py-3 pl-10 pr-4 font-body-md text-on-surface transition-all focus:bg-surface-variant" id="email" placeholder="operator@city.gov" required="" type="email"/>
</div>
</div>
{/* Password Field */}
<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="font-label-mono text-on-surface-variant uppercase" htmlFor="password">Password</label>
<a className="text-xs font-label-mono text-primary hover:underline transition-all" href="#">Forgot?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">lock</span>
<input className="w-full bg-surface-variant/50 border border-outline-variant rounded-lg py-3 pl-10 pr-12 font-body-md text-on-surface transition-all focus:bg-surface-variant" id="password" placeholder="••••••••••••" required="" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary p-1" id="toggle-password" type="button">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</div>
</div>
{/* Actions */}
<div className="flex items-center gap-2 py-2">
<div className="flex items-center">
<input className="w-4 h-4 rounded border-outline-variant bg-surface-variant text-primary focus:ring-primary/20" id="remember" type="checkbox"/>
<label className="ml-2 font-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Maintain terminal session</label>
</div>
</div>
{/* Sign In Button */}
<button className="w-full bg-primary text-on-primary font-body-md font-bold py-4 rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10" type="submit">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>login</span>
                        Establish Connection
                    </button>
</form>
{/* Footer Links */}
<div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col items-center gap-4">
<p className="font-body-sm text-on-surface-variant">Unauthorized access is strictly prohibited</p>
<div className="flex gap-4">
<a className="font-label-mono text-[10px] text-on-surface-variant hover:text-primary uppercase tracking-tighter" href="#">System Status</a>
<span className="text-outline-variant">|</span>
<a className="font-label-mono text-[10px] text-on-surface-variant hover:text-primary uppercase tracking-tighter" href="#">Legal Policy</a>
</div>
</div>
</div>
{/* External Navigation */}
<div className="mt-6 text-center">
<p className="font-body-sm text-on-surface-variant">
                    New operator? <a className="text-primary font-bold hover:underline" href="/sign-up">Register Credentials</a>
</p>
</div>
</div>
</main>
{/* UI Interaction Script */}</div>
    </>
  );
}
