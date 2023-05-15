import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import HomeRoute from './HomeRoute'
import { createServer } from '../../test/server'

createServer([
	{
		path: '/api/repositories',
		res: req => {
			const language = req.url.searchParams.get('q').split('language:')[1]

			return {
				items: [
					{ id: 1, full_name: `${language}_repo_one` },
					{ id: 2, full_name: `${language}_repo_two` }
				]
			}
		}
	}
])

it('every table shows two links of repositories', async () => {
	render(
		<MemoryRouter>
			<HomeRoute />
		</MemoryRouter>
	)

	const languages = ['javascript', 'typescript', 'go', 'rust', 'python', 'java']

	for (const language of languages) {
		const links = await screen.findAllByRole('link', {
			name: new RegExp(`${language}_`)
		})

		expect(links).toHaveLength(2)
		expect(links[0]).toHaveTextContent(`${language}_repo_one`)
		expect(links[1]).toHaveTextContent(`${language}_repo_two`)
		expect(links[0]).toHaveAttribute(
			'href',
			`/repositories/${language}_repo_one`
		)
		expect(links[1]).toHaveAttribute(
			'href',
			`/repositories/${language}_repo_two`
		)
	}
})