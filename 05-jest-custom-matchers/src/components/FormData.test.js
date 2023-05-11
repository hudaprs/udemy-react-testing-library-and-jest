import { screen, render, within } from '@testing-library/react'
import FormData from './FormData'

it('the form display two buttons', () => {
	render(<FormData />)

	const form = screen.getByRole('form')
	const buttons = within(form).getAllByRole('button')

	expect(buttons).toHaveLength(2)
})

it('the form display two buttons (checking with jest custom matchers)', () => {
	render(<FormData />)

	const form = screen.getByRole('form')

	expect(form).toContainRole('button', 1)
})
