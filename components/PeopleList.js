import Link from "next/link"

export default function PeopleList({people}) {
  return (
      <ul className="list-group">
          {
            people.map((person,index) => <li className="list-group-item"><Link href={`/person/${index}`}>{person.name}</Link></li>)
          }
      </ul>
  )
}
