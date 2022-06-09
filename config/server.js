module.exports = ({ env }) => ({
  host: env('APP_HOST', '172.20.10.4'),
  port: env.int('NODE_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
