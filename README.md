# FWD-EXPO-EVEN-SEM
# ✨ SmartTodo — Modern Task Management UI

A sleek, high-performance Task Management dashboard built with a focus on **Glassmorphism**, **Fluid Animations**, and **Responsive Design**. This project demonstrates a professional-grade frontend architecture using vanilla web technologies.

![UI Mockup](https://img.shields.io/badge/UI-Modern_Glassmorphism-blueviolet)
![Frontend](https://img.shields.io/badge/Frontend-Vanilla_JS_/_CSS3-orange)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Friendly-success)

---

## 🎨 Design Philosophy

The interface is built with a **"Clarity First"** approach, utilizing:
* **Syne & DM Sans Typography:** A blend of geometric headers and highly readable body text.
* **Dynamic Theming:** High, Medium, and Low priority tasks are color-coded using CSS Variables for instant visual hierarchy.
* **Glassmorphism:** The header and cards utilize `backdrop-filter: blur()` to create depth and a modern "Apple-style" aesthetic.
* **Micro-interactions:** Smooth hover transitions and state changes (checked/unchecked) provide immediate user feedback.

---

## 🚀 Key Frontend Features

### 1. Advanced Task Filtering
Real-time searching and filtering logic that updates the DOM dynamically without page reloads. Includes UI indicators for search performance and result counts.

### 2. Custom Component Architecture
The app is modularized into distinct logic layers:
* **`app.js`**: Controls the DOM, event listeners, and UI state.
* **`style.css`**: Manages the layout using **CSS Grid** and **Flexbox**.
* **`animations.css`**: Handles entry/exit transitions for task cards.

### 3. Responsive Grid System
The dashboard adapts seamlessly across devices:
* **Desktop:** 4-column form grid with sidebar-style toolbars.
* **Tablet:** 2-column layout for optimized touch targets.
* **Mobile:** Single-column stacked view for "on-the-go" usage.

---

## 🛠️ Technology Stack

| Layer | Technology | Usage |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Semantic tags for SEO and Accessibility. |
| **Styling** | CSS3 | Custom Properties (Variables), Flexbox, Grid. |
| **Logic** | JavaScript (ES6+) | Functional programming for state management. |
| **Icons** | SVG | Lightweight, scalable vector graphics. |
| **Fonts** | Google Fonts | Syne & DM Sans. |

---

## 📂 Project Structure

```text
├── index.html          # Main entry point & Layout
├── style.css           # Core styles & Design System
├── animations.css      # Keyframes & Transition logic
├── app.js              # UI Controller & State management
├── api.js              # Mock data & Formatting utilities
└── dsa.js              # Logic engine for data handling
