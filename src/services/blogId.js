const getIdBlog = async (id) => {
    const res = await fetch (`http://localhost:3001/api/blog/${id}`);
    return await res.json();
}

module.exports = { 
    getIdBlog
}