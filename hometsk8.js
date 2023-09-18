class Human {
    constructor() {
        if (this.constructor === Human) {
            throw new Error('Human class should not be instantiated directly');
        }
    }

    eat() {
        console.log('eating');
    }

    listen() {
        console.log('listening');
    }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super();

        this.salary = salary;
        this.workTime = workTime;
    }

    greetings() {
        console.log('Hello!');
    }

    finishWork() {
        console.log('Work is finished');
    }

    WorkingNow() {
        const worksHours = new Date().getHours();

        if (worksHours >= 9 && worksHours < 18) {
            console.log('on work');
        } else {
            console.log('off work');
        }
    }
}

const worker = new Worker(2000, '8 hours');

worker.greetings();
worker.finishWork();
worker.eat();
worker.listen();
worker.WorkingNow();

