import '../styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {useState, useEffect} from "react"

export default function MyApp({ Component, pageProps }) {

  const [people, setPeople] = useState([])

  //Get People on app mount
  useEffect(()=>{
    fetch("https://swapi.dev/api/people/")
    .then(result => result.json())
    .then(data => {
      setPeople(data.results)
    })
  },[])

  return (
    <>
      <Navbar />
      <Component {...pageProps} data={people}/>
      <Footer />
    </>
  )
}

