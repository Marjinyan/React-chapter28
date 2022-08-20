const people = [
    {id:101, name:'Tigran', surname:'Hakobyan'},
    {id:102, name:'Armine', surname:'Melqonyan'},
    {id:103, name:'Lusine', surname:'Sargsyan'},
    {id:104, name:'Arman', surname:'Harutyunyan'},
    {id:105, name:'Emma', surname:'Sargsyan'},
]

export const getUsers = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let user = people.find(elm => elm.id === id)
            if(user){
                resolve([user])
            }else{
                reject('No user with such id!')
            }
        }, 3000)
    })
}