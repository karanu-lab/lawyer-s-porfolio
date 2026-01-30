# Portfolio Application Architecture

## Overview

This is a professional portfolio website for a corporate lawyer, built with modern web technologies and following React best practices. The application features a clean, organized codebase designed for maintainability and scalability.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect, etc.)
- **Routing**: React Router DOM

## Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── ui/             # Reusable UI components (shadcn/ui)
├── config/             # Application configuration
│   └── site.config.ts  # Site metadata and settings
├── constants/          # Static data and configuration values
│   ├── contact.ts      # Contact information
│   ├── highlights.ts   # About section highlights
│   ├── navigation.ts   # Navigation links
│   ├── practiceAreas.ts # Practice areas data
│   ├── stats.ts        # Statistics data
│   ├── testimonials.ts # Client testimonials
│   └── index.ts        # Barrel export
├── hooks/              # Custom React hooks
│   ├── useMobileMenu.ts    # Mobile menu state management
│   ├── useScrollPosition.ts # Scroll position tracking
│   ├── use-toast.ts        # Toast notifications (shadcn)
│   └── index.ts            # Barrel export
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── types/              # TypeScript type definitions
│   └── index.ts        # Centralized types
├── App.tsx             # Root application component
├── index.css           # Global styles and Tailwind config
└── main.tsx            # Application entry point
```

## Architecture Patterns

### 1. **Separation of Concerns**

Each folder has a specific responsibility:
- **Components**: UI presentation logic
- **Constants**: Static data (no logic)
- **Hooks**: Reusable stateful logic
- **Types**: Type definitions (no implementation)
- **Config**: Application-wide settings

### 2. **Barrel Exports**

We use index.ts files to export modules from folders:

```typescript
// components/layout/index.ts
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';

// Usage
import { Navbar, Footer } from '@/components/layout';
```

**Benefits:**
- Cleaner imports
- Easy refactoring
- Better encapsulation

### 3. **Type Safety**

All data structures have TypeScript interfaces defined in `types/index.ts`:

```typescript
export interface NavigationLink {
  href: string;
  label: string;
}
```

This ensures type safety across the application and provides better IDE autocomplete.

### 4. **Custom Hooks**

Reusable logic is extracted into custom hooks:

- `useScrollPosition`: Tracks window scroll for navbar styling
- `useMobileMenu`: Manages mobile menu open/closed state

**Benefits:**
- Reusability across components
- Testability
- Cleaner component code

### 5. **Component Organization**

Components are organized by type:

**Layout Components** (`components/layout/`):
- Structural components used across all pages
- Examples: Navbar, Footer

**Section Components** (`components/sections/`):
- Page-specific content sections
- Examples: HeroSection, AboutSection, ContactSection

**UI Components** (`components/ui/`):
- Reusable primitives from shadcn/ui
- Examples: Button, Input, Card

## Data Flow

```
Constants (Static Data)
    ↓
Components (Presentation)
    ↓
Hooks (State Management)
    ↓
User Interface
```

## Styling Architecture

### Design System

All styles are defined in `src/index.css` using Tailwind CSS:

**CSS Custom Properties:**
```css
--background: 210 20% 98%;
--foreground: 222 47% 11%;
--accent: 38 70% 50%;
```

**Utility Classes:**
```css
.section-container  /* Max-width container */
.section-padding    /* Consistent vertical spacing */
.card-elevated      /* Card with shadow and hover effects */
.gold-accent        /* Gold gradient text */
```

**Benefits:**
- Consistent design tokens
- Easy theming (light/dark mode)
- Reusable utilities

## Configuration Management

Application settings are centralized in `config/site.config.ts`:

```typescript
export const siteConfig = {
  name: 'Alexander Mitchell',
  scrollThreshold: 50,
  animation: {
    counterDuration: 2000,
  },
} as const;
```

**Benefits:**
- Single source of truth
- Easy to find and modify settings
- Type-safe with `as const`

## Best Practices

### 1. **Component Documentation**

All components include JSDoc comments:

```typescript
/**
 * Responsive navigation bar with mobile menu
 * - Changes style on scroll
 * - Mobile hamburger menu
 * - Smooth scroll to sections
 */
const Navbar = () => { ... }
```

### 2. **Accessibility**

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly

### 3. **Performance**

- Lazy loading with React.lazy (when needed)
- Optimized images
- Memoized callbacks in hooks
- CSS transitions instead of JavaScript animations

### 4. **Type Safety**

- All props are typed
- Strict TypeScript configuration
- No `any` types
- Type inference where possible

## Development Guidelines

### Adding a New Section

1. Create component in `src/components/sections/NewSection.tsx`
2. If it has data, extract to `src/constants/newSection.ts`
3. Define types in `src/types/index.ts`
4. Export from `src/components/sections/index.ts`
5. Import and use in `src/pages/Index.tsx`

### Adding a Custom Hook

1. Create hook file in `src/hooks/useNewHook.ts`
2. Add JSDoc documentation
3. Export from `src/hooks/index.ts`
4. Use in components

### Adding Constants

1. Create file in `src/constants/newConstant.ts`
2. Define TypeScript types
3. Export from `src/constants/index.ts`
4. Import where needed

## Testing Strategy

- **Component Tests**: Test UI components in isolation
- **Hook Tests**: Test custom hooks with React Testing Library
- **Integration Tests**: Test user flows
- **Build Validation**: Ensure production build succeeds

## Future Enhancements

Potential improvements for scaling:

1. **State Management**: Add Zustand or Redux if state becomes complex
2. **API Layer**: Create `services/` folder for API calls
3. **Route Guards**: Protect routes if authentication is added
4. **Error Boundaries**: Add error handling components
5. **Internationalization**: Add i18n support for multiple languages
6. **Analytics**: Integrate analytics tracking
7. **Testing**: Expand test coverage

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/App.tsx` | Root app with providers and routing |
| `src/pages/Index.tsx` | Main landing page |
| `src/index.css` | Global styles and design system |
| `src/types/index.ts` | TypeScript type definitions |
| `src/constants/index.ts` | Static data exports |
| `src/hooks/index.ts` | Custom hooks exports |
| `tailwind.config.ts` | Tailwind CSS configuration |
| `vite.config.ts` | Vite build configuration |

## Dependencies

**Core:**
- react, react-dom - UI library
- react-router-dom - Routing
- typescript - Type safety

**UI:**
- @radix-ui/* - Headless UI primitives
- lucide-react - Icons
- tailwindcss - Styling

**Dev:**
- vite - Build tool
- eslint - Linting
- vitest - Testing

---

**Last Updated**: January 2026
**Maintained By**: Development Team
