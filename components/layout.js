import Header from './header'
import Footer from './footer'
export default function Layout({children, LayoutProps}){
    return(
        <>
        <Header menu = {LayoutProps}/>
        <main className="container">
            {children}
        </main>
        <Footer/>
        </>
    )
}