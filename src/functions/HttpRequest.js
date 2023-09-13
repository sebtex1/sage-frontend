import axios from 'axios';

const baseRequest = axios.create({
    baseURL: 'https://localhost:7000/api/v1/', 
});

const HttpRequest = {
    Send: async (method, url, params, data, addToken, retry) => {
        const config = {
            method: method,
            url: url,
            params: params,
            data: data,
        };

        try{
            if (addToken) {
                config.headers = { "Authorization": `Bearer ${localStorage.getItem('access_token')}` };
            }
            return await baseRequest.request(config);
        }catch (error) {    
            console.error('error', error);

            if (retry && error.response.status === 401) {
                const result = await HttpRequest.Send('get', 'auth/refresh', { client_id: 'WebApplication', refresh_token: localStorage.getItem('refresh_token')})

                localStorage.setItem("id_token", result.data.id_token)
                localStorage.setItem("access_token", result.data.access_token)
                localStorage.setItem("refresh_token", result.data.refresh_token)

                return await HttpRequest.Send(method, url, params, data, addToken, false);
            }

            throw error;
        }
    }
};

export default HttpRequest;
