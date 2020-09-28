const router = require('express').Router();

const routes = ['users', 'login'];

for (let route of routes) {
  console.log(route);
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
