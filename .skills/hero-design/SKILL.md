---
name: hero-design
description: 戦略的なヒーローセクション設計ガイド。認知心理学、2026年トレンド、LCP最適化、モバイルファースト。
---

# Hero Section Design Guide

Strategic hero section design for 2026: combining cognitive psychology, modern patterns, and technical performance.

## Core Workflow

### 1. Research Phase

1. Conduct competitive audit (H1 message, CTA, visuals, trust signals, LCP speed)
2. Deconstruct reference sites: Structure → Hierarchy → Interaction → Content
3. Create mood board for visual direction

### 2. Design Phase

Apply cognitive principles:
- **Cognitive load**: Minimize extraneous load with radical brevity
- **Visual hierarchy**: Use Z-pattern for landing pages, F-pattern for text-heavy
- **Directional cues**: Size, color contrast, gaze direction, explicit arrows

Select appropriate pattern:
- **Bento Grid**: Multi-content organization
- **Scrollytelling**: Narrative-driven experience
- **TL;DR / Web App Preview**: Immediate product demonstration
- **Neo-Brutalism**: Bold, honest aesthetic

### 3. Mobile Optimization

- Use portrait-first (9:16) media
- Place CTAs in thumb zone (bottom sheet UI)
- Implement fluid typography with `clamp()`

### 4. Performance Optimization (LCP < 2.5s)

```html
<!-- Hero image: high priority, no lazy loading -->
<img src="hero.webp" fetchpriority="high" alt="...">

<!-- Preload in head -->
<link rel="preload" as="image" href="hero.webp">

<!-- Video: always set poster -->
<video poster="poster.jpg" ...>
```

- Use WebP/AVIF formats
- Never use `loading="lazy"` on LCP elements
- Inline critical CSS
- Use `font-display: swap`

## Key Metrics

| Metric | Good | Poor |
|--------|------|------|
| LCP | < 2.5s | > 4.0s |
| First impression | < 50ms | - |

## Anti-Patterns

- Overriding scroll behavior unexpectedly
- Hiding CTAs in unusual shapes/locations
- Using stock photos instead of product UI
- Excessive animation without purpose
- Ignoring thumb zone on mobile

## Cognitive Psychology & Visual Hierarchy

### Radical Brevity (2026 Trend)

- Remove decorative adjectives
- Convey facts and value in shortest distance
- Use generous whitespace
- "Snappy" copy: direct, no fluff

### Visual Hierarchy & Scan Patterns

**F-Pattern** (Text-heavy content):
- Place keywords at the LEFT EDGE of headlines

**Z-Pattern** (Landing pages):
- Top-left (logo) → Top-right (nav) → Diagonal → Bottom-right (CTA)

### Directional Cues

1. **Size & Scale**: Maximize the most important element
2. **Color & Contrast**: Use accent color for CTAs
3. **Gaze Direction**: Subject's eyes look toward CTA
4. **Explicit Cues**: Arrows, lines, pointing illustrations

## 2026 Design Patterns

### Bento Grid Layout

- Condense different content types while maintaining hierarchy
- Each box functions independently
- Easy responsive adaptation

### Scrollytelling

- Uses scroll as trigger to unfold narrative
- Tech stack: GSAP, React Three Fiber, Framer Motion

### Web App Preview Pattern

- Show actual UI or working demo in hero section
- Examples: Linear, Raycast, React Flow

### Neo-Brutalism

- Bold borders, primary colors, system fonts
- Intentionally "unfinished" aesthetic

### Designs That Feel Alive

- Subtle micro-interactions
- Organic shapes, soft gradients
- Interface responds to user presence

## Mobile-First Strategy

### Portrait-First Media (9:16 Ratio)

```css
.hero-media {
  aspect-ratio: 9 / 16;
  object-fit: cover;
  width: 100%;
}

@media (min-width: 768px) {
  .hero-media {
    aspect-ratio: 16 / 9;
  }
}
```

### Thumb Zone Optimization

- Place important nav and CTAs in bottom sheet or fixed bottom bar
- NOT in hamburger menu at top
- Result: 25-30% engagement improvement

### Fluid Typography with clamp()

```css
h1 {
  font-size: clamp(1.75rem, 5vw + 1rem, 4rem);
}

p {
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
}
```

## LCP & Performance Optimization

### Image Optimization

| Format | Use Case | Savings |
|--------|----------|---------|
| WebP | Photos, general images | 25-35% smaller than JPEG |
| AVIF | High-quality photos | 50% smaller than JPEG |

```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero image">
</picture>
```

### Fetch Priority

```html
<img src="hero.webp" fetchpriority="high" alt="...">
```

### Font Optimization

```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  font-display: swap;
}
```

## Case Studies

### Linear (SaaS Benchmark)
- Dark mode + glow = premium feel
- Actual product UI, not abstract imagery
- Micro-interactions match brand personality

### Raycast (CLI-Inspired)
- Hero can BE the product experience
- Keyboard shortcuts as visual cues
- Brand color used sparingly but powerfully

### Arc Browser (Paradigm-Shifting)
- Emotional copy for new paradigms
- Show contrast with status quo
- Hero can teach, not just sell

## Mobile Hero Checklist

- [ ] Media assets created in 9:16 for mobile
- [ ] Primary CTA within thumb zone
- [ ] No important actions in top corners
- [ ] Fluid typography implemented
- [ ] Touch targets minimum 44x44px
- [ ] No hover-only interactions
- [ ] Test on actual devices (not just emulator)

## Choosing the Right Pattern

| Content Type | Recommended Pattern |
|--------------|---------------------|
| Multi-feature SaaS | Bento Grid |
| Product story/journey | Scrollytelling |
| Dev tools/technical products | Web App Preview |
| Creative/startup audiences | Neo-Brutalism |
| Premium/lifestyle brands | Designs That Feel Alive |
| E-commerce/customizable products | 3D Configurator |
