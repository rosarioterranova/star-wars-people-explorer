import Link from "next/link"

export default function PeopleList({people}) {
  return (
      <ul className="list-group my-3">
          {
            people.map((person,index) =>{
              return(
                <li key={index} className="list-group-item">
                  <Link href={`/person/${index+1}`}>{person.name}</Link>
                </li>
            )})
          }
      </ul>
  )
}
