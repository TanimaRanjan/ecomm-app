import React from 'react'

import MenuDirectory from '../../components/directory/menu-directory'

// import './homepage.scss'
import {HomePageContainer} from './homepage.styles'

const HomePage = () => {
    return (
    <HomePageContainer>
        <MenuDirectory />
    </HomePageContainer>
    )
}

export default HomePage