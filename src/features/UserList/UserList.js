import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { getUserList } from './UserList.slice'
import { useState, useEffect } from 'react'

const UserList = () => {
    const users = useSelector(state => state.users)
    const status = useSelector(state => state.status)

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    const [promise, setPromise] = useState(null)

    useEffect(() => {
        setIsLoading(false)
    }, [users])

    const handleLoading = () => {
        setPromise(dispatch(getUserList(101)))
        setIsLoading(true)
    }

    const stopLoading = () => {
        if(promise){
            promise.abort()
        }
        setIsLoading(false)
    }

    return <div>
        <h1>UserList</h1>
        <p>{status}</p>
        {
            !isLoading
            ?
                <Button onClick={() => handleLoading() } variant="contained">
                    Load Data
                </Button>
            :
                <Button onClick={() => stopLoading()}>Stop!</Button>
        }
        <ul>
            {users.map((elm,i) => <li key={i}>{elm.name} {elm.surname}</li>)}
        </ul>
    </div>
}

export default UserList
