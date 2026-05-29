# GET ON Rollers — geton.co.th

เว็บไซต์แคตตาล็อกผลิตภัณฑ์ของ GET ON Rollers (ล้อบานเลื่อน ล้อรางแขวน) แทนที่เว็บ WordPress เดิม (getonrollers.com)

## Stack

- **Astro 5** (static site)
- **Tailwind CSS 3** via `@astrojs/tailwind`
- **@astrojs/sitemap**
- Content เป็น Markdown content collections (ไม่มี backend/DB)
- Deploy บน **Vercel** — custom domain `geton.co.th`

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # preview build
```

## Structure

```
src/
├── components/   Header, Footer, FloatingContact, ProductCard, SkillBar
├── layouts/      BaseLayout (SEO meta, fonts)
├── content/      products/*.md (12), pages/*.md (about, contact)
├── pages/        index, about, contact, products/, products/[slug]
└── styles/       global.css (brand theme)
public/images/    products, brand, about
```
