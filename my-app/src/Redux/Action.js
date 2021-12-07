export const fetchusersrequest=()=>{

    return{

        type:'FETCH_USERS_REQUEST'

    }

}

 

export const fetchuserssuccess=(users)=>{

    return{

        type:'FETCH_USERS_SUCCESS',

        payload:users

    }

}

 

export const fetchusersfailure=(error)=>{

    return{

        type:'FETCH_USERS_FAILURE',

        payload:error

    }

}