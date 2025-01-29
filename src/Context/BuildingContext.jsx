import { createContext, useReducer, useEffect } from 'react'


export const BuildingContext = createContext()

export const BuildingReducer = (state, action) => {
    switch (action.type) {
        case 1:
            return { buildingInfo: action.payload.discription }
        case 2:
            return { buildingInfo: action.payload.discription }
        case 3:
            return { buildingInfo: action.payload.discription }
        case 4:
            return { buildingInfo: action.payload.discription }
        case 5:
            return { buildingInfo: action.payload.discription }
        case 6:
            return { buildingInfo: action.payload.discription }
        case 7:
            return { buildingInfo: action.payload.discription }
        case 8:
            return { buildingInfo: action.payload.discription }
        case 9:
            return { buildingInfo: action.payload.discription }
        default:
            return { buildingInfo: action.payload.discription }
    }
  }

  export const BuildingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BuildingReducer, { 
      building: null
    })

    // useEffect(() => {
    //       dispatch({type: 0, payload:{discription: "ברוכים הבאים למכון טכנולוגי חולון. לחצו על הכפתור שמעליי בכדי להציג את המפה ולהתחיל את הסיור הוירטואלי"}})
    //   }, [])
      
    console.log('BuildingContext state:', state)
    
    return (
        <BuildingContext.Provider value={{ ...state, dispatch }}>
        { children }
        </BuildingContext.Provider>
    )
      
}