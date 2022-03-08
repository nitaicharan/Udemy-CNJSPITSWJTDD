import EmptyFoodNameError from './errors/EmptyFoodNameError';
import InvalidFoodAmountError from './errors/InvalidFoodAmountError';
import Food from './Food'

describe('', () => {
    test('create', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        const food = new Food('rice', 'g', baseValues);

        expect(food).toBeDefined();
        expect(food.getName()).toEqual('rice');
        expect(food.getUnit()).toEqual('g');
        expect(food.getBaseValues().amount).toEqual(100);
        expect(food.getBaseValues().carbohydrate).toEqual(40);
        expect(food.getBaseValues().protein).toEqual(65);
        expect(food.getBaseValues().calories).toEqual(124);
        expect(food.getCurrentValues()).toEqual(food.getBaseValues());
    });

    test('create food with empty name', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        expect(() => new Food('', 'g', baseValues)).toThrowError(EmptyFoodNameError)
    });

    test('create food with zero amount', () => {
        const baseValues = {
            amount: 0,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        expect(() => new Food('rise', 'g', baseValues)).toThrowError(InvalidFoodAmountError)
    });

    test('create food and change amount', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        const food = new Food('rice', 'g', baseValues);
        food.changeAmount(23);

        expect(food.getCurrentValues().amount).toEqual(23)
    });

    test('create food and change amount with negative number', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        const food = new Food('rice', 'g', baseValues);

        expect(() => food.changeAmount(-23)).toThrowError(InvalidFoodAmountError)
    });

    test('create food, change amount and calculate current calories', () => {
        const baseValues = {
            amount: 100,
            fat: 30,
            carbohydrate: 40,
            protein: 65,
            calories: 124,
        };

        const food = new Food('rice', 'g', baseValues);
        food.changeAmount(87);
        expect(food.getCurrentValues().calories).toEqual(108);
    });
});