import Header from "../../../components/Header"
import {useRouter} from "next/router"

export default function Person({people}) {
    const router = useRouter()
    const { id } = router.query

    function goNext(){
        router.push(`/person/${Number(id)+1}`)
    }

    function goPreviuos(){
        router.push(`/person/${Number(id)-1}`)
    }

    let body = (<p>Loading...</p>)

    if(people[id] !== undefined){
        body = (
            <>
                <Header title={`${people[id].name} | SWPE`} />
                <h1>{people[id].name}</h1>
                <ul>
                    <li>Height: {people[id].height}</li>
                    <li>mass: {people[id].mass}</li>
                    <li>Hair Color: {people[id].hair_color}</li>
                    <li>Skin Color: {people[id].skin_color}</li>
                    <li>Eye Csolor: {people[id].eye_color}</li>
                    <li>Birth Year: {people[id].birth_year}</li>
                    <li>Gender: {people[id].gender}</li>
                </ul>
            </>
        )
    }

    return (
        <div className="index container">
            {body}
            <button className="btn btn-dark m-1" onClick={goPreviuos} disabled={id == 0 ? true:false}>Previous</button>
            <button className="btn btn-dark m-1" onClick={goNext} disabled={id == people.length-1 ? true:false}>Next</button>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch("https://swapi.dev/api/people/")
    const data = await res.json()
    const people = data.results
    return { props: { people } }
}