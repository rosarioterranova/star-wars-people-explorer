import Header from "../../../components/Header"
import {useRouter} from "next/router"

export default function Person({data}) {

    const router = useRouter()
    const {id}= router.query

    function goNext(){
        router.push(`/person/${Number(id)+1}`)
    }

    function goPreviuos(){
        router.push(`/person/${Number(id)-1}`)
    }

    let body = (<p>Loading...</p>)
    if(data[id] !== undefined){
        body = (
            <>
                <Header title={`${data[id].name} | SWPE`} />
                <h1>{data[id].name}</h1>
                <ul>
                    <li>Height: {data[id].height}</li>
                    <li>mass: {data[id].mass}</li>
                    <li>Hair Color: {data[id].hair_color}</li>
                    <li>Skin Color: {data[id].skin_color}</li>
                    <li>Eye Csolor: {data[id].eye_color}</li>
                    <li>Birth Year: {data[id].birth_year}</li>
                    <li>Gender: {data[id].gender}</li>
                </ul>
            </>
        )
    }

    return (
        <div className="index container">
            {body}
            <button className="btn btn-dark m-1" onClick={goPreviuos} disabled={id == 0 ? true:false}>Previous</button>
            <button className="btn btn-dark m-1" onClick={goNext} disabled={id == data.length-1 ? true:false}>Next</button>
        </div>
    )
}
