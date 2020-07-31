import React from 'react';
import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";

function App() {
	return (
		<Wrapper>
			<Hello name='react' color='red' isSpacial={true}/>
			<Hello color='pink'/>
			<br/>
			<Counter/>
			<br/>
			<InputSample/>
		</Wrapper>
	)
}

export default App;
