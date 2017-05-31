import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		// below, getting the prop that App component sets for us
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag} //etag comes from Youtube API
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