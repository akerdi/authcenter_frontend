import axios from './http'

export const getApps = () => axios.get("/admin/apps")
export const createApp = (params:{client_id:string, client_secret:string, title:string, url:string, disabled:boolean}) => {
  return axios.post("/admin/apps", params)
}
export const editApp = (params:{client_id:string, client_secret:string, title:string, url:string, disabled:boolean}) => {
  return axios.put("/admin/apps", params)
}
export const getUsers = () => axios.get("/admin/users")
