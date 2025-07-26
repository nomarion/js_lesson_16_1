function User(firstName, lastName, age, points) {
    const MAX_ATTENDANCE = 25;
    const MAX_ATTENDANCE_MESSAGE = 'Достигнут предел в 25 записей!';

    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._points = points;
    this._attendance = new Array(MAX_ATTENDANCE);
    this._countAttendance = 0;
}

User.prototype.avgPoints = function () {
    return this._points.reduce((total, item) => total + item, 0) / this._points.length;
};

User.prototype.present = function () {
    if (this._countAttendance !== User.MAX_ATTENDANCE) {
        this._attendance[this._countAttendance] = true;
        this._countAttendance++;
        return;
    }
    console.log(User.MAX_ATTENDANCE_MESSAGE);
}

User.prototype.absent = function () {
    if (this._countAttendance !== User.MAX_ATTENDANCE) {
        this._attendance[this._countAttendance] = false;
        this._countAttendance++;
        return;
    }
    console.log(User.MAX_ATTENDANCE_MESSAGE);
}

User.prototype.summary = function () {
    const avgAttendance = this._attendance.reduce((total, item) => (total += item === true ? 1 : 0), 0) /
        this._attendance.reduce((total, item) => (total += item === true || item === false ? 1 : 0), 0);

    if (avgAttendance > 0.9 && this.avgPoints() > 90) {
        return `${this._firstName} ${this._lastName}: Молодець`;
    }

    if (avgAttendance > 0.9 || this.avgPoints() > 90) {
        return `${this._firstName} ${this._lastName}: Добре, але можна краще`;
    }
    return `${this._firstName} ${this._lastName}: Редиска`;
}

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