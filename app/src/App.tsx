import Menu from './components/Menu';

import React, { Component } from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Auth from './helpers/Auth'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// Pages
import Login from './pages/Login';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostCreate from './pages/PostCreate';

interface PrivateRouteInterface {
  component: any;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteInterface) => (
  <Route {...rest} render={props =>
    Auth.isAuth() ?
      <Component {...props} />
      : <Redirect from="/login" to="/login" exact />
  } />
);

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          {/* {Auth.isAuth() ?
            <Menu />
            : ''} */}
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/" component={PostList} exact />
            <PrivateRoute path="/create-post" component={PostCreate} exact />
            <PrivateRoute path="/post-detail/:id" component={PostDetail} exact />
            {/* <PrivateRoute path="/page" component={Page} exact /> */}
            {/* <Route path="/page/:name" component={Page} exact /> */}
            {/* <Redirect from="/" to="/page/Inbox" exact /> */}
            {/* <Redirect from="/" to="/login" exact /> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
