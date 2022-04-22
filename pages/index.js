import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

const API_KEY = "111dfd2e6256cf43d74f1bf2b8811c4b";
export default function Home(){
    
    const [counter, setCounter] = useState(0);
    const [movies, setMovies] = useState();
    
    useEffect(()=>{
        (async () => {
            const {results} = await(
                await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
                    )
                ).json();
            setMovies(results);
            }
        )(); //?? 무슨문법이야
    },[]);
    return (
    <div>
        {/* <NavBar/> */}
        <Seo title="Home"/>
        {!movies && <h4>Loading...</h4>}
        {movies?.map(movie => ( //movie가 존재하면 map실행
        <div key={movie.id}>
            <h4>{movie.original_title}</h4>
        </div>
        ))}
        {/* <style jsx ocglobal>{`
            a{
                color: orange;
            }
        `}</style> */}
    </div>
    );
}