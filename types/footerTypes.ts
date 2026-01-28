export interface FooterColumn {
  title: string;
  items: string[];
}

type SocialItem = {
    icon: React.ComponentType;
    label: string;
  };
   
export interface Socials {
  title: string;
  items: SocialItem[];
}
