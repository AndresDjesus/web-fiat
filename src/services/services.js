const getServices = async () => {
    const res = await fetch('http://localhost:3001/api/services');
    return await res.json();
}

module.exports = { 
    getServices
}