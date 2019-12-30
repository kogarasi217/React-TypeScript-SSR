import { Request, Response } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import html from '../views/pages/Sample/html';
import Counter from '../views/components/Counter/Counter';
import Sample from '../views/components/Sample/Sample';

export default (_req: Request, res: Response) => {
  const counter = renderToString(React.createElement(Counter));
  const sample = renderToString(React.createElement(Sample));

  res.send(html({ counter, sample }));
};
