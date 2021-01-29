import Header from "../../../components/Header"
import {useRouter} from "next/router"

export default function Person({data}) {

    const router = useRouter()
    const {id}= router.query

    return (
        <div className="index container">
            {
                data[id] !== undefined ? 
                (<>
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
                </>)

                : (<>
                <Header title="Loading | SWPE" />
                <p>Loading...</p>
                </>)
            }
            
        </div>
    )
}
