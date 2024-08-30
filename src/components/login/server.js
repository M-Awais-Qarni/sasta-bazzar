// server.js
import { create, router as _router, defaults, bodyParser } from 'json-server';
const server = create();
const router = _router('login.json');
const middlewares = defaults();

server.use(bodyParser);

server.post('/logins', (req, res) => {
  const { Username, Password } = req.body;
  const logins = router.db.get('logins').value();

  const isValidUser = logins.some((login) => login.Username === Username && login.Password === Password);

  res.json({ success: isValidUser });
});

server.use(middlewares);
server.use(router);

const port = 3030;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
