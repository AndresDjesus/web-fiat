const getFooter = async () => {
    const res = await fetch('http://localhost:3001/api/footer');
    return await res.json();
}

module.exports = { 
    getFooter
}