import Header from "../components/Header"
import PeopleList from "../components/PeopleList"

export default function Home({data}) {
  return (
    <div className="index container text-center">
      <Header title="Star Wars People Explorer" />
      <h1>Home</h1>
      <p>Welcome to Star Wars People Explorer!</p>
      <p>Data from <a href="https://swapi.dev/">Swapi.dev</a> </p>
      <PeopleList people={data} />
    </div>
  )
}
