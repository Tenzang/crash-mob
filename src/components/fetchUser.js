const loggedinURL = 'http://localhost:3000/logged_in'

const fetchUser = async ()=>{
    const response = await fetch(
        loggedinURL ,{
            method: 'GET',
            credentials: 'include',
            headers:{
            'Content-type': 'application/json',
            'Accept': 'application/json'
            },
        }
    )
    return response.json()

};

export default fetchUser