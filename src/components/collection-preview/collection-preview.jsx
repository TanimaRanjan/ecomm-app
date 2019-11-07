import React from 'react'

import CollectionItem from '../collection-item/collection-item'

import './collection-preview.scss'

const CollectionPreview = ({title, items}) => {
  //  console.log('Collection preview')    
    return   (
    <div className="collection-preview">
        <div className="title"><h1>{title.toUpperCase()}</h1></div>
        <div className="preview">
            {items
                .filter((item, index) => index<4)
                .map(({id, ...itemProps}) => 
                    <CollectionItem  key={id} {...itemProps} ></CollectionItem>
                    )}
        </div>
    </div>
)}

export default CollectionPreview;