import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import Frame1 from './Frame1';
import Frame2 from './Frame2';

const Resume: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	// const opacity = interpolate(
	// 	frame,
	// 	[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
	// 	[1, 0],
	// 	{
	// 		extrapolateLeft: 'clamp',
	// 		extrapolateRight: 'clamp',
	// 	}
	// );
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity: 1}}>
				<Sequence from={0} durationInFrames={99}>
					<Frame1 titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={100} durationInFrames={Infinity}>
					<Frame2 />
				</Sequence>

				{/* <Sequence from={0} durationInFrames={videoConfig.durationInFrames}>
					<Logo transitionStart={transitionStart} />
				</Sequence> */}
				{/* <Sequence from={transitionStart + 10} durationInFrames={Infinity}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence> */}
				{/* <Sequence from={transitionStart + 50} durationInFrames={Infinity}>
					<Subtitle />
				</Sequence> */}
			</div>
		</div>
	);
};

export default Resume;
