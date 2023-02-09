import { useSelector } from "react-redux"

export const useStore = () => {

    const {id, enunciado, estado} = useSelector( state => state.question );

    return {
        id, enunciado, estado
    }

}

