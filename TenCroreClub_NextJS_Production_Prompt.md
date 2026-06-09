# Ten Crore Club — Production Next.js Website
## Complete Build Specification & AI Coding Prompt

> **How to use this document:** Feed this entire file to Claude Code, Cursor, or any AI coding assistant. It contains every decision already made — colors, fonts, animations, component structure, calculator formulas, page layouts, and compliance requirements. Build in the order listed. Do not deviate from the color system or brand voice.

---

## 1. Project Overview

**Brand:** Ten Crore Club  
**Tagline:** "Let Your Investments Fly Higher"  
**Type:** Financial advisory / wealth community website  
**Audience:** Indian professionals aged 30–50, income ₹25L+, seeking ₹10 Crore wealth goal  
**Regulatory:** AMFI Registered Mutual Fund Distributor — compliance disclaimers required on every page  
**Core Emotion:** FOMO → Urgency → Trust → Action  

**Total Pages:** 11 (10 static + 1 dynamic blog route)  
```
/ → Home
/about → About
/framework → The Ten Crore Method™
/services → Services
/calculators → Calculators (4 tools)
/community → The ₹10 Crore Circle
/blog → Blog listing
/blog/[slug] → Blog post (dynamic)
/stories → Success Stories
/book → Book Consultation
/contact → Contact
```

---

## 2. Aesthetic Direction

**Theme:** Dark luxury financial — black canvas, crimson accents, metallic gold  
**Feel:** Like a private wealth club membership, not a mutual fund distributor  
**Inspiration:** Bloomberg Terminal meets luxury private banking meets Indian ambition  
**One thing visitors remember:** The Delay Cost Calculator — it shows them exactly what procrastination is costing them in rupees, updating in real time  

**DO NOT:** Use purple gradients, generic fintech blue, or SaaS-style design. This is a premium wealth brand.  
**DO:** Use dramatic contrast, gold on black, serif headings, and numbers that count up as you scroll.

---

## 3. Tech Stack

```bash
# Initialize
npx create-next-app@latest ten-crore-club \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# shadcn/ui
npx shadcn@latest init

# Core dependencies
npm install framer-motion@11 \
  @radix-ui/react-dialog \
  @radix-ui/react-accordion \
  @radix-ui/react-tabs \
  @radix-ui/react-slider \
  react-hook-form \
  @hookform/resolvers \
  zod \
  recharts \
  lucide-react \
  next-themes \
  class-variance-authority \
  clsx \
  tailwind-merge \
  @vercel/analytics \
  @vercel/speed-insights \
  sonner \
  react-number-format \
  date-fns \
  sharp

# Dev dependencies
npm install -D @types/node prettier prettier-plugin-tailwindcss
```

**Versions:**
- Next.js: 15.x (App Router, React 19)
- TypeScript: 5.x (strict mode)
- Tailwind CSS: 3.4.x
- Framer Motion: 11.x
- shadcn/ui: latest (New York style)
- React Hook Form: 7.x
- Recharts: 2.x

---

## 4. Color System

> These hex values were programmatically extracted from the official logo at 5000×5000px resolution. Use exactly as specified.

```css
/* globals.css — :root */
:root {
  /* Brand Blacks */
  --tc-black:           #000000;
  --tc-black-soft:      #0A0A0A;
  --tc-black-card:      #111111;
  --tc-black-elevated:  #1A1A1A;
  --tc-black-border:    #2A2A2A;

  /* Brand Reds — 4 stops from shadow to vivid */
  --tc-red-shadow:      #8B0000;
  --tc-red-deep:        #A10601;    /* Primary red — banners, CTAs */
  --tc-red-mid:         #C11409;    /* Hover state, highlights */
  --tc-red-vivid:       #CD140A;    /* Peak red — most dominant pixel */

  /* Brand Golds — 6 stops from shadow to cream */
  --tc-gold-shadow:     #5A2619;    /* Deep shadows in gold areas */
  --tc-gold-antique:    #A76D1F;    /* Eagle body, decorative elements */
  --tc-gold-warm:       #B47C32;    /* Average metallic tone */
  --tc-gold-rich:       #D5A04A;    /* PRIMARY TEXT GOLD — headings */
  --tc-gold-light:      #E1C18D;    /* Subheadings, secondary text */
  --tc-gold-cream:      #FAF0DC;    /* Peak highlight, body text on dark */

  /* Semantic Aliases */
  --brand-bg:           var(--tc-black);
  --brand-surface:      var(--tc-black-card);
  --brand-elevated:     var(--tc-black-elevated);
  --brand-border:       var(--tc-black-border);
  --brand-accent:       var(--tc-red-deep);
  --brand-accent-hover: var(--tc-red-mid);
  --brand-gold:         var(--tc-gold-rich);
  --brand-gold-muted:   var(--tc-gold-light);
  --brand-text:         var(--tc-gold-cream);
  --brand-text-muted:   var(--tc-gold-light);
}
```

**Tailwind config extension:**
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        black:       '#000000',
        'black-card':'#111111',
        'black-el':  '#1A1A1A',
        border:      '#2A2A2A',
        'red-deep':  '#A10601',
        'red-mid':   '#C11409',
        'red-vivid': '#CD140A',
        'gold-rich': '#D5A04A',
        'gold-light':'#E1C18D',
        cream:       '#FAF0DC',
      }
    }
  }
}
```

---

## 5. Typography System

```css
/* Font imports in layout.tsx */
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

**Type Scale:**
```css
/* Display — Cormorant Garamond (luxury serif for headlines) */
.text-display-2xl { font-family: var(--font-display); font-size: clamp(3rem, 8vw, 6rem); font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; }
.text-display-xl  { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 700; line-height: 1.1; }
.text-display-lg  { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; line-height: 1.15; }
.text-display-md  { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2.25rem); font-weight: 600; line-height: 1.2; }

/* Body — DM Sans */
.text-body-xl  { font-family: var(--font-body); font-size: 1.25rem; line-height: 1.7; }
.text-body-lg  { font-family: var(--font-body); font-size: 1.125rem; line-height: 1.7; }
.text-body-md  { font-family: var(--font-body); font-size: 1rem; line-height: 1.7; }
.text-body-sm  { font-family: var(--font-body); font-size: 0.875rem; line-height: 1.6; }

/* Numbers — JetBrains Mono (for all financial figures) */
.text-number { font-family: var(--font-mono); font-feature-settings: 'tnum' on; }
```

**Rule:** All ₹ amounts, percentages, years, and calculator outputs use `font-mono`. All section headlines use `font-display`. Navigation, body, and UI text use `font-body`.

---

## 6. Animation System

### 6.1 Framer Motion Variants Library

Create this file at `src/lib/animations.ts`:

```typescript
import { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const goldShimmer: Variants = {
  hidden: { backgroundPosition: '-200% center' },
  visible: { backgroundPosition: '200% center', transition: { duration: 3, repeat: Infinity, ease: 'linear' } }
}

export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
}

export const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
}
```

### 6.2 Scroll Animation Hook

