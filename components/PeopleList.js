import Link from "next/link"

export default function PeopleList({people}) {
  return (
      <ul className="list-group my-3">
          {
            people.map((person,index) => <li key={index} className="list-group-item"><Link href={`/person/${index}`}>{person.name}</Link></li>)
          }
      </ul>
  )
}
