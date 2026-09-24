/**
 * GAMEHUB - JAVASCRIPT CONTROLLER
 * Crafted by Sumon Roy
 * Features: Handcrafted SVG Scenes, Steam-Style Hero Spotlight, Instant Search & Filters, Random Game Selector, Theater Modal
 */

// 1. GAME DATA REGISTRY (11 Games)
const GAMES_CATALOG = [
  {
    id: 'hill-climb-racer',
    title: 'Hill Climb Racer Extreme',
    file: 'hillClimbRacer.html',
    category: 'racing',
    categoryLabel: 'Physics Racing',
    badge: 'Trending #1',
    description: 'Conquer treacherous mountains, pull off insane mid-air stunts, collect gold coins, and upgrade your engine, suspension, and 4WD drive in the garage!',
    keys: ['PEDALS', 'WASD / ARROWS'],
    instructions: 'Accelerate with Gas, balance or brake with Brake. Avoid flipping over on steep inclines!',
    rating: '⭐ 4.9',
    difficulty: 'Medium',
    mobileOptimized: true,
    width: 950,
    height: 600,
    themeColor: '#10b981'
  },
  {
    id: 'shadow-fighters',
    title: 'Shadow Fighters',
    file: 'shadow-fighter.html',
    category: 'action',
    categoryLabel: 'Martial Arts',
    badge: 'High Combat',
    description: 'High-octane martial arts duel! Unleash devastating combos, build special shadow meter for elemental energy strikes, and knockout rivals.',
    keys: ['A/D WALK', 'W JUMP', 'J PUNCH', 'K KICK'],
    instructions: 'Player 1: A/D to move, W to jump, J/K to attack. Time your blocks to counter heavy attacks!',
    rating: '⭐ 4.8',
    difficulty: 'Hardcore',
    mobileOptimized: false,
    width: 820,
    height: 520,
    themeColor: '#ef4444'
  },
  {
    id: 'urban-warfare',
    title: 'Urban Warfare',
    file: 'shoting.html',
    category: 'action',
    categoryLabel: 'Tactical Shooter',
    badge: 'Precision Aim',
    description: 'Tactical shooter with realistic crosshairs, target lead, dynamic bullet recoil, reload timers, and intense combat shooting trials.',
    keys: ['MOUSE AIM', 'L-CLICK FIRE', 'R RELOAD'],
    instructions: 'Line up your crosshairs, take steady shots, and tap R to reload before enemy targets disappear.',
    rating: '⭐ 4.7',
    difficulty: 'Reflex Heavy',
    mobileOptimized: true,
    width: 900,
    height: 600,
    themeColor: '#3b82f6'
  },
  {
    id: 'nova-strike',
    title: 'Nova Strike: Space Shooter',
    file: 'space.html',
    category: 'scifi',
    categoryLabel: 'Sci-Fi Classic',
    badge: 'Bullet Hell',
    description: 'Intergalactic bullet hell shooter. Pilot a high-tech starship against alien squadrons, collect plasma beams, and defeat colossal motherships.',
    keys: ['TOUCH / DRAG', 'MOUSE MOVE', 'ARROWS'],
    instructions: 'Slide to dodge enemy plasma blasts. Collect power-up cores to upgrade your laser cannon spread.',
    rating: '⭐ 4.8',
    difficulty: 'High Speed',
    mobileOptimized: true,
    width: 520,
    height: 720,
    themeColor: '#8b5cf6'
  },
  {
    id: 'chai-rush',
    title: 'Chai & Coffee Rush',
    file: 'chai_rush.html',
    category: 'casual',
    categoryLabel: 'Speed Reflex',
    badge: 'Dev Favorite',
    description: 'The late-night coding rush! Catch hot steaming chai glasses and double-shot espressos to stave off sleep while dodging sleeping pills and pillows.',
    keys: ['TOUCH DRAG', 'MOUSE MOVE', 'A / D KEYS'],
    instructions: 'Catch Chai and Coffee cups to keep your Ghum Level down! Avoid pills and pillows.',
    rating: '⭐ 4.9',
    difficulty: 'Casual Reflex',
    mobileOptimized: true,
    width: 820,
    height: 560,
    themeColor: '#f59e0b'
  },
  {
    id: 'brick-breaker',
    title: 'Neon Brick Breaker',
    file: 'Brick_Breaker.html',
    category: 'arcade',
    categoryLabel: 'Retro Arcade',
    badge: 'Satisfying',
    description: 'Vibrant neon breakout arcade with fluid ball physics, multi-hit laser crystals, exploding power-ups, and hypnotic particle effects.',
    keys: ['TOUCH / MOUSE', 'ARROW KEYS'],
    instructions: 'Bounce the glowing orb into neon bricks. Keep the orb alive to rack up massive score multipliers!',
    rating: '⭐ 4.6',
    difficulty: 'Casual',
    mobileOptimized: true,
    width: 820,
    height: 560,
    themeColor: '#00e5ff'
  },
  {
    id: 'dino-escape',
    title: 'Dino Runner: Escape Comet',
    file: 'dino_escape.html',
    category: 'arcade',
    categoryLabel: 'Endless Runner',
    badge: 'Fast Paced',
    description: 'Meteor apocalypse survival! Run as a swift prehistoric velociraptor, timing double jumps over molten rock and fiery cacti under falling meteors.',
    keys: ['SPACE JUMP', 'UP ARROW', 'TAP SCREEN'],
    instructions: 'Tap or press Space to jump. Press again in mid-air to execute an emergency double jump!',
    rating: '⭐ 4.7',
    difficulty: 'Fast Paced',
    mobileOptimized: true,
    width: 820,
    height: 460,
    themeColor: '#ff5722'
  },
  {
    id: 'flappy-ghost',
    title: 'Flappy Ghost: Haunting Hunt',
    file: 'Flappy_Ghost.html',
    category: 'arcade',
    categoryLabel: 'Spooky Tap',
    badge: 'Challenging',
    description: 'Fly a mischievous ghost through haunted gothic castle spires, ruins, and spooky night skies with smooth one-tap physics.',
    keys: ['SPACEBAR', 'LEFT CLICK', 'TAP SCREEN'],
    instructions: 'Tap or press Space to float upward. Carefully navigate between the haunted pillars without colliding.',
    rating: '⭐ 4.5',
    difficulty: 'Tricky',
    mobileOptimized: true,
    width: 600,
    height: 600,
    themeColor: '#a855f7'
  },
  {
    id: 'midnight-debugger',
    title: 'Midnight Debugger: Bug Attack',
    file: 'debugger.html',
    category: 'casual',
    categoryLabel: 'Clicker / Defense',
    badge: 'Hacker Arcade',
    description: 'Production is on fire at 2:00 AM! Smash malicious syntax bugs, fatal exceptions, and memory leaks before server CPU throttles to 100%.',
    keys: ['CLICK BUG', 'TAP BUG'],
    instructions: 'Smash bugs as fast as they invade the code console before your debug health runs out!',
    rating: '⭐ 4.8',
    difficulty: 'Quick Reflex',
    mobileOptimized: true,
    width: 870,
    height: 560,
    themeColor: '#10b981'
  },
  {
    id: 'mosquito-crusher',
    title: 'Mosquito Crusher',
    file: 'mosquito.html',
    category: 'casual',
    categoryLabel: 'Reflex Swat',
    badge: 'Fast Swat',
    description: 'Relentless buzzing in the dark! Annoying mosquitoes are swarming your room. Hone your lightning reflexes and swat them before they drain all your blood.',
    keys: ['TAP / CLICK SWAT', 'FAST REFLEX'],
    instructions: 'Tap or click the buzzing mosquitoes quickly. Target golden mosquitoes for blood heals and combo multipliers!',
    rating: '⭐ 4.7',
    difficulty: 'Reflex Test',
    mobileOptimized: true,
    width: 820,
    height: 560,
    themeColor: '#ec4899'
  },
  {
    id: 'typemaster-pro',
    title: 'TypeMaster Pro',
    file: 'typing.html',
    category: 'skill',
    categoryLabel: 'Typing Test',
    badge: 'Pro Skill',
    description: 'Sharpen your keyboard dexterity, WPM, and accuracy with an ultra-clean, real-time typing speed test and live analytics.',
    keys: ['KEYBOARD REQUIRED'],
    instructions: 'Type the highlighted words as quickly and accurately as possible. Test your true WPM score!',
    rating: '⭐ 4.9',
    difficulty: 'Skill Test',
    mobileOptimized: false,
    width: 1000,
    height: 650,
    themeColor: '#64748b'
  },
  {
    id: 'image-puzzle',
    title: 'Image Puzzle Master',
    file: 'image_puzzle.html',
    category: 'puzzle',
    categoryLabel: 'Photo Campaign',
    badge: '8 Unlock Levels',
    description: 'Solve sliding puzzles of authentic real photographs (Eiffel Tower, Royal Bengal Tiger, Taj Mahal, Giant Panda, Mount Fuji, Swiss Alps)! Unlock levels sequentially and upload your own photos!',
    keys: ['TOUCH SWIPE', 'MOUSE CLICK', 'UNLOCK CAMPAIGN', 'PHOTO UPLOAD'],
    instructions: 'Slide tiles into the empty space. Beat each level to unlock the next real world wonder or animal photograph, or upload custom pictures!',
    rating: '⭐ 5.0',
    difficulty: 'Progressive',
    mobileOptimized: true,
    width: 700,
    height: 750,
    themeColor: '#00e5ff'
  },
  {
    id: 'tic-tac-toe',
    title: 'Cyber Tic-Tac-Toe Deluxe',
    file: 'tictactoe.html',
    category: 'puzzle',
    categoryLabel: 'Cyber Duel',
    badge: 'Minimax AI',
    description: 'Holographic glowing neon arcade duel. Challenge Novice, Tactician, or the unbeatable Grandmaster Minimax AI, or pass-and-play with a friend on 3x3 and 4x4 grids.',
    keys: ['TOUCH / CLICK', '1P VS AI', '2P LOCAL'],
    instructions: 'Place your laser symbol to get 3 (or 4) in a row. Watch out for defensive AI blocks!',
    rating: '⭐ 4.8',
    difficulty: 'Tactical',
    mobileOptimized: true,
    width: 540,
    height: 680,
    themeColor: '#ff007f'
  },
  {
    id: 'cyber-snake',
    title: 'Neon Viper: Cyber Snake',
    file: 'snake.html',
    category: 'arcade',
    categoryLabel: 'Cyber Arcade',
    badge: 'Bioluminescent',
    description: 'A realistic, glowing neon cyber-snake arcade game. Slither through dark grids, hunt pink energy orbs and golden apples, and trigger ghost mode power-ups.',
    keys: ['ARROWS / WASD', 'TOUCH SWIPE', 'VIRTUAL D-PAD'],
    instructions: 'Steer your bioluminescent viper to consume pellets. Avoid walls and yourself unless Ghost Mode is activated!',
    rating: '⭐ 4.8',
    difficulty: 'Fast Reflex',
    mobileOptimized: true,
    width: 600,
    height: 680,
    themeColor: '#10b981'
  },
  {
    id: 'neon-2048',
    title: '2048 Neon Fusion',
    file: 'neon_2048.html',
    category: 'puzzle',
    categoryLabel: 'Logic Puzzle',
    badge: 'Addictive',
    description: 'Sleek cyberpunk sliding tile puzzle. Merge identical glowing numeric energy cores to unlock the mythical 2048 fusion tile with undo support.',
    keys: ['ARROWS / WASD', 'TOUCH SWIPE', 'UNDO'],
    instructions: 'Swipe or press arrows to slide tiles. When two tiles of the same number collide, they merge into one!',
    rating: '⭐ 4.9',
    difficulty: 'Brain Teaser',
    mobileOptimized: true,
    width: 500,
    height: 640,
    themeColor: '#f59e0b'
  },
  {
    id: 'memory-match',
    title: 'Memory Flip Master',
    file: 'memory_match.html',
    category: 'puzzle',
    categoryLabel: 'Memory / Brain',
    badge: '3D Card Flip',
    description: '3D card matching challenge with combo multipliers, streak bonuses, 4 themes (Gaming, Animals, Sci-Fi, Food), and star ratings.',
    keys: ['TOUCH / CLICK', 'PEEK CARDS'],
    instructions: 'Flip cards to find pairs. Maintain consecutive matches to activate flame combo streaks and achieve 3 stars!',
    rating: '⭐ 4.9',
    difficulty: 'Adaptive',
    mobileOptimized: true,
    width: 680,
    height: 720,
    themeColor: '#c084fc'
  },
  {
    id: 'neon-minesweeper',
    title: 'Neon Minesweeper',
    file: 'minesweeper.html',
    category: 'puzzle',
    categoryLabel: 'Cyber Grid',
    badge: 'Safe Start',
    description: 'Cyberpunk minefield defusal grid with guaranteed safe first click, flag mode toggle for mobile, rapid chord reveals, and digital LCD counters.',
    keys: ['L-CLICK DIG', 'R-CLICK FLAG', 'MOBILE TOGGLE'],
    instructions: 'Left-click or tap to clear safe cells. Right-click or use Flag Mode to mark mines. Click revealed numbers to chord!',
    rating: '⭐ 4.8',
    difficulty: 'Logical',
    mobileOptimized: true,
    width: 680,
    height: 640,
    themeColor: '#00e5ff'
  },
  {
    id: 'highway-racer',
    title: 'Retro Highway Racer',
    file: 'highway_racer.html',
    category: 'racing',
    categoryLabel: 'Arcade Racing',
    badge: '60 FPS Nitro',
    description: 'Fast-paced arcade highway traffic dodging! Maneuver sports cars through bustling multi-lane traffic, collect gold coins, and burn nitro.',
    keys: ['A/D or ARROWS', 'SPACE NITRO', 'S BRAKE', 'TOUCH BTNS'],
    instructions: 'Steer between lanes to dodge traffic. Collect nitro bottles to trigger speed lines and coins to maximize score!',
    rating: '⭐ 4.9',
    difficulty: 'Fast Reflex',
    mobileOptimized: true,
    width: 520,
    height: 720,
    themeColor: '#f59e0b'
  }
];