Create `src/hooks/useScrollAnimation.ts`:
```typescript
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
```

### 6.3 Number Counter Hook

Create `src/hooks/useCountUp.ts`:
```typescript
import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isActive) return
    const start = performance.now()
    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, isActive])
  return count
}
```

### 6.4 Animation Rules
- **Page load:** Stagger hero elements with 120ms delay between each
- **Scroll triggers:** `useInView` with `once: true` and `amount: 0.15`
- **Counters:** Activate when stat section enters viewport
- **Hover:** `whileHover={{ scale: 1.02 }}` on cards, `whileHover={{ scale: 1.05 }}` on CTAs
- **Gold text shimmer:** CSS `background-clip: text` with animated gradient on key headlines
- **No animation on `prefers-reduced-motion`:** Wrap all motion in media query check

---

## 7. Folder Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, theme, analytics
│   ├── page.tsx                # Home (/)
│   ├── about/page.tsx
│   ├── framework/page.tsx
│   ├── services/page.tsx
│   ├── calculators/page.tsx
│   ├── community/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post (dynamic)
│   ├── stories/page.tsx
│   ├── book/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ComplianceFooter.tsx    # Renders on EVERY page
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── RegretSection.tsx
│   │   ├── DelayCalculatorSection.tsx
│   │   ├── IndiaOpportunitySection.tsx
│   │   ├── MethodSection.tsx
│   │   ├── MemberStoriesSection.tsx
│   │   ├── CommunityPreviewSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── calculators/
│   │   ├── SIPGrowthCalculator.tsx
│   │   ├── SWPCalculator.tsx
│   │   ├── GoalReverseCalculator.tsx
│   │   ├── DelayCalculator.tsx
│   │   └── CalculatorChart.tsx
│   ├── shared/
│   │   ├── GoldHeading.tsx         # Shimmer gold text headline
│   │   ├── StatCounter.tsx         # Animated number counter
│   │   ├── SectionWrapper.tsx      # Scroll-triggered fade-up wrapper
│   │   ├── CTAButton.tsx           # Primary CTA (red + gold)
│   │   ├── GoldDivider.tsx         # Decorative gold line
│   │   ├── TrustStrip.tsx          # AMFI · SEBI · Members strip
│   │   ├── ComplianceBadge.tsx
│   │   └── RupeeDisplay.tsx        # Formatted ₹ numbers
│   └── ui/                         # shadcn generated components
├── lib/
│   ├── animations.ts
│   ├── calculators.ts              # All financial math functions
│   ├── formatters.ts               # Currency, percentage formatters
│   └── utils.ts                    # cn() and helpers
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useCountUp.ts
│   └── useCalculator.ts
├── data/
│   ├── blog-posts.ts               # Static blog post data
│   ├── services.ts
│   └── success-stories.ts
└── types/
    └── index.ts
```

---

## 8. Shared Components

### 8.1 Root Layout (`src/app/layout.tsx`)

```typescript
// Applies: fonts, dark theme (force-dark), analytics, metadata defaults
// Always wrap children with: <ThemeProvider forcedTheme="dark">
// Include: <Navbar/>, <main>{children}</main>, <ComplianceFooter/>, <Footer/>
// Analytics: <Analytics/> and <SpeedInsights/> from @vercel/
// Toast: <Toaster richColors position="bottom-right"/> from sonner
```

### 8.2 Navbar (`src/components/layout/Navbar.tsx`)

**Design:**
- Fixed top, `backdrop-blur-md`, background `rgba(0,0,0,0.8)` with 1px gold-tinted bottom border
- Logo: `<Image>` of TenCrore_Club_Logo_Transparent_Final.png, height 48px
- Nav links: DM Sans, 14px, color `--tc-gold-light`, hover `--tc-gold-rich`
- Active route: gold underline (2px, animated with layoutId)
- CTA button: "Book Free Call" → filled red (`--tc-red-deep`) button, gold text
- Mobile: hamburger → Sheet (shadcn), full-screen dark drawer
- Scroll behavior: adds `shadow-lg` and increases blur when scrolled > 80px

**Links:**
```
About | Framework | Services | Calculators | Community | Blog | Stories | [Book Free Call CTA]
```

### 8.3 Footer

**Design:** Black background, 3-column grid  
**Col 1:** Logo + tagline + social links  
**Col 2:** Quick links (all pages)  
**Col 3:** Contact + address  
**Bottom bar:** Copyright + AMFI ARN number + "SEBI Compliant"

### 8.4 ComplianceFooter (renders on EVERY page, above Footer)

```typescript
// Fixed compliance text — do NOT omit or modify
const COMPLIANCE_TEXT = `Mutual fund investments are subject to market risks. 
Please read all scheme-related documents carefully before investing. 
Past performance is not indicative of future results. 
Ten Crore Club is an AMFI-registered Mutual Fund Distributor. 
All content on this website is for educational purposes only and does not 
constitute financial advice. Returns mentioned are indicative and based on 
historical data — actual returns may vary.`
```

**Design:** Small text, muted gold, 1px top border, collapsible on mobile via Accordion

### 8.5 GoldHeading Component

```typescript
// Usage: <GoldHeading size="xl">Build ₹10 Crore</GoldHeading>
// Renders: Cormorant Garamond, animated gold shimmer gradient
// CSS: background: linear-gradient(90deg, #A76D1F, #D5A04A, #FAF0DC, #D5A04A, #A76D1F)
//      background-size: 200% auto; animation: shimmer 4s linear infinite;
//      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
```

### 8.6 StatCounter Component

```typescript
interface StatCounterProps {
  value: number
  prefix?: string   // e.g. "₹"
  suffix?: string   // e.g. "Cr" | "+" | "%"
  label: string
  duration?: number
}
// Activates useCountUp when component enters viewport via useInView
// Renders: large mono number + DM Sans label below
```

### 8.7 CTAButton Component

```typescript
// variant: 'primary' | 'secondary' | 'ghost'
// primary:   bg-[#A10601] text-[#FAF0DC] border-[#CD140A] hover:bg-[#C11409]
// secondary: bg-transparent border-[#D5A04A] text-[#D5A04A] hover:bg-[#D5A04A]/10
// ghost:     text-[#E1C18D] underline-offset-4 hover:text-[#FAF0DC]
// All: Framer Motion whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
// Icon support: optional arrow icon (Lucide ArrowRight, animated right on hover)
```

### 8.8 TrustStrip Component

```typescript
// Items: ['AMFI Registered', 'SEBI Compliant', '340+ Active Members', '₹4.2 Cr Added Last Month']
// Design: horizontal flex, separator dots, small text, gold color
// Animation: fade in staggered
```

---

## 9. Page Specifications

---

### PAGE 1: Home (`/`)

**This is the most important page. Allocate the most effort here.**

#### Section 1: Hero

**Layout:** Full viewport height, centered content, background black  
**Background:** Subtle radial gradient `radial-gradient(ellipse at center top, rgba(161,6,1,0.12) 0%, transparent 60%)` + static noise texture overlay at 3% opacity  

**Content (left-aligned on desktop, centered on mobile):**
```
Eyebrow:  [Trust badge] "Private Wealth Community · AMFI Registered · Est. 2024"
H1:       "While you're thinking about it,
           your peers are already building it."
