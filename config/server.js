module.exports = ({ env }) => ({
  host: env('APP_HOST', 'https://dev-news-app.herokuapp.com/'),
  port: env.int('NODE_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
