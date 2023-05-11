import { screen, render } from '@testing-library/react'
import ColorList from './ColorList'

it('getBy, queryBy, findBy finding 0 element', async () => {
	render(<ColorList />)

	// This will be thrown an error
	// Note: Using getByRole
	// If element not exists, test will failed
	expect(() => screen.getByRole('textbox')).toThrow()

	// This will not be throw any error
	// Note: using queryByRole
	// If element not exists, this will throw null
	expect(screen.queryByRole('textbox')).toEqual(null)

	// This will be async, and must wait for couple seconds
	// Note: using findByRole
	// If element not exists, this will be throw an error
	// But, recommended to use try catch to try the error or the error assertion
	let isThrowError = false
	try {
		await screen.findByRole('textbox')
	} catch (err) {
		isThrowError = true
	}
	expect(isThrowError).toBeTruthy()
})

it('getBy, queryBy, findBy finding 1 element', async () => {
	render(<ColorList />)

	expect(screen.getByRole('list')).toBeInTheDocument()
	expect(await screen.findByRole('list')).toBeInTheDocument()
	// eslint-disable-next-line
	expect(screen.queryByRole('list')).toBeInTheDocument()
})

it('getBy, queryBy, findBy, finding > 1 elements', async () => {
	render(<ColorList />)

	expect(() => screen.getByRole('listitem')).toThrow()
	// eslint-disable-next-line
	expect(() => screen.queryByRole('listitem')).toThrow()

	let isThrowError = false
	try {
		await screen.findByRole('listitem')
	} catch (err) {
		isThrowError = true
	}
	expect(isThrowError).toBeTruthy()
})

it('getAllBy, queryAllBy, findAllBy, finding > 1 elements', async () => {
	render(<ColorList />)

	expect(screen.getAllByRole('listitem')).toHaveLength(3)
	expect(screen.queryAllByRole('listitem')).toHaveLength(3)
	expect(await screen.findAllByRole('listitem')).toHaveLength(3)
})

it('getBy is for proving element IS exists', () => {
	render(<ColorList />)

	expect(screen.getByRole('list')).toBeInTheDocument()
})

it('queryBy is for proving element NOT exists', () => {
	render(<ColorList />)

	expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
})
