
const initialstate={

    loading:false,

    courses:[],

    error:''

}

 

const coursereducer=(state=initialstate ,action)=>{

 

    switch(action.type){

        case 'FETCH_USERS_REQUEST':

            return{

                ...state,loading:true

            }

        case 'FETCH_USERS_SUCCESS':

            return{

                loading:false,

                courses:action.payload,

                error:''

            }

        case 'FETCH_USERS_FAILURE':

            return{

                loading:false,

                courses:[],

                error:action.payload

            }

        default :return state

    }

}

 

export default coursereducer