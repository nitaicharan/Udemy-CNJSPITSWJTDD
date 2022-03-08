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
        this.validateFoodAmount(baseValues);
        this.currentValues = { ...baseValues }
    }

    private validateFoodAmount(baseAmount: Nutritions) {
        if (baseAmount.amount <= 0)
            throw new InvalidFoodAmountError(baseAmount.amount);
    }

    private validateFoodName(name: string) {
        if (!name.length)
            throw new EmptyFoodNameError();
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

    getCurrentValuesValues() {
        return this.currentValues;
    }
}

export default Food;