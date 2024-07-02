This is a Next.js Application utilizing Clerk Authentication

## Getting Started with this Template

First, clone this repository:

```bash
git clone https://github.com/Agustine-dev/Nextjs-Auth-with-Clerk.git
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://go.clerk.com/31bREJU).
2. Go to the [Clerk dashboard](https://go.clerk.com/4I5LXFj) and create an application.
3. Set the required Clerk environment variables
4. Create a .env file and add the variables
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="__TEST_KEY__"
   CLERK_SECRET_KEY="__TEST_SECRET"
   ```  
6. Go to "Organization Settings" in your sidebar and enable Organizations
7. `npm install` the required dependencies.
8. `npm run dev` to launch the development server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
