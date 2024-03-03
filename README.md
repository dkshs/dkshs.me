# [dkshs.me](https://dkshs.me)

[![license mit](https://img.shields.io/badge/licence-MIT-6C47FF)](LICENSE)

My personal website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and deployed to [Vercel](https://vercel.com/).

## Install and run the project

### Global Dependencies

You need to have a main dependency installed:

- Node.js LTS v18 (or any higher version)

Do you use `nvm`? Then you can run `nvm install` in the project folder to install and use the most appropriate version of Node.js.

### Get the repository

```bash
git clone https://github.com/dkshs/dkshs.me.git
```

### Local Dependencies

So after getting the repository, don't forget to install the project's local dependencies:

```bash
npm install
```

### Environment variables

Create a `.env` file similar to [`.env.example`](./.env.example).

- The required variable is the url to the [formspree](https://formspree.io/) form.
- There are also variables for the site's SEO used in the [`next.config.js`](./next.config.js) files and the [`Meta.tsx`](./src/components/Meta.tsx) component.

```env
NEXT_PUBLIC_FORM_SEND_URL="https://formspree.io/f/<your_id>"

# SEO ENV
# ------------------------------------------------
# these variables are used for the site's SEO
# and are located in the `next.config.js` and `Meta.tsx` component
SITE_NAME=YOUR_SITE_NAME
SITE_LOCALE=en_US
SITE_BASEURL=http://localhost:3000 # in PROD put the URL of your project
```

### Run the project

To run the project locally, just run the command below:

```bash
npm run dev
```

- go to <http://localhost:3000> to see the application.

## License

This project is licensed under the **MIT** License - see the [LICENSE](./LICENSE) file for details
