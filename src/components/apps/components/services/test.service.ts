import request from "../../../../../config"
const Services = {
    getAll() {
        return request.get("products")
    }
}


export default Services