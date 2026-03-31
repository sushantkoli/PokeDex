import { use, useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './App.css'
import PokeDex from './assets/Components/PokeDex'
import PageNavigation from './assets/Components/PageNavigation';
import Loading from './assets/Components/Loading';
import NavBar from './assets/Components/NavBar';
import About from './assets/Components/About';

function App() {
 const [ApiData, setApiData] = useState([]);
 const [ApiLink, setApiLink]=useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
 const [NextUrl, setNextUrl]=useState(null)
 const [PrevUrl, setPrevUrl]=useState(null) 
 const [loading, setloading]=useState(false)
 const [search, setSearch] = useState("");
 const [activePage, setActivePage] = useState('home');



   useEffect(()=>{
    
      setloading(true)
    getData()
   },[ApiLink])

      const getData= async ()=>{
      const response= await axios.get(ApiLink)
      //Stored Array of pokemon name and url
      const PokemResult=response.data.results
      setNextUrl(response.data.next)
      setPrevUrl(response.data.previous)
      //Extracting all details in array
      const pokemonDetailPromises=PokemResult.map((array)=> axios.get(array.url))
      const pokemonDetails=await axios.all(pokemonDetailPromises);
      //Extracting importing thimgs from aobject and create antoher and store in array
      console.log(pokemonDetails)
      const PokemonListResult= pokemonDetails.map((obj)=>{
        const pokemon=obj.data;
        return{
            id:pokemon.id,
            image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
            name:pokemon.name,
            types:pokemon.types,
        }
      });
     setApiData(PokemonListResult)
     setloading(false)
    }

    // Search filter
  const filteredPokemon = ApiData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

   // function set Previous and next url
   const setUrl=(btn)=>{
    if(btn==='Next'){
      setApiLink(NextUrl);
    }
    else{
      if(PrevUrl!=null) setApiLink(PrevUrl)
    }
   }
   //loading Screen
   if(loading){
    return <Loading/>
   }
 return (
    <>
      <NavBar setActivePage={setActivePage} />
      {activePage === 'home' && (
        <>
          <PokeDex PokeList={filteredPokemon} />
          <PageNavigation prevUrl={PrevUrl} click={setUrl} />
        </>
      )}
      {activePage === 'about' && <About />}
    </>
  )
}

export default App
