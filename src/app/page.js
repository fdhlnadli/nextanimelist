import AnimeList from "./components/AnimeList";

export const Home = async () => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
   );
   const anime = await response.json();
   return (
      <div>
         <h1>NextAnimeList</h1>
         {anime.data.map((data) => {
            return <AnimeList title={data.title} />;
         })}
      </div>
   );
};

export default Home;
