import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './config';
import { EditContextProvider } from './contexts/EditContext';
import router from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EditContextProvider>
        <RouterProvider router={router} />
      </EditContextProvider>
    </QueryClientProvider>
  )
}

export default App
