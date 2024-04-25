import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import localFont from 'next/font/local'
import NavbarResponsive from '../components/NavbarResponsive'
import FooterResponsive from '@/components/FooterResponsive'


const iranSansFont = localFont({ src: '../public/fonts/IRANSansWeb.woff' })

export default function App({ Component, pageProps }) {

    return (
        <>
            <main className={`${iranSansFont.className} divmain`}>
                <NavbarResponsive />
                <Component {...pageProps} />
                <FooterResponsive/>

            </main>
        </>
    )

}
