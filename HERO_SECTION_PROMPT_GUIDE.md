# High-Fashion Luxury Streetwear Hero Section: Comprehensive Specification & Prompt Guide

This document contains the exact, comprehensive prompt and technical architectural specifications required to recreate this luxury menswear streetwear hero section from scratch with zero missing details.

---

## 1. Master AI System Prompt (For Coding Agents / Developers)

Use the prompt below in any AI coding assistant (or give it to a developer) to recreate this exact page:

```markdown
Create a high-fashion luxury menswear streetwear hero section using Next.js (App Router), Tailwind CSS, TypeScript, and Lucide React icons.

### 1. Viewport & Layout Architecture
- The entire hero section must be FIXED to the viewport (`fixed inset-0 h-screen w-screen overflow-hidden`) with zero scrollbars.
- Layout consists of three vertical segments:
  1. Top navigation header (height: 80px / 5rem, shrink-0).
  2. Central main hero grid (flex-1 min-h-0, 12-column grid inside a `max-w-7xl` container).
  3. Bottom pagination controls (shrink-0 pb-5 pt-2).
- The right side features a cutout model image grounded directly against the bottom edge with ZERO gap (`bottom-0` and `object-bottom`), while maintaining comfortable breathing headroom below the header (`h-[calc(100vh-120px)] max-h-[720px]`).

### 2. Typography & Fonts
- Google Fonts configuration:
  - Brand Logo: "Syne" (Weight 800, ultra-wide tracking `tracking-[0.24em]`, uppercase).
  - Main Headline Line 1: "Syne" ExtraBold uppercase (`text-4xl sm:text-5xl lg:text-[62px]`, `tracking-[0.06em]`).
  - Main Headline Line 2: "Italiana" regular italic serif (`text-3xl sm:text-4xl lg:text-[54px]`, capitalized).
  - Body Text & Navigation: "Space Grotesk" (`tracking-[0.22em]` for nav links, `font-light` for descriptions).
  - Specs & Counters: Monospace ("Geist Mono" or system monospace, `tracking-[0.25em]`).

### 3. Interactive Multi-Outfit Capsule Slider (3 Outfits)
The hero must store a collection array with 3 distinct colorway states:
1. Slide 01:
   - Name: "SHADOW Collection" (Colorway: "Onyx Black", hex: `#121417`)
   - Product: "Onyx Heavyweight Hoodie" ($135)
   - Badge: "Limited Drop • 42 Remaining"
   - Watermark: "SHADOW 01"
   - Background Gradient: `from-[#101216] via-[#15181F] to-[#0A0B0E]`
   - Ambient Glow: `rgba(58, 69, 87, 0.28)`
2. Slide 02:
   - Name: "CHALK Edition" (Colorway: "Chalk White", hex: `#EAEAEA`)
   - Product: "Pure Chalk Boxy Hoodie" ($140)
   - Badge: "New Release • Selling Fast"
   - Watermark: "CHALK 02"
   - Background Gradient: `from-[#181A20] via-[#202530] to-[#111318]`
   - Ambient Glow: `rgba(180, 195, 220, 0.22)`
3. Slide 03:
   - Name: "MOSS Atelier" (Colorway: "Washed Moss", hex: `#3E4C41`)
   - Product: "Vintage Moss Washed Hoodie" ($145)
   - Badge: "Atelier Exclusive • Hand-Dyed"
   - Watermark: "MOSS 03"
   - Background Gradient: `from-[#121815] via-[#1A2520] to-[#0C120F]`
   - Ambient Glow: `rgba(70, 110, 85, 0.28)`

### 4. Zero-Flicker Crossfade Image Transitions
- Do NOT destroy and re-render the Image component on slide changes.
- Implement a persistent dual/triple layer image stack where each image container is positioned absolute with:
  `transition-all duration-700 ease-in-out`
  Active: `opacity-100 scale-100 translate-x-0 filter blur-0`
  Inactive: `opacity-0 scale-[0.98] translate-x-4 filter blur-[2px]`
- Navigating can be triggered via:
  - Bottom dot pagination pills.
  - Interactive circular color swatches on the left.
  - Left / Right chevron micro-steppers next to the fractional counter (`01 — 03`).

### 5. Depth & 3D Interactive Features
1. **Editorial 3D Watermark Layer**:
   - A gigantic watermark ("SHADOW 01", "CHALK 02", etc.) rendered in `text-[13vw] sm:text-[17vw]` at `text-white/[0.035]` situated at `z-0` behind the model (`z-20`).
   - The watermark counter-shifts slightly opposite to cursor movement.
