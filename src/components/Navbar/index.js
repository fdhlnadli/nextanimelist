import Link from "next/link";

const Navbar = () => {
   return (
      <header className="bg-gray-600">
         <div className="flex md:flex-row flex-col justify-between p-4 gap 2">
            <Link href="/" className="text-2xl font-bold">
               NextAnimeList
            </Link>
            <input type="placeholder" placeholder="Search Anime" />
         </div>
      </header>
   );
};

export default Navbar;
