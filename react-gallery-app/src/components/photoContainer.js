// library Import
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// Component Import
import Photo from './photo.js'
import NotFound from './notFound.js'

const PhotoContainer = (props) => {
    //Creates variables to hold new photo componenets and api fetch results
    const data = props.results
    const photoComponenets = []

    // If results for photos exist then pass Photo componenet to photoComponenets array or NotFound componenet if no results
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

    // render is loading paragraph when photos are being fetched and render query prop as title and photoComponenets array when loading is completed
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