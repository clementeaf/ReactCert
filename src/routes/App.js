import React,{  Suspense, lazy } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "../assets/styles/App.css"
import PageNotFound from '../components/PageNotFound'
import Coins from '../containers/Coins'
import Loader from '../components/Loader';
import Layout from '../components/Layout'
const Favorites = lazy(() => import('../containers/Favorites'));


const App = () => (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense 
            fallback={
              <div>
                <Loader />
              </div>
          }
          >          
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/" component={Coins}/>
          <Route path="*" component={PageNotFound} />
          </Suspense>
        </Switch>
      </Layout>
    </BrowserRouter>
); 

export default App;
