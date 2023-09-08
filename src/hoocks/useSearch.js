import React from "react";




export const useSearch = (items, search) => {
    const searchItem = React.useMemo(() => {
        return items.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, items])
    return searchItem;
}