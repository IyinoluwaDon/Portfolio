export type NavItem = { value: string; label: string; href: string }

// Home is first, as requested. Order matches the original navigation.
export const navItems: NavItem[] = [
  { value: 'home', label: 'Home', href: '/' },
  { value: 'about', label: 'About', href: '/about' },
  { value: 'skills', label: 'Skills', href: '/skills' },
  { value: 'work', label: 'Work', href: '/work' },
  { value: 'experience', label: 'Experience', href: '/experience' },
  { value: 'credentials', label: 'Credentials', href: '/credentials' },
  { value: 'contact', label: 'Contact', href: '/contact' },
]
