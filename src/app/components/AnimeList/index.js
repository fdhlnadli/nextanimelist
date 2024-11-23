import Image from "next/image";

const AnimeList = ({ title }) => {
   return (
      <div className="grid grid-cols-3 gap-2 h-32">
         <div className="bg-indigo-500">
            {/* <Image src={} /> */}
            <h3>{title}</h3>
         </div>
      </div>
   );
};

export default AnimeList;
