import { selector } from "recoil";
import { personAtom } from "./person.atom";


export const personFullNameSelector = selector({
    key: 'personFullNameSelector',
    get: ({get}) => {
        // Lecture des données de l'atom "person"
        const person = get(personAtom);

        // Envoi de la valeur transformée (Derived State)
        return person ? `${person.firstName} ${person.lastName}` : null;

    }
})