import { screen, render } from '@testing-library/react'
import RepositoriesListItem from './RepositoriesListItem'
import { MemoryRouter } from 'react-router'

// jest.mock('../tree/FileIcon', () => {
// 	return () => {
// 		return 'File Icon Component'
// 	}
// })

const renderComponent = () => {
	const repository = {
		full_name: 'facebook/react',
		language: 'JavaScript',
		description: 'a JS library',
		owner: {
			login: 'facebook'
		},
		name: 'react',
		html_url: 'https://github.com/facebook/react'
	}
	render(
		<MemoryRouter>
			<RepositoriesListItem repository={repository} />
		</MemoryRouter>
	)

	return { repository }
}

it('should show github link', async () => {
	const { repository } = renderComponent()

	// Note: Activate this line, but remove the jest.mock in line 5
	await screen.findByRole('img', { name: /javascript/i })

	const linkEl = screen.getByRole('link', { name: 'github repository' })
	expect(linkEl).toHaveAttribute('href', repository.html_url)
})

it('should show with correct fileicon according language', async () => {
	renderComponent()

	const iconEl = await screen.findByRole('img', { name: 'JavaScript' })

	expect(iconEl).toHaveClass('js-icon')
})

it('should show a link to code editor', async () => {
	const { repository } = renderComponent()

	await screen.findByRole('img', { name: 'JavaScript' })

	const linkEl = await screen.findByRole('link', {
		name: new RegExp(repository.owner.login)
	})
	expect(linkEl).toHaveAttribute(
		'href',
		`/repositories/${repository.full_name}`
	)
})
