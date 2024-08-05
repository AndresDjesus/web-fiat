const getIdService = async (id) => {
    const res = await fetch (`http://localhost:3001/api/services/${id}`);
    return await res.json();
}

module.exports = { 
    getIdService
}