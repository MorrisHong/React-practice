import React, {useRef, useState} from 'react';
import './App.css';
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
			email: 'govlmo91@gmail.com',
			active: true
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@email.com',
			active: false
		},
		{
			id: 3,
			username: 'admin',
			email: 'admin@email.com',
			active: false
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
	
	const onRemove = (id) => {
		console.log('onRemove!')
		setUsers(users.filter(user => user.id !== id));
	};
	const onToggle = (id) => {
		console.log('onToggle!')
		setUsers(
			users.map(user =>
				user.id === id
					? {...user, active : !user.active}
					: user
			)
		)
	}
	
	return (
		<>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
		</>
	)
}

export default App;
