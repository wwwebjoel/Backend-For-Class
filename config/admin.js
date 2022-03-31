module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c995cfbd6cb72fb41fc244f12bacea52'),
  },
});
