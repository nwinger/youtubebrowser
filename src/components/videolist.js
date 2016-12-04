import React from 'react';
import VideoListItem from './videolistitem';
import _ from 'lodash';

const VideoList = (props) => {
    const videoItems = _.map(props.videos, (video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;