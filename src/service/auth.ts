import axios from './http'

export const login = (params:{username:string, password:string}) => {
  return axios.post("/api/login", params)
}
export const registry = (params:{username:string, email?:string, passowrd:string, checkPassword:string}) => {
  return axios.post("/api/registry", params)
}
// http://localhost:9310/authorize?client_id=222222&redirect_uri=http%3A%2F%2Flocalhost%3A9094%2Foauth2&response_type=code&scope=all&state=xyz
export const authorize = (params:{client_id:string, redirect_uri:string, response_type:string, scope:string, state:string}) => {
  return axios.post("/authorize", params)
}