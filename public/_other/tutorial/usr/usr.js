async function myFetch(fileName) {
    const response = await fetch(`../../usr/json/${fileName}`);
    const json = await response.json();
    return json;
}

(async function() {
    const me = await myFetch('user1.json');
    console.log(`--${me.name}'s timeline--`);
    const friendList = await myFetch(`friendsOf${me.id}.json`);

    /*
     * Promise.all()を使う場合
     * 反復可能オブジェクトに格納された
     * Promiseのインスタンスを渡す必要がある
     */

    const friendIds = new Set();
    for(id of friendList.friendIds) {
        friendIds.add(myFetch(`user${id}.json`));
    }
    const friends = await Promise.all(friendIds);

    /*
     * Promise.all()を使う場合
     * 反復可能オブジェクトに格納された
     * Promiseのインスタンスを渡す必要がある
     */

    const msgIds = new Set();
    for(const friend of friends) {
        msgIds.add(myFetch(`message${friend.latestMsgId}.json`));
    }
    const msgs = await Promise.all(msgIds);

    for(const friend of friends) {
        for(const msg of msgs) {
            if(friend.id === msg.userId) {
                console.log(`${friend.name} says: ${msg.message}`);
            }
        }
    }

})();
