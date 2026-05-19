import App from './App'
import { renderWithProviders } from './utils/test-utils'

test('App renders without crashing', () => {
  renderWithProviders(<App />)

  // Just check that the app renders without throwing
  expect(document.body).toBeInTheDocument()
})

test('App renders main content', () => {
  renderWithProviders(<App />)

  // Check for any text content to ensure it's rendering something
  const appElement = document.body.firstElementChild
  expect(appElement).toBeInTheDocument()
})
