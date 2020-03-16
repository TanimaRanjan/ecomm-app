import React from 'react'

import './custom-button.scss'

import {CustomerButtonContainer} from './custom-button.styles'  

const CustomButton = ({children, ...props})  => (

    <CustomerButtonContainer {...props}>
            {children}
    </CustomerButtonContainer>
)

export default CustomButton;