Sub:      "Ten Crore Club exists for one reason — to make sure you are not 
           the only person in your circle who didn't build serious wealth."
CTAs:     [Calculate My ₹10 Crore Plan]  [Book a Free Strategy Call]
Below:    [TrustStrip: AMFI · SEBI · 340+ Investors · ₹4.2 Cr added last month]
```

**Right side (desktop):** Animated stats panel  
```
Stat 1: [counter] 340+ Active Members
Stat 2: [counter] ₹4.2 Crore Added This Month
Stat 3: [counter] 14-16% Historical CAGR
Stat 4: [counter] 4.2 Year Average Portfolio Age
```

**Animations:**
- H1: `fadeUp` with delay 0ms
- Sub: `fadeUp` with delay 150ms
- CTAs: `fadeUp` with delay 300ms
- TrustStrip: `fadeUp` with delay 450ms
- Stats: stagger in from right, counters activate on mount
- Background gradient: subtle pulse animation on the red glow (4s loop, 0.12 → 0.2 → 0.12 opacity)

**shadcn:** Badge (eyebrow), Button (CTAs)

---

#### Section 2: The Regret Section (FOMO Core)

**Background:** Slight elevation, `--tc-black-card`  
**Max-width:** 900px centered  

**Content:**
```
Headline: "The most expensive decision you'll ever make 
           is the one you keep postponing."

Story block (large serif italic):
"Imagine it's 2040. You're 55. Your colleague Vikram — same salary, 
same city, same opportunities — just hit ₹10 Crore. He started a 
₹20,000 SIP in 2025. You didn't."

"Not because you couldn't. Because you were going to 
'start next month.'"

Callout box (bordered gold, dark bg):
"The difference between you and Vikram isn't intelligence.
It isn't income. It isn't luck. It's one decision. Made 15 years earlier."
```

**Animations:**
- Story text: reveal line-by-line with `useInView` + `staggerContainer`  
- Callout box: `scaleIn` with golden border glow pulse on entry

---

#### Section 3: Delay Cost Visualizer (Most Powerful Section)

**Background:** Black, full-width section  
**This section should feel like a product, not a section.**

**Layout:** Split — left input controls, right real-time result  

**Interactive inputs (shadcn Slider + Input):**
```
Monthly SIP Amount: ₹5,000 — ₹1,00,000  (Slider + number input)
Investment Period:  5 — 30 years         (Slider)
Expected Return:    8% — 18%             (Slider)
```

**Real-time output (updates as sliders move):**
```
[If you start TODAY]
Future Value: ₹[X]     (animated counter, large gold mono)
Total Invested: ₹[X]   (smaller)
Wealth Multiple: [X]x  (gold badge)

[If you wait ONE year]  
Future Value: ₹[Y]     (dimmer color, slightly smaller)
You lose: ₹[X-Y]       (RED, large, pulsing border)
```

**Callout beneath:**
```
"₹[calculated amount] — That's [contextual message].
Gone. Because of one year."
```
Context messages (dynamic based on delay cost amount):
- < ₹5L: "a premium car downpayment"
- ₹5-15L: "your child's complete school education"  
- ₹15-30L: "a foreign holiday every year for a decade"
- > ₹30L: "a flat in a tier-2 city"

**Chart:** Area chart (Recharts) showing two overlapping areas:  
- Red area: "Start today" compound growth curve  
- Gray area: "Start next year" curve  
- The gap between them is highlighted in a pulsing red fill

**Animations:**
- Numbers: real-time update on slider change (smooth transition with `animate` from framer-motion)
- Delay cost: font-size pulse animation when value updates
- Chart: animated path drawing on first view (`strokeDasharray` technique)

**Bottom CTA:** "Your situation is more complex. Let's build it properly. [Book Free Call →]"

---

#### Section 4: India Opportunity

**Background:** Full-bleed with decorative map of India outline (SVG, very subtle, gold at 5% opacity)  

**Content:**
```
Eyebrow: "The Macro Context"
H2: "You are living in the greatest wealth 
     creation window in Indian history."
```

**Stats grid (2×2 on desktop, 1 column mobile):**
```
[counter] 80,000+   Sensex in 2024 (from 1,000 in 1990)
[counter] 3,00,000+ Projected Sensex by 2040
[counter] 14-16%    Historical 15-year SIP CAGR
[counter] 2x        India's middle class by 2035
```

**Timeline (horizontal on desktop, vertical on mobile):**
```
1990: Sensex 1,000 → 2003: Bull run begins → 2008: Crash + recovery → 
2020: COVID crash → 2021: All-time high → 2024: 80,000+ → 2040: 3,00,000+?
```

**Callout (most impactful quote box):**
```
"Your grandfather missed the 1990s tech boom.
Your father missed the 2003–2008 bull run.
You are standing at the start of India's 
biggest compounding decade.
Don't miss this one."
```

**Animations:**
- Counters: scroll-triggered, easeOutQuart
- Timeline: items fade in left-to-right with stagger
- Callout: `scaleIn` + continuous gold border shimmer animation

---

#### Section 5: The Ten Crore Method™

**Background:** `--tc-black-elevated`, subtle diagonal texture  
**Layout:** Title + intro, then 5 pillars in vertical accordion (mobile) or alternating left-right layout (desktop)

**Intro:**
```
"Not a product. A proven system."
"Most investors fail not because of bad funds — but because they have no system."
```

**5 Pillars (with icons from Lucide):**
```
01 | [TrendingUp icon]    | Income Expansion
                          | "Find your true investable surplus. Most people 
                             underestimate how much they can invest by 30–40%."

02 | [Repeat icon]        | SIP Discipline  
                          | "Automated, consistent, emotionless. Your SIP runs 
                             whether markets are up 20% or down 30%."

03 | [PieChart icon]      | Smart Allocation
                          | "Right funds. Right mix. Equity + debt + emergency 
                             buffer tuned to your age, income, and goal."

04 | [Clock icon]         | Compounding Time
                          | "10, 15, 20-year horizons. The longer you hold, the 
                             more time does the heavy lifting."

05 | [Brain icon]         | Behavioral Coaching
                          | "The biggest threat to your wealth is not a market 
                             crash. It's you."
