export const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem('crm'));
    const userToken = user?.userToken?? null// return userToken with Bearer

    return userToken;
}

export const getUserId = () => {
    const user = JSON.parse(localStorage.getItem('crm'));
    const userId = user?.userId // return user Id 
    return userId;
}