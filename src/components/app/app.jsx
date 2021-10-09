import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AppRoute } from '../../const';
import OfferScreen from '../offer-screen/offer-screen';
import PageLayout from '../page-layout/page-layout';
import UnderConstructionScreen from '../under-construction-screen/under-construction-screen';

function App() {
  return (
    <PageLayout>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Redirect to={AppRoute.AUTO} />
        </Route>
        <Route exact path={AppRoute.AUTO}>
          <OfferScreen />
        </Route>
        <Route>
          <UnderConstructionScreen />
        </Route>
      </Switch>
    </PageLayout>
  );
}

export default App;
