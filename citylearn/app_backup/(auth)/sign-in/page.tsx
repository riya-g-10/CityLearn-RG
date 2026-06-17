<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Sign In | CityLearn Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;family=Space+Mono:wght@400;700&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
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
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "inverse-on-surface": "#2b3134",
                      "on-primary": "#003543",
                      "on-background": "#dde3e7",
                      "outline-variant": "#3c494e",
                      "secondary-fixed": "#b6eaff",
                      "surface-bright": "#333a3d",
                      "tertiary-fixed": "#ffddb1",
                      "on-tertiary-container": "#6c4700",
                      "inverse-surface": "#dde3e7",
                      "error-container": "#93000a",
                      "primary-container": "#00d2ff",
                      "tertiary": "#ffd79f",
                      "on-surface": "#dde3e7",
                      "surface-dim": "#0e1417",
                      "primary": "#a5e7ff",
                      "tertiary-fixed-dim": "#ffba4a",
                      "surface-variant": "#2f3639",
                      "error": "#ffb4ab",
                      "on-primary-container": "#00566a",
                      "inverse-primary": "#00677f",
                      "background": "#0e1417",
                      "on-secondary-fixed": "#001f28",
                      "on-error": "#690005",
                      "on-surface-variant": "#bbc9cf",
                      "on-tertiary": "#442b00",
                      "on-tertiary-fixed": "#291800",
                      "outline": "#859399",
                      "on-error-container": "#ffdad6",
                      "secondary-container": "#00677f",
                      "on-primary-fixed": "#001f28",
                      "surface": "#0e1417",
                      "surface-tint": "#47d6ff",
                      "surface-container-low": "#161d1f",
                      "primary-fixed-dim": "#47d6ff",
                      "secondary": "#86d1ec",
                      "surface-container-lowest": "#090f12",
                      "secondary-fixed-dim": "#86d1ec",
                      "on-secondary-fixed-variant": "#004e60",
                      "surface-container-highest": "#2f3639",
                      "primary-fixed": "#b6ebff",
                      "on-primary-fixed-variant": "#004e60",
                      "on-tertiary-fixed-variant": "#624000",
                      "surface-container": "#1a2123",
                      "on-secondary-container": "#99e3ff",
                      "on-secondary": "#003543",
                      "surface-container-high": "#242b2e",
                      "tertiary-container": "#ffb229"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "margin-desktop": "40px",
                      "gutter": "24px",
                      "unit": "4px",
                      "margin-mobile": "16px",
                      "container-max": "1440px"
              },
              "fontFamily": {
                      "body-md": ["Nunito Sans", "sans-serif"],
                      "headline-lg": ["Nunito Sans", "sans-serif"],
                      "data-display": ["Space Mono"],
                      "body-sm": ["Nunito Sans", "sans-serif"],
                      "headline-lg-mobile": ["Nunito Sans", "sans-serif"],
                      "headline-xl": ["Nunito Sans", "sans-serif"],
                      "label-mono": ["Space Mono"]
              },
              "fontSize": {
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "data-display": ["18px", {"lineHeight": "24px", "fontWeight": "700"}],
                      "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                      "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                      "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                      "label-mono": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}]
              }
            },
          },
        }
    </script>
</head>
<body class="bg-background text-on-surface font-body-md transition-colors duration-300 overflow-hidden">
<!-- Background Layer: Crowd Animation -->
<div class="fixed inset-0 z-0 pointer-events-none opacity-40 grayscale contrast-125 dark:opacity-20 dark:grayscale-0">
</div>
<!-- Navigation Header (Reduced for Auth) -->
<header class="fixed top-0 left-0 right-0 z-50 h-16 flex justify-between items-center px-margin-desktop bg-surface/40 backdrop-blur-md border-b border-outline-variant/10">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">network_intelligence</span>
<h1 class="font-headline-lg-mobile text-primary font-bold tracking-tight">CityLearn</h1>
</div>
<button class="p-2 rounded-full hover:bg-surface-variant transition-colors group" id="theme-toggle">
<span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary" id="theme-icon">dark_mode</span>
</button>
</header>
<main class="relative z-10 w-full min-h-screen flex items-center justify-center px-margin-mobile">
<!-- Auth Card Container -->
<div class="w-full max-w-[440px]">
<!-- Branding/Tagline Section -->
<div class="mb-10 text-center space-y-2">
<p class="font-label-mono text-primary uppercase tracking-widest text-[10px]">Mission Control Access</p>
<h2 class="font-headline-lg text-on-surface">Secure Authentication</h2>
<p class="font-body-md text-on-surface-variant italic">"Cities Forget. CityLearn Remembers."</p>
</div>
<!-- Glassmorphic AuthCard -->
<div class="glass-card bg-surface-container-low/80 dark:bg-surface-container-lowest/90 border border-outline-variant/20 rounded-xl p-8 shadow-2xl">
<form class="space-y-6" id="login-form">
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label-mono text-on-surface-variant block uppercase" for="email">Email Address</label>
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">mail</span>
<input class="w-full bg-surface-variant/50 border border-outline-variant rounded-lg py-3 pl-10 pr-4 font-body-md text-on-surface transition-all focus:bg-surface-variant" id="email" placeholder="operator@city.gov" required="" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<div class="flex justify-between items-center">
<label class="font-label-mono text-on-surface-variant uppercase" for="password">Password</label>
<a class="text-xs font-label-mono text-primary hover:underline transition-all" href="#">Forgot?</a>
</div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">lock</span>
<input class="w-full bg-surface-variant/50 border border-outline-variant rounded-lg py-3 pl-10 pr-12 font-body-md text-on-surface transition-all focus:bg-surface-variant" id="password" placeholder="••••••••••••" required="" type="password"/>
<button class="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary p-1" id="toggle-password" type="button">
<span class="material-symbols-outlined text-sm">visibility</span>
</button>
</div>
</div>
<!-- Actions -->
<div class="flex items-center gap-2 py-2">
<div class="flex items-center">
<input class="w-4 h-4 rounded border-outline-variant bg-surface-variant text-primary focus:ring-primary/20" id="remember" type="checkbox"/>
<label class="ml-2 font-body-sm text-on-surface-variant cursor-pointer select-none" for="remember">Maintain terminal session</label>
</div>
</div>
<!-- Sign In Button -->
<button class="w-full bg-primary text-on-primary font-body-md font-bold py-4 rounded-lg hover:bg-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10" type="submit">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">login</span>
                        Establish Connection
                    </button>
</form>
<!-- Footer Links -->
<div class="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col items-center gap-4">
<p class="font-body-sm text-on-surface-variant">Unauthorized access is strictly prohibited</p>
<div class="flex gap-4">
<a class="font-label-mono text-[10px] text-on-surface-variant hover:text-primary uppercase tracking-tighter" href="#">System Status</a>
<span class="text-outline-variant">|</span>
<a class="font-label-mono text-[10px] text-on-surface-variant hover:text-primary uppercase tracking-tighter" href="#">Legal Policy</a>
</div>
</div>
</div>
<!-- External Navigation -->
<div class="mt-6 text-center">
<p class="font-body-sm text-on-surface-variant">
                    New operator? <a class="text-primary font-bold hover:underline" href="#">Register Credentials</a>
</p>
</div>
</div>
</main>
<!-- UI Interaction Script -->
<script>
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
            }, 1500);
        });

        // Micro-interaction for inputs
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.color = 'var(--tw-color-primary)';
            });
            input.addEventListener('blur', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '';
            });
        });
    </script>
</body></html>