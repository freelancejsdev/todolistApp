import axios from 'axios'

export default axios.create({
    baseURL: "https://todolistdevlogix.herokuapp.com"
})