# Design System

## Overview

A light-themed, committed-color portfolio for an entrepreneurial cloud/automation engineer. The surface is dominated by a warm copper/amber brand hue against tinted neutrals, signaling confidence and precision without falling into corporate blue. Typography pairs a distinctive geometric display face with a modern, highly legible sans for body copy.

## Theme

**Light mode** (default). The primary scene is a recruiter or client reviewing the site in a bright office or daytime setting, scanning quickly for proof of capability. Dark mode is not required for v1 but may be added later.

## Color

### Strategy: Committed

One saturated color carries 30–60% of the surface. Warm copper/amber (hue ~45) is the single brand identity. Neutrals are tinted toward the brand hue to avoid sterile grays.

### Palette (OKLCH)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `oklch(98% 0.005 60)` | Page background |
| `--color-surface` | `oklch(95% 0.01 60)` | Cards, elevated sections |
| `--color-surface-raised` | `oklch(92% 0.012 60)` | Hover states, active items |
| `--color-border` | `oklch(85% 0.015 60)` | Dividers, borders |
| `--color-border-subtle` | `oklch(90% 0.01 60)` | Hairline borders |
| `--color-text-primary` | `oklch(20% 0.015 60)` | Headlines, primary text |
| `--color-text-secondary` | `oklch(45% 0.02 60)` | Body copy, descriptions |
| `--color-text-tertiary` | `oklch(60% 0.015 60)` | Captions, metadata |
| `--color-brand` | `oklch(60% 0.14 45)` | Primary accent, CTAs, links |
| `--color-brand-dark` | `oklch(40% 0.12 45)` | Hover states, emphasis |
| `--color-brand-light` | `oklch(90% 0.06 45)` | Subtle fills, highlights |
| `--color-brand-bg` | `oklch(96% 0.04 45)` | Tinted backgrounds for brand sections |

### Usage Rules

- Never use `#000` or `#fff`. All neutrals are tinted toward hue 60.
- Reduce chroma as lightness approaches 0 or 100 to avoid garish extremes.
- The committed color (`--color-brand`) should appear in hero backgrounds, section tints, primary buttons, and key accents. Aim for ~40% of above-the-fold surface area.
- Ensure contrast ratios meet WCAG 2.1 AA: text-primary on bg ≥ 4.5:1, brand on bg ≥ 3:1 for large text.

## Typography

### Typefaces

| Role | Font | Weights | Fallback |
|---|---|---|---|
| Display / Headlines | **Space Grotesk** | 500, 700 | system-ui, sans-serif |
| Body / UI | **Plus Jakarta Sans** | 400, 500, 600 | system-ui, sans-serif |

Space Grotesk provides geometric distinction without being playful. Plus Jakarta Sans is modern, warm, and highly legible at small sizes.

### Scale

Base size: `16px` (1rem). Line height: `1.6` for body, `1.2` for headlines.

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `--text-display` | `4rem` (64px) | 700 | 1.1 | Hero name / major statement |
| `--text-h1` | `3rem` (48px) | 700 | 1.15 | Page titles |
| `--text-h2` | `2.25rem` (36px) | 700 | 1.2 | Section headings |
| `--text-h3` | `1.5rem` (24px) | 600 | 1.3 | Subsection headings |
| `--text-h4` | `1.25rem` (20px) | 600 | 1.4 | Card titles, labels |
| `--text-body` | `1rem` (16px) | 400 | 1.6 | Paragraphs, descriptions |
| `--text-body-sm` | `0.875rem` (14px) | 400 | 1.6 | Captions, metadata |
| `--text-caption` | `0.75rem` (12px) | 500 | 1.5 | Tags, badges, fine print |

### Hierarchy Rules

- Minimum 1.25x scale ratio between adjacent steps (e.g., 48px → 36px is 1.33x).
- Use weight contrast alongside size: headlines are 700, body is 400.
- Cap body line length at `70ch` for optimal readability.
- No all-caps for body or labels. All-caps reserved for caption-size badges only, with increased letter-spacing (`0.05em`).

## Spacing

### Base Unit

`4px` (`0.25rem`). All spacing values are multiples of this unit.

### Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `0.25rem` (4px) | Tight gaps, icon padding |
| `--space-2` | `0.5rem` (8px) | Inline element gaps |
| `--space-3` | `0.75rem` (12px) | Small component padding |
| `--space-4` | `1rem` (16px) | Default padding, paragraph gaps |
| `--space-6` | `1.5rem` (24px) | Card internal padding |
| `--space-8` | `2rem` (32px) | Section internal padding |
| `--space-12` | `3rem` (48px) | Medium section gaps |
| `--space-16` | `4rem` (64px) | Large section gaps |
| `--space-24` | `6rem` (96px) | Major section breaks |
| `--space-32` | `8rem` (128px) | Hero / footer spacing |

