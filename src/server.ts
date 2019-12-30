import Express from 'express';
import rootContoller from './controllers/rootContoller';

const app = Express();

// setup static folder
app.use(Express.static('dist'));

// router
app.get('/', rootContoller);

app.listen(process.env.PORT || 3000, () => {
  const { log } = console;
  log(`express app is started on port ${process.env.PORT || 3000}.`);
});
