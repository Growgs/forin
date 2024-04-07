export function orderByProps(obj, order) {
    const sortedProps = [];
    const unsortedProps = [];
    
    order.forEach(key => {
        if (key in obj) {
            sortedProps.push({ key, value: obj[key] });
        }
    });
  
    for (const key in obj) {
        if (!order.includes(key)) {
            unsortedProps.push({ key, value: obj[key] });
        }
    }
    
    unsortedProps.sort((a, b) => a.key.localeCompare(b.key));
    
    return sortedProps.concat(unsortedProps);
}
