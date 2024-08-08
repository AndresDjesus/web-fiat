const getAdvertising = async () => {
    const res = await fetch('http://localhost:3001/api/advertising');
    return await res.json();
}

module.exports = { 
    getAdvertising
}