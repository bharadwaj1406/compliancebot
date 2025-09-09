# Altius Chat Application - Modular Architecture

## 🎨 Design System

### Color Theme
The application uses a carefully crafted color palette with OKLCH compatibility for modern browsers and optimal eye comfort:

#### Primary Colors
- **Primary**: `#212D98` - Main brand color with proper contrast ratios
- **Secondary**: `#6C757D` - Supporting neutral color
- **Background**: `#f8f8f9` - Light, eye-friendly background
- **Accent/Hover**: `#6169B6` - Interactive state color

#### State Colors
- **Success**: `#12753A` - Green for positive actions
- **Warning**: `#AB6402` - Orange for warnings
- **Error**: `#B21200` - Red for errors
- **Disabled**: `#BCC0C7` - Muted for disabled states

### OKLCH Format
All colors are defined in OKLCH format for:
- Better color interpolation
- Consistent perceived lightness
- Wide gamut color support
- Future-proof design system

## 🏗️ Modular Architecture

### Component Structure
```
src/
├── components/
│   ├── chat/
│   │   ├── index.ts              # Centralized exports
│   │   ├── ChatSidebar.tsx       # Sidebar with chat list
│   │   ├── ChatHeader.tsx        # App header
│   │   ├── ChatMessage.tsx       # Individual message component
│   │   ├── ChatInput.tsx         # Input area with actions
│   │   └── TypingIndicator.tsx   # AI typing animation
│   └── ui/                       # Reusable UI components
├── theme/
│   └── colors.ts                 # Centralized color system
└── Chat.tsx                      # Main chat container
```

### Key Components

#### 1. ChatSidebar (`/components/chat/ChatSidebar.tsx`)
- Collapsible sidebar with chat history
- Search functionality
- Chat management (rename, delete)
- Responsive mobile overlay

#### 2. ChatHeader (`/components/chat/ChatHeader.tsx`)
- App branding and navigation
- Sidebar toggle
- Clean, minimal design

#### 3. ChatMessage (`/components/chat/ChatMessage.tsx`)
- Renders individual messages
- User vs AI message styling
- Action buttons (copy, like, retry)
- Smooth animations

#### 4. ChatInput (`/components/chat/ChatInput.tsx`)
- Auto-resizing textarea
- File attachment support
- Voice input (UI ready)
- Send button with proper states

#### 5. TypingIndicator (`/components/chat/TypingIndicator.tsx`)
- Animated dots for AI thinking state
- Smooth enter/exit animations
- Branded styling

### Theme System (`/theme/colors.ts`)
Centralized color management with:
- OKLCH color definitions
- Contrast calculation utilities
- Light/dark mode support
- Eye-strain reduction features

## 🎯 Benefits of Modular Architecture

### 1. **Maintainability**
- Each component has a single responsibility
- Easy to locate and modify specific features
- Reduced coupling between components

### 2. **Reusability**
- Components can be used across different parts of the app
- Consistent UI patterns
- Easy to create variations

### 3. **Testability**
- Components can be tested in isolation
- Easier to mock dependencies
- Better test coverage

### 4. **Scalability**
- Easy to add new features
- Clean separation of concerns
- Extensible architecture

### 5. **Developer Experience**
- Clear component boundaries
- Better TypeScript inference
- Improved debugging

## 🎨 Design Philosophy

### Color Accessibility
- WCAG AA compliance for contrast ratios
- Reduced eye strain with carefully chosen hues
- Consistent visual hierarchy

### Animation & Interaction
- Smooth, purposeful animations
- Responsive feedback for user actions
- Progressive enhancement approach

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions

## 🚀 Getting Started

### Development
The modular structure makes development more efficient:

1. **Adding new features**: Create new components in appropriate directories
2. **Modifying existing features**: Edit individual component files
3. **Theming**: Update colors in `/theme/colors.ts`
4. **UI consistency**: Use existing UI components from `/components/ui/`

### Code Organization
- Import from index files for cleaner imports
- Use TypeScript interfaces for better type safety
- Follow component composition patterns
- Maintain consistent naming conventions

This architecture provides a solid foundation for scaling the chat application while maintaining code quality and user experience.
