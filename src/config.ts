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
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Alex Marcus",
  description: "The portfolio of Alex Marcus showcasing projects in software development, visual design, and more.",
  author: {
    name: "Alex Marcus",
    bio: "A software development lead and user experience expert joining the worlds of technology, design, and leadership to deliver innovative applications. Living near Seattle, WA.",
    avatar: "/photos/headshot.jpg"
  },
  social: {
    github: "https://github.com/alexmarc-us/",
    linkedin: "https://www.linkedin.com/in/amarcus/",
    email: "mr@alexmarc.us",
    youtube: "https://www.youtube.com/@optimarcusprime"
  },
  siteUrl: "https://alexmarc.us/"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;