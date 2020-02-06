import React from 'react'

import Photo from './photo.js'
import NotFound from './notFound.js'

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <NotFound />
            </ul>
        </div>
    );
}

export default PhotoContainer;