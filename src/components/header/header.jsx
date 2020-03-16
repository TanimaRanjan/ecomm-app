import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // connect is hoc that lets us have access to redux
import CartIcon from '../cart-icon/cart-icon'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import {auth} from '../../firebase/firebase.util'

// import './header.scss'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDivContainer, OptionLinkContainer} from './header.styles'


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to ="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLinkContainer to ="/shop" >
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to ="/shop" >
                CONTACT
            </OptionLinkContainer>
            {
                currentUser ? 
                <OptionLinkContainer as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLinkContainer>
                : 
                <OptionLinkContainer to='/signInUp'>SIGN IN</OptionLinkContainer>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : 
            <CartDropdown />
        }
    </HeaderContainer>

)

// function that allows s to access state
// state being the reducer
// 
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);