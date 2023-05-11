import { useState } from 'react'

const DataForm = () => {
	const [email, setEmail] = useState('asd@gmail.com')

	return (
		<form>
			<h3>Enter Data</h3>

			<div data-testid='image wrapper'>
				<img alt='data' src='data.jpeg' />
			</div>

			<label htmlFor='email'>Email</label>
			<input
				id='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>

			<label htmlFor='color'>Color</label>
			<input id='color' placeholder='Red' />

			<button title='Click when ready to submit'>Submit</button>
		</form>
	)
}

export default DataForm
