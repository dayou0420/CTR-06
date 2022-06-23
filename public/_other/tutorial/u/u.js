async function myFetch(url) {
    const response = await fetch(`${url}`);
    const json = await response.json()
    return json;
}

(async function() {
    const users = await myFetch('https://jsonplaceholder.typicode.com/users');

    const userName = new Set();
    const userAddress = new Set();

    for(let user of users) {
        userName.add(user.name);
        userAddress.add(user.address);
    }
    const nameData = await Promise.all(userName);
    const addressData = await Promise.all(userAddress);
    console.log(nameData);
    console.log(addressData);
})();
