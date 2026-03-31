import React from 'react';

const Pokemoncard = (props) => {
    const typeColors = {
  fire: 'bg-orange-500',
  grass: 'bg-green-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  poison: 'bg-purple-500',
  bug: 'bg-lime-500',
  normal: 'bg-gray-400',
  flying: 'bg-indigo-300',
  ground: 'bg-yellow-600',
  fairy: 'bg-pink-400',
  fighting: 'bg-red-700',
  psychic: 'bg-pink-600',
  rock: 'bg-yellow-800',
  ghost: 'bg-indigo-700',
  ice: 'bg-cyan-300',
  dragon: 'bg-indigo-900',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500'
};
 return (
 <div className=' border-4 rounded-2xl  h-93 w-70'>
 <div className='rounded  h-7/10 w-full py-1 flex items-center justify-center object-cover'>
    <img className='h-full w-full rounded bg-[#f2f2f2] mx-1.5 ' src={props.image}/>

 </div>
 <div className='flex-1 w-full px-3 pb-2'>
   <h3 className='font-medium text-gray-400'>#{props.id}</h3>
   <h1 className='font-bold capitalize text-2xl m-1 '>{props.name}</h1>
   <div className='flex items-center  gap-1'>

    {props.type.map((t, index) => {
         const typeName = t.type.name;
         const colorClass = typeColors[typeName] || 'bg-gray-300';
       return (
            <button
              key={index}
              className={`capitalize rounded-md px-2 py-1 w-30 text-white ${colorClass}`}  >
             {typeName}
    </button>
  );
})}
  
   
   </div>
   
 </div>
 </div>
 );
};

export default Pokemoncard;