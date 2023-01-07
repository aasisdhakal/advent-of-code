import {formattedData, highestCalories, highestThreeCaloriesSum} from "./solution-1";
import * as solution1 from './solution-1';

const mockFormattedData = jest.spyOn(solution1, 'formattedData');
mockFormattedData.mockImplementation(() => [3, 2, 1]);

test('find highest calories carried by elves', () => {
    expect(highestCalories(1)).toEqual([3]);
});

test('find total highest three calories carried by elves', () => {
    expect(highestThreeCaloriesSum()).toEqual(6);
});
