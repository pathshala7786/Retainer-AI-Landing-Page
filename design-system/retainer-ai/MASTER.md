# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Retainer AI
**Generated:** 2026-01-31 14:11:49
**Category:** Productivity Tool

---

## Global Rules

### Color Palette (Pitch Black & Pink Theme)

| Role | Hex | CSS Variable | Description |
|------|-----|--------------|-------------|
| Background | `#000000` | `--background` | Pitch Black (OLED friendly) |
| Surface | `#111111` | `--card` | Dark Gray (Glass panels) |
| Primary | `#EC4899` | `--primary` | Pink-500 (Vibrant Gradient base) |
| Secondary | `#A855F7` | `--secondary` | Purple-500 (Gradient accent) |
| CTA | Gradient | `--cta` | Pink to Purple Gradient |
| Text | `#FFFFFF` | `--foreground` | Pure White for max contrast |
| Muted | `#A1A1AA` | `--muted-foreground` | Zinc-400 for secondary text |

**Theme Notes:**
- **Pitch Black Foundation**: Everything sits on `#000000`.
- **Neon Accents**: Use Pink (`#EC4899`) and Purple (`#A855F7`) for all interactive elements and highlights.
- **Glassmorphism**: Use `bg-white/5` with `backdrop-blur-xl` for cards/panels.
- **Breathing Glows**: Use animated background blobs to create depth.

### Typography

- **Heading Font:** Plus Jakarta Sans (Weights: 700, 800)
- **Body Font:** Plus Jakarta Sans (Weights: 400, 500)
- **Mood:** futuristic, premium, high-tech, sleek

### Shadow Depths (Colored Glows)

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-glow-pink` | `0 0 20px rgba(236,72,153,0.5)` | Primary Buttons |
| `--shadow-glow-purple` | `0 0 20px rgba(168,85,247,0.5)` | Secondary accents |
| `--shadow-glass` | `0 8px 32px 0 rgba(0, 0, 0, 0.37)` | Glass panels |


---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #F97316;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0D9488;
  border: 2px solid #0D9488;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: #F0FDFA;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #0D9488;
  outline: none;
  box-shadow: 0 0 0 3px #0D948820;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Micro-interactions

**Keywords:** Small animations, gesture-based, tactile feedback, subtle animations, contextual interactions, responsive

**Best For:** Mobile apps, touchscreen UIs, productivity tools, user-friendly, consumer apps, interactive components

**Key Effects:** Small hover (50-100ms), loading spinners, success/error state anim, gesture-triggered (swipe/pinch), haptic

### Page Pattern

**Pattern Name:** Video-First Hero

- **Conversion Strategy:** 86% higher engagement with video. Add captions for accessibility. Compress video for performance.
- **CTA Placement:** Overlay on video (center/bottom) + Bottom section
- **Section Order:** 1. Hero with video background, 2. Key features overlay, 3. Benefits section, 4. CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Complex onboarding
- ❌ Slow performance

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
