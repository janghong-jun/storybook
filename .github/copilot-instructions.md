# AI Coding Instructions

This is a **Next.js + Storybook component library** project focused on building reusable UI components with comprehensive visual documentation and testing.

## Architecture Overview

### Project Structure

- **`src/components/UI/`**: Reusable UI components (Breadcrumb, Button, Modal, etc.)
- **`src/components/Form/`**: Form-related components (Input, Checkbox, SelectBox, etc.)
- **`src/components/layout/`**: Layout wrapper components
- **`src/pages/`**: Next.js pages (Pages Router pattern)
- **`.storybook/`**: Storybook configuration and setup
- **`src/styles/`**: Global SCSS styles organized by component

### Technology Stack

- **Framework**: Next.js 16 (Pages Router) + React 19
- **Styling**: SCSS modules (organized per component)
- **Component Documentation**: Storybook 10 with `@storybook/nextjs-vite`
- **Testing**: Vitest 4 + Playwright + Storybook addon-vitest
- **Build**: Vite-based (via Storybook's nextjs-vite)

## Development Workflow

### Essential Commands

- `npm run d` - Start Next.js dev server (localhost:3000)
- `npm run s` - Start Storybook (localhost:6006)
- `npm run build` - Build Next.js app
- `npm run build-storybook` - Build Storybook static output
- `npm run lint` - Run ESLint

### Storybook-First Development

1. Create component in `src/components/{category}/{ComponentName}.tsx`
2. Create paired story file: `{ComponentName}.stories.tsx`
3. Use Meta/Story pattern with TypeScript: `satisfies Meta<typeof Component>`
4. Enable autodocs with `tags: ['autodocs']`
5. Stories auto-discovered from `src/**/*.stories.@(ts|tsx)`

## Component Conventions

### Component File Structure

Each component has an accompanying `.stories.tsx` file:

```tsx
// ✓ Correct pattern
;-Breadcrumb.tsx - // Component implementation
  Breadcrumb.stories.tsx // Stories + documentation
```

### Props Documentation

Document all props with JSDoc comments and TypeScript interfaces:

```tsx
export interface ComponentProps {
  /** Brief description of prop */
  propName: Type
}
```

### Styling Pattern

Each component has a corresponding SCSS file imported globally:

- Component styles: `src/styles/component-name.scss`
- All styles unified in `src/styles/globals.scss` via `@use`
- Use BEM-like naming: `.component-name`, `.component-name-item`

## Key Integration Points

### Context & Providers

- `ViewportProvider` wraps entire app (src/contexts/viewPortContext.tsx)
- Layout wrapper available via `getLayout` pattern in pages

### Remote Images

Next.js configured to allow images from `picsum.photos` (see next.config.ts)

### Path Aliases

Use `@/*` alias for src imports:

```tsx
import { Button } from '@/components/UI/Button'
import '@/styles/globals.scss'
```

## Testing & Quality Assurance

### Vitest + Storybook Integration

- Tests run via `@storybook/addon-vitest` plugin
- Browser testing with Playwright (chromium)
- Setup file: `.storybook/vitest.setup.ts`
- A11y testing enabled with `addon-a11y` (status: 'todo')

### ESLint Configuration

- Extends Next.js core-web-vitals + TypeScript config
- Configured to ignore `.next/`, `out/`, `build/`, `next-env.d.ts`

## Important Notes for AI Agents

1. **No Alias Import Conflicts**: Always use `@/` paths, not relative imports across modules
2. **Story Organization**: Stories are sorted by: Guide → Form → UI (see preview.tsx storySort)
3. **Responsive Layout**: Components support per-page custom layouts via `getLayout` pattern
4. **SCSS Global Registration**: Never import SCSS directly in components; styles load via globals.scss
5. **Storybook + Next.js Link**: Use Next.js `Link` component for navigation (see Breadcrumb example)
