module.exports = ({ env }) => ({
  host: env('APP_HOST'),
  port: env.int('NODE_PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
