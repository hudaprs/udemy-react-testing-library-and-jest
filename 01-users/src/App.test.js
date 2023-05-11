import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('can add user and see the new added user', async () => {
	// Render component that you want to test
	render(<App />)

	// Specify all element that you want to get / test
	const nameInput = screen.getByRole('textbox', { name: /name/i })
	const emailInput = screen.getByRole('textbox', { name: /email/i })
	const button = screen.getByRole('button')

	// Imitate the behavior
	await user.click(nameInput)
	await user.keyboard('john')
	await user.click(emailInput)
	await user.keyboard('john@gmail.com')
	await user.click(button)

	// See if the result of the imitation successfully
	const userName = screen.getByRole('cell', { name: 'john' })
	const userEmail = screen.getByRole('cell', { name: 'john@gmail.com' })

	// Assertion
	expect(userName).toBeInTheDocument()
	expect(userEmail).toBeInTheDocument()
})
