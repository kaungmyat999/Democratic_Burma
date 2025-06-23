// Central image configuration and imports
export const images = {
  // Hero and banner images
  hero: {
    main: "/images/hero/burma-democracy-rally.jpg",
    about: "/images/hero/about-hero.jpg",
    contact: "/images/hero/contact-hero.jpg",
    getInvolved: "/images/hero/get-involved-hero.jpg",
    news: "/images/hero/news-hero.jpg",
  },

  // Team member photos
  team: {
    aungMin: "/images/team/aung-min.jpg",
    nweNweAye: "/images/team/nwe-nwe-aye.jpg",
    kyawZaw: "/images/team/kyaw-zaw.jpg",
    thinThinAung: "/images/team/thin-thin-aung.jpg",
    zawWin: "/images/team/zaw-win.jpg",
    maySabePhyu: "/images/team/may-sabe-phyu.jpg",
  },

  // Program and activity images
  programs: {
    communityWorkshop: "/images/programs/community-workshop.jpg",
    youthLeadership: "/images/programs/youth-leadership.jpg",
    advocacyCampaign: "/images/programs/advocacy-campaign.jpg",
    civicEducation: "/images/programs/civic-education.jpg",
    volunteers: "/images/programs/volunteers.jpg",
    fundraisingGala: "/images/programs/fundraising-gala.jpg",
  },

  // News article images
  articles: {
    communityWorkshop: "/images/articles/community-workshop-banner.jpg",
    humanRights: "/images/articles/human-rights-statement.jpg",
    internetFreedom: "/images/articles/internet-freedom-report.jpg",
    youthProgram: "/images/articles/youth-leadership-launch.jpg",
  },

  // Partner organization logos
  partners: {
    partner1: "/images/partners/democracy-foundation.png",
    partner2: "/images/partners/human-rights-watch.png",
    partner3: "/images/partners/freedom-house.png",
    partner4: "/images/partners/amnesty-international.png",
    partner5: "/images/partners/open-society.png",
    partner6: "/images/partners/burma-campaign.png",
    partner7: "/images/partners/asean-parliamentarians.png",
    partner8: "/images/partners/international-crisis-group.png",
  },

  // General purpose images
  general: {
    ourStory: "/images/general/our-story-banner.jpg",
    mission: "/images/general/burma-democracy-protest.jpg",
    newsletter: "/images/general/newsletter-signup.jpg",
    mapLocation: "/images/general/office-location-map.jpg",
    supportWork: "/images/general/support-our-work.jpg",
    democraticPrinciples: "/images/general/democratic-principles.jpg",
  },

  // Placeholder fallbacks
  placeholders: {
    hero: "/placeholder.svg?height=600&width=1200&text=Democratic+Burma",
    team: "/placeholder.svg?height=160&width=160&text=Team+Member",
    article: "/placeholder.svg?height=400&width=800&text=Article+Image",
    partner: "/placeholder.svg?height=80&width=160&text=Partner+Logo",
    general: "/placeholder.svg?height=400&width=600&text=Image",
  },
} as const

// Helper function to get image with fallback
export function getImage(imagePath: string, fallbackType: keyof typeof images.placeholders = "general"): string {
  return imagePath || images.placeholders[fallbackType]
}

// Type definitions for better TypeScript support
export type ImageCategory = keyof typeof images
export type ImageKey<T extends ImageCategory> = keyof (typeof images)[T]
