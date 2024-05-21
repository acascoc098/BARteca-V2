import axios from "axios";

const URL = 'http://localhost:8080/barteca';

const getBares = async(state) => {
    const req = await axios.get(URL + "/bar");
    console.log(req);
    state(req.data);
}

export default getBares;