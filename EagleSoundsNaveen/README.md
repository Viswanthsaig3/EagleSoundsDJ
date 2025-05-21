# Eagle Sounds - DJ Services Website

A modern, responsive website for Eagle Sounds, a premium DJ and event services company based in India.

## 🎵 About the Project

This website is designed to showcase Eagle Sounds' professional DJ services, sound systems, lighting solutions, photo shoots, and smoke effects. The site features a dark, immersive color scheme with neon blue accents to create a vibrant, energetic aesthetic that captures the essence of the DJ and music industry.

## 🎨 Design Features

- **Dark Blue Color Scheme**: Deep blues with neon accents for a modern, night-club inspired look
- **Dynamic Animations**: Audio wave visualizers, particle effects, and smooth motion to create an energetic feel
- **Responsive Design**: Fully responsive layout that adapts to any device size
- **Modern UI Components**: Glass-effect cards, neon glows, and gradient backgrounds

## 💻 Tech Stack

- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- React Icons for iconography

## 🌟 Color Palette

The website uses a carefully selected color palette to create a vibrant, music-themed experience:

- **Primary Color**: `#00BFFF` - Bright blue that represents energy and vibrancy
- **Secondary Color**: `#0047AB` - Deep blue for depth and contrast
- **Accent Color**: `#39FF14` - Neon green for emphasis and highlights
- **Dark Background**: `#020617` - Near-black with a hint of blue for the base
- **Darker Background**: `#0F172A` - Deep blue-black for areas requiring more contrast
- **Text Colors**: Primarily white and light blue variations for optimal readability on dark backgrounds

## 📱 Pages

- **Home**: Feature-rich landing page with hero carousel, services overview, and testimonials
- **Vendor**: Detailed presentation of services offered with pricing and options
- **About**: Company history, team information, and gallery of past events
- **Contact**: Contact form and information for reaching Eagle Sounds

## ⚙️ Running the Project

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

This website is configured to be deployed on Vercel for optimal performance with Next.js.

## 🎧 Features

- **Interactive Audio Visualizers**: Dynamic elements that respond to user interaction
- **Animated Service Cards**: Elegant transitions when hovering over service information
- **Hero Carousel**: Immersive slideshow with particle effects and audio visualization
- **Responsive Navigation**: Mobile-friendly navigation with animated transitions
- **Gallery with Filters**: Categorized gallery of past events with visual enhancements
- **Contact Form with Validation**: User-friendly form with real-time validation

## 📝 License

This project is proprietary and belongs to Eagle Sounds.

## ❗ Troubleshooting

### Current Issues

1. **Missing Favicon**: The app is missing a proper favicon file. To fix this issue:
   - Add a proper favicon.ico file to the public folder
   - OR edit `app/layout.tsx` to use a different icon with `<link rel="icon" href="/logo.png" />`

2. **Missing Dependencies**: If you encounter errors about missing modules like 'critters':
   - Install the missing module: `npm install critters`
   - OR disable the feature in `next.config.js` by setting `optimizeCss: false`

3. **Running on Windows PowerShell**: If you're having trouble with running commands in PowerShell:
   - Run these commands separately instead of using the '&&' operator:
     ```
     cd eaglesounds
     npm run dev
     ```
   - Or use Command Prompt (cmd) instead of PowerShell

4. **Missing Static Images**: If you see placeholders instead of actual images:
   - Add appropriate images to the public folder following the naming conventions
   - For testing, you can use placeholder services like https://placehold.co/

### Quick Fix to Run the App

To quickly get the app running without errors:

1. Navigate to the eaglesounds directory
2. Create or download a favicon.ico file and place it in the public folder
3. Run `npm install critters` to add the missing dependency
4. Start the development server with `npm run dev`

If you still encounter issues, try the following steps:

1. Delete the .next folder to clear the build cache
2. Run `npm install` to make sure all dependencies are properly installed
3. Start the development server with `npm run dev`