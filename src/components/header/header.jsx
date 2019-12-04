import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // connect is hoc that lets us have access to redux
import CartIcon from '../cart-icon/cart-icon'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import {auth} from '../../firebase/firebase.util'

import './header.scss'


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className ="logo-container" to ="/" >
            <Logo className="logo" />
        </Link>
        <div className='options'>
            <Link className ='option' to ="/shop" >
                SHOP
            </Link>
            <Link className ='option' to ="/shop" >
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                : 
                <Link className='option' to='/signInUp'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : 
            <CartDropdown />
        }
    </div>

)

// function that allows s to access state
// state being the reducer
// 
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);