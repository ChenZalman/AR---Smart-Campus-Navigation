class User {
    constructor(email, password, full_name, phone_number, admin = 0) {
        this.email = email;
        this.password = password;
        this.full_name = full_name;
        this.phone_number = phone_number;
        this.admin = admin;
    }
}

module.exports = User;