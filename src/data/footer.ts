import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "L'intelligence de progression pour les sportifs sérieux qui veulent vraiment progresser en musculation.",
  quickLinks: [
    {
      text: "Fonctionnalités",
      url: "#features",
    },
    {
      text: "Tarifs",
      url: "#pricing",
    },
    {
      text: "Avis",
      url: "#testimonials",
    },
  ],
  email: "contact@Altère.app",
  telephone: "+33 1 23 45 67 89",
  socials: {
    // github: 'https://github.com',
    // x: 'https://twitter.com/x',
    twitter: "https://twitter.com/Twitter",
    facebook: "https://facebook.com",
    // youtube: 'https://youtube.com',
    linkedin: "https://www.linkedin.com",
    // threads: 'https://www.threads.net',
    instagram: "https://www.instagram.com",
  },
};
