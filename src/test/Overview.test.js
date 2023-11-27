// eslint-disable-next-line no-unused-vars
import Overview from '../components/Overview/Overview'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(() => {
  cleanup()
})

test('renders Overview component', () => {
  render(<Overview />)
  const appElement = screen.getByTestId('overview')
  expect(appElement).toBeInTheDocument()
})
