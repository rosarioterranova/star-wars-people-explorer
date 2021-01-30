import Header from "../components/Header"
import PeopleList from "../components/PeopleList"

export default function Home({people}) {
  return (
    <div className="index container text-center">
      <Header title="Star Wars People Explorer" />
      <h1>Home</h1>
      <p>Welcome to Star Wars People Explorer!</p>
      <p>Data from <a href="https://swapi.dev/">Swapi.dev</a> </p>
      {people === undefined ? <p>Loading...</p> : <PeopleList people={people} />} 
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://swapi.dev/api/people/")
  const data = await res.json()
  const people = data.results
  return { props: { people } }
}
