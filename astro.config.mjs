import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), svelte()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});