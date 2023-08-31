import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  /* const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const results = data.results;
    setCharacters(results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
 */
  return (
    <>
     {/*  <h2 className="text-4xl mb-3">Home</h2>
      
      {/* {JSON.stringify(characters)} */}

  {/*     {characters.map((character) => {
        return (
          <article key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </article>
        );
      })} */}
{/* 
      <Link to="/login">Login</Link> */} 
      {/* <div  class="w-full h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[650px]"><img src="./src/assets/slider-1.jpg" alt=""  /></div> */}
{/*       <div className="valores_top">hola</div> */}
    </>
  );
};

export default Home;
