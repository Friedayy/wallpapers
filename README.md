# ⚡ 4K Wallpaper Studio — Mohammad Amaan

Ultra-High-Definition (3840 × 2160 UHD) desktop wallpaper studio and interactive web showcase created for **Mohammad amaan**. Features an expansive collection across **Anime Aesthetic**, **Futuristic & Sci-Fi**, **Nature & Aurora Landscapes**, **Minimalist Zen**, and **Dark Coding IDE Studio**, complete with portfolio integration ([amaandev.me](https://amaandev.me)).

---

## 🎨 Complete 4K Wallpaper Collection (3840 × 2160 UHD)

Every wallpaper is rendered in native **3840 × 2160 Ultra-HD resolution** (16:9 desktop aspect ratio):

| Category | Wallpaper Name | File Name | Resolution | File Size |
| :--- | :--- | :--- | :--- | :--- |
| **🌸 Anime** | **Cyber City Midnight Rain** | `mohammad_amaan_anime_cyber_city.png` | 3840 × 2160 | 9.3 MB |
| **🌸 Anime** | **Twilight Blossom & Torii Gate** | `mohammad_amaan_anime_sunset.png` | 3840 × 2160 | 6.8 MB |
| **🚀 Futuristic** | **Neo-Tokyo 2099 Megacity** | `mohammad_amaan_futuristic_city.png` | 3840 × 2160 | 8.5 MB |
| **🚀 Futuristic** | **Cyber Circuit Neon Studio** | `mohammad_amaan_cyber_4k.png` | 3840 × 2160 | 5.7 MB |
| **🚀 Futuristic** | **Obsidian Vector Neon Terminal** | `mohammad_amaan_vector_cyber_4k.png` | 3840 × 2160 | 587 KB |
| **🌲 Nature** | **Emerald Aurora & Alpine Lake** | `mohammad_amaan_nature_aurora.png` | 3840 × 2160 | 8.7 MB |
| **⚫ Minimalist** | **Japanese Zen Solitude** | `mohammad_amaan_minimal_zen.png` | 3840 × 2160 | 2.9 MB |
| **⚫ Minimalist** | **Obsidian Stealth Monochrome** | `mohammad_amaan_4k_minimal_wallpaper.png` | 3840 × 2160 | 1.7 MB |
| **💻 Coding** | **Frosted Glass IDE Studio** | `mohammad_amaan_glass_4k.png` | 3840 × 2160 | 4.1 MB |
| **💻 Coding** | **Phosphor Matrix Dark Terminal** | `mohammad_amaan_matrix_4k.png` | 3840 × 2160 | 515 KB |
| **💻 Coding** | **Live Customized Vector 4K** | *(Live canvas export)* | 3840 × 2160 | Dynamic |

---

## 🚀 Interactive Web Studio Features (`index.html`)

- **Interactive Stage Background Switcher**: Click any wallpaper or use the arrow controls (<kbd>←</kbd> / <kbd>→</kbd>) to set it as the live desktop stage background with smooth crossfades.
- **Dual Display Modes**:
  - **Developer IDE Mode**: Floating frosted-glass code window hovering over the wallpaper with syntax highlighting.
  - **Pure Artwork Mode (<kbd>M</kbd>)**: Minimalist desktop aesthetic with a live digital clock, date, and wallpaper signature widget.
- **Category Navigation**: Instant filtering across *All*, *Anime*, *Futuristic*, *Nature*, *Minimalist*, and *Coding*.
- **High-Visibility Download CTAs**:
  - Top navigation bar glowing 4K download button.
  - Bottom floating control dock download button.
  - Window titlebar quick export button.
- **Filterable 4K Gallery Modal**: Browse all 10+ wallpapers with live stage preview and 1-click downloads.
- **Live Code Customizer**: Personalize name, role, portfolio domain, tech stack, and motto for custom 4K vector renders.
- **Screensaver / Clean View (<kbd>H</kbd>)**: Hide all UI overlays for an uninterrupted desktop experience.
- **Keyboard Shortcuts**:
  - <kbd>←</kbd> / <kbd>→</kbd>: Previous / Next wallpaper
  - <kbd>M</kbd>: Toggle Art Mode ⇋ Developer IDE Mode
  - <kbd>D</kbd>: Instant 4K download of active wallpaper
  - <kbd>C</kbd>: Copy code to clipboard
  - <kbd>H</kbd>: Toggle clean screensaver view
  - <kbd>F</kbd>: Toggle fullscreen
  - <kbd>Esc</kbd>: Close modals

---

## 🌐 Deploy to the Web

This studio is 100% static (HTML5, CSS3, JavaScript) and requires zero build tools.

### Option 1: GitHub Pages (Recommended)
```bash
git init
git add .
git commit -m "feat: 4K multi-category wallpaper studio for Mohammad Amaan"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
In GitHub repo: **Settings** ➔ **Pages** ➔ Branch: **main** / **root** ➔ **Save**.

### Option 2: Vercel
```bash
npx vercel deploy --prod
```

### Option 3: Netlify
```bash
npx netlify deploy --prod --dir=.
```

---

## 🖥️ How to Set as Desktop Wallpaper on Linux

### GNOME / Ubuntu / Fedora:
```bash
# Example: Anime Cyber City
gsettings set org.gnome.desktop.background picture-uri "file:///home/amaan/Desktop/my creation/mohammad_amaan_anime_cyber_city.png"
gsettings set org.gnome.desktop.background picture-uri-dark "file:///home/amaan/Desktop/my creation/mohammad_amaan_anime_cyber_city.png"
```

### KDE Plasma:
Right-click on desktop ➔ **Configure Desktop and Wallpaper** ➔ **Add Image...** ➔ Select any 4K `.png`.

### Feh (i3 / bspwm / AwesomeWM / Openbox):
```bash
feh --bg-fill "/home/amaan/Desktop/my creation/mohammad_amaan_nature_aurora.png"
```

### Hyprland (`hyprpaper`):
```ini
# in ~/.config/hypr/hyprpaper.conf
preload = /home/amaan/Desktop/my creation/mohammad_amaan_minimal_zen.png
wallpaper = ,/home/amaan/Desktop/my creation/mohammad_amaan_minimal_zen.png
```

---

Crafted with precision for **Mohammad amaan**.