```

**Visual below pillars:** Wealth milestone chart  
```
₹15,000/month SIP at 12% annualised returns:
Year 5:  ₹12 Lakh
Year 10: ₹35 Lakh  
Year 15: ₹1 Crore
Year 20: ₹2.5 Crore
Year 25: ₹5.8 Crore
Year 30: ₹10.7 Crore  ← "Your Target"
```
Render as: horizontal bar chart (Recharts) with the 10Cr bar highlighted in gold/red

**Animations:**
- Pillars: stagger down with 150ms delay each
- Numbers in pillar text: JetBrains Mono, gold color
- Milestone chart: bars grow from left on scroll trigger

---

#### Section 6: Member Stories (Social Proof)

**Layout:** 3-column card grid (horizontal scroll on mobile)  

**Card design:**
- Background: `--tc-black-card`, 1px `--tc-black-border`
- Top: avatar initial + name + badge
- Middle: short story paragraph
- Bottom: portfolio stat in large gold mono font + quote in italic serif

**Three cards:**
```
Card 1 — Rajesh Kumar
IT Manager · Pune · Age 36
"I thought I needed a big salary to invest seriously."
Portfolio: ₹22.4 Lakhs (started with ₹0)
"On track for ₹10 Crore by 55"

Card 2 — Dr. Priya Sharma  
Gynaecologist · Bengaluru · Age 44
"My savings sat in FDs earning 6%."
Portfolio: ₹68 Lakhs (from FDs)
"₹5 Crore+ by retirement, on track"

Card 3 — Karthik Rajan
Software Engineer (NRI) · USA → India · Age 39
"I spent 8 years building someone else's economy."
Portfolio: ₹45 Lakhs in Indian MFs
"₹8 Crore corpus before returning at 50"
```

**Trust strip below:** `AMFI Registered · SEBI Compliant · 340+ Active Members · ₹4.2 Cr added last month`

**Animations:**
- Cards: `staggerContainer` → `staggerItem`
- Portfolio numbers: count up when in view
- Hover: `scale(1.02)`, gold border glow

---

#### Section 7: Community Preview

**Background:** Gradient from black to deep red (`rgba(161,6,1,0.08)`)  
**Layout:** Content left, feature list right

**Content:**
```
H2: "This is not a WhatsApp tip group.
     This is a private wealth ecosystem."
```

**Two-column feature comparison:**
```
FREE TIER                       INNER CIRCLE (Premium)
────────────────                ────────────────────────
Weekly newsletter               Quarterly 1-on-1 calls
Monthly live webinar            Behavioral coaching
SIP education resources         Exclusive portfolio discussions
Market psychology content       Goal tracking dashboard
                                Private 340+ HNI network
                                Priority tool access
```

**FOMO close:**  
```
"The people in this community are your peers. Same age. Same income 
bracket. Same city. They are already compounding. The gap between you 
and them grows every month you're not in here."
```

**CTA:** "Join the ₹10 Crore Circle — Free to Start →"

---

#### Section 8: Final CTA

**Background:** Almost full-width, red-tinted card with gold border  
```
H2: "Your ₹10 Crore journey starts with one conversation."
Sub: "It costs nothing to understand what your financial future looks like.
      It costs everything to ignore it."
CTA: [Book Your Free 30-Minute Strategy Call]
Below: "No sales pressure. No commitment. Just clarity."
TrustStrip
```

**Animation:** `scaleIn` with pulsing red glow on CTA button

---

### PAGE 2: About (`/about`)

**Hero:**
```
H1: "I became a wealth advisor because I watched smart 
     people make the same expensive mistake."
```

**Opening paragraph:** (full prose, serif font, large)

**Three philosophy blocks (horizontal on desktop):**
```
[icon] Time > Timing
"Time in market always beats timing the market."

[icon] Behavior First  
"Behavior is the single biggest determinant of returns."

[icon] Arithmetic of Discipline
"₹10 Crore is not a fantasy — it is an arithmetic outcome."
```

**Credentials card (shadcn Card):**
```
AMFI Registered Mutual Fund Distributor
ARN: [XXXXX]
SEBI Compliant
Certified Financial Planner [if applicable]
```

**Values section (4-card grid):**
- Transparency over performance promises
- Education over product pushing  
- Long-term relationships over transactional advice
- Behavioral coaching over market predictions

**Closing quote:**  
```
"My mission is simple: make sure that 10 years from now, you are not 
the person watching your peers count their crores while you wonder 
where it all went."
```

**CTA:** Book a consultation

---

### PAGE 3: Framework (`/framework`)

**H1:** "The Ten Crore Method™ — A structured system for building serious wealth."

**Intro paragraph:** (prose)

**5 Detailed Pillars (full expanded version, not accordion):**
Each pillar gets its own full section with:
- Large pillar number (decorative, huge, gold, low opacity background)
- Icon
- Headline
- 2-3 paragraphs of content
- Key insight callout box

**Pillar content (from PDF):**
```
Pillar 1 — Income Expansion:
"Before a single rupee is invested, we audit your income, expenses, and true 
savings rate. Most people can invest 30–40% more than they think — once we 
identify lifestyle leakages, EMI optimization opportunities, and tax-saving 
routes."

Pillar 2 — SIP Discipline:
"A SIP is only as powerful as your commitment to continuing it. We design SIPs 
around your income pattern — monthly salary, quarterly bonus, annual incentive 
— so you always invest the maximum possible without straining cash flow."

Pillar 3 — Smart Asset Allocation:
"Not all equity is the same. We build: large cap for stability, flexi cap for 
growth, international for diversification, debt for rebalancing. Quarterly 
rebalancing. Allocation evolves with your age and life stage."

Pillar 4 — Compounding Time:
"Resisting the urge to redeem during market fear. Resisting the temptation to 
switch funds during underperformance. Resisting lifestyle inflation. Every year 
you stay invested, you move exponentially closer to your number."

Pillar 5 — Behavioral Coaching:
"When markets fall 20%, we send a coaching note — not a panic note. When a 
fund underperforms for two quarters, we explain the cycle. When your friend 
tells you to invest in a trending NFO, we give you the data to say no."
```

**Interactive Timeline Visual (Recharts AreaChart):**
```
X-axis: Years (0 to 30)
Y-axis: Wealth in ₹ (0 to 15 Crore)
Series: ₹15,000/month SIP at 12%
Milestone markers: Year 10 (₹35L), Year 15 (₹1Cr), Year 20 (₹2.5Cr), 
                   Year 25 (₹5.8Cr), Year 30 (₹10.7Cr)
Animation: Chart draws from left on scroll
Interactive: Hover tooltip showing exact values
```

**CTA:** "Start My ₹10 Crore Journey →"

---

### PAGE 4: Services (`/services`)

**H1:** "Every service we offer exists to move you closer to your ₹10 Crore number."

**6 Service Cards (shadcn Card, hover effect, icon):**

```
Service 1: SIP Advisory & Portfolio Construction
Icon: TrendingUp
Description: Fund selection based on 5–10yr performance consistency, fund 
manager track record, expense ratio, category suitability.
For: First-time investors · Scattered portfolios · Clean SIP plan
CTA: [Learn More]

Service 2: Wealth Creation Roadmaps
Icon: Map
Plans: ₹1 Crore Plan · ₹3 Crore Plan · ₹5 Crore Plan · ₹10 Crore Plan
CTA: [Get My Roadmap]

Service 3: Retirement Planning (SWP Strategy)
Icon: Sunset
Description: Systematic Withdrawal Plan — monthly income that never runs out.
Key Q: "₹3 Crore at 55 → how much monthly withdrawal for how long?"
CTA: [Plan My Retirement]

