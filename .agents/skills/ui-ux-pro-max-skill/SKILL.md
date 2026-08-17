---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web, mobile, and desktop. Use this skill when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, responsive layout, typography, color, charts, and stack-specific UI implementation."
---

# UI/UX Pro Max - Design Intelligence

Searchable local UI/UX guidance: 79 searchable styles (50 active), 192 product palettes and exact reasoning profiles, 74 font pairings, 119 UX guidelines, 105 curated icons, 17 GSAP presets, 25 chart types, and 22 technology stacks.

## When to Apply

Use this Skill when the task involves **UI structure, visual design decisions, interaction patterns, or user experience quality control**: designing new pages, creating/refactoring UI components, choosing color/typography/spacing/layout systems, reviewing UI for UX/accessibility/consistency, implementing navigation/animation/responsive behavior, or improving perceived quality and usability.

## Design Rules & Guidelines Summary

### 1. Visual Hierarchy & Spacing
- **Responsive Layout**: Mobile-first breakpoints (375px, 768px, 1024px, 1440px), scalable rem units, flexible grid layouts.
- **Card & Container Polish**: Clean backdrop filters, subtle micro-borders, responsive padding (`padding: 1.5rem 2rem`), distinct elevation shadows.
- **Color Systems**: High contrast (4.5:1 min for body text), semantic color tokens, rich subtle gradient accents.

### 2. Typography
- **Google Fonts Pairing**: Modern combinations like Outfit (Headings) + Plus Jakarta Sans (Body), or Inter / Montserrat.
- **Scannability**: Clear font sizes (e.g. 2.5rem-3.5rem headings, 1rem body), 1.5-1.6 line height, bold section subtitles and badges.

### 3. Micro-Interactions & Feedback
- **Hover & Focus States**: Dynamic hover scaling (`transform: translateY(-4px)`), smooth transitions (`cubic-bezier(0.16, 1, 0.3, 1)`), visual focus indicators for keyboard navigation.
- **Interactive Elements**: `cursor: pointer` on all clickable buttons, chips, links, cards, and custom controls.
- **Loading & State Animations**: Skeleton loading, active tab styling, smooth drawer/modal reveals.

### 4. Anti-Patterns to Avoid
- ❌ No raw emojis as visual icons (use clean inline SVG icons).
- ❌ No gray-on-gray unreadable low-contrast text.
- ❌ No horizontal scroll on mobile viewports.
- ❌ No missing focus states or instant 0ms state jumps.
