/**
 * Mohammad Amaan — 4K Wallpaper Studio Engine
 * Multi-Category 4K Ultra-HD Wallpapers & Live Dynamic Canvas Generator
 */

(function () {
  'use strict';

  // 10+ Wallpaper Catalog across all requested categories
  const wallpapers = [
    // Anime Aesthetic
    {
      id: 'anime_cyber_city',
      title: 'Cyber City Midnight Rain',
      category: 'anime',
      categoryName: 'Anime',
      desc: 'Makoto Shinkai aesthetic rainy cyberpunk Tokyo street, giant glowing holographic koi, wet neon reflections.',
      file: 'images/mohammad_amaan_anime_cyber_city.png',
      size: '9.3 MB',
      theme: 'cyber',
      isDynamic: false
    },
    {
      id: 'anime_sunset',
      title: 'Twilight Blossom & Torii',
      category: 'anime',
      categoryName: 'Anime',
      desc: 'Cinematic anime twilight sky with blooming cherry blossoms, traditional torii gate, and glowing valley town.',
      file: 'images/mohammad_amaan_anime_sunset.png',
      size: '6.8 MB',
      theme: 'sunset',
      isDynamic: false
    },

    // Futuristic & Sci-Fi
    {
      id: 'futuristic_city',
      title: 'Neo-Tokyo 2099 Megacity',
      category: 'futuristic',
      categoryName: 'Futuristic',
      desc: 'Towering monolithic holographic skyscrapers, sleek flying aerocar light trails, and obsidian midnight atmosphere.',
      file: 'images/mohammad_amaan_futuristic_city.png',
      size: '8.5 MB',
      theme: 'cyber',
      isDynamic: false
    },
    {
      id: 'cyber_4k',
      title: 'Cyber Circuit Neon Studio',
      category: 'futuristic',
      categoryName: 'Futuristic',
      desc: 'Dark obsidian background with electric cyan and purple circuit traces, floating 3D glass IDE, and glowing JavaScript syntax.',
      file: 'images/mohammad_amaan_cyber_4k.png',
      size: '5.7 MB',
      theme: 'cyber',
      isDynamic: false
    },
    {
      id: 'vector_cyber_4k',
      title: 'Obsidian Vector Neon',
      category: 'futuristic',
      categoryName: 'Futuristic',
      desc: 'Razor-sharp Fira Code typography on pure deep pitch-black backdrop with glowing electric cyan syntax.',
      file: 'images/mohammad_amaan_vector_cyber_4k.png',
      size: '587 KB',
      theme: 'cyber',
      isDynamic: false
    },

    // Nature & Landscapes
    {
      id: 'nature_aurora',
      title: 'Emerald Aurora & Alpine Lake',
      category: 'nature',
      categoryName: 'Nature',
      desc: 'Majestic snowy mountain peaks reflecting in a pristine glacial lake under vibrant emerald Aurora Borealis and Milky Way.',
      file: 'images/mohammad_amaan_nature_aurora.png',
      size: '8.7 MB',
      theme: 'matrix',
      isDynamic: false
    },

    // Minimalist & Dark
    {
      id: 'minimal_zen',
      title: 'Japanese Zen Solitude',
      category: 'minimalist',
      categoryName: 'Minimalist',
      desc: 'Misty solitary mountain silhouette against pitch-black void with a glowing crimson red minimalist moon and calm ripples.',
      file: 'images/mohammad_amaan_minimal_zen.png',
      size: '2.9 MB',
      theme: 'minimal',
      isDynamic: false
    },
    {
      id: 'minimal_monochrome',
      title: 'Obsidian Stealth Monochrome',
      category: 'minimalist',
      categoryName: 'Minimalist',
      desc: 'High-contrast stealth dark mode, clean slate borders, and crisp monochrome typography for focused setups.',
      file: 'images/mohammad_amaan_4k_minimal_wallpaper.png',
      size: '1.7 MB',
      theme: 'minimal',
      isDynamic: false
    },

    // Developer & Coding
    {
      id: 'glass_4k',
      title: 'Frosted Glass Studio',
      category: 'coding',
      categoryName: 'Coding',
      desc: 'Floating glassmorphism code card with ambient violet and cyan bokeh nebulae and clean modern JavaScript.',
      file: 'images/mohammad_amaan_glass_4k.png',
      size: '4.1 MB',
      theme: 'glass',
      isDynamic: false
    },
    {
      id: 'matrix_4k',
      title: 'Phosphor Matrix Dark',
      category: 'coding',
      categoryName: 'Coding',
      desc: 'Pure cyberpunk terminal green phosphor glow on deep obsidian chassis with clean JavaScript architecture.',
      file: 'images/mohammad_amaan_matrix_4k.png',
      size: '515 KB',
      theme: 'matrix',
      isDynamic: false
    },
    {
      id: 'dynamic_custom',
      title: 'Live Customized Vector 4K',
      category: 'coding',
      categoryName: 'Coding',
      desc: 'Renders in real-time with your personalized name, role, tech stack, motto, and active theme.',
      file: null,
      size: 'Dynamic 4K',
      theme: 'cyber',
      isDynamic: true
    }
  ];

  // State Management
  const state = {
    developerName: 'Mohammad amaan',
    role: 'Full-Stack Architect & Visionary',
    portfolio: 'amaandev.me',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'AI Systems'],
    motto: 'Crafting next-generation digital experiences',
    theme: 'cyber',
    activeWallpaperIndex: 0,
    isArtMode: false,
    currentCategoryFilter: 'all',
    mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: window.innerWidth / 2, targetY: window.innerHeight / 2 },
    particles: []
  };

  // Color Definitions for Themes
  const themePresets = {
    cyber: {
      bg: '#05070d',
      windowBg: 'rgba(10, 14, 26, 0.85)',
      borderColor: 'rgba(0, 245, 255, 0.3)',
      glow1: 'rgba(0, 245, 255, 0.28)',
      glow2: 'rgba(188, 19, 254, 0.22)',
      cyan: '#00f5ff',
      purple: '#bc13fe',
      emerald: '#00ffaa',
      gold: '#fbbf24',
      coral: '#ff007f',
      text: '#f1f5f9',
      comment: '#526079'
    },
    glass: {
      bg: '#08090d',
      windowBg: 'rgba(20, 26, 36, 0.75)',
      borderColor: 'rgba(255, 255, 255, 0.18)',
      glow1: 'rgba(56, 189, 248, 0.25)',
      glow2: 'rgba(129, 140, 248, 0.2)',
      cyan: '#38bdf8',
      purple: '#818cf8',
      emerald: '#34d399',
      gold: '#facc15',
      coral: '#fb7185',
      text: '#f8fafc',
      comment: '#64748b'
    },
    matrix: {
      bg: '#020503',
      windowBg: 'rgba(4, 18, 9, 0.88)',
      borderColor: 'rgba(0, 255, 136, 0.35)',
      glow1: 'rgba(0, 255, 136, 0.3)',
      glow2: 'rgba(0, 200, 83, 0.22)',
      cyan: '#00ff88',
      purple: '#00e676',
      emerald: '#69f0ae',
      gold: '#b9f6ca',
      coral: '#00b0ff',
      text: '#e8f5e9',
      comment: '#2e7d32'
    },
    sunset: {
      bg: '#09060c',
      windowBg: 'rgba(24, 12, 30, 0.85)',
      borderColor: 'rgba(255, 75, 145, 0.35)',
      glow1: 'rgba(255, 75, 145, 0.28)',
      glow2: 'rgba(255, 154, 60, 0.22)',
      cyan: '#ff758c',
      purple: '#ff7eb3',
      emerald: '#ffb86c',
      gold: '#ffbe0b',
      coral: '#ff0055',
      text: '#fff1f2',
      comment: '#834c67'
    },
    minimal: {
      bg: '#000000',
      windowBg: 'rgba(14, 14, 18, 0.92)',
      borderColor: 'rgba(255, 255, 255, 0.16)',
      glow1: 'rgba(255, 255, 255, 0.08)',
      glow2: 'rgba(148, 163, 184, 0.08)',
      cyan: '#f8fafc',
      purple: '#cbd5e1',
      emerald: '#94a3b8',
      gold: '#e2e8f0',
      coral: '#ffffff',
      text: '#ffffff',
      comment: '#475569'
    }
  };

  // DOM Elements
  const ambientCanvas = document.getElementById('ambient-canvas');
  const ambientCtx = ambientCanvas.getContext('2d');
  const wallpaperArtBg = document.getElementById('wallpaper-art-bg');
  const codeContent = document.getElementById('code-content');
  const lineNumbers = document.getElementById('line-numbers');
  const codeWindow = document.getElementById('code-window');
  const artClockWidget = document.getElementById('art-clock-widget');
  const widgetTime = document.getElementById('widget-time');
  const widgetDate = document.getElementById('widget-date');
  const widgetArtName = document.getElementById('widget-art-name');
  const activeWallpaperTitle = document.getElementById('active-wallpaper-title');

  const controlHud = document.getElementById('control-hud');
  const btnHideHud = document.getElementById('btn-hide-hud');
  const btnRestoreHud = document.getElementById('btn-restore-hud');
  const toastContainer = document.getElementById('toast-container');
  const wallpaperPillStrip = document.getElementById('wallpaper-pill-strip');
  const btnPrevWallpaper = document.getElementById('btn-prev-wallpaper');
  const btnNextWallpaper = document.getElementById('btn-next-wallpaper');

  // Header Elements
  const btnDownloadTop = document.getElementById('btn-download-top');
  const btnTopGallery = document.getElementById('btn-top-gallery');
  const btnToggleMode = document.getElementById('btn-toggle-mode');
  const modeText = document.getElementById('mode-text');
  const btnTopFullscreen = document.getElementById('btn-top-fullscreen');
  const btnTopClean = document.getElementById('btn-top-clean');
  const categoryPills = document.querySelectorAll('.category-pill');

  // Window Header Elements
  const btnCopyCode = document.getElementById('btn-copy-code');
  const btnWindowDownload = document.getElementById('btn-window-download');

  // Bottom Dock Elements
  const btnDownload4k = document.getElementById('btn-download-4k');
  const exportResSelect = document.getElementById('export-res-select');
  const btnOpenEditor = document.getElementById('btn-open-editor');
  const btnCloseEditor = document.getElementById('btn-close-editor');
  const modalEditor = document.getElementById('modal-editor');
  const btnApplyCode = document.getElementById('btn-apply-code');
  const btnResetCode = document.getElementById('btn-reset-code');
  const btnOpenGallery = document.getElementById('btn-open-gallery');
  const btnCloseGallery = document.getElementById('btn-close-gallery');
  const btnCloseGalleryFooter = document.getElementById('btn-close-gallery-footer');
  const modalGallery = document.getElementById('modal-gallery');
  const galleryCardsGrid = document.getElementById('gallery-cards-grid');
  const galleryTabs = document.querySelectorAll('.gallery-tab');

  // Input Fields
  const inputDevName = document.getElementById('input-developer-name');
  const inputRole = document.getElementById('input-role');
  const inputPortfolio = document.getElementById('input-portfolio');
  const inputSkills = document.getElementById('input-skills');
  const inputMotto = document.getElementById('input-motto');

  /* ----------------------------------------------------
   * Toast Notification System
   * ---------------------------------------------------- */
  function showToast(message, duration = 3000) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  }

  /* ----------------------------------------------------
   * Active Wallpaper Management & Stage Switching
   * ---------------------------------------------------- */
  function setActiveWallpaper(index) {
    if (index < 0) index = wallpapers.length - 1;
    if (index >= wallpapers.length) index = 0;
    state.activeWallpaperIndex = index;
    const wp = wallpapers[index];

    // Update title in header and widget
    if (activeWallpaperTitle) activeWallpaperTitle.textContent = wp.title;
    if (widgetArtName) widgetArtName.textContent = wp.title;

    // Update body theme
    switchTheme(wp.theme);

    // Update stage background artwork
    if (wp.file) {
      wallpaperArtBg.style.backgroundImage = `url('${wp.file}')`;
      wallpaperArtBg.classList.add('active');
    } else {
      wallpaperArtBg.style.backgroundImage = 'none';
      wallpaperArtBg.classList.remove('active');
    }

    // Update pills strip highlight
    const chips = document.querySelectorAll('.wp-chip');
    chips.forEach(chip => {
      if (chip.dataset.id === wp.id) {
        chip.classList.add('active');
        chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        chip.classList.remove('active');
      }
    });

    // Update Category Pills highlight
    categoryPills.forEach(p => {
      if (p.dataset.category === wp.category) {
        p.classList.add('active');
      } else if (p.dataset.category !== 'all') {
        p.classList.remove('active');
      }
    });
  }

  function renderWallpaperPillStrip() {
    if (!wallpaperPillStrip) return;
    wallpaperPillStrip.innerHTML = '';
    wallpapers.forEach((wp, idx) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `wp-chip ${idx === state.activeWallpaperIndex ? 'active' : ''}`;
      chip.dataset.id = wp.id;
      chip.dataset.index = idx;
      
      let icon = '💻';
      if (wp.category === 'anime') icon = '🌸';
      else if (wp.category === 'futuristic') icon = '🚀';
      else if (wp.category === 'nature') icon = '🌲';
      else if (wp.category === 'minimalist') icon = '⚫';

      chip.innerHTML = `<span>${icon}</span> <span>${wp.title}</span>`;
      chip.addEventListener('click', () => {
        setActiveWallpaper(idx);
      });
      wallpaperPillStrip.appendChild(chip);
    });
  }

  /* ----------------------------------------------------
   * Live Digital Clock for Art Mode
   * ---------------------------------------------------- */
  function updateClock() {
    if (!widgetTime || !widgetDate) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    widgetTime.textContent = `${hours}:${minutes}`;

    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    widgetDate.textContent = now.toLocaleDateString('en-US', options);
  }
  setInterval(updateClock, 1000);
  updateClock();

  function toggleMode() {
    state.isArtMode = !state.isArtMode;
    if (state.isArtMode) {
      codeWindow.classList.add('hidden');
      artClockWidget.classList.remove('hidden');
      if (modeText) modeText.textContent = 'Code Mode';
      showToast('Switched to <strong>Pure Artwork Mode</strong> (Press M)');
    } else {
      codeWindow.classList.remove('hidden');
      artClockWidget.classList.add('hidden');
      if (modeText) modeText.textContent = 'Art Mode';
      showToast('Switched to <strong>Developer IDE Mode</strong> (Press M)');
    }
  }

  /* ----------------------------------------------------
   * 4K Gallery Modal & Category Filtering
   * ---------------------------------------------------- */
  function renderGallery(filter = 'all') {
    if (!galleryCardsGrid) return;
    galleryCardsGrid.innerHTML = '';

    const filtered = filter === 'all' 
      ? wallpapers 
      : wallpapers.filter(w => w.category === filter);

    filtered.forEach(wp => {
      const card = document.createElement('div');
      card.className = 'gallery-card';

      let catBadgeColor = '#00f5ff';
      if (wp.category === 'anime') catBadgeColor = '#ff758c';
      else if (wp.category === 'nature') catBadgeColor = '#00ffaa';
      else if (wp.category === 'minimalist') catBadgeColor = '#ffffff';

      const thumbHtml = wp.file 
        ? `<img src="${wp.file}" alt="${wp.title}" class="gallery-thumb" loading="lazy">`
        : `<div class="live-preview-box">
             <span class="live-tag">LIVE VECTOR ENGINE</span>
             <code>const dev = "Mohammad amaan";</code>
             <span class="live-sub">Rendered with active customization</span>
           </div>`;

      card.innerHTML = `
        <div class="gallery-thumb-wrap ${wp.isDynamic ? 'live-thumb' : ''}">
          ${thumbHtml}
          <span class="badge-cat" style="color:${catBadgeColor}; border-color:${catBadgeColor}55;">${wp.categoryName.toUpperCase()}</span>
          <span class="badge-size">${wp.size}</span>
        </div>
        <div class="gallery-info">
          <h3>${wp.title}</h3>
          <p>${wp.desc}</p>
          <div class="card-actions">
            <button type="button" class="btn btn-secondary btn-sm btn-card-preview" data-id="${wp.id}">
              Preview on Stage
            </button>
            <button type="button" class="btn btn-primary btn-sm btn-card-download" data-id="${wp.id}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download 4K
            </button>
          </div>
        </div>
      `;

      // Card action event listeners
      const btnPreview = card.querySelector('.btn-card-preview');
      btnPreview.addEventListener('click', () => {
        const foundIdx = wallpapers.findIndex(w => w.id === wp.id);
        if (foundIdx !== -1) setActiveWallpaper(foundIdx);
        modalGallery.classList.add('hidden');
        showToast(`Previewing <strong>${wp.title}</strong> on stage`);
      });

      const btnDl = card.querySelector('.btn-card-download');
      btnDl.addEventListener('click', () => {
        downloadWallpaperItem(wp);
      });

      galleryCardsGrid.appendChild(card);
    });
  }

  function setupGalleryFilters() {
    galleryTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        renderGallery(filter);
      });
    });

    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const cat = pill.dataset.category;
        if (cat === 'all') {
          setActiveWallpaper(0);
        } else {
          const firstInCat = wallpapers.findIndex(w => w.category === cat);
          if (firstInCat !== -1) setActiveWallpaper(firstInCat);
        }
      });
    });
  }

  /* ----------------------------------------------------
   * Ambient Canvas Particles System
   * ---------------------------------------------------- */
  function initAmbientCanvas() {
    function resize() {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    state.particles = [];
    const particleCount = Math.floor(window.innerWidth / 24);
    for (let i = 0; i < particleCount; i++) {
      state.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    window.addEventListener('mousemove', (e) => {
      state.mouse.targetX = e.clientX;
      state.mouse.targetY = e.clientY;
    });

    function renderAmbient() {
      ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
      const currentTheme = themePresets[state.theme] || themePresets.cyber;

      state.mouse.x += (state.mouse.targetX - state.mouse.x) * 0.08;
      state.mouse.y += (state.mouse.targetY - state.mouse.y) * 0.08;

      const radial = ambientCtx.createRadialGradient(
        state.mouse.x, state.mouse.y, 10,
        state.mouse.x, state.mouse.y, 350
      );
      radial.addColorStop(0, currentTheme.glow1);
      radial.addColorStop(0.6, currentTheme.glow2);
      radial.addColorStop(1, 'transparent');
      ambientCtx.fillStyle = radial;
      ambientCtx.beginPath();
      ambientCtx.arc(state.mouse.x, state.mouse.y, 350, 0, Math.PI * 2);
      ambientCtx.fill();

      for (const p of state.particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = ambientCanvas.width;
        if (p.x > ambientCanvas.width) p.x = 0;
        if (p.y < 0) p.y = ambientCanvas.height;
        if (p.y > ambientCanvas.height) p.y = 0;

        ambientCtx.fillStyle = currentTheme.cyan;
        ambientCtx.globalAlpha = p.alpha;
        ambientCtx.beginPath();
        ambientCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ambientCtx.fill();
      }
      ambientCtx.globalAlpha = 1.0;

      requestAnimationFrame(renderAmbient);
    }

    renderAmbient();
  }

  /* ----------------------------------------------------
   * Dynamic Code Template & Syntax Generator
   * ---------------------------------------------------- */
  function renderCodeHtml() {
    const formattedSkills = state.skills.map(s => `'${s.trim()}'`).join(', ');

    const html = `<code class="language-javascript"><span class="token comment">/**</span>
<span class="token comment"> * @developer   </span><span class="token highlight-name">${state.developerName}</span>
<span class="token comment"> * @portfolio   </span><span class="token string">https://${state.portfolio}</span>
<span class="token comment"> * @specialty   ${state.role}</span>
<span class="token comment"> * @vision      ${state.motto}</span>
<span class="token comment"> */</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token imported">Passion</span><span class="token punctuation">,</span> <span class="token imported">Precision</span><span class="token punctuation">,</span> <span class="token imported">Mastery</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@amaan/core'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token variable">developer</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token property">name</span><span class="token operator">:</span> <span class="token string string-glow">"${state.developerName}"</span><span class="token punctuation">,</span>
  <span class="token property">portfolio</span><span class="token operator">:</span> <span class="token string string-glow">"${state.portfolio}"</span><span class="token punctuation">,</span>
  <span class="token property">role</span><span class="token operator">:</span> <span class="token string">"${state.role}"</span><span class="token punctuation">,</span>
  <span class="token property">technologies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">${formattedSkills}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">philosophy</span><span class="token operator">:</span> <span class="token string">"Clean architecture, boundless curiosity, zero compromise"</span><span class="token punctuation">,</span>
  <span class="token property">status</span><span class="token operator">:</span> <span class="token string">'Ready to build the extraordinary'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">async function</span> <span class="token function">executeExcellence</span><span class="token punctuation">(</span><span class="token parameter">engineer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token variable">challenge</span> <span class="token operator">=</span> <span class="token keyword">await</span> engineer<span class="token punctuation">.</span><span class="token function">analyzeChallenge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> engineer<span class="token punctuation">.</span><span class="token function">createMasterpiece</span><span class="token punctuation">(</span>challenge<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export default</span> executeExcellence<span class="token punctuation">(</span>developer<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`;

    codeContent.innerHTML = html;

    const lines = 24;
    let lineHtml = '';
    for (let i = 1; i <= lines; i++) {
      lineHtml += `<span>${i < 10 ? '0' + i : i}</span>`;
    }
    lineNumbers.innerHTML = lineHtml;
  }

  function switchTheme(selectedTheme) {
    if (!themePresets[selectedTheme]) return;
    state.theme = selectedTheme;
    document.body.className = `theme-${selectedTheme}`;
  }

  /* ----------------------------------------------------
   * Native Canvas Wallpaper Engine (4K UHD & 1080p FHD)
   * ---------------------------------------------------- */
  function generateWallpaper(targetRes = '4k') {
    return new Promise((resolve, reject) => {
      const is1080p = targetRes === '1080p';
      const W = is1080p ? 1920 : 3840;
      const H = is1080p ? 1080 : 2160;
      const scale = W / 3840;

      const canvas = document.getElementById('export-canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      const theme = themePresets[state.theme] || themePresets.cyber;

      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, W, H);

      // Subtle Grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = Math.max(1, 2 * scale);
      const gridSize = 120 * scale;
      for (let x = 0; x <= W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      function drawGlowBlob(cx, cy, radius, color) {
        const gradient = ctx.createRadialGradient(cx, cy, 30 * scale, cx, cy, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      drawGlowBlob(W * 0.2, H * 0.25, 900 * scale, theme.glow1);
      drawGlowBlob(W * 0.8, H * 0.75, 1000 * scale, theme.glow2);
      drawGlowBlob(W * 0.5, H * 0.5, 700 * scale, 'rgba(0, 245, 255, 0.08)');

      const winW = 2400 * scale;
      const winH = 1420 * scale;
      const winX = (W - winW) / 2;
      const winY = (H - winH) / 2 - 20 * scale;
      const radius = 32 * scale;

      function roundRect(x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 120 * scale;
      ctx.shadowOffsetY = 50 * scale;
      ctx.fillStyle = theme.windowBg;
      roundRect(winX, winY, winW, winH, radius);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.shadowColor = theme.glow1;
      ctx.shadowBlur = 60 * scale;
      ctx.shadowOffsetY = 0;
      ctx.strokeStyle = theme.borderColor;
      ctx.lineWidth = Math.max(1.5, 3 * scale);
      roundRect(winX, winY, winW, winH, radius);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      roundRect(winX, winY, winW, winH, radius);
      ctx.clip();
      ctx.fillStyle = theme.windowBg;
      ctx.fillRect(winX, winY, winW, winH);

      const headerH = 92 * scale;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(winX, winY, winW, headerH);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 2 * scale;
      ctx.beginPath();
      ctx.moveTo(winX, winY + headerH);
      ctx.lineTo(winX + winW, winY + headerH);
      ctx.stroke();

      const dotRadius = 14 * scale;
      const dotY = winY + headerH / 2;
      const dotStartX = winX + 44 * scale;
      const dotGap = 34 * scale;

      ctx.fillStyle = '#ff5f56';
      ctx.beginPath();
      ctx.arc(dotStartX, dotY, dotRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ffbd2e';
      ctx.beginPath();
      ctx.arc(dotStartX + dotGap, dotY, dotRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#27c93f';
      ctx.beginPath();
      ctx.arc(dotStartX + dotGap * 2, dotY, dotRadius, 0, Math.PI * 2);
      ctx.fill();

      const tabX = dotStartX + dotGap * 2 + 50 * scale;
      const tabY = winY + 16 * scale;
      const tabW = 340 * scale;
      const tabH = 60 * scale;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      roundRect(tabX, tabY, tabW, tabH, 12 * scale);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1.5 * scale;
      roundRect(tabX, tabY, tabW, tabH, 12 * scale);
      ctx.stroke();

      ctx.font = `bold ${Math.round(22 * scale)}px "Fira Code", monospace`;
      ctx.fillStyle = '#f7df1e';
      ctx.fillText('JS', tabX + 22 * scale, tabY + 38 * scale);
      ctx.fillStyle = '#ffffff';
      ctx.fillText('mohammad_amaan.js', tabX + 62 * scale, tabY + 38 * scale);

      ctx.fillStyle = theme.cyan;
      ctx.fillRect(tabX + tabW - 60 * scale, tabY + 16 * scale, 42 * scale, 26 * scale);
      ctx.fillStyle = '#05070d';
      ctx.font = `bold ${Math.round(15 * scale)}px "Outfit", sans-serif`;
      ctx.fillText(is1080p ? 'FHD' : '4K', tabX + tabW - 52 * scale, tabY + 34 * scale);

      ctx.font = `${Math.round(20 * scale)}px "Fira Code", monospace`;
      ctx.fillStyle = '#64748b';
      ctx.fillText('src  /  wallpapers  /  amaan.js', winX + winW - 460 * scale, winY + 54 * scale);

      const codeStartX = winX + 160 * scale;
      const lineNumX = winX + 60 * scale;
      let cursorY = winY + headerH + 74 * scale;
      const lineSpacing = 54 * scale;
      const fontSize = Math.round(32 * scale);

      ctx.font = `${fontSize}px "Fira Code", monospace`;

      const codeLines = [
        [{ text: '/**', color: theme.comment, style: 'italic' }],
        [
          { text: ' * @developer   ', color: theme.comment },
          { text: state.developerName, color: theme.cyan, bold: true, glow: true }
        ],
        [{ text: ` * @specialty   ${state.role}`, color: theme.comment }],
        [{ text: ` * @vision      ${state.motto}`, color: theme.comment }],
        [{ text: ' */', color: theme.comment, style: 'italic' }],
        [],
        [
          { text: 'import ', color: theme.purple, bold: true },
          { text: '{ ', color: '#94a3b8' },
          { text: 'Passion', color: theme.cyan },
          { text: ', ', color: '#94a3b8' },
          { text: 'Precision', color: theme.cyan },
          { text: ', ', color: '#94a3b8' },
          { text: 'Mastery', color: theme.cyan },
          { text: ' } ', color: '#94a3b8' },
          { text: 'from ', color: theme.purple, bold: true },
          { text: "'@amaan/core'", color: theme.emerald },
          { text: ';', color: '#94a3b8' }
        ],
        [],
        [
          { text: 'const ', color: theme.purple, bold: true },
          { text: 'developer ', color: '#f1f5f9' },
          { text: '= ', color: theme.coral },
          { text: '{', color: '#94a3b8' }
        ],
        [
          { text: '  name: ', color: '#38bdf8' },
          { text: `"${state.developerName}"`, color: theme.cyan, bold: true, glow: true },
          { text: ',', color: '#94a3b8' }
        ],
        [
          { text: '  portfolio: ', color: '#38bdf8' },
          { text: `"${state.portfolio}"`, color: theme.cyan, bold: true, glow: true },
          { text: ',', color: '#94a3b8' }
        ],
        [
          { text: '  role: ', color: '#38bdf8' },
          { text: `"${state.role}"`, color: theme.emerald },
          { text: ',', color: '#94a3b8' }
        ],
        [
          { text: '  technologies: [', color: '#38bdf8' },
          { text: state.skills.map(s => `'${s.trim()}'`).join(', '), color: theme.emerald },
          { text: '],', color: '#94a3b8' }
        ],
        [
          { text: '  philosophy: ', color: '#38bdf8' },
          { text: '"Clean architecture, boundless curiosity, zero compromise"', color: theme.emerald },
          { text: ',', color: '#94a3b8' }
        ],
        [
          { text: '  status: ', color: '#38bdf8' },
          { text: "'Ready to build the extraordinary'", color: theme.emerald }
        ],
        [{ text: '};', color: '#94a3b8' }],
        [],
        [
          { text: 'async function ', color: theme.purple, bold: true },
          { text: 'executeExcellence', color: theme.gold, bold: true },
          { text: '(engineer) {', color: '#f472b6' }
        ],
        [
          { text: '  while (', color: theme.purple, bold: true },
          { text: 'true', color: '#f59e0b' },
          { text: ') {', color: '#94a3b8' }
        ],
        [
          { text: '    const ', color: theme.purple, bold: true },
          { text: 'challenge = ', color: '#f1f5f9' },
          { text: 'await ', color: theme.purple, bold: true },
          { text: 'engineer.analyzeChallenge();', color: theme.cyan }
        ],
        [
          { text: '    await ', color: theme.purple, bold: true },
          { text: 'engineer.createMasterpiece(challenge);', color: theme.gold }
        ],
        [{ text: '  }', color: '#94a3b8' }],
        [{ text: '}', color: '#94a3b8' }],
        [],
        [
          { text: 'export default ', color: theme.purple, bold: true },
          { text: 'executeExcellence(developer);', color: theme.gold }
        ]
      ];

      let lineCounter = 1;
      for (const line of codeLines) {
        ctx.fillStyle = '#334155';
        ctx.font = `${Math.round(26 * scale)}px "Fira Code", monospace`;
        const numStr = lineCounter < 10 ? '0' + lineCounter : '' + lineCounter;
        ctx.fillText(numStr, lineNumX, cursorY);

        let currentX = codeStartX;
        for (const token of line) {
          ctx.fillStyle = token.color || theme.text;
          ctx.font = `${token.bold ? 'bold ' : ''}${token.style || ''} ${fontSize}px "Fira Code", monospace`;

          if (token.glow) {
            ctx.save();
            ctx.shadowColor = token.color;
            ctx.shadowBlur = 25 * scale;
            ctx.fillText(token.text, currentX, cursorY);
            ctx.restore();
          }

          ctx.fillText(token.text, currentX, cursorY);
          currentX += ctx.measureText(token.text).width;
        }

        cursorY += lineSpacing;
        lineCounter++;
      }

      const statusbarH = 68 * scale;
      const statusbarY = winY + winH - statusbarH;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(winX, statusbarY, winW, statusbarH);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
      ctx.lineWidth = 1.5 * scale;
      ctx.beginPath();
      ctx.moveTo(winX, statusbarY);
      ctx.lineTo(winX + winW, statusbarY);
      ctx.stroke();

      ctx.font = `${Math.round(22 * scale)}px "Fira Code", monospace`;
      ctx.fillStyle = '#64748b';
      ctx.fillText('⎇ main*    ⚡ 0 Errors, 0 Warnings', winX + 40 * scale, statusbarY + 42 * scale);
      ctx.fillText('UTF-8    JavaScript (ESNext)', winX + winW - 540 * scale, statusbarY + 42 * scale);

      ctx.fillStyle = theme.cyan;
      ctx.fillText(`${W} × ${H} ${is1080p ? 'FHD' : '4K UHD'}`, winX + winW - 270 * scale, statusbarY + 42 * scale);

      ctx.restore();

      ctx.font = `bold ${Math.round(22 * scale)}px "Outfit", sans-serif`;
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.fillText(`DESIGNED FOR MOHAMMAD AMAAN  •  AMAANDEV.ME  •  ${is1080p ? 'FULL-HD' : '4K ULTRA-HD'} DESKTOP WALLPAPER`, W / 2, H - 70 * scale);

      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1 * scale;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 620 * scale, H - 78 * scale);
      ctx.lineTo(W / 2 - 440 * scale, H - 78 * scale);
      ctx.moveTo(W / 2 + 440 * scale, H - 78 * scale);
      ctx.lineTo(W / 2 + 620 * scale, H - 78 * scale);
      ctx.stroke();
      ctx.textAlign = 'start';

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to generate image blob'));
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mohammad_amaan_${targetRes}_${state.theme}_wallpaper.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        resolve();
      }, 'image/png');
    });
  }

  /* ----------------------------------------------------
   * Universal Download Handler
   * ---------------------------------------------------- */
  async function downloadWallpaperItem(wp, res = null) {
    const chosenRes = res || (exportResSelect ? exportResSelect.value : '4k');

    showToast(`⚡ Starting 4K download for <strong>${wp.title}</strong>...`);

    if (wp.file) {
      // Direct high-res PNG download
      const a = document.createElement('a');
      a.href = wp.file;
      a.download = wp.file.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast(`✓ Downloaded <strong>${wp.title}</strong> (3840×2160 UHD)!`);
    } else {
      // Dynamic Canvas Render
      try {
        await generateWallpaper(chosenRes);
        showToast(`✓ Custom 4K Wallpaper downloaded successfully!`);
      } catch (err) {
        showToast(`⚠️ Failed to render wallpaper: ${err.message}`, 4000);
      }
    }
  }

  async function handleActiveDownload() {
    const activeWp = wallpapers[state.activeWallpaperIndex];
    const chosenRes = exportResSelect ? exportResSelect.value : '4k';
    const buttons = [btnDownload4k, btnDownloadTop, btnWindowDownload].filter(Boolean);

    buttons.forEach(b => {
      b.dataset.prevHtml = b.innerHTML;
      b.disabled = true;
      b.innerHTML = `<span>⚡ Downloading 4K...</span>`;
    });

    try {
      await downloadWallpaperItem(activeWp, chosenRes);
      buttons.forEach(b => {
        b.innerHTML = `<span>✓ Downloaded!</span>`;
      });
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        buttons.forEach(b => {
          if (b.dataset.prevHtml) b.innerHTML = b.dataset.prevHtml;
          b.disabled = false;
        });
      }, 2000);
    }
  }

  /* ----------------------------------------------------
   * Code Clipboard Copy
   * ---------------------------------------------------- */
  async function copyCodeToClipboard() {
    const rawCode = `/**
 * @developer   ${state.developerName}
 * @portfolio   https://${state.portfolio}
 * @specialty   ${state.role}
 * @vision      ${state.motto}
 */

import { Passion, Precision, Mastery } from '@amaan/core';

const developer = {
  name: "${state.developerName}",
  portfolio: "${state.portfolio}",
  role: "${state.role}",
  technologies: [${state.skills.map(s => `'${s.trim()}'`).join(', ')}],
  philosophy: "Clean architecture, boundless curiosity, zero compromise",
  status: 'Ready to build the extraordinary'
};

async function executeExcellence(engineer) {
  while (true) {
    const challenge = await engineer.analyzeChallenge();
    await engineer.createMasterpiece(challenge);
  }
}

export default executeExcellence(developer);`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(rawCode);
      } else {
        const ta = document.createElement('textarea');
        ta.value = rawCode;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      showToast('✓ JavaScript code copied to clipboard!');
      if (btnCopyCode) {
        const orig = btnCopyCode.innerHTML;
        btnCopyCode.innerHTML = '<span>✓ Copied!</span>';
        setTimeout(() => { btnCopyCode.innerHTML = orig; }, 1800);
      }
    } catch (err) {
      showToast('⚠️ Could not copy code.');
    }
  }

  /* ----------------------------------------------------
   * UI Controls, Fullscreen & Modals Setup
   * ---------------------------------------------------- */
  function toggleCleanMode() {
    const isClean = document.body.classList.toggle('clean-wallpaper');
    if (isClean) {
      controlHud.classList.add('minimized');
      btnRestoreHud.classList.remove('hidden');
      showToast('Clean Screensaver view activated. Press <strong>H</strong> to restore controls.');
    } else {
      controlHud.classList.remove('minimized');
      btnRestoreHud.classList.add('hidden');
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function setupUI() {
    // Mode Toggle (Art Mode ⇋ Code Mode)
    if (btnToggleMode) {
      btnToggleMode.addEventListener('click', toggleMode);
    }

    // Previous / Next Wallpaper Arrows
    if (btnPrevWallpaper) {
      btnPrevWallpaper.addEventListener('click', () => {
        setActiveWallpaper(state.activeWallpaperIndex - 1);
      });
    }
    if (btnNextWallpaper) {
      btnNextWallpaper.addEventListener('click', () => {
        setActiveWallpaper(state.activeWallpaperIndex + 1);
      });
    }

    // Hide / Minimize HUD
    if (btnHideHud) btnHideHud.addEventListener('click', toggleCleanMode);
    if (btnTopClean) btnTopClean.addEventListener('click', toggleCleanMode);

    // Restore HUD
    if (btnRestoreHud) {
      btnRestoreHud.addEventListener('click', () => {
        document.body.classList.remove('clean-wallpaper');
        controlHud.classList.remove('minimized');
        btnRestoreHud.classList.add('hidden');
      });
    }

    // Fullscreen Toggles
    if (btnTopFullscreen) {
      btnTopFullscreen.addEventListener('click', toggleFullscreen);
    }

    // Download triggers
    if (btnDownload4k) btnDownload4k.addEventListener('click', handleActiveDownload);
    if (btnDownloadTop) btnDownloadTop.addEventListener('click', handleActiveDownload);
    if (btnWindowDownload) btnWindowDownload.addEventListener('click', handleActiveDownload);

    // Code Copy
    if (btnCopyCode) btnCopyCode.addEventListener('click', copyCodeToClipboard);

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        setActiveWallpaper(state.activeWallpaperIndex - 1);
      } else if (e.key === 'ArrowRight') {
        setActiveWallpaper(state.activeWallpaperIndex + 1);
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMode();
      } else if (e.key === 'h' || e.key === 'H') {
        toggleCleanMode();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'd' || e.key === 'D') {
        handleActiveDownload();
      } else if (e.key === 'c' || e.key === 'C') {
        copyCodeToClipboard();
      } else if (e.key === 'Escape') {
        modalEditor.classList.add('hidden');
        modalGallery.classList.add('hidden');
      }
    });

    // Custom Code Editor Modal
    const openEditor = () => {
      inputDevName.value = state.developerName;
      inputRole.value = state.role;
      inputPortfolio.value = state.portfolio;
      inputSkills.value = state.skills.join(', ');
      inputMotto.value = state.motto;
      modalEditor.classList.remove('hidden');
    };

    if (btnOpenEditor) btnOpenEditor.addEventListener('click', openEditor);
    if (btnCloseEditor) {
      btnCloseEditor.addEventListener('click', () => {
        modalEditor.classList.add('hidden');
      });
    }

    if (btnApplyCode) {
      btnApplyCode.addEventListener('click', () => {
        state.developerName = inputDevName.value.trim() || 'Mohammad amaan';
        state.role = inputRole.value.trim() || 'Software Engineer';
        state.portfolio = inputPortfolio.value.trim() || 'amaandev.me';
        state.skills = inputSkills.value.split(',').map(s => s.trim()).filter(Boolean);
        state.motto = inputMotto.value.trim() || 'Building the future';
        renderCodeHtml();
        modalEditor.classList.add('hidden');
        showToast('✓ Custom wallpaper code updated!');
      });
    }

    if (btnResetCode) {
      btnResetCode.addEventListener('click', () => {
        state.developerName = 'Mohammad amaan';
        state.role = 'Full-Stack Architect & Visionary';
        state.portfolio = 'amaandev.me';
        state.skills = ['JavaScript', 'TypeScript', 'Node.js', 'React', 'AI Systems'];
        state.motto = 'Crafting next-generation digital experiences';
        inputDevName.value = state.developerName;
        inputRole.value = state.role;
        inputPortfolio.value = state.portfolio;
        inputSkills.value = state.skills.join(', ');
        inputMotto.value = state.motto;
        renderCodeHtml();
        modalEditor.classList.add('hidden');
        showToast('✓ Reset to Mohammad Amaan default code.');
      });
    }

    // Gallery Modal
    const openGallery = () => {
      renderGallery('all');
      modalGallery.classList.remove('hidden');
    };

    if (btnOpenGallery) btnOpenGallery.addEventListener('click', openGallery);
    if (btnTopGallery) btnTopGallery.addEventListener('click', openGallery);

    if (btnCloseGallery) {
      btnCloseGallery.addEventListener('click', () => {
        modalGallery.classList.add('hidden');
      });
    }

    if (btnCloseGalleryFooter) {
      btnCloseGalleryFooter.addEventListener('click', () => {
        modalGallery.classList.add('hidden');
      });
    }

    // Close modals on outside backdrop click
    [modalEditor, modalGallery].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.add('hidden');
          }
        });
      }
    });
  }

  /* ----------------------------------------------------
   * Initialization
   * ---------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initAmbientCanvas();
    renderCodeHtml();
    renderWallpaperPillStrip();
    setupGalleryFilters();
    setupUI();
    setActiveWallpaper(0); // Start with Anime Cyber City
  });
})();
