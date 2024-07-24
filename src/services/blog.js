const getBlog = async () => {
    const res = await fetch('http://localhost:3001/api/blog');
    return await res.json();
}

module.exports = { 
    getBlog
}