class Food {
    constructor(
        private readonly name: string,
        private readonly unit: string,
    ) { }

    getUnit(): any {
        return this.unit;
    }

    getName() {
        return this.name;
    }
}

export default Food;