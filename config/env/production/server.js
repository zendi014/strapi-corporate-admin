module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    admin: {
        auth: {
          secret: env('ADMIN_JWT_SECRET', '2834bae88bc07f5b2e262409cefd6f4f'),
        },
    },
});