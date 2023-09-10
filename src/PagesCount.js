export const getTotalPage = (total, limit) => {
    return Math.ceil(total / limit);

}
export const getTotalPageArray = (totalPage) => {
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
        pages.push(i + 1);
    }
    return pages;
}