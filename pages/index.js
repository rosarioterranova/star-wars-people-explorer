import Header from "../components/Header"
import PeopleList from "../components/PeopleList"

export default function Home({data}) {
  return (
    <div className="index">
      <Header title="Star Wars People Explorer" />
      <h1>Home</h1>
      <PeopleList people={data} />
    </div>
  )
}
