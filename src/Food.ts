import EmptyFoodNameError from "./errors/EmptyFoodNameError";
import InvalidFoodAmountError from "./errors/InvalidFoodAmountError";
import Nutritions from "./Notritions";

class Food {
    constructor(
        private readonly name: string,
        private readonly unit: string,
        private readonly baseAmount: Nutritions,
    ) {
        this.validateFoodName(name);
        this.validateFoodAmount(baseAmount);
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
        return this.baseAmount;
    }

    getUnit(): any {
        return this.unit;
    }

    getName() {
        return this.name;
    }
}

export default Food;