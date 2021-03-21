import Header from './header'
import Footer from './footer'

export default function Layout({children}){
    return(
        <>
        <Header/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
    )
}