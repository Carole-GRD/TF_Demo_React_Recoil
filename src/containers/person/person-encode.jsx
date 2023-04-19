import { useCallback } from "react"
import { useRecoilState } from "recoil"
import PersonForm from "../../components/person-form/person-form"
import { personAtom } from "../../recoil/person/person.atom"



const PersonEncode = () => {

    // Récupération en "lecture" et "écriture" du state de "personAtom"
    const [person, setPerson] = useRecoilState(personAtom)

    const handleEncoding = useCallback((personData) => {
        console.log(personData);

        // Modifier le state de l'atom
        setPerson( { ...personData } )
    })

    return (
        <>
            <h2>Veuillez encoder une personne</h2>
            <PersonForm onPersonSubmit={handleEncoding} />
        </>
    )
}

export default PersonEncode