Service 4: Child Education Planning
Icon: GraduationCap  
Stat: "India's top colleges will cost ₹40–80 Lakhs by 2035"
CTA: [Secure My Child's Future]

Service 5: Portfolio Review & Rebalancing
Icon: RefreshCw
Description: Full audit, fund-by-fund analysis, rebalancing + tax impact.
CTA: [Review My Portfolio]

Service 6: Behavioral Coaching & Accountability
Icon: Shield
Description: "The service no one else offers." Quarterly 1-on-1 calls.
CTA: [Join the Accountability Program]
```

**Bottom CTA section:** "Not sure which service you need? Book a free 30-minute call."

---

### PAGE 5: Calculators (`/calculators`)

**H1:** "Numbers don't lie. Find out exactly where you stand."  
**Sub:** "Spend 5 minutes here. It will change how you think about money."

**Layout:** 4 tabs (shadcn Tabs) or accordion, one calculator per tab

---

#### Calculator 1: SIP Growth Calculator

**Inputs:**
```typescript
monthlyAmount: number    // ₹1,000 — ₹5,00,000 (Slider + Input)
years: number            // 1 — 40 (Slider)
expectedReturn: number   // 6% — 20% (Slider)
annualTopUp: number      // 0 — 20% (optional Slider)
```

**Formula (from Excel model):**
```typescript
// src/lib/calculators.ts
export function calcSIPFutureValue(
  monthlyAmount: number,
  years: number,
  annualReturnRate: number,
  annualTopUpPercent = 0
): { futureValue: number; totalInvested: number; wealthMultiple: number } {
  const n = years * 12
  const r = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1  // Monthly rate
  
  if (annualTopUpPercent === 0) {
    // Standard SIP FV formula
    const fv = monthlyAmount * (Math.pow(1 + r, n) - 1) / r * (1 + r)
    const totalInvested = monthlyAmount * n
    return { futureValue: fv, totalInvested, wealthMultiple: fv / totalInvested }
  } else {
    // Growing SIP (from SIP-SWP Excel model, SIP-SWP Tool sheet)
    // g = monthly growth rate from annual top-up
    const g = Math.pow(1 + annualTopUpPercent / 100, 1 / 12) - 1
    // Growing annuity FV: PMT * [(1+r)^n - (1+g)^n] / (r - g) * (1+r)
    let fv: number
    if (Math.abs(r - g) < 0.0000001) {
      fv = monthlyAmount * n * Math.pow(1 + r, n)
    } else {
      fv = monthlyAmount * (Math.pow(1 + r, n) - Math.pow(1 + g, n)) / (r - g) * (1 + r)
    }
    // Approx total invested (arithmetic series)
    const totalInvested = monthlyAmount * 12 * ((Math.pow(1 + annualTopUpPercent/100, years) - 1) / (annualTopUpPercent/100))
    return { futureValue: fv, totalInvested, wealthMultiple: fv / totalInvested }
  }
}
```

**Output display:**
```
Future Value:      ₹[X]  (large, gold mono, animated counter)
Total Invested:    ₹[X]  (medium)
Wealth Created:    ₹[X]  (medium, = FV - invested)
Investment Multiple: [X]x (gold badge)
```

**Chart:** Area chart, year-by-year growth, animated draw

---

#### Calculator 2: SWP Retirement Income Calculator

**Inputs:**
```typescript
corpusAmount: number      // ₹10L — ₹10Cr (Slider + Input)
monthlyWithdrawal: number // ₹10K — ₹5L (Slider)
annualReturn: number      // 8% — 15% (Slider)
```

**Formula (from SWP Life sheet):**
```typescript
export function calcSWPDuration(
  corpus: number,
  monthlyWithdrawal: number,
  annualReturnRate: number
): { months: number; years: number; remainingMonths: number; totalWithdrawn: number } {
  const r = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1
  let balance = corpus
  let months = 0
  
  // Simulate month by month (from SWP Life calculation table)
  while (balance > monthlyWithdrawal && months < 75 * 12) {
    // Withdrawal at month start (as per Excel model note)
    balance = balance - monthlyWithdrawal
    // Growth during month
    balance = balance * (1 + r)
    months++
  }
  
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12
  const totalWithdrawn = monthlyWithdrawal * months
  
  return { months, years, remainingMonths, totalWithdrawn }
}

export function calcSWPCorpusNeeded(
  monthlyWithdrawal: number,
  years: number,
  annualReturnRate: number
): number {
  // From SWP Need sheet: PV of annuity due
  const n = years * 12
  const r = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1
  // PV = PMT × [1 - (1+r)^-n] / r × (1+r)
  return monthlyWithdrawal * (1 - Math.pow(1 + r, -n)) / r * (1 + r)
}
```

**Output:**
```
Withdrawals last:   [X] years [Y] months  (large display)
Total withdrawn:    ₹[X]                  (gold)
Monthly income:     ₹[monthly]            (confirmation)
Sustainability:     [bar showing % of retirement covered]
```

**Insight box:** "To sustain ₹[monthly] withdrawals for 25 years at 11% returns, you need a corpus of ₹[calculated PV]"

---

#### Calculator 3: Goal Reverse Calculator

**Inputs:**
```typescript
targetAmount: number  // ₹50L — ₹10Cr (Slider)
targetYear:   number  // 5 — 35 years (Slider)  
returnRate:   number  // 10% — 18% (Slider)
topUpPercent: number  // 0% — 20% (optional)
```

**Formula:**
```typescript
export function calcSIPRequired(
  targetAmount: number,
  years: number,
  annualReturnRate: number
): number {
  const n = years * 12
  const r = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1
  // Reverse SIP: PMT = FV × r / [(1+r)^n - 1] / (1+r)
  return targetAmount * r / (Math.pow(1 + r, n) - 1) / (1 + r)
}
```

**Output:**
```
Monthly SIP needed:  ₹[X]     (huge, gold)
Total to invest:     ₹[X]
Wealth created:      ₹[X]
```

**Motivational tag:** If SIP ≤ ₹20,000: "Less than you think!" | If ≤ ₹50,000: "Achievable on your salary."

---

#### Calculator 4: Delay Cost Calculator (The Key One)

**Design:** This calculator should look like a premium product. Dark card, pulsing border, emotional language.

**Inputs:**
```typescript
monthlySIP: number    // ₹5,000 — ₹1,00,000
years: number         // 10 — 30 (total investment horizon)
returnRate: number    // 10% — 16%
```

**Calculation:**
```typescript
export function calcDelayCost(
  monthlySIP: number,
  totalYears: number,
  returnRate: number
): { valueToday: number; valueNextYear: number; delayCost: number; delayCostLabel: string } {
  const valueToday = calcSIPFutureValue(monthlySIP, totalYears, returnRate).futureValue
  const valueNextYear = calcSIPFutureValue(monthlySIP, totalYears - 1, returnRate).futureValue
  const delayCost = valueToday - valueNextYear
  
  let delayCostLabel = ''
  if (delayCost < 500000) delayCostLabel = 'a premium car downpayment'
  else if (delayCost < 1500000) delayCostLabel = "your child's complete school education"
  else if (delayCost < 3000000) delayCostLabel = 'a foreign holiday every year for a decade'
  else delayCostLabel = 'a flat in a tier-2 city'
  
  return { valueToday, valueNextYear, delayCost, delayCostLabel }
}
```

**Output (dramatic presentation):**
```
[Two columns separated by "vs"]

START TODAY                    START NEXT YEAR
₹[valueToday]                  ₹[valueNextYear]
[bright gold, large]           [muted, smaller]

              ONE YEAR COSTS YOU
              ₹[delayCost]  ← RED, large, pulsing
[delayCostLabel — animated text swap]
```

**Emotional closing:** "This number isn't a projection. It's a price tag on procrastination."

**CTA:** `[Stop Waiting. Book Your Free Strategy Call →]`

---

### PAGE 6: Community (`/community`)

**H1:** "Wealth is built faster when you're surrounded by people building it too."

**Research callout:**
```
"Research shows that your financial outcomes are heavily influenced by your 
peer group. The ₹10 Crore Circle is designed to give you the right peer group."
```

**Who's in the community (icon grid):**
```
[Stethoscope]  Doctors & Healthcare Professionals
[Laptop]       IT Professionals & Software Engineers  
[Briefcase]    Business Owners & Entrepreneurs
[Globe]        NRIs Building India-Linked Wealth
[Building]     Senior Corporate Executives
```

**Tier comparison (shadcn Tabs or side-by-side Cards):**

```
FREE TIER — "The Foundation"
✓ Weekly curated wealth newsletter
✓ Monthly live webinar (compounding, allocation, wealth psychology)
✓ Content library: articles, case studies, Ten Crore Method™ guide
✓ Community forum

CTA: [Join Free →]

INNER CIRCLE — "Premium"  (highlighted card with gold border)
✓ Everything in Free Tier
✓ Quarterly 1-on-1 strategy review
✓ Personal goal dashboard (track your ₹10 Crore milestone)
✓ Behavioral coaching sessions during corrections
✓ Exclusive masterclasses with senior financial professionals
✓ Private network of 340+ verified HNI members
✓ Priority access to new tools and research

CTA: [Apply for Inner Circle →]
```

**FOMO close:**
```
"The members inside this community right now are people exactly like you. 
Same background. Same income. Same city. The difference is — they decided. 
Every month you're outside this community is another month they compound 
and you don't."
```

---

### PAGE 7: Blog (`/blog`)

**H1:** "Insights. Education. The truth about building wealth in India."

**Category filter (shadcn Tabs):**
```
All | Wealth Psychology | SIP Education | Real Journeys | India Opportunity
```

**Blog card grid (3 columns desktop, 1 mobile):**
```typescript
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: 'psychology' | 'education' | 'journey' | 'macro'
  readTime: number  // minutes
  publishDate: string
  featured?: boolean
}
```

**Sample posts (static data, create all in `src/data/blog-posts.ts`):**
```
Psychology:
- "Why smart people make terrible investment decisions"
- "The one emotion that has destroyed more wealth than any market crash"
- "What panic selling really costs you (the numbers will shock you)"

