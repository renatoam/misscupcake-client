---
id: 4eklbrqs
title: Miss Cupcake Front-End
file_version: 1.1.2
app_version: 1.10.3
---

The main purpose of this app is to create a solid Front-End architecture to demonstrate some patterns and approaches to develop robust and consistent applications. I hope to share some best practices and some of my experience with it.

## Starting from the beginning

As usual, the `App` component is the first component in our app. So every wrapper (HOC) for the entire app should be placed here.

<br/>

In the app's entry point, we put every provider as a wrapper for the `App`<swm-token data-swm-token=":src/App.tsx:8:2:2:`function App() {`"/> component. For example, the React Query provider, the React Router DOM provider, and also our own custom Contexts.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/App.tsx
```tsx
8      function App() {
9        return (
10         <QueryClientProvider client={queryClient}>
11           <AuthContextProvider>
12             <EditContextProvider>
13               <RouterProvider router={router} />
14             </EditContextProvider>
15           </AuthContextProvider>
16         </QueryClientProvider>
17       )
18     }
```

<br/>

### Routes

Next.js is in vogue nowadays and I also love it, of course. But for this project I have choose to use React Router DOM for my routes since I think the learning curve for the Next's File System Routing is quite short, so people mostly will not face many difficults dealing with it. With React Router, otherwise, they can struggle to configure in the first time.

<br/>

There are two ways for configuring the routes, by using pure JSX or by using the approach below. I prefer this approach below because **_for me_** it is easier to handle. But I think it is completely fine if you prefer the other way.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/router.tsx
```tsx
7      const router = createBrowserRouter([
8        {
9          path: '/',
10         element: <><Outlet /></>,
11         children: [
12           {
13             index: true,
14             element: <HomePageContextProvider children={<HomePage />} />,
15           },
16           {
17             path: 'product/:id',
18             element: <ProductDetailsPage />
19           }
20         ]
21       }
22     ])
```

<br/>

## Styling

I love CSS, so I enjoy writing pure CSS. But I love to have extra powers doing this, so, naturally, I also love Sass. And that is my choice for the most of my projects.

### Reset

I have a pretty broader _reset_ file with lots of resets and presets:

<br/>

Reseting all spacing and setting the proper box sizing.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/styles/_reset.scss
```scss
10     /* Preferred box-sizing value */
11     *,
12     *::before,
13     *::after {
14       box-sizing: border-box;
15       margin: 0;
16       padding: 0;
17       margin-inline: 0;
18       margin-block: 0;
19       padding-block: 0;
20       padding-inline: 0;
21     }
```

<br/>

Since I like to use `rem`, I set this value for the root, so that I can use multiples by 10 to calculate the font size. For example, if I need `20px` I can set font size as `2rem`.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/styles/_reset.scss
```scss
23     /* My preferred font-size, because I can use rem by multiplying by 10 */
24     html {
25       font-size: 62.5%;
26       scroll-behavior: smooth;
27     }
```

<br/>

## Utilities

### Hooks

I have some custom hooks to perform useful and commonly used functions.

<br/>

This is a simple hook to perform requests but it could be quite better and even take advantages of using external tools like React Query and Redux ToolKit.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 src/hooks/useRequest.ts
```typescript
4      export default function useRequest(fetcher: any, options?: unknown) {
5        const [isLoading, setIsLoading] = useState(true)
6        const [error, setError] = useState<AppError | null>(null)
7        const [data, setData] = useState<any>(null)
8      
9        const executeRequest = useCallback(async () => {
10         const response = await fetcher(options)
11     
12         if (response.error) {
13           setError(response)
14           console.error('Notify Error: ', response.message)
15           return
16         }
17     
18         setData(response)
19         setIsLoading(false)
20       }, [])
21     
22       useEffect(() => {
23         executeRequest()
24       }, [])
25     
26       return {
27         error,
28         isLoading,
29         data
30       }
31     }
```

<br/>

## Configuration

I am using Vite for this project. I could use Next or Remix, but I like using Vite, I think it is faster to start coding and easier to configure.

<br/>

This is a standard Vite configuration but I also added some tests config and a resolver for the path alias that I use, they should be the same as they are in the `tsconfig.json` file.
<!-- NOTE-swimm-snippet: the lines below link your snippet to Swimm -->
### 📄 vite.config.ts
```typescript
7      const __filename = fileURLToPath(import.meta.url);
8      const __dirname = path.dirname(__filename);
9      
10     // https://vitejs.dev/config/
11     export default defineConfig({
12       plugins: [react()],
13       publicDir: false,
14       build: {
15         sourcemap: true,
16       },
17       resolve: {
18         alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
19       },
20       test: {
21         globals: true,
22         environment: 'jsdom',
23         setupFiles: './setupTests.js',
24       },
25     })
```

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBbWlzc2N1cGNha2UtY2xpZW50JTNBJTNBcmVuYXRvYW0=/docs/4eklbrqs).
