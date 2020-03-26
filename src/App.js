import React from 'react';
import styled from '@emotion/styled';
import Layout from './components/Layout/Layout';
import Workflow from './containers/Workflow/Workflow';

const AppDiv = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
`

function App() {
	return (
		<AppDiv>
			<Layout>
				<Workflow />
			</Layout>
		</AppDiv>
	);
}

export default App;
