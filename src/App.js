import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './views/Home'
import Search from './views/Search'
import Provider, {InContext} from './provider/provider-index'
import '../src/styles/App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider>
            <Switch>
                <Route 
                  exact path={'/'} 
                  render={() => (
                    <InContext.Consumer>
                      {context => <Home {...context} />}
                    </InContext.Consumer>
                  )}
                />
               <Route 
                  exact path={'/search'} 
                  render={() => (
                    <InContext.Consumer>
                      {context => <Search {...context} />}
                    </InContext.Consumer>
                  )}
               />
            </Switch>
       </Provider>
      </div>
    )
  }
}

export default BooksApp
