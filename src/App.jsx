import Layout from './components/layout/layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NewPost from './components/pages/NewPost';
import PostInfo from './components/pages/PostInfo';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/post' exact>
            <NewPost />
          </Route>
          <Route path='/post/:id'>
            <PostInfo />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