Education:
- "How compounding works: the mathematical proof that patience pays"
- "SIP myths every Indian investor still believes"  
- "What is SWP and why every retiree needs one"
- "How to build a ₹10 Crore portfolio on a ₹60,000 monthly salary"

Journeys:
- "How a 32-year-old IT professional is targeting ₹10 Crore by 50"
- "Age 42, ₹0 invested, ₹25 Lakh salary — is it too late? (Honest answer)"
- "What happened to members who stayed invested through COVID crash"

Macro:
- "Why India's next 20 years will create more crorepatis than the last 50"
- "The Sensex at 3,00,000: what history says about India's next bull run"
- "Why NRIs are rushing to invest in Indian mutual funds right now"
```

**Featured post:** Large hero card at top (first in list, `featured: true`)

### Blog Post (`/blog/[slug]`)

**Layout:** Single-column editorial  
**Typography:** Large Cormorant Garamond for article body  
**TOC:** Sticky right sidebar (desktop only)  
**Progress:** Reading progress bar at top  
**CTA banner:** Mid-article and end-of-article booking CTA  
**Related posts:** 3 card grid at bottom  

---

### PAGE 8: Success Stories (`/stories`)

**H1:** "Real investors. Real journeys. Real crores being built."

**3 Full Story Cards (shadcn Card, large):**

Each story contains:
- Header: photo placeholder (initials avatar) + name + profession + city + age
- "When they joined" context
- "The plan built for them"
- "Where they are today" (portfolio value in large gold mono)
- Direct quote (italic serif, gold border left)
- "On track for" milestone

```
Story 1: Rajesh Kumar | IT Manager | Pune | Age 36
When joined: ₹2L in savings, no SIPs, no plan
Plan: ₹15,000 SIP across large cap, flexi cap, ELSS. 10% annual step-up.
Today: ₹22.4 Lakhs portfolio
On track: ₹10 Crore by 55
Quote: "I thought I was too late. Turns out I was exactly on time — and my 
       peers who haven't started yet are the ones falling behind."

Story 2: Dr. Priya Sharma | Gynaecologist | Bengaluru | Age 44
When joined: High income, zero plan. Savings in FDs at 6%.
Plan: ₹50,000 SIP, heavy equity (15yr horizon), quarterly rebalancing
Today: ₹68 Lakhs, well-diversified
On track: ₹5 Crore+ by retirement
Quote: "I was embarrassed that I'd been a doctor for 12 years and had no 
       wealth to show. Now I look at my dashboard every quarter and it's 
       one of the best feelings."

Story 3: Karthik Rajan | Software Engineer (NRI) | USA | Age 39
When joined: Earning dollars, zero India-linked wealth strategy
Plan: NRI-specific MF portfolio, goal-mapped for India return at 50, FEMA compliant
Today: ₹45 Lakhs in Indian MFs
On track: ₹8 Crore corpus by return date
Quote: "I spent 8 years in the US building someone else's economy. 
        Now I'm building mine."
