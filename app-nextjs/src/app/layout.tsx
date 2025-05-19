import "./globals.css";
import React from 'react';
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import Hero from "@/component/hero";

export default function Layout({ children }: { children: React.ReactNode}){


  return(

    <html lang="fr">
      <body>
        <Header />
          {children}
        <Footer />
      </body>
  </html>
  )
}