import { useRecoilValue } from "recoil"
import { personAtom } from "../../recoil/person/person.atom"


const PersonDisplay = () => {

    // récupération de la valeur du state de "personAtom"
    const person = useRecoilValue(personAtom)

    return (
        <>
            { !person ? (
                <h2>Aucune personne encodée</h2>
            ) : (
                <>
                    <h2>Valeur de la personne encodées</h2>
                    <p>{person.firstName} {person.lastName}</p>
                </>
            )}
        </>
    )
}

export default PersonDisplay