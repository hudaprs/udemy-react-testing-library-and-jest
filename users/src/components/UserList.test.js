import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

// For logging in online code editor
// Recommended to see suggestion, for which component element to test
// screen.logTestingPlaygroundURL()

const renderComponent = () => {
	const users = [
		{ name: 'john', email: 'john@gmail.com' },
		{ name: 'jane', email: 'jane@gmail.com' }
	]
	render(<UserList users={users} />)

	return { users }
}

test('render one row per user', () => {
	renderComponent()

	const rows = within(screen.getByTestId('users')).getAllByRole('row')

	expect(rows).toHaveLength(2)
})

test('render the email and name of each user', () => {
	const { users } = renderComponent()

	for (const user of users) {
		const name = screen.getByRole('cell', { name: user.name })
		const email = screen.getByRole('cell', { name: user.email })

		expect(name).toBeInTheDocument()
		expect(email).toBeInTheDocument()
	}
})
