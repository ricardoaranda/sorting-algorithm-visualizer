export const mapElementArray = (size) => {
    let array = [];

    for (let i = 0; i < size; i++) {
        array.push(<Bar number={i} key={i}/>);
    }
    return array;
}