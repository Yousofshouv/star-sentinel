 






import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StarSentinel - Space Weather for Kids",
  description: "Explore solar flares and space weather with our friendly AI assistant designed for kids!",
   
};

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
        {children}
      </body>
    </html>
  );
}
