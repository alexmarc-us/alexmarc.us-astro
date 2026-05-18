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
    youtube?: string;
    linkedin?: string;
    email?: string;
    mastodon?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Alex Marcus",
  description: "The portfolio of Alex Marcus. Showcasing projects in software development, visual design, and more.",
  author: {
    name: "Alex Marcus",
    bio: "Engineering leader with 19 years of experience delivering enterprise-scale web and platform applications across Starbucks, Adobe, Expedia, and consulting environments.",
    avatar: "/photos/headshot.jpg"
  },
  social: {
    github: "https://github.com/alexmarc-us/",
    linkedin: "https://www.linkedin.com/in/amarcus/",
    email: "mr@alexmarc.us",
    youtube: "https://www.youtube.com/@optimarcusprime",
    mastodon: "https://sunny.garden/@optimarcusprime",
  },
  siteUrl: "https://alexmarc.us/"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;