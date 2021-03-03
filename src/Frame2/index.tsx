import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import Styled from './styled';

const text = [
	"I'm a front-end engineer",
	'I specialize in developing web application with React and Vue',
];

type Props = Record<string, never>;

export default (() => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	// const text = titleText.split(' ').map((t) => ` ${t} `);

	const translateY = interpolate(
		spring({
			frame,
			fps: videoConfig.fps,
			config: {
				damping: 1000,
				mass: 300,
			},
		}),
		[0, 1],
		[400, -350]
	);

	return (
		<Styled.Container>
			<Styled.TextContainer>
				{text.map((t, i) => {
					return (
						<Styled.Text
							key={i}
							style={{
								color: '#000',
								marginLeft: 10,
								marginRight: 10,
								transform: `translateY(${translateY}px)`,
							}}
						>
							{t}
						</Styled.Text>
					);
				})}
			</Styled.TextContainer>
		</Styled.Container>
	);
}) as React.FC<Props>;
