import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import Styled from './styled';

const text = [
	"I'm a front-end engineer",
	'I specialize in developing web application with React and Vue',
];

type Props = {
	titleText: string;
	titleColor: string;
};

export default (({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	// const text = titleText.split(' ').map((t) => ` ${t} `);

	return (
		<Styled.Title>
			<span>{titleText}</span>
		</Styled.Title>
	);
}) as React.FC<Props>;

// export default Video2;