```

**Stats bar between stories:**
```
₹22.4L | ₹68L | ₹45L — Portfolios actively growing
Average portfolio age: 4.2 years | 0 members who stopped SIPs
```

---

### PAGE 9: Book Consultation (`/book`)

**This is the primary conversion page. Maximum trust signals.**

**H1:** "One conversation can change the trajectory of your financial life."

**What the session covers (icon + text list):**
```
[CheckCircle] Your current income, savings rate, and investable surplus
[CheckCircle] Your ₹10 Crore timeline and what it requires
[CheckCircle] A fund shortlist tailored to your goals
[CheckCircle] Key mistakes to avoid based on your situation
[CheckCircle] Whether Ten Crore Club is the right fit for you
```

**Urgency line (pulsing, red text):**
```
"We take a limited number of new consultations each month to ensure every 
client gets full attention. If you're seeing this page, slots are available 
— but not for long."
```

**Booking Form (shadcn + React Hook Form + Zod):**
```typescript
const bookingSchema = z.object({
  name:          z.string().min(2, "Please enter your full name"),
  email:         z.string().email("Please enter a valid email"),
  phone:         z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian mobile"),
  city:          z.string().min(2),
  currentAge:    z.number().min(18).max(65),
  monthlyIncome: z.enum(['below-50k', '50k-1l', '1l-3l', '3l-above']),
  goal:          z.enum(['1cr', '3cr', '5cr', '10cr', 'starting']),
  currentSavings:z.enum(['none', 'below-5l', '5-20l', 'above-20l']),
  message:       z.string().optional(),
})
```

**Form fields:**
```
Full Name *
Email Address *
Mobile Number * (Indian format validation)
City *
Current Age *
Monthly Income: [Below ₹50K | ₹50K-1L | ₹1L-3L | ₹3L+]
Financial Goal: [₹1 Crore | ₹3 Crore | ₹5 Crore | ₹10 Crore | Just Starting]
Current Savings: [Nothing Yet | Below ₹5L | ₹5-20L | Above ₹20L]
Anything specific you want to discuss? (optional)
```

**Submit button:** "Book My Free Strategy Session →" (full-width, red, animated on hover)

**Trust signals below form:**
```
[Shield] AMFI Registered  [Lock] SEBI Compliant  
[Users] 340+ members currently investing  
[Clock] Response within 24 hours  
[X] No guaranteed returns claims  
[BookOpen] Education-first approach
```

**On form success:** Toast notification + confirmation message + "What to prepare" section reveals

---

### PAGE 10: Contact (`/contact`)

**H1:** "Questions? We answer every one personally."

**Sub:** "We are not a robo-advisory. Every message is read by a human."

**Contact form (simpler than booking form):**
```typescript
const contactSchema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  phone:   z.string().regex(/^[6-9]\d{9}$/),
  city:    z.string(),
  goal:    z.enum(['1cr', '3cr', '5cr', '10cr', 'starting']),
  message: z.string().min(10),
})
```

**Fields:**
```
Name · Email · Phone · City
Goal: [₹1 Cr | ₹3 Cr | ₹5 Cr | ₹10 Cr | Just starting out]
Message
[Send Message →]
```

**Below form:** "We'll get back to you within 24 hours."

---

## 10. Calculator Logic Library (`src/lib/calculators.ts`)

Full implementation including all formula functions:

```typescript
// All core financial math — sourced from uploaded Excel models
// MF Investment Calculator + SIP-SWP Cash Flow Model Ver. 5

/** Monthly rate from annual CAGR */
export const monthlyRate = (annualRate: number): number =>
  Math.pow(1 + annualRate / 100, 1 / 12) - 1

/** Standard SIP Future Value (no top-up) */
export function sipFV(monthly: number, years: number, annualCAGR: number): number {
  const r = monthlyRate(annualCAGR)
  const n = years * 12
  return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r)
}

/** Growing SIP Future Value (with annual % top-up) */
export function growingSIPFV(
  monthly: number, years: number, annualCAGR: number, annualTopUpPct: number
): number {
  const r = monthlyRate(annualCAGR)
  const g = monthlyRate(annualTopUpPct)
  const n = years * 12
  if (Math.abs(r - g) < 1e-9) return monthly * n * Math.pow(1 + r, n)
  return monthly * (Math.pow(1 + r, n) - Math.pow(1 + g, n)) / (r - g) * (1 + r)
}

/** SIP Monthly Amount needed to reach target */
export function sipRequired(target: number, years: number, annualCAGR: number): number {
  const r = monthlyRate(annualCAGR)
  const n = years * 12
  return target / (((Math.pow(1 + r, n) - 1) / r) * (1 + r))
}

/** SWP: how many months corpus lasts (month-start withdrawal model) */
export function swpDuration(corpus: number, monthlyWithdrawal: number, annualReturn: number) {
  const r = monthlyRate(annualReturn)
  let balance = corpus, months = 0
  while (balance >= monthlyWithdrawal && months < 900) {
    balance = (balance - monthlyWithdrawal) * (1 + r)
    months++
  }
  return { months, years: Math.floor(months / 12), extraMonths: months % 12,
           totalWithdrawn: monthlyWithdrawal * months }
}

/** SWP: corpus needed for given monthly income & duration */
export function swpCorpusNeeded(monthly: number, years: number, annualReturn: number): number {
  const r = monthlyRate(annualReturn)
  const n = years * 12
  return monthly * (1 - Math.pow(1 + r, -n)) / r * (1 + r)
}

/** Delay cost: difference between starting now vs 1 year later */
export function delayCost(monthly: number, years: number, annualCAGR: number) {
  const now = sipFV(monthly, years, annualCAGR)
  const later = sipFV(monthly, years - 1, annualCAGR)
  return { now, later, cost: now - later }
}

/** Year-by-year growth data for charts */
export function growthTimeline(monthly: number, maxYears: number, annualCAGR: number) {
  return Array.from({ length: maxYears + 1 }, (_, yr) => ({
    year: yr,
    value: yr === 0 ? 0 : sipFV(monthly, yr, annualCAGR),
    invested: monthly * yr * 12
  }))
}
```

---

## 11. Formatters (`src/lib/formatters.ts`)

```typescript
/** Format rupees: ₹22.4 Lakhs, ₹1.5 Crore, ₹10 Crore */
export function formatINR(amount: number, compact = true): string {
  if (!compact) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR', maximumFractionDigits: 0
    }).format(amount)
  }
  if (amount >= 1e7) return `₹${(amount / 1e7).toFixed(1)} Crore`
  if (amount >= 1e5) return `₹${(amount / 1e5).toFixed(1)} Lakh`
  if (amount >= 1e3) return `₹${(amount / 1e3).toFixed(0)}K`
  return `₹${amount.toFixed(0)}`
}

/** Format percentage */
export function formatPct(n: number, decimals = 1): string {
  return `${n.toFixed(decimals)}%`
}

/** Format multiplier */
export function formatMultiple(n: number): string {
  return `${n.toFixed(1)}x`
}
```

---

## 12. shadcn/ui Components to Install

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add slider
npx shadcn@latest add tabs
npx shadcn@latest add accordion
npx shadcn@latest add badge
npx shadcn@latest add sheet
npx shadcn@latest add dialog
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add form
npx shadcn@latest add label
npx shadcn@latest add separator
npx shadcn@latest add avatar
npx shadcn@latest add progress
npx shadcn@latest add toast
npx shadcn@latest add tooltip
npx shadcn@latest add navigation-menu
```

**shadcn theme override** (`components.json` → `tailwind.cssVars: true`):
Override shadcn's default `--primary` to use brand red `#A10601` and `--secondary` to use brand gold `#D5A04A`.

---

## 13. SEO Configuration

