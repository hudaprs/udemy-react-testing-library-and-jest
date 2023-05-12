import { screen, render } from '@testing-library/react'
import RepositoriesSummary from './RepositoriesSummary'

it('displays information about the repository', () => {
	const repository = {
		language: 'JavaScript',
		stargazers_count: 2,
		open_issues: 5,
		forks: 30
	}
	render(<RepositoriesSummary repository={repository} />)

	for (const key in repository) {
		const value = repository[key]
		const el = screen.getByText(new RegExp(value))

		expect(el).toBeInTheDocument()
	}
})
