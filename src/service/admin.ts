import axios from './http'

export const getApps = () => axios.get("/admin/apps")
export const getUsers = () => axios.get("/admin/users")
