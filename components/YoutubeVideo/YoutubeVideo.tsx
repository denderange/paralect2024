type Props = {
	key_Video: string;
	id_Video: string;
};

const YoutubeVideo = ({ key_Video, id_Video }: Props) => {
	return (
		<iframe
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${key_Video}?si=${id_Video}`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	);
};

export default YoutubeVideo;
