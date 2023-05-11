import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'
import RoleExample from './RoleExample'

it('can find element by role', () => {
	render(<RoleExample />)

	const roles = [
		'link',
		'button',
		'contentinfo',
		'heading',
		'banner',
		'img',
		'checkbox',
		'spinbutton',
		'radio',
		'textbox',
		'listitem',
		'list'
	]

	for (const role of roles) {
		const el = screen.getByRole(role)

		expect(el).toBeInTheDocument()
	}
})
