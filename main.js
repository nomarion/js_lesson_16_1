class User {
    static MAX_ATTENDANCE = 25;
    static MAX_ATTENDANCE_MESSAGE = 'Достигнут предел в 25 записей!';

    #firstName;
    #lastName;
    #age;
    #points = [];
    #attendance = new Array(User.MAX_ATTENDANCE);
    #countAttendance = 0;

    constructor(firstName, lastName, age, points) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#points = points;
    }

    avgPoints() {
        return this.#points.reduce((total, item) => total += item, 0) / this.#points.length
    }

    present() {
        if (this.#countAttendance !== User.MAX_ATTENDANCE) {
            this.#attendance[this.#countAttendance] = true;
            this.#countAttendance++;
            return;
        }
        console.log(User.MAX_ATTENDANCE_MESSAGE);
    }

    absent() {
        if (this.#countAttendance !== User.MAX_ATTENDANCE) {
            this.#attendance[this.#countAttendance] = false;
            this.#countAttendance++;
            return;
        }
        console.log(User.MAX_ATTENDANCE_MESSAGE);
    }

    summary() {
        const avgAttendance = this.#attendance.reduce((total, item) => (total += item === true ? 1 : 0), 0) /
            this.#attendance.reduce((total, item) => (total += item === true || item === false ? 1 : 0), 0);

        if (avgAttendance > 0.9 && this.avgPoints() > 90) {
            return `${this.#firstName} ${this.#lastName}: Молодець`;
        }

        if (avgAttendance > 0.9 || this.avgPoints() > 90) {
            return `${this.#firstName} ${this.#lastName}: Добре, але можна краще`;
        }

        return `${this.#firstName} ${this.#lastName}: Редиска`;
    }
}

/* ########################################################################################################### */
const user = new User('Ivan', 'Kalinin', 25, [100,100,90,80,100,90]);
user.present();
user.present();
user.absent()
console.log(user.summary());

const user2 = new User('Vova', 'Rogov', 25, [50,50,90,80,100,90]);
user2.present();
user2.absent();
user2.absent()
console.log(user2.summary());

const user3 = new User('Max', 'Denisov', 21, [90,90,100,80,100,90]);
user3.present();
user3.present();
user3.present()
console.log(user3.summary());