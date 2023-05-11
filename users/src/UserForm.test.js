import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

it('UserForm should contain two inputs and one button', () => {
  // Render component that you want to test
  render(<UserForm />)

  // Manipulate the component or find element in it
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  // Make an assertion, or tell component should behave
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

it('UserForm should be call onUserAdd when the form is submitted', async () => {
  // Mocks
  const onUserAddMock = jest.fn()

  // Render component that you want to test
  render(<UserForm onUserAdd={onUserAddMock} />)

  // Find the inputs
  const nameInput = screen.getByRole('textbox', {
    name: /name/i
  })
  const emailInput = screen.getByRole('textbox', {
    name: /email/i
  })

  // Simulate the input name
  await user.click(nameInput)
  await user.keyboard('john')

  // Simulate the input email
  await user.click(emailInput)
  await user.keyboard('john@gmail.com')

  // Find the button
  const button = screen.getByRole('button')

  // Simulate the button
  await user.click(button)

  // Assertion
  expect(onUserAddMock).toHaveBeenCalled()
  expect(onUserAddMock).toHaveBeenCalledWith({
    name: 'john',
    email: 'john@gmail.com'
  })
})

it('name and email inputs should be have no value after adding a new user', async () => {
  render(<UserForm onUserAdd={() => {}} />)

  const nameInput = screen.getByRole('textbox', { name: /name/i })
  const emailInput = screen.getByRole('textbox', { name: /email/i })
  const button = screen.getByRole('button')

  await user.click(nameInput)
  await user.keyboard('john')
  await user.click(emailInput)
  await user.keyboard('john@gmail.com')
  await user.click(button)

  expect(nameInput).toHaveValue('')
  expect(emailInput).toHaveValue('')
})
