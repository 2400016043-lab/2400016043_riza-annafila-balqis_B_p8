# My Portfolio - Riza Annafila Balqiss

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Showcasing my experience in campus organizations, events management, and web development projects.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Performance**: Built with Vite for optimal build speed
- **Component-based Architecture**: Modular React components
- **Smooth Navigation**: React Router v7 for seamless page transitions
- **Contact Form**: Interactive form with validation
- **Lazy Loading**: Code splitting and lazy component loading
- **Error Boundary**: Graceful error handling
- **SEO Optimized**: Meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation support

## 📋 Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

## ⚙️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

## 🛠️ Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔨 Build for Production

Build the project:
```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

Preview the production build locally:
```bash
npm run preview
```

## 📦 Deployment

The project is ready for deployment on various platforms:

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or dashboard
```

### GitHub Pages
```bash
npm run deploy
```

## 🧪 Linting

Check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   │   ├── navbar.jsx      # Navigation bar with mobile menu
│   │   └── ProjectCard.jsx # Project card component
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── projects.jsx    # Projects page
│   │   └── contact.jsx     # Contact page with form
│   ├── assets/             # Images and static files
│   ├── App.jsx             # Main App component with routing
│   ├── main.jsx            # Entry point
│   ├── App.css             # Global styles
│   └── index.css           # Tailwind imports
├── public/                 # Static files
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── index.html              # HTML template
```

## 🎨 Technologies Used

- **React 19** - UI Library
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **PropTypes 15** - Runtime type checking
- **ESLint 9** - Code linting

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_NAME=My Portfolio
VITE_APP_TITLE=Riza Annafila Balqiss - Portfolio
VITE_CONTACT_EMAIL=your-email@example.com
```

## 🔒 Security

- Input validation on contact form
- Error boundary for fault tolerance
- No sensitive data in source code
- Environment variables for configuration

## 🚀 Performance Optimizations

- Code splitting with lazy loading
- Image lazy loading
- Minified production build
- Optimized CSS with Tailwind
- Efficient dependency management

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio template for your own use.

## 📞 Contact

- Email: rizaannafila@email.com
- Instagram: @nafilabalqis_
- Location: Yogyakarta, Indonesia

## 📄 License

This project is open source and available under the MIT License.

---

**Last Updated**: December 2025

