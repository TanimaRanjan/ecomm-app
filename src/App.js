import React from 'react';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop-page/shop-page'
import Header from './components/header/header'
import SignInUp from './pages/sign-in-up/sign-in-up'
import {auth , createUserProfileDocument} from './firebase/firebase.util'


import './App.css';

class App extends React.Component {

  constructor() {
    super() 

    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signInUp' component={SignInUp} />
      </Switch>
    </div>
  );
  }
}

export default App;
