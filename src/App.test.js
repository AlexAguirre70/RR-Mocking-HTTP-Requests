import{render,screen, waitFor} from '@testing-library/react'
import App from './App'

beforeEach(() => {
    // sets everything back to initial state before each test
    fetch.resetMocks();
  })


test("receives GitHub name from GitHub REST API using jest fetch mock", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'AlexAguirre70'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('AlexAguirre70')
  })
test('received  personal GitHub URL', async ()=>{
    fetch.mockResponseOnce(JSON.stringify({html_url:'https:/github.com/AlexAguirre70'}))
    render(<App />)
    const gitHubUrl = await waitFor (() => screen.getByRole('link'))
    expect (gitHubUrl).toHaveAttribute('href', expect.stringContaining('github.com'))
  })
