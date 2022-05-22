import Footer from "../Components/Footer";
import Header from "../Components/Header";


export default function Layout({children}) {
  return (
    <div className='layout' >
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
}
