import { INSERT_TODO , TOGGEL_TODO } from './types';


const initialstate = {
    data:[]
}

const reducer = ( state = initialstate , action  ) => {
    switch (action.type)
            {
                case INSERT_TODO:
                    return {
                    data: [
                        ...state.data,
                        
                            {
                              id: action.payload.id,
                              content:  action.payload.content,
                              complete: false
                            }
                        
                    ]
                    }
            
            case TOGGEL_TODO:{
                    const {id} = action.payload;
                    return{
                        ...state,
                        data: state.data.map((row)=>{
                            if(row.id === id){
                                return{
                                    id: row.id,
                                    content: row.content,
                                    complete: !row.complete
                                }
                            }else{
                                return row
                            }
                        })
                    }
            }

            default : return state

    }
}

export default reducer;