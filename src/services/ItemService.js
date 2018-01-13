
var items = [{id: '101', name: 'Item1'}, {id: '102', name: 'Item2'}];

function delay(val, timeout=0) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(val), timeout)
    });
}

function getItems() {
    return delay(items, 2000);
}

function getItemById(id) {
    return Promise.resolve(items.find(item => item.id === id))
}

function saveItem(item) {
    if (item.id) {
        var itemIdx = items.findIndex(itm => itm.id === item.id)
        items = [...items.slice(0, itemIdx), item, ...items.slice(itemIdx+1)]
    } else {
        items = [...items, item]
    }
}

export default {
    getItems,
    getItemById,
    saveItem
}