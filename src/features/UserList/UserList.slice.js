import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsers } from './Api'

const initialState = {
    users: [],
    status: "",
};

export const getUserList = createAsyncThunk(
    'Users/getAll',
    async (userId, config) => {
        console.log(config)
        config.signal.onabort = () => {
            // code goes here
        }
        const response = await getUsers(userId)
        return response
    },
    {
        condition: (userId, {getState}) => {
            let currentState = getState()
            if(currentState.users.find(elm => elm.id === userId)){
                return false
            }
        }
    }
)

const UserListSlice = createSlice({
    name: "UserList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state, action)=>{
            state.status = 'loading...'
        })
        builder.addCase(getUserList.rejected, (state, action) => {
            state.status = 'Error! something wen’t wrong!' + action.error.message
        })
        builder.addCase(getUserList.fulfilled, (state, action) => {
            state.status = 'The list of users has been loaded...'
            state.users = action.payload
        })
    }
});

export default UserListSlice.reducer;
