const { response, request } = require('express');
const  axios  = require("axios");


const getExample = async (req = request, res = response) => {
    try {

        const {data} = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
        return res.status(200).json({
            status:'success',
            data:data,
        });

    } catch (e) {
        console.log(e);
        return res.status(400).json({
            status:'error',
            data: {},
        });
    }
}

module.exports = {
    getExample
}