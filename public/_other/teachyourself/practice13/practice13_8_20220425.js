(async () => {
    const response = await fetch('../../teachyourself/practice13/weathernews.json');
    const json = await response.json();

    console.log(json['0']);
})();