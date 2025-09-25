This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## About the project

This project is as much a display of my software engineering skills as any other one included in the protfolio. Despite being a small site, I decided to employ some strategies that challenged me to learn or use different tools that I am used to in my everyday job.

# Next.js and Vercel

I decided to use Next.js and Vercel as they are trendy in the community and I want to learn to use them. The server-side rendering that Next.js offers out of the box is perfect for improving the SEO of the site, making my portfolio discovereable.

My plan is to introduce micro frontends to this site. This would normally be much more useful in a larger application, but it would give me an opportunity to familiarize myself with this architecture pattern.

# Image serving

My pictures come from an iphone. Images are processed via a script as part of the build to convert HEIC to modern image extensions optimised for the web: WebP and AVIF.