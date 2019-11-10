import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop-page/shop-page'
import Header from './components/header/header'
import SignInUp from './pages/sign-in-up/sign-in-up'
import {setCurrentUser} from './redux/user/user.action'
import {auth , createUserProfileDocument} from './firebase/firebase.util'


import './App.css';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(
          userAuth
        )
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signInUp' render={
            ()=>this.props.currentUser ? 
              (<Redirect to ='/' />) 
              : (<SignInUp />)} />
      </Switch>
    </div>
  );
  }
}


const mapSateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapSateToProps, mapDispatchToProps)(App);
