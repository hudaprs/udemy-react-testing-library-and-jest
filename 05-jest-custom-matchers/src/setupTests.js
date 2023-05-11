// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { screen, within } from '@testing-library/react'

const toContainRole = (container, role, quantity = 1) => {
	const elements = within(container).queryAllByRole(role)

	if (elements.length === quantity) {
		return {
			pass: true
		}
	}

	return {
		pass: false,
		message: () =>
			`Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`
	}
}

expect.extend({ toContainRole })
