import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom';

import Photo from './photo.js'
import NotFound from './notFound.js'

const PhotoContainer = (props) => {

    const photoComponenets = []

    if (props.results.length > 0) {
        for (let i = 0; i < props.results.length; i++) {
            let url = `https://farm${props.results[i].farm}.staticflickr.com/${props.results[i].server}/${props.results[i].id}_${props.results[i].secret}.jpg`
            photoComponenets.push(
                <Photo url={url} key={props.results[i].id} />
            )
        }
    } else {
        photoComponenets.push( <NotFound /> )
    }

    return (
        < div className = "photo-container" >
            {   (props.isLoading)
                ? <p className="loading">Photos are loading....</p>
                :
                <Fragment>
                    <h2>{props.tag}</h2>
                    <ul>
                        {photoComponenets}
                    </ul>
                </Fragment>
            }
        </div >
    );
}

export default withRouter(PhotoContainer);