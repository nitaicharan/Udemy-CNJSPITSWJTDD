import Nutritions from "./Notritions";

class Food {
    constructor(
        private readonly name: string,
        private readonly unit: string,
        private readonly baseAmount: Nutritions,
    ) { }

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