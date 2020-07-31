import React, {useRef, useState} from 'react';
import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});
	const {username, email} = inputs;
	const onChange = e => {
		const {name, value} = e.target;
		setInputs({
			...inputs,
			[name]: value
		})
	}
	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'grace',
			email: 'govlmo91@gmail.com'
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@email.com'
		},
		{
			id: 3,
			username: 'admin',
			email: 'admin@email.com'
		}
	]);
	
	
	const nextId = useRef(4);
	const onCreate = () => {
		const user = {
			id: nextId.current,
			username,
			email,
		};
		setUsers([
			...users,
			user
		]);
		
		setInputs({
			username: '',
			email: ''
		});
		nextId.current += 1;
	};
	
	return (
		<Wrapper>
			<Hello name='react' color='red' isSpacial={true}/>
			<Hello color='pink'/>
			<br/>
			<Counter/>
			<br/>
			<InputSample/>
			<br/>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UserList users={users}/>
		</Wrapper>
	)
}

export default App;
