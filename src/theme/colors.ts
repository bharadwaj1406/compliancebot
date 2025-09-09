// Centralized color theme for the app with OKLCH compatibility
// Main color: #212D98 with proper contrast ratios and eye-friendly design

export const themeColors = {
  // Original color scheme
  bgcolor: '#f8f8f9',
  primary: '#212D98',
  secondary: '#6C757D', 
  error: '#B21200',
  warning: '#AB6402',
  success: '#12753A',
  btndisabled: '#BCC0C7',
  btnhover: '#6169B6',
  
  // Extended colors for better UI
  white: '#ffffff',
  black: '#000000',
  
  // OKLCH equivalents with proper contrast ratios
  oklch: {
    // Main theme colors in OKLCH format for modern browser compatibility
    primary: 'oklch(0.208 0.142 265.755)', // #212D98 - main brand color
    primaryHover: 'oklch(0.38 0.12 265)', // #6169B6 - hover state
    secondary: 'oklch(0.485 0.024 258)', // #6C757D
    
    // Background and surface colors
    background: 'oklch(0.975 0.005 258)', // #f8f8f9 - main background
    surface: 'oklch(1 0 0)', // #ffffff - card/surface background
    surfaceVariant: 'oklch(0.96 0.008 258)', // slightly darker surface
    
    // Text colors with proper contrast
    onPrimary: 'oklch(1 0 0)', // white text on primary
    onSecondary: 'oklch(1 0 0)', // white text on secondary
    onSurface: 'oklch(0.208 0.142 265.755)', // primary color for text on surface
    onBackground: 'oklch(0.208 0.142 265.755)', // primary color for text on background
    
    // State colors
    error: 'oklch(0.45 0.18 27)', // #B21200
    warning: 'oklch(0.65 0.15 85)', // #AB6402  
    success: 'oklch(0.45 0.15 145)', // #12753A
    
    // Interactive states
    disabled: 'oklch(0.75 0.01 258)', // #BCC0C7
    disabledText: 'oklch(0.6 0.02 258)',
    
    // Border and outline colors
    outline: 'oklch(0.85 0.01 258)',
    outlineVariant: 'oklch(0.9 0.008 258)',
    
    // Dark mode variants
    dark: {
      background: 'oklch(0.15 0.02 265)',
      surface: 'oklch(0.2 0.02 265)',
      onSurface: 'oklch(0.95 0.01 265)',
      onBackground: 'oklch(0.95 0.01 265)',
      primary: 'oklch(0.65 0.12 265)', // lighter primary for dark mode
      outline: 'oklch(0.3 0.02 265)',
    }
  }
};

// Color contrast utilities
export const getContrastColor = (backgroundColor: string): string => {
  // Simple contrast calculation - returns white or dark based on background
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return brightness > 155 ? themeColors.primary : themeColors.white;
};

// Theme configuration for consistent spacing and typography
export const themeConfig = {
  borderRadius: {
    small: '0.375rem',
    medium: '0.5rem',
    large: '0.75rem',
    xl: '1rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  }
};
