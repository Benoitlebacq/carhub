export type FooterLink = {
  title: string;
  url: string;
};

export type FooterLinks = Array<FooterLink>;

export type FooterItem = {
  title: string;
  links: FooterLinks;
};
