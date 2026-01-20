// Modern Corporate Design System for Democratic Burma

export const DESIGN_TOKENS = {
  // Color Palette - Corporate & Professional
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#fef2f2',
      100: '#fee2e2', 
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626', // Main primary color
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a'
    },
    
    // Neutral Grays - Corporate tones
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569', // Main text color
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    
    // Semantic Colors
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      600: '#16a34a'
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      600: '#dc2626'
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      600: '#d97706'
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb'
    }
  },

  // Typography System
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['JetBrains Mono', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }]
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    }
  },

  // Spacing System
  spacing: {
    xs: '0.5rem',    // 8px
    sm: '0.75rem',   // 12px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  },

  // Animation
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
} as const;

// Tailwind Custom Classes Generator
export const generateCustomClasses = () => {
  return {
    // Custom Primary Colors
    '.text-primary-600': { color: DESIGN_TOKENS.colors.primary[600] },
    '.bg-primary-600': { backgroundColor: DESIGN_TOKENS.colors.primary[600] },
    '.border-primary-600': { borderColor: DESIGN_TOKENS.colors.primary[600] },
    '.hover:bg-primary-700:hover': { backgroundColor: DESIGN_TOKENS.colors.primary[700] },
    
    // Custom Neutral Colors  
    '.text-neutral-600': { color: DESIGN_TOKENS.colors.neutral[600] },
    '.text-neutral-700': { color: DESIGN_TOKENS.colors.neutral[700] },
    '.bg-neutral-50': { backgroundColor: DESIGN_TOKENS.colors.neutral[50] },
    '.bg-neutral-100': { backgroundColor: DESIGN_TOKENS.colors.neutral[100] },
    '.border-neutral-200': { borderColor: DESIGN_TOKENS.colors.neutral[200] },
    
    // Modern Gradients
    '.gradient-primary': {
      background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.primary[600]} 0%, ${DESIGN_TOKENS.colors.primary[700]} 100%)`
    },
    '.gradient-neutral': {
      background: `linear-gradient(135deg, ${DESIGN_TOKENS.colors.neutral[50]} 0%, ${DESIGN_TOKENS.colors.neutral[100]} 100%)`
    },
    
    // Glass Effect
    '.glass': {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    
    // Modern Transitions
    '.transition-all-300': {
      transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };
};

// Component-specific design tokens
export const COMPONENTS = {
  // Button Designs
  button: {
    primary: {
      className: 'bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
      disabled: 'opacity-50 cursor-not-allowed'
    },
    secondary: {
      className: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium px-6 py-3 rounded-lg transition-all-300 border border-neutral-300 hover:border-neutral-400'
    },
    outline: {
      className: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium px-6 py-3 rounded-lg transition-all-300'
    },
    ghost: {
      className: 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 font-medium px-4 py-2 rounded-lg transition-all-300'
    }
  },

  // Card Designs
  card: {
    default: {
      className: 'bg-white rounded-xl shadow-lg hover:shadow-xl transition-all-300 border border-neutral-200 hover:border-neutral-300'
    },
    elevated: {
      className: 'bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all-300 border border-neutral-100'
    },
    glass: {
      className: 'glass rounded-xl shadow-lg hover:shadow-xl transition-all-300 border border-neutral-200'
    }
  },

  // Input Designs
  input: {
    default: {
      className: 'w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all-300 bg-white'
    },
    error: {
      className: 'w-full px-4 py-3 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all-300 bg-white'
    }
  }
};