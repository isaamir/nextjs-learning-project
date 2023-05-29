import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

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