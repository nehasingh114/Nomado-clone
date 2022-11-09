const axios = require('axios');

const getStays = async (req, res) => {
    const { q } = req.query;
    try {
        let response = await axios.get(`https://www.orbitz.com/api/v4/typeahead/${q}?format=json&locale=en_US&maxresults=10&personalize=false&trending=true`)
        let data = response.data
        res.send(data);
    }
    catch (e) {
        res.send(e)
    }
}

module.exports = { getStays };