import React from 'react'
import {connect} from 'react-redux'


import CustomButton from '../custom-button/custom-button'
import {addItem} from '../../redux/cart/cart.action'

import './collection-item.scss'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
    <div className="collection-item">
        <div className="collection-image" 
        style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="collection-footer">
        <span className="collection-name">{name.toUpperCase()}</span>
        <span className="collection-price">{price}</span>
        </div>
        <CustomButton 
            onClick={() => addItem(item)}
            inverted >ADD TO CART</CustomButton>
    </div>
    
)}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)