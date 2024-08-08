const getIndex = async () => {
    const res = await fetch('http://localhost:3001/api/index');
    return await res.json();
}

module.exports = { 
    getIndex
}