export const GetTime = (time: any) => {
    const date = new Date(time);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day},${year}`;
    if (time) {
        return formattedDate
    } else {
        return ''
    }

}
export const handleTagBackgroudColor = (index: number, MixedStyle: any) => {
    const array = MixedStyle.split(',');
    return array[index] === undefined ? array : array[index]
} 