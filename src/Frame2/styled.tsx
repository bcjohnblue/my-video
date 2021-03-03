import styled from 'styled-components';

const Styled = {
	Container: styled.div`
		display: flex;
		justify-content: center;
		width: 100%;
	`,
	TextContainer: styled.div`
		position: absolute;
		bottom: 0;
		justify-content: center;
	`,
	Text: styled.h3`
		font-family: 'SF Pro Text, Helvetica, Arial';
		font-weight: bold;
		font-size: 50px;
		text-align: center;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 100px;
	`,
};

export default Styled;