**Root metadata (`src/app/layout.tsx`):**
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://tencroreclub.in'),
  title: { default: 'Ten Crore Club — Build ₹10 Crore with Mutual Fund SIPs', template: '%s | Ten Crore Club' },
  description: 'India\'s private wealth community for serious investors. Structured SIP plans, behavioral coaching, and the Ten Crore Method™. AMFI Registered.',
  keywords: ['SIP investment', 'mutual fund India', '10 crore goal', 'wealth building India', 'SIP calculator', 'retirement planning India'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Ten Crore Club',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', site: '@tencroreclub' },
  robots: { index: true, follow: true },
  verification: { google: '[GSC_VERIFICATION_CODE]' }
}
```

**Per-page metadata:** Each page exports its own `metadata` constant with page-specific title and description.

**Structured Data (JSON-LD):** Add to home page:
```typescript
// FinancialService schema
// FAQPage schema (calculators)
// Organization schema
```

---

## 14. Performance Requirements

- **Core Web Vitals targets:** LCP < 2.5s | FID < 100ms | CLS < 0.1
- **Images:** All images use `next/image` with proper `width`, `height`, `priority` on hero
- **Fonts:** `display: 'swap'` on all fonts, preload critical fonts
- **Logo:** Use at 200px display width (not full 5000px), source file from `/public/logo/`
- **Charts:** Lazy-load Recharts with `dynamic(() => import(...), { ssr: false })`
- **Calculators:** All computations client-side (no API calls), debounce slider inputs 50ms
- **Animation:** `will-change: transform` only on active animations; remove after animation ends
- **Bundle:** Code-split each calculator, each blog post is SSG

---

## 15. Compliance Requirements (Non-Negotiable)

**ComplianceFooter component renders on ALL 11 pages — no exceptions.**

```typescript
// src/components/layout/ComplianceFooter.tsx
// Exact legal text — do NOT edit:
export const COMPLIANCE_DISCLAIMER = `
Mutual fund investments are subject to market risks. Please read all 
scheme-related documents carefully before investing. Past performance is 
not indicative of future results. Ten Crore Club is an AMFI-registered 
Mutual Fund Distributor. ARN: [XXXXXXX]. All content on this website is 
for educational purposes only and does not constitute financial advice. 
Returns mentioned are indicative and based on historical data — actual 
returns may vary.
`
```

**Additional per-page compliance:**
- Calculator pages: add "Returns shown are estimated and for illustrative purposes only"
- Success stories: add "Results may vary. These are individual member experiences."
- Any page with % return mentions: "Past performance is not indicative of future returns"

---

## 16. Global CSS Details (`src/app/globals.css`)

```css
/* Gold shimmer animation for headlines */
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.gold-shimmer {
  background: linear-gradient(
    90deg,
    #A76D1F 0%,
    #D5A04A 30%,
    #FAF0DC 50%,
    #D5A04A 70%,
    #A76D1F 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 5s linear infinite;
}

/* Gold border glow for callout boxes */
@keyframes borderGlow {
  0%, 100% { box-shadow: 0 0 10px rgba(213, 160, 74, 0.2); }
  50%       { box-shadow: 0 0 25px rgba(213, 160, 74, 0.5); }
}

.gold-glow {
  animation: borderGlow 3s ease-in-out infinite;
}

/* Red pulsing CTA */
@keyframes redPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(161, 6, 1, 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(161, 6, 1, 0); }
}

.cta-pulse {
  animation: redPulse 2.5s ease-in-out infinite;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gold-shimmer { animation: none; }
  .gold-glow    { animation: none; }
  .cta-pulse    { animation: none; }
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0A0A0A; }
::-webkit-scrollbar-thumb { background: #2A2A2A; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #D5A04A; }

/* Selection color */
::selection { background: rgba(161, 6, 1, 0.4); color: #FAF0DC; }
```

---

## 17. Environment Variables (`.env.local`)

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://tencroreclub.in

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Form submission (choose one)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXXXX
# OR
RESEND_API_KEY=re_XXXXXXXXXX
CONTACT_EMAIL=contact@tencroreclub.in

# Optional: Calendly for booking
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tencroreclub

# ARN (AMFI Registration Number)
NEXT_PUBLIC_AMFI_ARN=XXXXX
```

---

## 18. Build & Deployment

```bash
# Build
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

**`next.config.ts`:**
```typescript
const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
    ]
  }]
}
```

**Deploy to Vercel:**
- Connect GitHub repo → Vercel
- Set all env vars in Vercel dashboard
- Enable Vercel Analytics + Speed Insights (already imported)
- Enable Edge Runtime for API routes if added

---

## 19. Build Order (Recommended)

Build in this sequence for fastest results:

```
1. Setup & Config
   ├── Next.js init, dependencies, shadcn init
   ├── globals.css (colors, animations, typography)
   ├── tailwind.config.ts (brand colors)
   └── fonts setup in layout.tsx

2. Shared Components
   ├── ComplianceFooter.tsx
   ├── Navbar.tsx
   ├── Footer.tsx
   ├── GoldHeading.tsx
   ├── CTAButton.tsx
   ├── StatCounter.tsx
   └── TrustStrip.tsx

3. Lib Files
   ├── animations.ts
   ├── calculators.ts (all formulas)
   └── formatters.ts

4. Home Page (highest priority)
   ├── HeroSection
   ├── RegretSection
   ├── DelayCalculatorSection
   ├── IndiaOpportunitySection
   ├── MethodSection
   ├── MemberStoriesSection
   └── FinalCTASection

5. Calculators Page (second highest — lead gen)
   ├── SIPGrowthCalculator
   ├── SWPCalculator
   ├── GoalReverseCalculator
   └── DelayCalculator

6. Book Consultation Page (conversion)

7. Remaining pages
   ├── About
   ├── Framework
   ├── Services
   ├── Community
   ├── Stories
   └── Contact

8. Blog (last — static data, no external CMS needed initially)
```

---

## 20. Critical Design Rules — Never Violate

1. **Background is always black.** No white pages. This is a luxury dark brand.
2. **Gold text only on dark backgrounds.** `#D5A04A` on `#111111` or darker.
3. **Red is for CTAs and accents only.** Not for body text, not for backgrounds larger than cards.
4. **All ₹ amounts use JetBrains Mono.** No exceptions. Numbers look different in mono.
5. **Headlines use Cormorant Garamond.** All `H1` and `H2`. Body is DM Sans.
6. **Compliance footer on every page.** This is a legal requirement, not a design choice.
7. **No rounded borders > 12px.** This is luxury, not SaaS. Sharp-ish corners.
8. **Animations: `once: true`.** Scroll animations never re-trigger. Don't be annoying.
9. **Gold shimmer only on primary headlines.** Not on every element. Scarcity = impact.
10. **Social proof uses real numbers.** 340 members, ₹4.2 Cr, 4.2 year portfolio age — these are in the content document. Use them.

---

*End of specification. Build exactly this. The brand has been deeply analyzed — trust the color system, trust the structure, trust the psychology. The Ten Crore Method™ and the Delay Cost Calculator are the two things that will make this website convert.*
