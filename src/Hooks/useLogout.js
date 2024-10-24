import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContesxt";

export const useLogout = () =>{
    const {dispatch} = useAuthContext()
    const {dispatch: workoutDispatch} = useWorkoutsContext()

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user')
        //dispatch call
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type: 'SET_WORKOUTS',payload: null})
    }

    return {logout}
}