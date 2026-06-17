<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Profile Setup | CityLearn Intelligence</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;family=Nunito+Sans:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet"/>
<style>
        body {
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
        ::-webkit-scrollbar-thumb { background: #2f3639; border-radius: 2px; }
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
                      "body-md": ["Nunito Sans"],
                      "headline-lg": ["Nunito Sans"],
                      "data-display": ["Space Mono"],
                      "body-sm": ["Nunito Sans"],
                      "headline-lg-mobile": ["Nunito Sans"],
                      "headline-xl": ["Nunito Sans"],
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
<body class="bg-background text-on-background min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-lg text-primary dark:text-primary border-b border-outline-variant/20 docked full-width top-0 z-50 flex justify-between items-center w-full px-margin-desktop h-16">
<div class="flex items-center gap-4">
<span class="font-headline-lg-mobile text-primary dark:text-primary font-bold tracking-tight">CityLearn Intelligence</span>
<div class="h-6 w-[1px] bg-outline-variant/30 hidden md:block"></div>
<span class="font-label-mono text-on-surface-variant uppercase tracking-widest text-[10px] hidden md:block">Profile Provisioning Engine</span>
</div>
<div class="flex items-center gap-6">
<div class="flex gap-4 items-center">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">dark_mode</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">notifications</span>
<span class="material-symbols-outlined text-primary cursor-pointer">account_circle</span>
</div>
</div>
</header>
<main class="flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto mt-16 overflow-hidden">
<!-- Left: Contextual Visualizer (Atmospheric) -->
<section class="hidden lg:flex w-1/3 p-margin-desktop flex-col justify-between border-r border-outline-variant/10 relative overflow-hidden">
<div class="absolute inset-0 z-0"></div>
<div class="relative z-10">
<p class="font-label-mono text-primary text-[10px] uppercase mb-2">System Initializing</p>
<h1 class="font-headline-xl text-on-surface leading-tight">Welcome to the<br/>Core Network.</h1>
<p class="font-body-md text-on-surface-variant mt-4 max-w-xs">Initialize your operational profile to access city-wide intelligence, simulation engines, and predictive analytics.</p>
</div>
<div class="relative z-10 glass-panel p-6 rounded-lg">
<div class="flex flex-col gap-4">
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span class="font-label-mono text-xs uppercase text-on-surface">Biometric Link: Pending</span>
</div>
<div class="flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-outline-variant"></div>
<span class="font-label-mono text-xs uppercase text-on-surface-variant">Geo-spatial Lock: Unassigned</span>
</div>
<div class="mt-4 pt-4 border-t border-outline-variant/20">
<p class="font-label-mono text-[10px] text-on-surface-variant leading-relaxed">
                            SECURE_HANDSHAKE: 0x8F92...<br/>
                            LATENCY: 14ms<br/>
                            ENCRYPTION: AES-256-GCM
                        </p>
</div>
</div>
</div>
</section>
<!-- Right: The Setup Form -->
<section class="flex-1 h-[calc(100vh-64px)] overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-container-lowest/50">
<div class="max-w-3xl mx-auto space-y-12 pb-24">
<!-- Section 1: Professional Identity -->
<div class="space-y-6">
<div class="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
<span class="material-symbols-outlined text-primary">badge</span>
<h2 class="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Professional Identity</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">User Name</label>
<input class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all" placeholder="e.g. Alex Chen" type="text"/>
</div>
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Department</label>
<select class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all">
<option>Urban Planning</option>
<option>Emergency Response</option>
<option>Transit Authority</option>
<option>Grid Management</option>
<option>Data Science</option>
</select>
</div>
<div class="space-y-2 md:col-span-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Designation</label>
<input class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring transition-all" placeholder="e.g. Senior Simulation Analyst" type="text"/>
</div>
</div>
</div>
<!-- Section 2: Geo-Spatial Context -->
<div class="space-y-6">
<div class="flex items-center justify-between border-b border-outline-variant/20 pb-4">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">location_on</span>
<h2 class="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Geo-Spatial Context</h2>
</div>
<button class="flex items-center gap-2 px-3 py-1.5 rounded border border-primary/30 text-primary font-label-mono text-xs hover:bg-primary/10 transition-colors uppercase">
<span class="material-symbols-outlined text-sm">my_location</span>
                            Use Current Location
                        </button>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Country</label>
<select class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>United States</option>
<option>Singapore</option>
<option>Germany</option>
<option>Japan</option>
</select>
</div>
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">State/Region</label>
<select class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>California</option>
<option>Bavaria</option>
<option>Tokyo Prefecture</option>
</select>
</div>
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Primary City</label>
<select class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring">
<option>San Francisco</option>
<option>Munich</option>
<option>Tokyo</option>
</select>
</div>
</div>
<div class="space-y-2">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Primary Zone / District</label>
<input class="w-full bg-surface-variant/30 border border-outline-variant/40 p-3 rounded font-body-md text-on-surface input-focus-ring" placeholder="e.g. North Sector 7" type="text"/>
</div>
<!-- Mini Map Card -->
<div class="w-full h-48 rounded-lg overflow-hidden border border-outline-variant/20 relative group">
<img class="w-full h-full object-cover filter grayscale brightness-50 group-hover:brightness-75 transition-all duration-700" data-alt="A highly detailed 3D topographic map of a modern city center at night, with glowing blue and teal grid lines highlighting traffic flow and infrastructure layers. The aesthetic is clean and futuristic, similar to a mission control console display, with deep shadows and vibrant digital overlays in electric blue." data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL8iHcq4PAzDwEoO1irwxMvjiwfn1uZiEx06-Cxpy9dYlHO--RUBujRVcKNct35qwgib25yeNa6OJmJm_4bldXoZTTqedaK_D-lCUkkiUWTpfQS8tfgCNS6CMoaMge-8wBSoUub7p9FQFrNyPnGQQ2it9TFEO4OxHfnG2W5ZBY2mb6nNm3RyHoK-YSsjfSVNMmhF5FR9_U76P3GQWmFw409Dad8r_QJQFHzVp7T7_JA36iiAzKktJDkwla9xkRDeTfOqb9oIz0nos"/>
<div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
<div class="absolute bottom-4 left-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">location_on</span>
<span class="font-label-mono text-xs uppercase text-on-surface font-bold tracking-widest">Network Lock: Central Grid</span>
</div>
</div>
</div>
</div>
<!-- Section 3: Interface Preferences -->
<div class="space-y-6">
<div class="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
<span class="material-symbols-outlined text-primary">settings_suggest</span>
<h2 class="font-headline-lg-mobile text-on-surface uppercase tracking-tight">Mission Control Preferences</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Dashboard Layout Select -->
<div class="space-y-4">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Preferred Dashboard Layout</label>
<div class="grid grid-cols-2 gap-4">
<div class="border border-primary bg-primary/5 p-4 rounded-lg cursor-pointer transition-all">
<div class="flex flex-col gap-2">
<div class="flex gap-1">
<div class="w-full h-4 bg-primary/40 rounded-sm"></div>
</div>
<div class="flex gap-1">
<div class="w-1/2 h-8 bg-primary/20 rounded-sm"></div>
<div class="w-1/2 h-8 bg-primary/20 rounded-sm"></div>
</div>
<span class="font-label-mono text-[10px] text-primary text-center mt-2">ANALYTICS PRIME</span>
</div>
</div>
<div class="border border-outline-variant/40 hover:border-primary/50 p-4 rounded-lg cursor-pointer transition-all">
<div class="flex flex-col gap-2">
<div class="flex gap-1">
<div class="w-1/3 h-12 bg-on-surface-variant/20 rounded-sm"></div>
<div class="w-2/3 h-12 bg-on-surface-variant/20 rounded-sm"></div>
</div>
<span class="font-label-mono text-[10px] text-on-surface-variant text-center mt-2 group-hover:text-on-surface">SIMULATOR FLOW</span>
</div>
</div>
</div>
</div>
<!-- Notifications -->
<div class="space-y-4">
<label class="font-label-mono text-xs text-on-surface-variant uppercase">Notification Protocol</label>
<div class="space-y-3">
<label class="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span class="font-body-sm text-on-surface group-hover:text-primary transition-colors">Critical System Alerts</span>
<div class="w-10 h-5 bg-primary rounded-full relative">
<div class="absolute right-1 top-1 w-3 h-3 bg-on-primary rounded-full"></div>
</div>
</label>
<label class="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span class="font-body-sm text-on-surface group-hover:text-primary transition-colors">Simulation Reports</span>
<div class="w-10 h-5 bg-outline-variant/40 rounded-full relative">
<div class="absolute left-1 top-1 w-3 h-3 bg-on-surface-variant rounded-full"></div>
</div>
</label>
<label class="flex items-center justify-between p-3 glass-panel rounded cursor-pointer group">
<span class="font-body-sm text-on-surface group-hover:text-primary transition-colors">Anomaly Detection Triggers</span>
<div class="w-10 h-5 bg-primary rounded-full relative">
<div class="absolute right-1 top-1 w-3 h-3 bg-on-primary rounded-full"></div>
</div>
</label>
</div>
</div>
</div>
</div>
<!-- Complete Action -->
<div class="pt-12 flex justify-end">
<a class="group relative inline-flex items-center gap-4 bg-primary px-8 py-4 rounded font-bold text-on-primary hover:bg-primary-container transition-all active:scale-95 duration-200" href="/dashboard">
<span class="font-label-mono text-sm tracking-widest uppercase">Complete Setup</span>
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</section>
</main>
<!-- Background Decoration -->
<div class="fixed bottom-0 right-0 p-8 pointer-events-none opacity-20">
<span class="font-label-mono text-[8rem] leading-none text-outline-variant select-none">INIT</span>
</div>
<script>
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
                }, 800);
            }, 1500);
        });
    </script>
</body></html>