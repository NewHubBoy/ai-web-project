export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  category?: string;
  categoryTitle?: string;
  categoryDescription?: string;
  title?: string;
  standard?: boolean;
  description?: string;
  children?: NavLink[];
}
