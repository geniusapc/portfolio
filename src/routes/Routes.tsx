import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFountPage/NotFoundPage';

const Home = React.lazy(() => import('../pages/Home/Home'));

const FallBackIcon = <div>Loading ...</div>;

const Routes:React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={FallBackIcon}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;