export const setAuthUser= (data)=>{
    localStorage.setItem('user', data)
}

export const getAuthUser= () =>{
    let user= localStorage.getItem('user');
    return JSON.parse(user);
}