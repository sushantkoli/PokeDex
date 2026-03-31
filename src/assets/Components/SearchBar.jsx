import { BsSearchHeartFill } from "react-icons/bs";

const SearchBar = ({search, setSearch}) => {
    

 return (
 <div>
       {/* 🔍 Search Bar */}
      <div className="flex justify-center my-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 w-72 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <span className="absolute left-3 top-2.5 text-green-500 "><BsSearchHeartFill size={23}  /></span>
        </div>
      </div>
 
 </div>
 );
};

export default SearchBar;