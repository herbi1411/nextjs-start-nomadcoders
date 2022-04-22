import NavBar from "../components/NavBar";
import Layout from "../components/Layout";

export default function appp({Component, PageProps}){
    return  (
        <Layout>
            <Component {...PageProps}/>
            <span>Hello!!</span>
        </Layout>
    )
}