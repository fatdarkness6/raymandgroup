// vite.config.js
export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: ["localhost", "127.0.0.1", ".loca.lt"],
  },
};
// npx nuxt dev --host 0.0.0.0 --port 3000
