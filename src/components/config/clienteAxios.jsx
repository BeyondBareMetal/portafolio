import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
//customAxios.defaults.headers.common['Authorization'] = 'Bearer tu-token';
const clienteAxios = axios.create({
        baseURL: "https://gql.hashnode.com",
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `${process.env.TOKEN_API}`
          },
        xsrfHeaderName:'X-CSRFToken',
        xsrfCookieName:'csrftoken'
});


export default clienteAxios;