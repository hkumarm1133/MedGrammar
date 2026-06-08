# MedGrammar — Medical Grammar Mastery 💊

An interactive, gamified web app that helps clinicians, scribes, and medical students sharpen their **clinical documentation grammar** through bite-sized challenges drawn from real medical record patterns.

> *"Master Medical Grammar — One Challenge at a Time."*

---

## ✨ Overview

**MedGrammar** turns the often-dry topic of clinical writing style into a Duolingo-style learning experience. Users progress through a required tutorial, then unlock four focused practice modules. Every answer earns XP, builds streaks, and unlocks achievements — all stored locally in the browser so progress persists between visits.

The app is built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build step, no backend. Just open `index.html` in a browser.

---

## 🎯 Core Functionality

### 1. Onboarding & Welcome
- Users enter a display name on the landing screen to begin their journey.
- App highlights 1700+ challenges across 4 modules.
- A friendly mascot 🤖 surfaces rotating tips and motivational nudges.

### 2. Required Tutorial — *Patient-Facing Imperative Language*
Before any module unlocks, learners must complete a tutorial on the **gentle imperative voice** used in the *Plan* section of SOAP notes. The tutorial covers:
- What patient-facing imperative language is
- Why it's preferred in plan documentation
- ✅ Correct examples (`Continue current antihypertensive medication.`)
- ⚠️ Less-preferred passive constructions
- ❌ Non-patient-friendly / judgmental phrasing to avoid

### 3. Four Grammar Modules
| Module | Focus |
|---|---|
| 🗣️ **Imperative** | Gentle imperative voice for clinical plans |
| 📰 **Articles** | Correct use of *a / an / the* in clinical notes |
| 🔗 **Prepositions** | Verb–preposition pairing in medical context |
| ✅ **Subject–Verb Agreement** | Matching subjects and verbs in complex clinical sentences |

Each module presents multiple-choice questions sourced from real medical-record errors, with detailed explanations after every answer.

### 4. Gamification System
- **⚡ XP** — Earned per correct answer; level scales every 100 XP.
- **🔥 Streaks** — Daily-play streak tracking with reset logic.
- **🏆 Achievements** — Unlockables like *First Step*, *On Fire*, *XP Collector*, *Grammar Master*, *Perfectionist*, *Daily Warrior*.
- **🎯 Daily Challenges** — Optional bite-sized practice to keep momentum.

### 5. Dashboard
A personal dashboard surfaces:
- Total XP and current level
- Active streak
- Per-module best scores and attempt counts
- Unlocked achievements

### 6. Quality-of-Life Features
- 🌙 / ☀️ **Dark / light theme toggle**
- 💾 **Auto-save** to `localStorage` (`medgrammar_state_v2`) — no account required
- 📱 **Responsive UI** with smooth screen transitions
- 🤖 **Mascot tips** with click-to-speak motivational coaching

---

## 📁 Project Structure

| File | Purpose |
|---|---|
| [index.html](index.html) | App shell, navigation, and all screen markup (welcome, tutorial, modules, quiz, dashboard) |
| [style.css](style.css) | Theming, layout, animations, and responsive design |
| [script.js](script.js) | App logic: state management, navigation, quiz engine, XP/streak/achievement system, tutorial quiz data |
| [data.js](data.js) | Question banks for Articles, Prepositions, and Subject–Verb Agreement modules (errors + corrections + reasoning + SOAP section) |

---

## 🚀 Getting Started

No installation, no dependencies.

1. Clone or download this folder.
2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
3. Enter your name and start learning.

Progress is saved automatically to the browser's `localStorage`. Clearing site data will reset progress.

---

## 🧠 Why It Exists

Clinical documentation has its own grammatical conventions — concise imperatives, correct article usage, precise prepositions, and clear subject–verb agreement — that aren't well covered by general grammar tools. MedGrammar fills that gap with **medical-context examples** and a fun, low-friction practice loop.

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, dark/light theming, animations
- **Vanilla JavaScript (ES6+)** — module-pattern app (`App` IIFE), `localStorage` persistence
- **Google Fonts (Inter)** — typography

No frameworks. No bundlers. No tracking.

---

## 📜 License

Personal / educational project. Add a license here if you intend to distribute.