// 2. BESPOKE SVG SCENE ARTWORK GENERATOR
function getGameArtworkSVG(gameId) {
  switch (gameId) {
    case 'hill-climb-racer':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hc-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#064e3b"/>
              <stop offset="100%" stop-color="#022c22"/>
            </linearGradient>
            <linearGradient id="hc-hill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#10b981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#hc-sky)"/>
          <circle cx="340" cy="50" r="28" fill="#facc15" opacity="0.85"/>
          <circle cx="340" cy="50" r="38" fill="#facc15" opacity="0.15"/>
          <!-- Hills -->
          <path d="M0,160 Q90,100 190,145 T400,120 L400,220 L0,220 Z" fill="#065f46" opacity="0.6"/>
          <path d="M0,190 Q120,130 240,170 T400,150 L400,220 L0,220 Z" fill="url(#hc-hill)"/>
          <!-- Buggy -->
          <g transform="translate(130, 115) rotate(-15)">
            <ellipse cx="20" cy="22" rx="11" ry="11" fill="#1e293b" stroke="#f8fafc" stroke-width="2"/>
            <ellipse cx="62" cy="22" rx="11" ry="11" fill="#1e293b" stroke="#f8fafc" stroke-width="2"/>
            <path d="M12,18 L30,4 L60,4 L72,18 Z" fill="#ef4444"/>
            <rect x="32" y="-4" width="22" height="10" fill="#38bdf8" rx="2"/>
            <path d="M22,8 L28,-6 L52,-6 L56,8 Z" stroke="#cbd5e1" stroke-width="2" fill="none"/>
          </g>
          <!-- Coins -->
          <circle cx="230" cy="110" r="7" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="260" cy="98" r="7" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
          <circle cx="290" cy="92" r="7" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        </svg>
      `;

    case 'shadow-fighters':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sf-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#450a0a"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <linearGradient id="slash" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00f2fe"/>
              <stop offset="50%" stop-color="#ffffff"/>
              <stop offset="100%" stop-color="#ff0055"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#sf-bg)"/>
          <line x1="0" y1="180" x2="400" y2="180" stroke="#ff4400" stroke-width="2" opacity="0.6"/>
          <!-- Moon -->
          <circle cx="200" cy="70" r="45" fill="#ff4400" opacity="0.3"/>
          <circle cx="200" cy="70" r="35" fill="#ff8800" opacity="0.6"/>
          <!-- Fighter Left -->
          <path d="M120,180 L135,140 L125,120 L140,95 L148,110 L160,115 L145,135 L150,180 Z" fill="#00e5ff"/>
          <circle cx="142" cy="85" r="9" fill="#00e5ff"/>
          <!-- Fighter Right -->
          <path d="M280,180 L265,140 L275,120 L260,95 L252,110 L240,115 L255,135 L250,180 Z" fill="#ff2a85"/>
          <circle cx="258" cy="85" r="9" fill="#ff2a85"/>
          <!-- Clash Energy Slash -->
          <path d="M140,140 Q200,90 260,130" stroke="url(#slash)" stroke-width="6" fill="none" stroke-linecap="round"/>
          <circle cx="200" cy="115" r="12" fill="#ffffff" opacity="0.9"/>
        </svg>
      `;

    case 'urban-warfare':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nv-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#064e3b" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#021a14" stop-opacity="1"/>
            </radialGradient>
          </defs>
          <rect width="400" height="220" fill="url(#nv-glow)"/>
          <!-- Grid lines -->
          <line x1="0" y1="110" x2="400" y2="110" stroke="#10b981" stroke-width="1" opacity="0.4"/>
          <line x1="200" y1="0" x2="200" y2="220" stroke="#10b981" stroke-width="1" opacity="0.4"/>
          <!-- Sniper Reticle -->
          <circle cx="200" cy="110" r="70" stroke="#10b981" stroke-width="2" fill="none" opacity="0.8"/>
          <circle cx="200" cy="110" r="45" stroke="#10b981" stroke-width="1.5" stroke-dasharray="6,4" fill="none"/>
          <circle cx="200" cy="110" r="4" fill="#ef4444"/>
          <!-- Target silhouette -->
          <path d="M190,135 L210,135 L205,115 L212,105 L206,98 L194,98 L188,105 L195,115 Z" fill="#34d399" opacity="0.7"/>
          <circle cx="200" cy="90" r="6" fill="#34d399" opacity="0.7"/>
          <!-- Telemetry Text -->
          <text x="30" y="35" fill="#10b981" font-family="monospace" font-size="12" font-weight="bold">TARGET LOCK: CONFIRMED</text>
          <text x="30" y="55" fill="#34d399" font-family="monospace" font-size="11">RANGE: 340m • AMMO: 30/30</text>
        </svg>
      `;

    case 'nova-strike':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="space-nebula" cx="60%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#4c1d95"/>
              <stop offset="70%" stop-color="#090a15"/>
              <stop offset="100%" stop-color="#020308"/>
            </radialGradient>
          </defs>
          <rect width="400" height="220" fill="url(#space-nebula)"/>
          <!-- Stars -->
          <circle cx="40" cy="40" r="1.5" fill="#fff"/><circle cx="90" cy="180" r="1" fill="#fff"/>
          <circle cx="320" cy="30" r="2" fill="#38bdf8"/><circle cx="360" cy="140" r="1.5" fill="#fff"/>
          <circle cx="150" cy="60" r="1" fill="#c084fc"/><circle cx="280" cy="190" r="1.5" fill="#fff"/>
          <!-- Starship -->
          <g transform="translate(180, 110)">
            <path d="M20,0 L35,45 L20,38 L5,45 Z" fill="#00e5ff"/>
            <path d="M20,5 L30,40 L20,35 L10,40 Z" fill="#0284c7"/>
            <rect x="18" y="12" width="4" height="10" fill="#ffffff" rx="1"/>
            <line x1="8" y1="20" x2="8" y2="-60" stroke="#00e5ff" stroke-width="3" stroke-linecap="round"/>
            <line x1="32" y1="20" x2="32" y2="-60" stroke="#00e5ff" stroke-width="3" stroke-linecap="round"/>
          </g>
          <!-- Enemy ship explosion -->
          <circle cx="200" cy="40" r="18" fill="#f43f5e" opacity="0.8"/>
          <polygon points="200,20 206,35 220,35 208,45 214,60 200,50 186,60 192,45 180,35 194,35" fill="#fbbf24"/>
        </svg>
      `;

    case 'chai-rush':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tea-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#451a03"/>
              <stop offset="100%" stop-color="#1e1b4b"/>
            </linearGradient>
            <linearGradient id="cup-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#f8fafc"/>
              <stop offset="100%" stop-color="#cbd5e1"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#tea-grad)"/>
          <!-- Steam curls -->
          <path d="M190,95 Q180,70 195,50 T190,20" stroke="#fde68a" stroke-width="3" fill="none" opacity="0.6"/>
          <path d="M210,95 Q220,70 205,50 T210,20" stroke="#fde68a" stroke-width="3" fill="none" opacity="0.6"/>
          <!-- Tea Glass / Cup -->
          <g transform="translate(170, 95)">
            <path d="M5,10 L15,80 L45,80 L55,10 Z" fill="#b45309" opacity="0.85"/>
            <path d="M2,5 L12,85 L48,85 L58,5 Z" stroke="url(#cup-grad)" stroke-width="4" fill="none"/>
            <ellipse cx="30" cy="10" rx="25" ry="6" fill="#78350f"/>
          </g>
          <!-- Floating beans/particles -->
          <ellipse cx="120" cy="140" rx="9" ry="6" fill="#78350f" transform="rotate(-25 120 140)"/>
          <ellipse cx="280" cy="120" rx="9" ry="6" fill="#78350f" transform="rotate(35 280 120)"/>
          <text x="200" y="205" text-anchor="middle" fill="#fde047" font-weight="bold" font-size="13" letter-spacing="2">STAY AWAKE & CODE</text>
        </svg>
      `;

    case 'brick-breaker':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bb-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#020617"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#bb-bg)"/>
          <!-- Grid Horizon -->
          <line x1="0" y1="160" x2="400" y2="160" stroke="#00f2fe" stroke-width="1.5" opacity="0.5"/>
          <!-- Bricks -->
          <g transform="translate(60, 30)">
            <rect x="0" y="0" width="60" height="18" fill="#f43f5e" rx="3"/>
            <rect x="70" y="0" width="60" height="18" fill="#00e5ff" rx="3"/>
            <rect x="140" y="0" width="60" height="18" fill="#a855f7" rx="3"/>
            <rect x="210" y="0" width="60" height="18" fill="#facc15" rx="3"/>
            <rect x="0" y="26" width="60" height="18" fill="#00e5ff" rx="3"/>
            <rect x="70" y="26" width="60" height="18" fill="#f43f5e" rx="3"/>
            <rect x="140" y="26" width="60" height="18" fill="#facc15" rx="3"/>
            <rect x="210" y="26" width="60" height="18" fill="#a855f7" rx="3"/>
          </g>
          <!-- Ball & Trajectory -->
          <line x1="180" y1="160" x2="200" y2="75" stroke="#fde047" stroke-width="2" stroke-dasharray="4,4" opacity="0.7"/>
          <circle cx="200" cy="75" r="7" fill="#fde047" filter="drop-shadow(0 0 6px #fde047)"/>
          <!-- Paddle -->
          <rect x="150" y="160" width="80" height="10" fill="#00e5ff" rx="4" filter="drop-shadow(0 0 8px #00e5ff)"/>
        </svg>
      `;

    case 'dino-escape':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dino-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#431407"/>
              <stop offset="60%" stop-color="#7c2d12"/>
              <stop offset="100%" stop-color="#ea580c"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#dino-sky)"/>
          <!-- Comet trail -->
          <line x1="380" y1="10" x2="240" y2="90" stroke="#fde047" stroke-width="4" stroke-linecap="round"/>
          <circle cx="240" cy="90" r="10" fill="#ef4444"/>
          <!-- Ground -->
          <rect x="0" y="165" width="400" height="55" fill="#1c1917"/>
          <!-- Running Dino Silhouette -->
          <g transform="translate(100, 115)">
            <path d="M30,0 L50,0 L55,10 L45,20 L55,25 L40,35 L45,50 L38,50 L32,38 L25,50 L18,50 L24,35 L10,35 L0,20 L15,15 Z" fill="#f8fafc"/>
            <circle cx="45" cy="5" r="2" fill="#1c1917"/>
          </g>
          <!-- Cacti -->
          <rect x="270" y="130" width="8" height="35" fill="#78716c"/>
          <rect x="264" y="140" width="20" height="6" fill="#78716c"/>
          <rect x="264" y="135" width="6" height="10" fill="#78716c"/>
          <rect x="278" y="138" width="6" height="8" fill="#78716c"/>
        </svg>
      `;

    case 'flappy-ghost':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg-night" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e1b4b"/>
              <stop offset="100%" stop-color="#09090b"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#fg-night)"/>
          <!-- Full Moon -->
          <circle cx="280" cy="60" r="38" fill="#fef08a" opacity="0.9"/>
          <!-- Haunted Castle/Pillars -->
          <rect x="80" y="0" width="45" height="70" fill="#312e81" rx="4"/>
          <rect x="80" y="150" width="45" height="70" fill="#312e81" rx="4"/>
          <rect x="250" y="0" width="45" height="90" fill="#312e81" rx="4"/>
          <rect x="250" y="170" width="45" height="50" fill="#312e81" rx="4"/>
          <!-- Cute Glowing Ghost -->
          <g transform="translate(170, 85)">
            <path d="M10,35 C10,10 40,10 40,35 C40,45 35,45 30,40 C25,45 20,45 15,40 C10,45 10,35 10,35 Z" fill="#ffffff" filter="drop-shadow(0 0 10px #c084fc)"/>
            <circle cx="20" cy="22" r="3" fill="#0f172a"/>
            <circle cx="30" cy="22" r="3" fill="#0f172a"/>
          </g>
        </svg>
      `;

    case 'midnight-debugger':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dbg-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#022c22"/>
              <stop offset="100%" stop-color="#090d16"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="url(#dbg-bg)"/>
          <!-- Terminal Header -->
          <rect x="40" y="30" width="320" height="160" rx="8" fill="#0d1117" stroke="#30363d" stroke-width="2"/>
          <circle cx="60" cy="45" r="4" fill="#ef4444"/>
          <circle cx="75" cy="45" r="4" fill="#facc15"/>
          <circle cx="90" cy="45" r="4" fill="#10b981"/>
          <!-- Code Lines -->
          <text x="60" y="80" fill="#38bdf8" font-family="monospace" font-size="12">const server = startEngine();</text>
          <text x="60" y="105" fill="#f43f5e" font-family="monospace" font-size="12">> FATAL: 42 Syntax Exceptions!</text>
          <text x="60" y="130" fill="#4ade80" font-family="monospace" font-size="12">> auto_debug.destroyBugs();</text>
          <!-- Bug Icon -->
          <g transform="translate(270, 75)">
            <ellipse cx="20" cy="25" rx="14" ry="18" fill="#f43f5e"/>
            <circle cx="20" cy="10" r="8" fill="#f43f5e"/>
            <line x1="8" y1="18" x2="0" y2="10" stroke="#f43f5e" stroke-width="2"/>
            <line x1="32" y1="18" x2="40" y2="10" stroke="#f43f5e" stroke-width="2"/>
            <line x1="6" y1="28" x2="-2" y2="30" stroke="#f43f5e" stroke-width="2"/>
            <line x1="34" y1="28" x2="42" y2="30" stroke="#f43f5e" stroke-width="2"/>
          </g>
        </svg>
      `;

    case 'mosquito-crusher':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lamp-light" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#fef08a" stop-opacity="0.25"/>
              <stop offset="80%" stop-color="#090d16" stop-opacity="0.95"/>
            </radialGradient>
          </defs>
          <rect width="400" height="220" fill="#090d16"/>
          <circle cx="200" cy="110" r="95" fill="url(#lamp-light)"/>
          <!-- Mosquito -->
          <g transform="translate(180, 85)">
            <ellipse cx="20" cy="25" rx="6" ry="16" fill="#e2e8f0"/>
            <ellipse cx="12" cy="18" rx="14" ry="5" fill="#38bdf8" opacity="0.7" transform="rotate(-30 12 18)"/>
            <ellipse cx="28" cy="18" rx="14" ry="5" fill="#38bdf8" opacity="0.7" transform="rotate(30 28 18)"/>
            <line x1="20" y1="9" x2="20" y2="-4" stroke="#e2e8f0" stroke-width="2"/>
          </g>
          <!-- Crosshair Swat -->
          <circle cx="200" cy="110" r="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
          <line x1="200" y1="60" x2="200" y2="160" stroke="#ef4444" stroke-width="1.5"/>
          <line x1="150" y1="110" x2="250" y2="110" stroke="#ef4444" stroke-width="1.5"/>
          <text x="200" y="195" text-anchor="middle" fill="#f43f5e" font-weight="900" font-size="13" letter-spacing="2">SWAT THE SWARM!</text>
        </svg>
      `;

    case 'typemaster-pro':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="key-glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>
          <rect width="400" height="220" fill="#0a0e17"/>
          <!-- Keycap Cluster -->
          <g transform="translate(75, 45)">
            <!-- W -->
            <rect x="90" y="10" width="44" height="44" rx="8" fill="url(#key-glow)" stroke="#00e5ff" stroke-width="2"/>
            <text x="112" y="38" text-anchor="middle" fill="#00e5ff" font-family="monospace" font-weight="bold" font-size="18">W</text>
            <!-- A -->
            <rect x="40" y="60" width="44" height="44" rx="8" fill="url(#key-glow)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="62" y="88" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-weight="bold" font-size="18">A</text>
            <!-- S -->
            <rect x="90" y="60" width="44" height="44" rx="8" fill="url(#key-glow)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="112" y="88" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-weight="bold" font-size="18">S</text>
            <!-- D -->
            <rect x="140" y="60" width="44" height="44" rx="8" fill="url(#key-glow)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="162" y="88" text-anchor="middle" fill="#38bdf8" font-family="monospace" font-weight="bold" font-size="18">D</text>
            <!-- SPACE -->
            <rect x="50" y="110" width="125" height="30" rx="6" fill="url(#key-glow)" stroke="#818cf8" stroke-width="1.5"/>
            <text x="112" y="130" text-anchor="middle" fill="#818cf8" font-family="monospace" font-size="11">SPACEBAR</text>
          </g>
          <!-- WPM Gauge Badge -->
          <rect x="260" y="55" width="85" height="75" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
          <text x="302" y="88" text-anchor="middle" fill="#10b981" font-family="sans-serif" font-weight="900" font-size="24">135</text>
          <text x="302" y="112" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-weight="bold" font-size="11">WPM</text>
        </svg>
      `;

    case 'image-puzzle':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="puz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0e1726"/>
              <stop offset="100%" stop-color="#020617"/>
            </linearGradient>
            <filter id="puz-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00e5ff" flood-opacity="0.8"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#puz-grad)"/>
          <line x1="20" y1="20" x2="380" y2="20" stroke="#1e293b" stroke-width="1"/>
          <line x1="20" y1="200" x2="380" y2="200" stroke="#1e293b" stroke-width="1"/>
          <g transform="translate(130, 25)">
            <rect x="0" y="0" width="140" height="140" rx="10" fill="#080c14" stroke="#1e293b" stroke-width="3"/>
            <rect x="6" y="6" width="38" height="38" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="25" y="30" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">1</text>
            <rect x="51" y="6" width="38" height="38" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="70" y="30" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">2</text>
            <rect x="96" y="6" width="38" height="38" rx="6" fill="#075985" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="115" y="30" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">3</text>
            <rect x="6" y="51" width="38" height="38" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="25" y="75" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">4</text>
            <rect x="51" y="51" width="38" height="38" rx="6" fill="#00e5ff" stroke="#fff" stroke-width="2" filter="url(#puz-glow)"/>
            <text x="70" y="75" text-anchor="middle" fill="#000" font-weight="900" font-size="16">5</text>
            <rect x="96" y="51" width="38" height="38" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="115" y="75" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">6</text>
            <rect x="6" y="96" width="38" height="38" rx="6" fill="#075985" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="25" y="120" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">7</text>
            <rect x="51" y="96" width="38" height="38" rx="6" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="70" y="120" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">8</text>
            <rect x="96" y="96" width="38" height="38" rx="6" fill="#0f172a" stroke="#00e5ff" stroke-width="1" stroke-dasharray="4,4"/>
          </g>
          <circle cx="50" cy="110" r="28" fill="#1e293b" stroke="#00e5ff" stroke-width="2"/>
          <text x="50" y="118" text-anchor="middle" font-size="24">🧩</text>
          <circle cx="350" cy="110" r="28" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
          <text x="350" y="118" text-anchor="middle" font-size="24">⭐</text>
          <text x="200" y="195" text-anchor="middle" fill="#00e5ff" font-family="sans-serif" font-weight="bold" font-size="13" letter-spacing="1">SLIDE TO SOLVE</text>
        </svg>
      `;

    case 'tic-tac-toe':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ttt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0b0816"/>
              <stop offset="100%" stop-color="#04020a"/>
            </linearGradient>
            <filter id="laser-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00e5ff" flood-opacity="0.9"/>
            </filter>
            <filter id="laser-glow-pink" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#ff007f" flood-opacity="0.9"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#ttt-bg)"/>
          <g transform="translate(110, 20)">
            <line x1="60" y1="10" x2="60" y2="160" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
            <line x1="120" y1="10" x2="120" y2="160" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
            <line x1="10" y1="60" x2="170" y2="60" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
            <line x1="10" y1="110" x2="170" y2="110" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
            <g transform="translate(15, 15)" filter="url(#laser-glow-cyan)">
              <line x1="5" y1="5" x2="35" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
              <line x1="35" y1="5" x2="5" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
              <line x1="5" y1="5" x2="35" y2="35" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
              <line x1="35" y1="5" x2="5" y2="35" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            </g>
            <g transform="translate(70, 15)" filter="url(#laser-glow-pink)">
              <circle cx="20" cy="20" r="16" fill="none" stroke="#ff007f" stroke-width="7"/>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#fff" stroke-width="2"/>
            </g>
            <g transform="translate(15, 65)" filter="url(#laser-glow-cyan)">
              <line x1="5" y1="5" x2="35" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
              <line x1="35" y1="5" x2="5" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
            </g>
            <g transform="translate(70, 65)" filter="url(#laser-glow-cyan)">
              <line x1="5" y1="5" x2="35" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
              <line x1="35" y1="5" x2="5" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
            </g>
            <g transform="translate(125, 65)" filter="url(#laser-glow-cyan)">
              <line x1="5" y1="5" x2="35" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
              <line x1="35" y1="5" x2="5" y2="35" stroke="#00e5ff" stroke-width="7" stroke-linecap="round"/>
            </g>
            <line x1="5" y1="85" x2="175" y2="85" stroke="#00e5ff" stroke-width="5" stroke-linecap="round" filter="url(#laser-glow-cyan)"/>
            <line x1="5" y1="85" x2="175" y2="85" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
          </g>
          <text x="200" y="200" text-anchor="middle" fill="#ff007f" font-family="sans-serif" font-weight="900" font-size="13" letter-spacing="2">CYBER DUEL</text>
        </svg>
      `;

    case 'cyber-snake':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="snake-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06120e"/>
              <stop offset="100%" stop-color="#020806"/>
            </linearGradient>
            <filter id="viper-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#10b981" flood-opacity="0.8"/>
            </filter>
            <filter id="apple-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#f59e0b" flood-opacity="0.9"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#snake-bg)"/>
          <g filter="url(#viper-glow)">
            <circle cx="80" cy="140" r="10" fill="#047857"/>
            <circle cx="105" cy="140" r="11" fill="#059669"/>
            <circle cx="130" cy="130" r="12" fill="#059669"/>
            <circle cx="155" cy="110" r="13" fill="#10b981"/>
            <circle cx="175" cy="85" r="14" fill="#10b981"/>
            <circle cx="200" cy="75" r="15" fill="#34d399"/>
            <circle cx="228" cy="85" r="16" fill="#34d399"/>
            <circle cx="250" cy="105" r="17" fill="#10b981"/>
            <circle cx="282" cy="115" r="21" fill="#10b981"/>
            <circle cx="282" cy="115" r="7" fill="#00e5ff"/>
            <circle cx="290" cy="105" r="3.5" fill="#fff"/>
            <circle cx="290" cy="125" r="3.5" fill="#fff"/>
            <path d="M 303 115 L 315 115 L 320 110 M 315 115 L 320 120" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
          </g>
          <g transform="translate(345, 115)" filter="url(#apple-glow)">
            <circle cx="0" cy="0" r="12" fill="#f59e0b"/>
            <circle cx="-3" cy="-3" r="4" fill="#fff"/>
            <path d="M 0 -12 Q 4 -18 8 -16" stroke="#10b981" stroke-width="2" fill="none"/>
          </g>
          <circle cx="100" cy="65" r="7" fill="#ff007f"/>
          <circle cx="190" cy="165" r="7" fill="#00e5ff"/>
          <text x="200" y="200" text-anchor="middle" fill="#10b981" font-family="sans-serif" font-weight="900" font-size="13" letter-spacing="2">BIOLUMINESCENT VIPER</text>
        </svg>
      `;

    case 'neon-2048':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg-2048" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0c0e18"/>
              <stop offset="100%" stop-color="#06070d"/>
            </linearGradient>
            <filter id="tile-glow-gold" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#f59e0b" flood-opacity="0.8"/>
            </filter>
            <filter id="tile-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00e5ff" flood-opacity="0.8"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#bg-2048)"/>
          <g transform="translate(70, 30)">
            <rect x="20" y="70" width="70" height="65" rx="10" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
            <text x="55" y="112" text-anchor="middle" fill="#c084fc" font-family="sans-serif" font-weight="900" font-size="20">512</text>
            <rect x="98" y="25" width="75" height="70" rx="10" fill="#0f3d56" stroke="#00e5ff" stroke-width="2" filter="url(#tile-glow-cyan)"/>
            <text x="135.5" y="68" text-anchor="middle" fill="#00e5ff" font-family="sans-serif" font-weight="900" font-size="19">1024</text>
            <rect x="180" y="55" width="90" height="85" rx="12" fill="linear-gradient(135deg, #f59e0b, #e11d48)" stroke="#ffd700" stroke-width="3" filter="url(#tile-glow-gold)"/>
            <text x="225" y="108" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-weight="900" font-size="26">2048</text>
            <path d="M 90 100 Q 140 130 185 110" stroke="#f59e0b" stroke-width="3" fill="none" stroke-dasharray="6,4"/>
          </g>
          <text x="200" y="195" text-anchor="middle" fill="#f59e0b" font-family="sans-serif" font-weight="900" font-size="13" letter-spacing="2">FUSION CORE REACHED</text>
        </svg>
      `;

    case 'memory-match':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mem-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0e0720"/>
              <stop offset="100%" stop-color="#05020c"/>
            </linearGradient>
            <filter id="card-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#c084fc" flood-opacity="0.8"/>
            </filter>
            <filter id="match-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#10b981" flood-opacity="0.8"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#mem-bg)"/>
          <g transform="translate(60, 30)">
            <rect x="0" y="20" width="60" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2.5" filter="url(#match-glow)"/>
            <text x="30" y="68" text-anchor="middle" font-size="30">🎮</text>
            <rect x="70" y="20" width="60" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2.5" filter="url(#match-glow)"/>
            <text x="100" y="68" text-anchor="middle" font-size="30">🎮</text>
            <rect x="145" y="15" width="60" height="85" rx="8" fill="linear-gradient(135deg, #2e1065, #0f172a)" stroke="#c084fc" stroke-width="2" filter="url(#card-glow)"/>
            <text x="175" y="65" text-anchor="middle" fill="#c084fc" font-size="28">✦</text>
            <rect x="215" y="25" width="60" height="85" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
            <text x="245" y="73" text-anchor="middle" font-size="30">🚀</text>
          </g>
          <rect x="135" y="148" width="130" height="26" rx="13" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="200" y="165" text-anchor="middle" fill="#f59e0b" font-weight="900" font-size="11" letter-spacing="1">🔥 3X COMBO!</text>
          <text x="200" y="198" text-anchor="middle" fill="#c084fc" font-family="sans-serif" font-weight="bold" font-size="12" letter-spacing="2">3D MEMORY FLIP</text>
        </svg>
      `;

    case 'neon-minesweeper':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mine-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#020712"/>
              <stop offset="100%" stop-color="#060c18"/>
            </linearGradient>
            <filter id="mine-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00e5ff" flood-opacity="0.8"/>
            </filter>
            <filter id="flag-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ef4444" flood-opacity="0.8"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#mine-bg)"/>
          <rect x="90" y="20" width="220" height="34" rx="6" fill="#020408" stroke="#00e5ff" stroke-width="1.5"/>
          <text x="125" y="44" text-anchor="middle" fill="#ef4444" font-family="monospace" font-weight="bold" font-size="16">010</text>
          <circle cx="200" cy="37" r="12" fill="#111827" stroke="#fff" stroke-width="1"/>
          <text x="200" y="42" text-anchor="middle" font-size="13">😎</text>
          <text x="275" y="44" text-anchor="middle" fill="#00e5ff" font-family="monospace" font-weight="bold" font-size="16">042</text>
          <g transform="translate(100, 68)">
            <rect x="0" y="0" width="36" height="36" rx="4" fill="#080d1a" stroke="#1e293b"/>
            <text x="18" y="25" text-anchor="middle" fill="#00e5ff" font-weight="900" font-size="16" filter="url(#mine-glow)">1</text>
            <rect x="40" y="0" width="36" height="36" rx="4" fill="#080d1a" stroke="#1e293b"/>
            <text x="58" y="25" text-anchor="middle" fill="#10b981" font-weight="900" font-size="16">2</text>
            <rect x="80" y="0" width="36" height="36" rx="4" fill="#080d1a" stroke="#1e293b"/>
            <text x="98" y="25" text-anchor="middle" fill="#00e5ff" font-weight="900" font-size="16">1</text>
            <rect x="120" y="0" width="36" height="36" rx="4" fill="#1e293b" stroke="#334155"/>
            <text x="138" y="26" text-anchor="middle" font-size="18" filter="url(#flag-glow)">🚩</text>
            <rect x="160" y="0" width="36" height="36" rx="4" fill="#1e293b" stroke="#334155"/>
            <rect x="0" y="40" width="36" height="36" rx="4" fill="#080d1a" stroke="#1e293b"/>
            <text x="18" y="65" text-anchor="middle" fill="#00e5ff" font-weight="900" font-size="16">1</text>
            <rect x="40" y="40" width="36" height="36" rx="4" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
            <text x="58" y="65" text-anchor="middle" font-size="18">💣</text>
            <rect x="80" y="40" width="36" height="36" rx="4" fill="#080d1a" stroke="#1e293b"/>
            <text x="98" y="65" text-anchor="middle" fill="#f43f5e" font-weight="900" font-size="16">3</text>
            <rect x="120" y="40" width="36" height="36" rx="4" fill="#1e293b" stroke="#334155"/>
            <rect x="160" y="40" width="36" height="36" rx="4" fill="#1e293b" stroke="#334155"/>
          </g>
          <text x="200" y="195" text-anchor="middle" fill="#00e5ff" font-family="sans-serif" font-weight="900" font-size="13" letter-spacing="2">CYBER GRID DEFUSAL</text>
        </svg>
      `;

    case 'highway-racer':
      return `
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hr-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e1b4b"/>
              <stop offset="60%" stop-color="#701a75"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>
            <linearGradient id="hr-road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
            <filter id="nitro-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00e5ff" flood-opacity="0.9"/>
            </filter>
          </defs>
          <rect width="400" height="220" fill="url(#hr-sky)"/>
          <polygon points="150,70 250,70 360,220 40,220" fill="url(#hr-road)"/>
          <line x1="200" y1="70" x2="200" y2="220" stroke="#facc15" stroke-width="4" stroke-dasharray="14,14"/>
          <line x1="175" y1="70" x2="120" y2="220" stroke="#fff" stroke-width="2" stroke-dasharray="10,12"/>
          <line x1="225" y1="70" x2="280" y2="220" stroke="#fff" stroke-width="2" stroke-dasharray="10,12"/>
          <line x1="150" y1="70" x2="40" y2="220" stroke="#ef4444" stroke-width="3"/>
          <line x1="250" y1="70" x2="360" y2="220" stroke="#ef4444" stroke-width="3"/>
          <rect x="175" y="80" width="22" height="35" rx="3" fill="#94a3b8" stroke="#334155"/>
          <circle cx="180" cy="85" r="2" fill="#fed7aa"/>
          <circle cx="192" cy="85" r="2" fill="#fed7aa"/>
          <rect x="220" y="110" width="20" height="32" rx="3" fill="#38bdf8"/>
          <circle cx="150" cy="140" r="6" fill="#f59e0b" stroke="#fef08a" stroke-width="1.5"/>
          <circle cx="156" cy="120" r="5" fill="#f59e0b" stroke="#fef08a" stroke-width="1.5"/>
          <g transform="translate(178, 146)">
            <path d="M 10 44 L 14 58 L 18 44 Z" fill="#00e5ff" filter="url(#nitro-glow)"/>
            <path d="M 26 44 L 30 58 L 34 44 Z" fill="#00e5ff" filter="url(#nitro-glow)"/>
            <rect x="6" y="0" width="32" height="46" rx="6" fill="#f59e0b"/>
            <rect x="20" y="0" width="4" height="46" fill="#ffffff"/>
            <rect x="10" y="12" width="24" height="16" rx="3" fill="#0f172a"/>
            <polygon points="8,0 0,-36 18,-36 12,0" fill="rgba(254, 240, 138, 0.4)"/>
            <polygon points="32,0 26,-36 44,-36 36,0" fill="rgba(254, 240, 138, 0.4)"/>
          </g>
          <text x="200" y="210" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-weight="900" font-size="12" letter-spacing="2">60 FPS TRAFFIC DODGE</text>
        </svg>
      `;

    default:
      return `<div style="background: #111; width:100%; height:100%;"></div>`;
  }
}

// 3. STATE
let activeCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let favoriteIds = JSON.parse(localStorage.getItem('gamehub_favorites') || '[]');
let currentActiveGame = null;

// DOM Selectors
const gameGridEl = document.getElementById('gamesGrid');
const searchInputEl = document.getElementById('searchInput');
const searchResetBtn = document.getElementById('searchClear');
const sortSelectEl = document.getElementById('sortSelect');
const categoryTabs = document.querySelectorAll('.tab-btn');
const gamesCounterEl = document.getElementById('gamesCount');
const totalStatEl = document.getElementById('totalGamesStat');
const randomGameBtn = document.getElementById('randomGameBtn');

// Spotlight Elements
const spotlightArtBox = document.getElementById('spotlightArtBox');
const spotlightTitleEl = document.getElementById('spotlightTitle');
const spotlightDescEl = document.getElementById('spotlightDesc');
const spotlightMetaEl = document.getElementById('spotlightMeta');
const spotlightPlayBtn = document.getElementById('spotlightPlayBtn');
const spotlightPopoutBtn = document.getElementById('spotlightPopoutBtn');

// Theater Elements
const theaterOverlay = document.getElementById('theaterModal');
const theaterFrame = document.getElementById('theaterFrame');
const theaterHeading = document.getElementById('theaterTitle');
const theaterIconBox = document.getElementById('theaterIcon');
const theaterCategoryBadge = document.getElementById('theaterCategory');
const theaterTipsText = document.getElementById('theaterInstructions');
const theaterPopoutLink = document.getElementById('theaterPopout');
const theaterFullscreenToggle = document.getElementById('theaterFullscreen');
const theaterReloadToggle = document.getElementById('theaterReload');
const theaterCloseToggle = document.getElementById('theaterClose');
const iframeScaleBox = document.getElementById('iframeScaler');

// 4. INITIALIZATION
function initGameHub() {
  if (totalStatEl) totalStatEl.innerText = GAMES_CATALOG.length;
  initSpotlight(GAMES_CATALOG[0]); // Feature Hill Climb Racer Extreme
  renderCatalog();
  bindListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGameHub);
} else {
  initGameHub();
}

// 5. FEATURED SPOTLIGHT SHOWCASE
function initSpotlight(game) {
  if (!game) return;
  if (spotlightTitleEl) spotlightTitleEl.innerText = game.title;
  if (spotlightDescEl) spotlightDescEl.innerText = game.description;
  if (spotlightArtBox) spotlightArtBox.innerHTML = getGameArtworkSVG(game.id);

  if (spotlightMetaEl) {
    spotlightMetaEl.innerHTML = `
      <span class="spotlight-tag">🏷️ ${game.categoryLabel}</span>
      <span class="spotlight-tag">${game.rating}</span>
      <span class="spotlight-tag">⚡ ${game.difficulty}</span>
      ${game.mobileOptimized ? '<span class="spotlight-tag">📱 Mobile Ready</span>' : ''}
    `;
  }

  if (spotlightPlayBtn) {
    spotlightPlayBtn.onclick = (e) => {
      if (e) e.preventDefault();
      launchTheater(game.id);
    };
  }
  if (spotlightPopoutBtn) spotlightPopoutBtn.href = game.file;
}

// 6. RENDER CATALOG
function renderCatalog() {
  let list = GAMES_CATALOG.filter(game => {
    // Category Filter
    if (activeCategory === 'favorites') {
      if (!favoriteIds.includes(game.id)) return false;
    } else if (activeCategory === 'mobile') {
      if (!game.mobileOptimized) return false;
    } else if (activeCategory !== 'all') {
      if (game.category !== activeCategory) return false;
    }

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = game.title.toLowerCase().includes(q);
      const matchDesc = game.description.toLowerCase().includes(q);
      const matchCat = game.categoryLabel.toLowerCase().includes(q);
      const matchKey = game.keys.some(k => k.toLowerCase().includes(q));
      return matchName || matchDesc || matchCat || matchKey;
    }
    return true;
  });

  // Sorting
  if (currentSort === 'name-asc') {
    list.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSort === 'name-desc') {
    list.sort((a, b) => b.title.localeCompare(a.title));
  }

  // Update Counters
  if (gamesCounterEl) {
    gamesCounterEl.innerText = `Showing ${list.length} of ${GAMES_CATALOG.length} games`;
  }

  // Empty State
  if (list.length === 0) {
    gameGridEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
        <div style="font-size: 40px; margin-bottom: 12px;">🕹️</div>
        <h3 style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 6px;">No games match your search</h3>
        <p>Try searching for a different keyword or browse through categories!</p>
      </div>
    `;
    return;
  }

  // Render Modern Cards
  gameGridEl.innerHTML = list.map(game => {
    const isFav = favoriteIds.includes(game.id);
    return `
      <article class="game-card" data-id="${game.id}">
        <!-- Artwork Poster (Custom SVG Scene) -->
        <div class="card-poster" onclick="launchTheater('${game.id}')" style="cursor: pointer;" title="Play ${game.title}">
          <div class="poster-art-wrapper">
            ${getGameArtworkSVG(game.id)}
          </div>
          <div class="card-top-badges">
            <span class="genre-badge">${game.categoryLabel}</span>
            <button type="button" class="fav-toggle ${isFav ? 'favorited' : ''}" 
                    aria-label="Toggle Favorite"
                    onclick="toggleFavGame('${game.id}', event)">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        <!-- Content Body -->
        <div class="card-content">
          <div class="card-title-row">
            <h3 class="game-title" onclick="launchTheater('${game.id}')" style="cursor: pointer;">${game.title}</h3>
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-amber); white-space: nowrap;">${game.rating}</span>
          </div>

          <p class="card-description">${game.description}</p>

          <!-- Keybindings & Controls -->
          <div class="card-keys">
            ${game.keys.map(k => `<span class="key-tag">${k}</span>`).join('')}
            ${game.mobileOptimized ? '<span class="key-tag" style="color: #6ee7b7;">📱 MOBILE</span>' : ''}
          </div>

          <!-- Actions -->
          <div class="card-footer-actions">
            <button type="button" class="btn-card-play" onclick="launchTheater('${game.id}')">
              <span>▶</span> Play Now
            </button>
            <a href="${game.file}" target="_blank" rel="noopener" class="btn-card-tab" title="Open in dedicated tab">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 7. FAVORITES TOGGLE
function toggleFavGame(gameId, event) {
  if (event) event.stopPropagation();
  const idx = favoriteIds.indexOf(gameId);
  if (idx > -1) {
    favoriteIds.splice(idx, 1);
  } else {
    favoriteIds.push(gameId);
  }
  localStorage.setItem('gamehub_favorites', JSON.stringify(favoriteIds));
  renderCatalog();
}
window.toggleFavGame = toggleFavGame;

// 8. RANDOM GAME SELECTOR (I'M FEELING LUCKY)
function pickRandomGame() {
  const randomIndex = Math.floor(Math.random() * GAMES_CATALOG.length);
  const picked = GAMES_CATALOG[randomIndex];
  launchTheater(picked.id);
}
window.pickRandomGame = pickRandomGame;

// 9. THEATER MODAL (FULL SCREEN NATIVE CLICK PRECISION)
function launchTheater(gameId) {
  const game = GAMES_CATALOG.find(g => g.id === gameId);
  if (!game) return;

  currentActiveGame = game;
  if (theaterHeading) theaterHeading.innerText = game.title;
  if (theaterCategoryBadge) theaterCategoryBadge.innerText = game.categoryLabel;
  if (theaterTipsText) theaterTipsText.innerText = game.instructions;
  if (theaterPopoutLink) theaterPopoutLink.href = game.file;

  // Open modal first so layout dimensions are calculated properly
  if (theaterOverlay) {
    theaterOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Set scaler box to full stage width/height
  if (iframeScaleBox) {
    iframeScaleBox.style.width = '100%';
    iframeScaleBox.style.height = '100%';
    iframeScaleBox.style.maxWidth = '100%';
    iframeScaleBox.style.maxHeight = '100%';
    iframeScaleBox.style.overflow = 'hidden';
  }

  // Ensure iframe is rendered at 100% with ZERO transform scale distortion
  if (theaterFrame) {
    theaterFrame.style.width = '100%';
    theaterFrame.style.height = '100%';
    theaterFrame.style.maxWidth = '100%';
    theaterFrame.style.maxHeight = '100%';
    theaterFrame.style.transform = 'none';
    theaterFrame.style.transformOrigin = 'center center';
    theaterFrame.src = game.file;

    theaterFrame.onload = () => {
      try {
        theaterFrame.contentWindow.focus();
      } catch (e) {}
    };
  }
}
window.launchTheater = launchTheater;

function dismissTheater() {
  if (theaterOverlay) theaterOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (theaterFrame) theaterFrame.src = 'about:blank';
  currentActiveGame = null;
}
window.dismissTheater = dismissTheater;

// 10. EVENT HANDLERS
function bindListeners() {
  // Category tabs
  categoryTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderCatalog();
    });
  });

  // Search input
  searchInputEl.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchResetBtn.style.display = searchQuery ? 'block' : 'none';
    renderCatalog();
  });

  // Search reset
  searchResetBtn.addEventListener('click', () => {
    searchInputEl.value = '';
    searchQuery = '';
    searchResetBtn.style.display = 'none';
    searchInputEl.focus();
    renderCatalog();
  });

  // Sort
  sortSelectEl.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderCatalog();
  });

  // Random game button
  if (randomGameBtn) {
    randomGameBtn.addEventListener('click', pickRandomGame);
  }

  // Theater modal controls
  theaterCloseToggle.addEventListener('click', dismissTheater);
  theaterReloadToggle.addEventListener('click', () => {
    if (theaterFrame && currentActiveGame) {
      theaterFrame.src = currentActiveGame.file;
    }
  });

  // Fullscreen
  theaterFullscreenToggle.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      theaterOverlay.requestFullscreen().catch(err => {
        alert(`Fullscreen request error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && theaterOverlay.classList.contains('open')) {
      dismissTheater();
    }
    // Ctrl + K or '/' to focus search
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInputEl)) {
      e.preventDefault();
      searchInputEl.focus();
    }
  });
}
