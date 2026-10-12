/** @type {import('tailwindcss').Config} */
// Tailwind stays installed so the shadcn installer finds a config.
// The Arc redesign does not use Tailwind classes or the old custom palette.
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {} },
  plugins: [],
}

export default config
