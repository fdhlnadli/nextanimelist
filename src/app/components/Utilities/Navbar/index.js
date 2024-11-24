import Link from "next/link";

const Navbar = () => {
   return (
      <header className="bg-gray-600">
         <div>
            <Link href="/">NextAnimeList</Link>
            <input type="placeholder" placeholder="Search Anime" />
         </div>
      </header>
   );
};

export default Navbar;
