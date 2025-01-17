import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
   title: "Next Anime List",
   description: "Indonesian Anime Website for Project",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body suppressHydrationWarning={true}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
