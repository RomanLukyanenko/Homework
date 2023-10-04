class BankAccount {
    #balance; 

    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Внесено ${amount} одиниць. Загальний баланс: ${this.#balance}`;
        } else {
            throw new Error("Сума має бути більшою за 0");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Знято ${amount} одиниць. Загальний баланс: ${this.#balance}`;
        } else {
            throw new Error("Недостатньо коштів на рахунку або невірно вказана сума");
        }
    }
}

const olegAccount = new BankAccount('Олег', 1000);

console.log(`Баланс Олега: ${olegAccount.getBalance()} одиниць`);
olegAccount.deposit(500);
console.log(`Баланс Олега після внесення: ${olegAccount.getBalance()} одиниць`);



















class Animal {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `Це тварина з іменем ${this.name}.`;
    }
}

class Mammal extends Animal {
    constructor(name, habitat) {
        super(name);  
        this.habitat = habitat;
    }

    run() {
        console.log(`${this.name} біжить.`);
    }

    getInfo() {
        return super.getInfo() + ` Вона живе в ${this.habitat}.`;
    }
}

class Bird extends Animal {
    constructor(name, habitat) {
        super(name);
        this.habitat = habitat;
    }

    fly() {
        console.log(`${this.name} літає.`);
    }

    getInfo() {
        return super.getInfo() + ` Вона живе в ${this.habitat}.`;
    }
}

class Dog extends Mammal {
    constructor(name, habitat, breed) {
        super(name, habitat);
        this.breed = breed;
    }

    whoIsGoodDog() {
        return 'woof woof';
    }

    getInfo() {
        return super.getInfo() + ` Це порода собаки - ${this.breed}.`;
    }
}

class Penguin extends Bird {
    constructor(name, habitat, species) {
        super(name, habitat);
        this.species = species;
    }

    fly() {
        console.log(`${this.name} не може літати.`);
    }

    swim() {
        console.log(`${this.name} плаває.`);
    }

    getInfo() {
        return super.getInfo() + ` Це вид пінгвінів - ${this.species}.`;
    }
}


const rex = new Dog('Рекс', 'місто', 'Німецька вівчарка');
console.log(rex.getInfo());
console.log(rex.whoIsGoodDog());



const pingu = new Penguin('Пінгу', 'Антарктида', 'Імператорський пінгвін');
console.log(pingu.getInfo());
pingu.fly();  
pingu.swim();  