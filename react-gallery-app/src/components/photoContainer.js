import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './photo.js'
import NotFound from './notFound.js'

const PhotoContainer = (props) => {

    const data = props.results
    const title = props.match.params.tag
    const photoComponenets = []

    if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
            let url = `https://farm${data[i].farm}.staticflickr.com/${data[i].server}/${data[i].id}_${data[i].secret}.jpg`
            photoComponenets.push(
                <Photo url={url} key={data[i].id} />
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
                    <h2>{props.query}</h2>
                    <ul>
                        {photoComponenets}
                    </ul>
                </Fragment>
            }
        </div >
    );
}

export default withRouter(PhotoContainer);