### Rhythm Rules

- Vary spacing for rhythm. Do not use the same padding everywhere.
- Tight gaps (`space-2`–`space-4`) for related items. Generous gaps (`space-16`–`space-32`) between major sections.
- Asymmetric spacing is encouraged: e.g., `padding-top: 6rem; padding-bottom: 4rem` to create directional flow.

## Layout

### Grid

- Max content width: `1200px` (`75rem`).
- Horizontal padding: `space-6` (mobile), `space-8` (tablet), `space-12` (desktop).
- Use CSS Grid for project galleries and case-study layouts. Flexbox for navigation and inline arrangements.

### Responsive Breakpoints

| Name | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, reduced spacing, hamburger nav |
| Tablet | 640px – 1024px | 2-column grids, medium spacing |
| Desktop | > 1024px | Full layout, max spacing, sticky nav |

### Component Patterns

- **No nested cards.** A card may contain text and media, but never another card.
- **Containers are optional.** Most sections can be full-width with internal max-width constraints.
- **Avoid wrapping everything.** Let sections breathe edge-to-edge where appropriate.

## Elevation

No drop shadows for cards or surfaces. Elevation is communicated through:
- **Color**: `--color-surface` vs `--color-bg`
- **Border**: `--color-border` or `--color-border-subtle`
- **Spacing**: proximity and whitespace create hierarchy

This keeps the design flat, precise, and modern.

## Motion

### Philosophy

Subtle, purposeful motion. Elements should feel like they settle into place, not perform.

### Patterns

| Pattern | Properties | Duration | Easing |
|---|---|---|---|
| Fade in + translate up | `opacity`, `transform: translateY(20px)` | `600ms` | `cubic-bezier(0.25, 1, 0.5, 1)` (ease-out-quart) |
| Stagger children | Same as above | `600ms` + `100ms` stagger | ease-out-quart |
| Hover lift | `transform: translateY(-2px)` | `200ms` | ease-out-quart |
| Link underline | `scaleX(0)` → `scaleX(1)` on pseudo-element | `300ms` | ease-out-quart |

### Rules

- Do not animate CSS layout properties (`width`, `height`, `top`, `left`, `margin`).
- Use `transform` and `opacity` only.
- Respect `prefers-reduced-motion: reduce`. When active, disable all scroll-triggered animations and limit hover effects to instant color changes.
- No bounce, no elastic easing.

## Components

### Buttons

- **Primary**: Background `--color-brand`, text `--color-bg`, padding `space-3 space-6`, border-radius `0.5rem`. Hover: background `--color-brand-dark`.
- **Secondary**: Background transparent, border `1px solid --color-border`, text `--color-text-primary`. Hover: background `--color-surface`.
- **Ghost**: No background or border, text `--color-brand`. Hover: text `--color-brand-dark`.

### Cards (Project / Case Study)

- Background: `--color-surface` or `--color-bg`
- Border: `1px solid --color-border-subtle` (optional — may be borderless)
- Border-radius: `0.75rem`
- Padding: `space-6`
- No shadow.
- Internal layout: image/video top, text bottom. No nested cards.

### Navigation

- Fixed or sticky top bar.
- Background: `--color-bg` with slight transparency (`backdrop-filter: blur(8px)`) if overlapping content. Avoid heavy glassmorphism.
- Links: `--color-text-secondary`, hover `--color-text-primary` with underline animation.
- Active link: `--color-brand`.

### Tags / Badges

- Background: `--color-brand-bg`
- Text: `--color-brand-dark`
- Padding: `space-1 space-3`
- Border-radius: `9999px` (pill)
- Font: `--text-caption`, uppercase, `letter-spacing: 0.05em`

## Assets

### Icons

Use a single icon library (e.g., **Lucide** or **Phosphor Icons**). Icon weight should match body text weight (regular). Size: `1em` to `1.25em` relative to surrounding text.

### Images

- Project screenshots and case-study images should be high-resolution (2x for retina).
- Prefer neutral or brand-tinted image treatments to maintain cohesion.
- Always provide `alt` text for accessibility.

## Accessibility

- WCAG 2.1 AA compliance for contrast, focus states, and keyboard navigation.
- All interactive elements must have visible focus indicators (outline or ring using `--color-brand`).
- Respect `prefers-reduced-motion`.
- Ensure color is not the sole means of conveying information (icons + text for status).
- Test for protanopia and deuteranopia: brand color must remain distinguishable from neutrals by luminance.
