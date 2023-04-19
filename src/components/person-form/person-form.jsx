import { useId, useState } from "react"


const PersonForm = ( { onPersonSubmit } ) => {

    const idForm = useId();
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');

    const handlePersonSubmit = (e) => {
        e.preventDefault();

        onPersonSubmit({
            firstName, lastName
        })

        setFirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={handlePersonSubmit}>
            <div>
                <label htmlFor={idForm + 'firstname'}>Prénom : </label>
                <input type="text" id={idForm + 'firstname'}
                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label htmlFor={idForm + 'firstname'}>Nom : </label>
                <input type="text" id={idForm + 'firstname'}
                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <button type="submit">Valider</button>
            </div>
        </form>
    )
}

export default PersonForm