import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ messege: 'Hello World' }));
export default routes;
