const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);

menu.set("杏仁豆腐", 300);
console.log(menu);

const getTianjinfan = menu.get("天津飯");
console.log(getTianjinfan);

const hasGomadango = menu.has("ごま団子");
console.log(hasGomadango);

menu.delete("八宝菜");
console.log(menu);
