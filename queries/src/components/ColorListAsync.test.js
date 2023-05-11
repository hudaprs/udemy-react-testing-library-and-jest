import { screen, render } from '@testing-library/react'
import ColorListAsync from './ColorListAsync'

it('findBy is for element is EVENTUALLY exists', async () => {
	render(<ColorListAsync />)

	expect(await screen.findAllByRole('listitem')).toHaveLength(3)
})
