Step 1 — Define your color tokens (5 min)
Create CSS custom properties (variables) for all colors you currently use — backgrounds, text, borders, accents. Don't change any visuals yet, just replace hardcoded values with variables like --color-bg, --color-text, etc. Test by confirming the app looks identical to before.
Step 2 — Create a dark theme palette (5 min)
Add a [data-theme="dark"] selector (or .dark class on <html>) and override your variables with dark equivalents. Manually toggle it in DevTools to preview. No toggle UI yet — just verify the colors look right.
Step 3 — Add the toggle mechanism (10 min)
Wire up a button or switch that adds/removes the dark class on the root element. Test that clicking it switches themes visually and that nothing breaks.
Step 4 — Persist the preference (5 min)
Save the chosen theme to localStorage and read it on page load so the preference survives refreshes. Test by toggling, refreshing, and confirming it sticks.
Step 5 — Respect the system preference (5 min)
Use prefers-color-scheme: dark in a @media query as the default fallback, so users who haven't manually toggled get the right theme automatically. Test by changing your OS appearance setting.
Step 6 — Audit for missed elements (10 min)
Scan the full UI in both modes — images, modals, code blocks, third-party components, and anything with hardcoded colors are common culprits. Fix any stragglers.
Step 7 — Handle transitions (5 min)
Add a transition: background-color 0.2s, color 0.2s to smooth the switch. Verify it doesn't cause a flash of the wrong theme on initial load (you may need a small inline script in <head> to apply the saved theme before the page renders).
