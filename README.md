# Serenade Singers

A Next.js website for Serenade Singers, presenting choir activities, music classes, events, and membership registration.

## Features

- Organization introduction and choir information.
- Activities, blog, events, classes, and members pages.
- Membership sign-up form with file-to-Base64 conversion.
- Google Apps Script submission endpoint.
- Configurable contact and social links.

## Stack

Next.js, React, TypeScript, Framer Motion, and Lucide icons.

## Local development

Use Node.js 22 and npm:

```bash
git clone https://github.com/Eric9435/serenade-singers.git
cd serenade-singers/serenade-singers
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to check the application, then `npm run start` to serve a successful build.

## Configuration

Create `.env.local` in the inner application directory:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your_contact_email
NEXT_PUBLIC_FACEBOOK_LINK=your_facebook_url
NEXT_PUBLIC_INSTAGRAM_LINK=your_instagram_url
NEXT_PUBLIC_TELEGRAM_LINK=your_telegram_url
NEXT_PUBLIC_APPS_SCRIPT_URL=your_deployed_web_app_url
```

These are browser-visible values. The Apps Script endpoint must be deployed separately and accept the payload sent by `src/app/signup/page.tsx`. Configure its access policy and verify a submission before opening registration.

## Repository map

- `serenade-singers/src/app/` — public pages and sign-up interface.
- `serenade-singers/src/components/` — navigation and shared cards.
- `serenade-singers/src/data/` — site settings and page content.
- `serenade-singers/public/` — public assets.

## Verification

Check contact links, event details, mobile navigation, and registration delivery. A visible success state should be verified against the destination spreadsheet. No automated test script is defined; lint and build are available.

## Maintainer

[Aung Phone Myat (Eric)](https://github.com/Eric9435)
