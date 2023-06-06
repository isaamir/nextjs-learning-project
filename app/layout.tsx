import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

// To improve SEO , we can define metadata in 2 ways: static and dynamic
// 1 Static Metadata
// 2. Dynamic Metadata

// for static
// export const metadata = {
//   title: 'Home'
// }
// output is :
{/* <head> 
  <title>Home</title>
</head> */}

// for dynamic
// export async function generateMetadata({params, searchParams}: any) {
  // const product = await getProduct(params.id);
  // return { title: product.id}
// }

// output is :
{/* <head> 
  <title>My Unique Product</title>
</head> */}

// All the consistant data, which stays same in all routes, needs to be in the layout file
const RootLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <html lang="en">
      <Provider>
        
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
        </body>

        <main className="app">
            <Nav />
            {children}
        </main> 
        </Provider>
    </html>
  )
}

export default RootLayout