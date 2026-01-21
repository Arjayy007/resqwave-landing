# Landing Page Migration - Missing Dependencies & Assets

## ✅ Migration Status

All landing page components have been successfully migrated to the stand-alone project. Below are the dependencies and assets that need to be installed/copied for the landing page to work properly.

---

## 📦 Required npm Packages

Install these packages to enable all landing page functionality:

### Core Dependencies
```bash
npm install mapbox-gl gsap lucide-react motion
```

### Type Definitions
```bash
npm install --save-dev @types/mapbox-gl
```

### Package Details:
- **mapbox-gl**: For interactive map rendering in Hero component
- **gsap**: Animation library for scroll-based animations in Goal component
- **lucide-react**: Icon library used throughout components (Menu, Facebook, Twitter, Mail, etc.)
- **motion**: Motion library for advanced animations (framer-motion alternative, used in LayoutTextFlip)
- **@types/mapbox-gl**: TypeScript definitions for Mapbox GL JS

---

## 🎨 Required shadcn/ui Components

The following shadcn/ui components need to be installed. Use the shadcn CLI to add them:

### 1. Button Component
```bash
npx shadcn@latest add button
```
**Used in:** Header.tsx

### 2. Accordion Component
```bash
npx shadcn@latest add accordion
```
**Used in:** FAQs.tsx

### 3. FlickeringGrid Component
```bash
npx shadcn@latest add flickering-grid
```
**Used in:** CTA.tsx

### 4. NumberTicker Component
```bash
npx shadcn@latest add number-ticker
```
**Used in:** Numbers.tsx

### 5. LayoutTextFlip Component
```bash
npx shadcn@latest add layout-text-flip
```
**Used in:** Hero.tsx (animated text rotation)

---

## 🖼️ Required Assets

Copy these asset files from the source project:

### From `/public` directory:
1. **resqwave_logo.png** - Main ResQWave logo
2. **mapbox_logo.png** - Mapbox logo for footer

### From `/src/assets` directory:
1. **android.png** - Android icon for header button
2. **ios.png** - iOS icon for header button

### Asset Usage:
- **resqwave_logo.png**: Used in Header and Footer
- **mapbox_logo.png**: Used in Footer
- **android.png**: Used in Header for "Get the App" button
- **ios.png**: Used in Header for "Get the App" button

---

## 🔐 Required Environment Variables

Create a `.env` file in the project root with these variables:

```env
# Cloudinary configuration for video hosting
VITE_CLOUDINARY_NAME=your_cloudinary_name

# API base URL for chatbot (optional, defaults to localhost)
VITE_API_BASE_URL=http://localhost:3000/api
```

### Environment Variable Details:
- **VITE_CLOUDINARY_NAME**: Required for Goal.tsx video background
- **VITE_API_BASE_URL**: Optional, used by ChatbotConvo.tsx for backend communication

---

## 📂 Migration Checklist

### ✅ Completed:
- [x] All 9 component files copied to `src/pages/LandingPage/components/`
- [x] Main LandingPage.tsx updated with all sections
- [x] API utility created at `src/pages/LandingPage/api/apiFetch.ts`
- [x] Global styles added to `src/index.css`

### ⚠️ Action Required:
- [ ] Install npm packages: `mapbox-gl`, `gsap`, `lucide-react`, `motion`
- [ ] Install dev dependency: `@types/mapbox-gl`
- [ ] Install shadcn/ui components: `button`, `accordion`, `flickering-grid`, `number-ticker`, `layout-text-flip`
- [ ] Copy 4 asset files (logos and icons)
- [ ] Create `.env` file with required environment variables
- [ ] Verify Mapbox access token in Hero.tsx (currently hardcoded)

---

## 🔧 Optional Configuration

### Mapbox Access Token
Currently, the Mapbox access token is hardcoded in `Hero.tsx`:
```typescript
mapboxgl.accessToken = "pk.eyJ1Ijoicm9kZWxsbCIsImEiOiJjbWU0OXNvb2gwYnM0MnpvbXNueXo2dzhxIn0.Ep43_IxVhaPhEqWBaAuuyA";
```

**Recommendation:** Move this to an environment variable:
```env
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token
```

Then update Hero.tsx:
```typescript
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
```

---

## 🎯 Next Steps

1. **Install Dependencies**
   ```bash
   npm install mapbox-gl gsap lucide-react motion
   npm install --save-dev @types/mapbox-gl
   ```

2. **Install shadcn/ui Components**
   ```bash
   npx shadcn@latest add button
   npx shadcn@latest add accordion
   npx shadcn@latest add flickering-grid
   npx shadcn@latest add number-ticker
   npx shadcn@latest add layout-text-flip
   ```

3. **Copy Assets**
   - Copy image files from source project to target project
   - Maintain the same directory structure (`/public` and `/src/assets`)

4. **Configure Environment**
   - Create `.env` file with required variables
   - Update Cloudinary name
   - (Optional) Set API base URL if using backend

5. **Test the Application**
   ```bash
   npm run dev
   ```

6. **Verify All Sections Render**
   - Header with navigation
   - Hero section with map
   - Goal section with video background
   - How It Works section
   - Numbers section with animated counters
   - FAQs section with accordion
   - CTA section with flickering grid
   - Footer
   - Chatbot widget (may need backend for full functionality)

---

## 📝 Notes

- The landing page is a **1:1 migration** with no modifications
- All imports use `@/` alias for absolute paths (ensure tsconfig.json is configured)
- Chatbot requires backend API endpoints: `/chatbot/greeting`, `/chatbot/chat`, `/chatbot/translate`, `/chatbot/quick-actions`
- MapboxGL CSS is imported in Hero.tsx: `import "mapbox-gl/dist/mapbox-gl.css"`
- GSAP ScrollTrigger plugin is registered in Goal.tsx

---

## 🚀 Installation Quick Commands

Run these commands in sequence:

```bash
# Install core dependencies
npm install mapbox-gl gsap lucide-react

# Install type definitions
npm install --save-dev @types/mapbox-gl

# Install shadcn/ui components (run one at a time)
npx shadcn@latest add button
npx shadcn@latest add accordion
npx shadcn@latest add flickering-grid
npx shadcn@latest add layout-text-flip
npx shadcn@latest add number-ticker
```

After installation, copy the required assets and create the `.env` file, then run `npm run dev` to test!
