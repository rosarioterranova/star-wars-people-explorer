import Header from "../../components/Header"
import {useRouter} from "next/router"

export default function Person({person}) {
    const router = useRouter()
    const { id } = router.query
    let body = (<p>Loading...</p>)

    if (person !== undefined){
        body = (
            <>
                <Header title={`${person.name} | SWPE`} />
                <h1>{person.name}</h1>
                <ul>
                    <li>Height: {person.height}</li>
                    <li>mass: {person.mass}</li>
                    <li>Hair Color: {person.hair_color}</li>
                    <li>Skin Color: {person.skin_color}</li>
                    <li>Eye Csolor: {person.eye_color}</li>
                    <li>Birth Year: {person.birth_year}</li>
                    <li>Gender: {person.gender}</li>
                </ul>
            </>
        )
    }

    return (
        <div className="index container">
            {body}
        </div>
    )
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`)
    const person = await res.json()
    return { props: { person } }
}

export async function getStaticPaths() {
    const res = await fetch("https://swapi.dev/api/people/")
    const data = await res.json()
    const people = data.results
    const paths = people.map((person,index) => ({
        params: { id: String(index+1) },
    }))
    return { paths, fallback: false }
}