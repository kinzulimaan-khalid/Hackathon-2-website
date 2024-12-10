import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Products from "@/components/Products";
import Topproducts from "@/components/Topproducts";
import Newarrival from "@/components/Newarrival";
import Socialmedia from "@/components/Socialmedia";


export default function Home() {
  return (
   <div>
  <Navbar />
       <Herosection />
       <Products/>
       <Topproducts />
       <Newarrival />
       <Socialmedia />
       <Footer />
   </div>
  );
}
