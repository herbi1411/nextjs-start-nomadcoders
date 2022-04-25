import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

export default function appp({Component, pageProps}){
    return  (
        <Layout>
            <Component {...pageProps}/>
            <span>Hello!!</span>
        </Layout>
    )
}