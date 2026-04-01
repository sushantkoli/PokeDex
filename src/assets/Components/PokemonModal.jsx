import React from 'react';

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl transform transition-all"
        onClick={e => e.stopPropagation()} // Prevent clicks inside from closing
      >
        {/* Header with Close button */}
        <div className="flex justify-end p-4 absolute top-0 right-0 w-full z-10">
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white bg-white/50 dark:bg-black/30 rounded-full p-2 hover:bg-white cursor-pointer transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image Section */}
        <div className="bg-[#f2f2f2] dark:bg-gray-700 h-64 flex items-center justify-center p-6 rounded-b-3xl shadow-inner relative">
           <img className="h-full object-contain filter drop-shadow-lg z-10" src={pokemon.image} alt={pokemon.name} />
           <span className="absolute bottom-4 right-4 text-4xl font-bold text-gray-200 dark:text-gray-600 opacity-50">#{pokemon.id}</span>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold capitalize text-gray-800 dark:text-white mb-3">{pokemon.name}</h2>
            <div className="flex items-center justify-center gap-2">
              {pokemon.types.map((t, index) => {
                const typeName = t.type.name;
                const colorClass = typeColors[typeName] || 'bg-gray-300';
                return (
                  <span key={index} className={`capitalize rounded-md px-4 py-1.5 text-white font-medium shadow-sm ${colorClass}`}>
                    {typeName}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Weight</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{(pokemon.weight / 10).toFixed(1)} kg</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold mb-1">Height</p>
              <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{(pokemon.height / 10).toFixed(1)} m</p>
            </div>
          </div>

          <div className="mb-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 border-b pb-2 dark:border-gray-700">Abilities</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities && pokemon.abilities.map((a, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium capitalize border border-gray-200 dark:border-gray-600">
                        {a.ability.name.replace('-', ' ')} {a.is_hidden && '(Hidden)'}
                    </span>
                ))}
              </div>
          </div>

          {/* Base Stats */}
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3 border-b pb-2 dark:border-gray-700">Base Stats</h3>
            <div className="space-y-3">
              {pokemon.stats && pokemon.stats.map((stat, idx) => {
                const statName = stat.stat.name.replace('special-', 'Sp. ').replace('attack', 'Atk').replace('defense', 'Def');
                const percent = Math.min((stat.base_stat / 255) * 100, 100);
                return (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="w-20 font-medium text-gray-600 dark:text-gray-400 uppercase text-xs">{statName}</span>
                    <span className="w-8 font-bold text-gray-800 dark:text-gray-200 ml-2 text-right">{stat.base_stat}</span>
                    <div className="flex-1 ml-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${stat.base_stat >= 100 ? 'bg-green-500' : stat.base_stat >= 50 ? 'bg-yellow-400' : 'bg-red-500'}`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
