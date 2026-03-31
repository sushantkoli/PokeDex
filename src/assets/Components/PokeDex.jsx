
import Pokemoncard from "./Pokemoncard";


const PokeDex = (props) => {
    
 return (
 <div className='flex gap-3 flex-wrap m-10 p-10 justify-center '>

 {props.PokeList.map((obj, index) => {
          return (
            <Pokemoncard
              key={index} id={obj.id} image={obj.image} name={obj.name} type={obj.types}  />
  );
})}
  
 
 </div>
 );
};

export default PokeDex;