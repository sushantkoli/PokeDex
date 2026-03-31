import SearchBar from "./SearchBar";

const NavBar = ({ setActivePage, s, sS }) => {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setActivePage('home')}>
          Pokémon Explorer
        </h1>
        <div>
          <SearchBar search={s} setSearch={sS} />
        </div>
        <ul className="flex space-x-6">
          <li
            className="hover:text-yellow-300 cursor-pointer"
            onClick={() => setActivePage('home')}
          >
            Home
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer"
            onClick={() => setActivePage('about')}
          >
            About
          </li>
          <li
            className="hover:text-yellow-300 cursor-pointer"
            onClick={() => setActivePage('favorites')}
          >
            Favorites
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;