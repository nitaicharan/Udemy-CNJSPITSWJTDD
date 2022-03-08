import EmptyFoodNameError from "./errors/EmptyFoodNameError";
import InvalidFoodAmountError from "./errors/InvalidFoodAmountError";
import Nutritions from "./Notritions";

class Food {
    private currentValues: Nutritions;

    constructor(
        private readonly name: string,
        private readonly unit: string,
        private readonly baseValues: Nutritions,
    ) {
        this.validateFoodName(name);
        this.validateFoodAmount(baseValues.amount);
        this.currentValues = { ...baseValues }
    }

    getBaseValues() {
        return this.baseValues;
    }

    getUnit() {
        return this.unit;
    }

    getName() {
        return this.name;
    }

    getCurrentValues() {
        return this.currentValues;
    }

    changeAmount(amount: number) {
        this.validateFoodAmount(amount);
        this.currentValues.amount = amount;
        this.currentValues.calories = this.calculateCaloriesFoodAmount();
    }

    private validateFoodAmount(amount: number) {
        if (amount <= 0)
            throw new InvalidFoodAmountError(amount);
    }

    private validateFoodName(name: string) {
        if (!name.length)
            throw new EmptyFoodNameError();
    }

    private calculateCaloriesFoodAmount() {
        return Math.ceil(this.currentValues.amount * this.baseValues.calories / this.baseValues.amount);
    }
}

export default Food;