import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './components/pages/HomePage';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  )
}

export default App
