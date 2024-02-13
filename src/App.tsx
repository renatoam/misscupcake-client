import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { DevTools } from 'jotai-devtools'
import { queryClient } from './config';
import { EditContextProvider } from './contexts/EditContext';
import router from './router';
import { AuthContextProvider } from './contexts/AuthContext';
import { CartContainerProvider } from './app/cart/main/activeCart.container';
import { getAccount } from './states/account';

function App() {
  const { id } = getAccount()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <EditContextProvider>
            <CartContainerProvider customerId={id}>
              <RouterProvider router={router} />
            </CartContainerProvider>
          </EditContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
      <DevTools />
    </>
  )
}

export default App
