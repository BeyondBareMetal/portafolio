import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
//customAxios.defaults.headers.common['Authorization'] = 'Bearer tu-token';
const mailAxios = axios.create({
        baseURL: "https://back-gab.onrender.com",
        headers: { 
            'Content-Type': 'application/json', 
          
          },
        xsrfHeaderName:'X-CSRFToken',
        xsrfCookieName:'csrftoken'
});


export default mailAxios;