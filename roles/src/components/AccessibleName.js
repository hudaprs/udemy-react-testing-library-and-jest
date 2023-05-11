const AccessibleName = () => {
	return (
		<>
			<button>Submit</button>
			<button>Cancel</button>

			<br />

			<label htmlFor='name'>Name</label>
			<input id='name' />

			<label htmlFor='email'>Email</label>
			<input type='email' id='email' />

			<br />

			<button aria-label='sign in'>
				<svg></svg>
			</button>
			<button aria-label='sign out'>
				<svg></svg>
			</button>
		</>
	)
}

export default AccessibleName
