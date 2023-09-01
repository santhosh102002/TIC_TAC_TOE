import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'
import {memo} from 'react'
function Icons({name}){
if(name == 'circle'){
    return <FaRegCircle/>
}
else if(name == 'cross'){
    return <FaTimes/>
}
else{
    return <FaPen/>
}
}

export default memo(Icons);