import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './config';
import { EditContextProvider } from './contexts/EditContext';
import router from './router';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <EditContextProvider>
          <RouterProvider router={router} />
        </EditContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App
