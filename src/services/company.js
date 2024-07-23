const getCompany = async () => {
    const res = await fetch('http://localhost:3001/api/company');
    return await res.json();
}

module.exports = { 
    getCompany
}