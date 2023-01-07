import {inputFile} from "../helpers";

export const formattedData = () => {
    return inputFile().split('\n\n').map(value => {
        return value.split('\n').map(d => parseInt(d)).reduce((prevVal, currentVal) => prevVal + currentVal)
    }).filter(e => e).sort((a, b) => b - a);
}
export const highestCalories = (nth: number) => {
    return formattedData().splice(0, nth);
}

export const highestThreeCaloriesSum = () => {
    return highestCalories(3).reduce((prevVal,currentVal) => prevVal + currentVal);

}
