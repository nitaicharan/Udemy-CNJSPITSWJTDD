import EmptyFoodNameError from './errors/EmptyFoodNameError';
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
});