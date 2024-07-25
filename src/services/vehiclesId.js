const getVehicleId = async (id) => {
    const res = await fetch(`http://localhost:3001/api/vehicles/${id}`);
    return await res.json();
}

module.exports = { 
    getVehicleId
}