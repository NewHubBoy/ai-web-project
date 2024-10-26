export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  category?: string;
  children?: NavLink[];
}
