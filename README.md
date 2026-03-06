# 🇮🇳 Operation: Tribute - Indian Army Digital Memorial

An interactive digital memorial honoring the brave soldiers of India. This is a non-official tribute website created to educate and inspire through the stories of valor, sacrifice, and courage.

![Operation: Tribute](https://images.unsplash.com/photo-1544758716-d8c97c8d9b73?w=1200&h=400&fit=crop)

## 🌟 Features

### Cinematic Landing Page
- Atmospheric intro animation with "Freedom is not free" reveal
- Ambient wind sounds and starry background
- Smooth entrance animation

### Timeline of Courage
- Interactive timeline of major Indian Army operations (1947-48 to 2019)
- Detailed descriptions of each war and conflict
- Key battles and outcomes for each period

### Stories of Valor
- Individual hero cards showcasing Param Vir Chakra awardees
- Detailed stories of extraordinary courage
- Medal displays and personal quotes

### The Last Letter
- Emotional centerpiece with typewriter-style letter animation
- Audio narration option
- Hero reveal with full tribute information

### Memorial Wall
- Search and filter by name, regiment, or operation
- Leave tribute messages
- Light virtual candles
- Candle counter with community total

### Salute Ceremony
- Interactive salute button with animation
- Total salute counter
- "JAI HIND" reveal animation
- Candle and heart particle effects

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter & Playfair Display (via next/font)

## 📁 Project Structure

```
operation-tribute/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── timeline/
│   │   └── page.tsx          # Timeline page
│   ├── stories/
│   │   ├── page.tsx          # Stories listing
│   │   └── [id]/
│   │       └── page.tsx      # Individual story
│   ├── last-letter/
│   │   └── page.tsx          # Last letter page
│   ├── memorial/
│   │   └── page.tsx          # Memorial wall
│   └── salute/
│       └── page.tsx          # Salute ceremony
├── components/
│   ├── Navbar.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   ├── HeroIntro.tsx         # Hero section
│   ├── Timeline.tsx          # Timeline component
│   └── StoryCard.tsx         # Story card
├── data/
│   ├── wars.ts               # Wars data
│   └── bravehearts.ts        # Heroes data
└── public/
    └── ...                   # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd operation-tribute
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Principles

- **Respectful & Dignified:** Every design choice honors the sacrifice of soldiers
- **Immersive Experience:** Cinematic animations create emotional connection
- **Accessible:** Clear navigation and readable content
- **Responsive:** Works beautifully on all devices

## 📜 Disclaimer

This is a **non-official** digital memorial created to honor the brave soldiers of India. It is **not affiliated** with the Government of India, Ministry of Defence, or Indian Army.

All stories and information are compiled from publicly available sources. If you have any concerns or corrections, please open an issue.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is for educational and tribute purposes.

## 🇮🇳 JAI HIND

> "The safety, honour and welfare of your country come first, always and every time."  
> — Indian Army Motto

---

**Made with ❤️ for the Indian Army**

