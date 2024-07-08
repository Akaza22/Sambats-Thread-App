import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'

export const metadata  = {
    title: 'Sambats',
    description: 'Sambats Threads App'
}


const inter = Inter({subsets: ['latin']})

export default function RootLayout({ 
    children 
}: {
    children: React.ReactNode
}){
    return(
        <ClerkProvider>
            <html lang="en">
            <head>
                 <link rel="icon" href="/assets/favicon.ico" sizes='any' />
            </head>
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}