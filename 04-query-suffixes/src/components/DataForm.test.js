import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import DataForm from './DataForm'

it('selecting different element', () => {
	render(<DataForm />)

	const elements = [
		screen.getByRole('button'),
		screen.getByText(/enter/i),
		screen.getByLabelText(/email/i),
		screen.getByPlaceholderText('Red'),
		screen.getByDisplayValue('asd@gmail.com'),
		screen.getByAltText('data'),
		screen.getByTitle(/ready to submit/i),
		screen.getByTestId('image wrapper')
	]

	for (const element of elements) {
		expect(element).toBeInTheDocument()
	}
})

it('watch any change in email input', async () => {
	render(<DataForm />)

	const emailInput = screen.getByRole('textbox', { name: /email/i })
	expect(emailInput).toHaveValue('asd@gmail.com')

	await user.click(emailInput)

	// reset input
	emailInput.setSelectionRange(0, emailInput.value.length)

	await user.keyboard('john@gmail.com')

	expect(screen.getByDisplayValue('john@gmail.com')).toBeInTheDocument()
	expect(emailInput).toHaveValue('john@gmail.com')
})
