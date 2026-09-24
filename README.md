# ⚡ GameHub — High-Speed Indie Web Games Portal

> **Curated & Crafted with ❤️ by [Sumon Roy](https://github.com/roy-sumon)**  
> *Play handcrafted, high-speed indie games directly in your browser with zero installs.*

![GameHub Banner](https://img.shields.io/badge/Platform-Web%20HTML5-00e5ff?style=for-the-badge)
![Responsiveness](https://img.shields.io/badge/Design-100%25%20Responsive-10b981?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Live%20Ready-f59e0b?style=for-the-badge)

---

## 🎮 About GameHub

**GameHub** is a modern, high-performance web arcade portal designed with a sleek **Steam / Epic Games** aesthetic. It brings together 18 diverse, handcrafted HTML5 games across Racing, Martial Arts, Tactical Combat, Sci-Fi Shoot'em-ups, Arcade Classics, Brain Puzzles, and Typing speed challenges.

Built with **pure HTML5, CSS3, and modern Vanilla JavaScript**, GameHub runs smoothly with zero dependencies, zero build steps, and instant load times.

---

## 🚀 Key Features

- **In-App Theater Cabin Mode**: Launch and play any game directly within an immersive, high-framerate overlay without leaving the hub.
- **100% Fully Responsive Layout**: Tailored multi-tier media query architecture optimized for:
  - 🖥️ **Desktops & Widescreens** (>1200px)
  - 💻 **Laptops & Tablets (Landscape)** (951px - 1200px)
  - 📟 **Tablets (Portrait)** (769px - 950px)
  - 📱 **Mobile Devices & Small Phones** (down to 320px)
- **Instant Search & Category Filters**:
  - Global `Ctrl + K` or `/` quick search shortcut.
  - Category filters: *All, Racing, Action & Combat, Classic Arcade, Puzzle & Strategy, Casual & Fun, Sci-Fi Shooter, Typing & Skill, Mobile Ready, Favorites*.
- **Favorites & Persistence**: Mark your favorite games with heart toggles, saved seamlessly in `localStorage`.
- **Surprise Me 🎲 (Random Game Generator)**: Instant random game selection for fast casual play.
- **Mobile Touch Controls**: Integrated on-screen controls, virtual buttons, and touch gestures for mobile browsers.
- **Custom Vector Artwork**: Each game card features handcrafted SVG banner artwork with smooth hover animations.

---

## 🕹️ Included Games Library

| # | Game | Genre | Controls | Description |
|---|---|---|---|---|
| 1 | **Hill Climb Racer Extreme** | 🏎️ Racing | `Arrows` / Touch Gas & Brake | Conquer steep hills, perform stunts & backflips, upgrade vehicle engine & grip in the garage. |
| 2 | **Shadow Fighters** | ⚔️ Martial Arts | `A/D/W`, `J/K` Attack | High-octane martial arts duel with special elemental shadow meter and combo strikes. |
| 3 | **Urban Warfare** | 🎯 Tactical Shooter | `Mouse Aim`, `L-Click`, `R Reload` | Tactical shooter with realistic crosshairs, recoil, dynamic bullet trails, and enemy waves. |
| 4 | **Nova Strike: Space Shooter** | 🚀 Sci-Fi Shooter | `Touch / Drag`, `Mouse`, `Arrows` | Fast-paced bullet hell starship shooter with weapon upgrades, shields, and mothership bosses. |
| 5 | **Chai & Coffee Rush** | ☕ Casual Reflex | `Touch Drag`, `Mouse`, `A / D` | Catch hot tea and espresso cups to keep your Ghum Level down while avoiding sleeping pills! |
| 6 | **Neon Brick Breaker** | 🕹️ Retro Arcade | `Mouse / Touch Drag`, `Arrows` | Neon retro breakout with dynamic ball physics, paddle deflection angles, and glowing bricks. |
| 7 | **Dino Runner: Escape!** | 🦖 Endless Runner | `Space / Up Arrow` / Touch Tap | Evade the comet apocalypse by jumping over fire cacti and flying pterodactyls with double jumps. |
| 8 | **Flappy Ghost: Haunting Hunt** | 👻 Flappy Arcade | `Click / Space / Touch` | Navigate the haunted cemetery, flap between cursed obstacles, and set the high score. |
| 9 | **Midnight Debugger** | 💻 Clicker / Reflex | `Click / Touch Squashing` | Patch production bugs before the server crashes and client stability drops to zero! |
| 10 | **Mosquito Crusher** | 🦟 Casual Reflex | `Click / Touch Swatting` | Swat relentless mosquitoes swarming in the bedroom before they drain all your blood! |
| 11 | **TypeMaster Pro** | ⌨️ Typing & Skill | Keyboard Typing | Clean typing speed test with real-time WPM, character accuracy tracker, and custom word lists. |
| 12 | **Image Puzzle Master** | 🧩 Photo Campaign | `Touch Swipe / Click / Upload` | Real photograph campaign (*Eiffel Tower, Bengal Tiger, Taj Mahal, Giant Panda, Mt Fuji, Swiss Alps*) with progressive level unlocking + custom photo upload! |
| 13 | **Cyber Tic-Tac-Toe Deluxe** | ⚔️ Strategy Duel | `Touch / Click` | Holographic neon duel vs Novice, Tactician, or Unbeatable Minimax AI, plus 2-player local mode. |
| 14 | **Neon Viper: Cyber Snake** | 🐍 Cyber Arcade | `Arrows / Swipe / D-Pad` | Bioluminescent viper arcade game with power-up foods, speed levels, and labyrinth obstacles. |
| 15 | **2048 Neon Fusion** | 🔢 Logic Puzzle | `Arrows / WASD / Swipe` | Cyberpunk sliding tile puzzle with 3D glowing tiles, merge pop animations, and undo moves. |
| 16 | **Memory Flip Master** | 🎴 Memory / Brain | `Touch / Click / Peek` | 3D card flipping match challenge with combo streaks, 4 themes (Gaming, Animals, Sci-Fi, Food), and star ratings. |
| 17 | **Neon Minesweeper** | 💣 Cyber Grid | `L-Click Dig / R-Click Flag` | Cyberpunk minefield defusal with guaranteed safe first click, mobile flag mode toggle, and rapid chording. |
| 18 | **Retro Highway Racer** | 🏎️ Arcade Racing | `Arrows / WASD / Touch Btns` | 60 FPS top-down arcade traffic racer with nitro boost, sports cars, semi trucks, police sirens, and coins. |

---

## 💻 How to Run Locally

Because GameHub is built with pure web standards (HTML5/CSS3/JS), you can run it instantly:

### Option 1: Direct File Opening
Double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
# In the project root directory:
python -m http.server 8080
```
Then visit: `http://localhost:8080` in your web browser.

Using Node / npx:
```bash
npx serve
```

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup, embedded accessible canvases, vector SVGs.
- **CSS3**: Modern CSS Variables, Flexbox, Grid, Glassmorphism backdrop-filters, custom animations, responsive media queries.
- **JavaScript (ES6+)**: Event delegation, modal state management, local storage persistence, responsive coordinate handling.

---

## 📜 License & Copyright

© 2026 **GameHub**. Crafted with ❤️ by **[Sumon Roy](https://github.com/roy-sumon)**. All rights reserved.

