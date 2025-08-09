# Overview

This is a React-based friend tribute website that creates a personalized, heartfelt experience for someone special. The application features a single-page layout with multiple sections including a hero area, personal message, photo gallery, and memory timeline. It's designed to be customizable with personal content like friend names, messages, photos, and shared memories.

The project uses modern web technologies including React with TypeScript, TailwindCSS for styling, and shadcn/ui components for a polished interface. The application includes interactive elements like floating hearts, smooth scrolling navigation, and animated content reveals.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build System**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and data fetching
- **Styling**: TailwindCSS with custom CSS variables and shadcn/ui component system
- **Component Structure**: Modular component architecture with dedicated sections (Hero, Gallery, Timeline, etc.)

## Backend Architecture
- **Server**: Express.js with TypeScript running in development mode
- **API Structure**: RESTful API with `/api` prefix routing
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Built-in session handling with PostgreSQL session store configuration
- **Development Tools**: Hot module replacement and error overlay for development experience

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User table with id, username, and password fields
- **Migrations**: Automated migration system with Drizzle Kit
- **Connection**: Neon Database serverless PostgreSQL integration

## Development Environment
- **Development Server**: Vite development server with HMR
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Build Process**: Separate client and server builds with ESBuild for server bundling
- **Code Quality**: PostCSS with Autoprefixer for CSS processing

## Component System
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Design System**: Consistent theming with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animation**: CSS animations and transitions for interactive elements

# External Dependencies

## UI and Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Unstyled, accessible components for complex UI patterns
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe variant API for component styling
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for server builds
- **PostCSS**: CSS processing with Autoprefixer

## Database and Storage
- **Drizzle ORM**: Type-safe SQL ORM with automatic migrations
- **Neon Database**: Serverless PostgreSQL database service
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Server Framework
- **Express.js**: Web application framework for Node.js
- **tsx**: TypeScript execution environment for development

## State Management
- **TanStack Query**: Powerful data synchronization for React
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: URL-friendly unique string ID generator

## Development Environment
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting for Replit environment
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling