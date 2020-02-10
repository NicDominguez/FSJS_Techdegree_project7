import React from 'react'

import Photo from './photo.js'
import NotFound from './notFound.js'

const PhotoContainer = (props) => {

    const photoComponenets = []

    for (let i = 0; i < props.results.length; i++) {
        photoComponenets.push(
            <Photo 
                url={`https://farm${props.results[i].farm}.staticflickr.com/${props.results[i].server}/${props.results[i].id}_${props.results[i].secret}.jpg`} key={props.results[i].id}
            />
        )
    }

    return (
        <div className="photo-container">
            <h2>{props.tag}</h2>
            <ul>
                {photoComponenets}

                <NotFound />
            </ul>
        </div>
    );
}

export default PhotoContainer;