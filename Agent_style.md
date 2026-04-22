# Agent Style Documentation: TheUniPick

This document provides a comprehensive analysis of the styling, color theme, and typography used in **TheUniPick** project. The design is architected to evoke a **premium, futuristic, and high-performance** digital infrastructure aesthetic.

---

## 🎨 Color Palette

The color system is based on **Tonal Stacking** and a vibrant **Brand Identity** that uses deep purples and fuchsias contrasted against clean, soft backgrounds.

### Brand Colors
| Role | Variable | Hex | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | `--primary` | `#6300e2` | Vivid Purple - core branding. |
| **Secondary** | `--secondary` | `#d946ef` | Fuchsia - accents and gradients. |
| **Tech Teal** | `--tech-teal` | `#2dd4bf` | Bright Teal - tech highlights. |

### Surface & Backgrounds
| Role | Variable | Hex | Description |
| :--- | :--- | :--- | :--- |
| **Main Background** | `--background` | `#f8f7ff` | Off-white background. |
| **On Surface** | `--on-surface` | `#1a1a2e` | Deep Blue/Black - headings. |
| **On Surface Variant** | `--on-surface-variant` | `#565677` | Muted Purple/Gray - body copy. |
| **On Surface Muted** | `--on-surface-muted` | `#8e8ea8` | Lighter metadata text. |

### Gradients & Effects
*   **Primary Gradient**: `linear-gradient(135deg, var(--primary), var(--secondary))`.
*   **Mesh Gradient**: A sophisticated 4-point radial gradient used for hero backgrounds.
*   **Shadows**:
    *   `--shadow-sm`: Subtle lift.
    *   `--shadow-md`: Standard card depth.
    *   `--shadow-lg`: Deep elevation for modals/sticky elements.

---

## 🔡 Typography

*   **Headings (h1-h6)**: **Space Grotesk** (Weights: 300-700). High-tech, geometric feel.
*   **Body Text**: **Manrope** (Weights: 200-800). Modern, clean legibility.

---

## ✨ Design System Utilities

### 1. Advanced Glassmorphism (`.glass`)
*   **Implementation**: `background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(24px);`.
*   **Usage**: Navigation bar, floating widgets.

### 2. Premium Cards (`.card-premium`)
*   **Style**: Uses `--radius-xl` (1.5rem), `--shadow-md`.
*   **Hover**: Smooth transition to `--shadow-lg` and vertical lift.

### 3. Motion & Transitions
*   **Smooth**: `0.5s cubic-bezier(0.4, 0, 0.2, 1)` (standard for major reveals).
*   **Fast**: `0.2s ease` (standard for buttons/links).

---

## 📏 Layout Guidelines
*   **Section Spacing**: `10rem` (Desktop) / `6rem` (Mobile).
*   **Container**: Max width `1200px`.
*   **Border Radius**: 
    *   `--radius-xl`: 1.5rem (Standard cards).
    *   `--radius-2xl`: 2.5rem (Hero elements/large containers).
    *   `--radius-full`: 9999px (Pills/Buttons).

---

## 🛠️ Components Architecture
*   **Icons**: Standardized on **Lucide React**.
*   **Animations**: **Framer Motion** for entrance and interactive states.
