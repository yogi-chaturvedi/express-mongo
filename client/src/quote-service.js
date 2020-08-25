import Axios from "axios";

const AXIOS = Axios.create({
    baseURL: "/api"
});

async function get() {
    return AXIOS.get("/quotes").then(quotes => {
        console.log("QUOTES", quotes);
        return quotes.data;
    }).catch(error => {
        console.log("Error in fetching quotes", error);
        throw error;
    });
}

async function post(payload) {
    return AXIOS.post("/quotes", payload).then(quotes => {
        console.log("QUOTE saved", quotes);
    }).catch(error => {
        console.log("Error in saving quotes", error);
        throw error;
    });
}

export default { get, post };