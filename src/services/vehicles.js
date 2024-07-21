const getVehicles = async () => {
    const res = await fetch('http://localhost:3001/api/vehicles');
    return await res.json();
}

module.exports = { 
    getVehicles
}