2. **3D Mouse Parallax Tilt**:
   - Calculate normalized mouse coordinates `(-1 to 1)`.
   - Apply perspective (`perspective: 1000px`) and `transform: translate3d(x, y, 0) rotateY(...) rotateX(...)` with `transformStyle: preserve-3d` to the model container.
3. **Dynamic Cursor Spotlight**:
   - A soft 700px radial glow circle follows the user's cursor (`pointer-events-none blur-[170px]`) tinting the background texture in real time.
4. **Interactive "Shop the Look" Hotspot**:
   - A pulsating beacon pin placed directly over the hoodie (`top-[48%] left-[42%]`).
   - Clicking opens a frosted glassmorphic card with garment name, price, interactive size selector (`S`, `M`, `L`, `XL`), and a "Quick Add" button that increments the cart counter in the navigation bar with an animated checkmark confirmation.

### 6. Component Blueprint
- **Header**:
  - Left: Logo `KAVRA` with a `STUDIO` badge.
  - Center: Nav links (`New Drops`, `Hoodies`, `Tees & Tops`, `Cargo & Pants`, `Outerwear`, `Sale`) with animated bottom border underlines on hover.
  - Right: Action icons (`Search`, `User`, `Heart`, `ShoppingBag` with counter badge) and mobile hamburger toggle.
- **Left Column**:
  - Eyebrow pill with animated flame icon + badge.
  - Two-tier headline (`SHADOW` + `Collection`).
  - Narrative body copy.
  - Colorway switcher with 3 circular color dots.
  - Dual CTAs: Primary solid white pill (`Shop the Collection →`) + ghost outline pill (`Explore All`).
  - Fractional slide index counter (`01 — 03`) with micro left/right navigation arrows.
- **Right Column**:
  - The grounded transparent model cutout with 3D parallax tilt and interactive product pin.
- **Bottom**:
  - 3 centered horizontal capsule indicators with smooth width expansion for the active slide.
```

---

## 2. Image Generation Prompts (For Midjourney / FLUX / DALL-E)

To produce transparent cutout images of the model matching the exact look:

### General Generation Instructions:
- **Aspect Ratio**: `--ar 1:1` or `--ar 3:4`
- **Background**: Solid uniform white background for effortless 1-click background removal.
- **Pose**: Three-quarter angle, hands casually resting inside hoodie front pouch, eyes gazing slightly off-camera.

### Prompt 1: Onyx Black Hoodie
```text
High-end commercial fashion studio portrait of a handsome young male model with tousled dark wavy hair, wearing a heavyweight oversized minimalist black hoodie with hood resting back, hands tucked inside front kangaroo pocket, relaxed confident three-quarter pose, soft cinematic studio rim lighting highlighting the raw cotton fleece texture, solid clean white background, ultra-sharp detail, 8k resolution, shot on Hasselblad H6D-100c --ar 1:1
```

### Prompt 2: Chalk White Hoodie
```text
High-end commercial fashion studio portrait of the same young male model with tousled dark wavy hair, wearing an unbleached clean chalk-white oversized heavyweight boxy hoodie, structured drop shoulders, hands resting inside front kangaroo pocket, identical camera angle and three-quarter pose, studio rim lighting defining fabric folds, solid clean white background, editorial fashion aesthetic, 8k resolution --ar 1:1
```

### Prompt 3: Washed Moss Green Hoodie
```text
High-end commercial fashion studio portrait of the same young male model with tousled dark wavy hair, wearing an oversized heavyweight mineral acid-washed sage moss green hoodie with round tubular drawstrings, hands inside front pocket, identical three-quarter camera angle, detailed vintage washed cotton texture, solid clean white background, 8k resolution, Vogue Hommes streetwear campaign look --ar 1:1
```

---

## 3. Key Design Tokens & Measurements

| Property | Value | Notes |
| :--- | :--- | :--- |
| **Viewport State** | `fixed inset-0 h-screen w-screen overflow-hidden` | Prevents document scroll |
| **Header Height** | `80px` (`h-20`) | Fixed top bar |
| **Logo Font** | `Syne`, weight 800 | `tracking-[0.24em]` |
| **Headline Sans** | `Syne`, weight 800 | `text-[62px] tracking-[0.06em]` |
| **Headline Serif** | `Italiana`, weight 400 | `text-[54px]` |
| **Model Height** | `h-[calc(100vh-120px)] max-h-[720px]` | Flush at bottom, headroom at top |
| **Model Alignment** | `object-bottom` & `absolute bottom-0` | Zero bottom gap |
| **Watermark Size** | `text-[13vw] sm:text-[17vw]` | Opacity `white/[0.035]` |
| **Transition Duration**| `700ms ease-in-out` | For image & typography swap |
| **Parallax Tilt** | Max 10px translate, max 3° rotateY | Tied to normalized mouse movement |
