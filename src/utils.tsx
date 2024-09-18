// const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
//     return {
//         id: i,
//         isSelected: i === 29_999_998
//     };
// });
const initialItems = new Array(2).fill(0).map((_, i) => {
    return {
        id: i,
        isSelected: i === 1
    };
});

export default initialItems;