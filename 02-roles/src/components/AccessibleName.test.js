import { screen, render } from '@testing-library/react'
import AccessibleName from './AccessibleName'

it('can select element by name', () => {
	render(<AccessibleName />)

	const submitButton = screen.getByRole('button', { name: /submit/i })
	const cancelButton = screen.getByRole('button', { name: /cancel/i })

	expect(submitButton).toBeInTheDocument()
	expect(cancelButton).toBeInTheDocument()
})

it('can be select element by name (input)', () => {
	render(<AccessibleName />)

	const nameInput = screen.getByRole('textbox', { name: /name/i })
	const emailInput = screen.getByRole('textbox', { name: /email/i })

	expect(nameInput).toBeInTheDocument()
	expect(emailInput).toBeInTheDocument()
})

it('can be select element by aria-label (button)', () => {
	render(<AccessibleName />)

	const signInButton = screen.getByRole('button', { name: /sign in/i })
	const signOutButton = screen.getByRole('button', { name: /sign out/i })

	expect(signInButton).toBeInTheDocument()
	expect(signOutButton).toBeInTheDocument()
})
