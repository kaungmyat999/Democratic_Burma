// Standardized animation configuration for consistent component sequencing
export const ANIMATION_SEQUENCES = {
  // Base delay increments (in milliseconds)
  BASE_DELAY: 100,
  STAGGER_DELAY: 150,
  
  // Page-specific sequences
  HOME: {
    HERO: 0,
    MISSION: 200,
    SECTION_TITLE: 400,
    FEATURE_1: 600,
    FEATURE_2: 750,
    FEATURE_3: 900,
    LATEST_SECTION: 1100,
    LATEST_ARTICLE_1: 1300,
    LATEST_ARTICLE_2: 1450,
    LATEST_ARTICLE_3: 1600,
    CALL_TO_ACTION: 1800,
  },
  
  ABOUT: {
    HERO: 0,
    CONTENT: 200,
    TEAM_SECTION: 400,
    TEAM_MEMBER_1: 600,
    TEAM_MEMBER_2: 750,
    TEAM_MEMBER_3: 900,
  },
  
  NEWS: {
    HERO: 0,
    FILTER_SECTION: 200,
    ARTICLE_1: 400,
    ARTICLE_2: 550,
    ARTICLE_3: 700,
    ARTICLE_4: 850,
    ARTICLE_5: 1000,
    ARTICLE_6: 1150,
  },
  
  CONTACT: {
    HERO: 0,
    CONTACT_INFO: 200,
    CONTACT_FORM: 400,
    FORM_FIELD_1: 600,
    FORM_FIELD_2: 750,
    FORM_FIELD_3: 900,
    SUBMIT_BUTTON: 1050,
  },
  
  FOOTER: {
    LOGO: 0,
    NAVIGATION_1: 200,
    NAVIGATION_2: 350,
    NAVIGATION_3: 500,
    SOCIAL: 650,
    COPYRIGHT: 800,
  }
} as const;

// Helper function to get staggered delay for list items
export const getStaggerDelay = (index: number, baseDelay: number = 0, stagger: number = ANIMATION_SEQUENCES.STAGGER_DELAY) => {
  return baseDelay + (index * stagger);
};

// Helper function to get sequential delay for components
export const getSequentialDelay = (step: number, baseDelay: number = ANIMATION_SEQUENCES.BASE_DELAY) => {
  return step * baseDelay;
};