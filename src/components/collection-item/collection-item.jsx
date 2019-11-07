import React from 'react'

import './collection-item.scss'

const CollectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="collection-image" 
        style={{backgroundImage:`url(${imageUrl})`}}>
            <button className="collection-cart">Add to cart</button>
        </div>
        <div className="collection-footer">
        <span className="collection-name">{name.toUpperCase()}</span>
        <span className="collection-price">{price}</span>
        </div>
    </div>
    
)

export default CollectionItem