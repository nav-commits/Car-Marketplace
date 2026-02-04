export interface NavLink {
  name: string;
  href: string;
  icon?: boolean;
  userIcon?: boolean;
  subMenu?: { name: string; href: string }[];
}

export interface NavLinksProps {
  isMobile?: boolean;
}

