import NavBar from "../components/NavBar";

export default function appp({Component, PageProps}){
    return <>
        <NavBar/>
        <Component {...PageProps}/>
        <span>Hello!!</span>
        <style jsx global>{`
            a{
                color: orange;
            }
        `}</style>
        </>
}