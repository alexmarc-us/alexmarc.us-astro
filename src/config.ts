export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Alex Marcus",
  description: "The portfolio of Alex Marcus: Software, Design, and Team Organization.",
  author: {
    name: "Alex Marcus",
    bio: "Software engineer joining the worlds of technology, design, and team organization to deliver innovative applications.",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/alexmarc-us/",
    linkedin: "https://www.linkedin.com/in/amarcus/",
    email: "mr@alexmarc.us"
  },
  siteUrl: "https://alexmarc.us/"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;