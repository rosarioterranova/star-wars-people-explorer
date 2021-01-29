import Link from "next/link"

export default function PeopleList({people}) {
  return (
      <ul>
          {
            people.map((person,index) => <li><Link href={`/person/${index}`}>{person.name}</Link></li>)
          }
      </ul>
  )
}
