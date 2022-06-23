const obj = {
    firstName: 'First Name',
    lastName: 'Last Name',
    printFullName: function() {
        console.log(this);
        const _this = this;

        window.setTimeout(function() {
            console.log(this);
        }.bind(_this));
    }
}

obj.printFullName();
