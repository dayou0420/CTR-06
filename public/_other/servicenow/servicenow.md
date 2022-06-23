//
// L01S01 - first script
//

```javascript
gs.info('Hello, world!');
```

//
// L01S02 - example server side script
//

```javascript
var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}
```

//
// L01S03 - example client side script
//

```javascript
function onLoad() {

    alert('Current state value is: ' + g_form.getValue('state'));

}
```

//
// L03S01 - Simple variables & good/bad variable names
//

```javascript
var name   = 'Chuck';   // Simple string variable
var i      = 0;         // Simple integer variable
var answer = true;      // Simple boolean variable

// Naming
var c = "http://www.amazon.com";  // Not ideal
var case = 'CASE0010001';         // Reserved word!
var lastEntryInTheListWithRelatedRecords = true; // a bit long?
personCount      // Indicates a counter/integer
personList       // Must be a list
personObj        // Object
personGr         // GlideRecord
```

//
// L04S01 - Mathematical operators
//

```javascript
// Assignment
var a = 12;
var b = 3;

// Addition
gs.info(2 + 2);
gs.info(a + 2);
b = b + 2;
// b += 2;  // shorthand for the line above
gs.info(a + b);

// Increment by 1
a++;
gs.info(a);

// Decrement by 1
b--;
gs.info(b);

// Multiply
gs.info(a * b);

// Division
gs.info(a / b);

// Modulo - get the remainder of a division
gs.info('');
gs.info(a);
gs.info(b);
gs.info(a % b);

var c = (5 + 4) * 2;
gs.info(c);
```

//
// L05S01 - Common error messages
//

```javascript
var myUnknownVariable = 'Chuck';
gs.info(myUnknownVariable);
ga.info('Hello, world!');
```

//
// L06S01 - Strings
//

```javascript
var firstName = "Chuck";
var lastName  = 'Tomasi';  // Either is ok
var myCar     = "Chuck's Car";  // Mix them to avoid issues

// Note the use of + when strings are involved
var name = firstName + ' ' + lastName;
gs.info(name);
gs.info('length of name=' + name.length);
```

// 
// L07S01 - Special characters
//

```javascript
// \n = new line
// \t = tab
// \\ = backslash
// \' = single quote
// \" = double quote
//
gs.info('Single string\nTwo lines');
gs.info('Chuck\'s simple script');
gs.info('Don\'t confuse a forward slash (/) with a backslash(\\)');
```

//
//  L08S01 - Changing and detecting variable types
//

```javascript
var i = 5;
var iStr = i.toString();
gs.info(typeof i);
gs.info(typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n);
```

//
// L09S01 - Commenting
//

```javascript
// This is a single line comment

/* This is another way to comment */

/*
 This is a multi-line comment.
 This code is commented out!
 var name = 'Chuck';
 */
gs.info('name = ' + name);
```

//
// L10S01 - Arithmetic Operators
//

```javascript
var a = 0;
var b = 1;
gs.info(a < b);

var n = '3';
var i = 3;
gs.info(n == i); // REALLY?!!
gs.info(i = 4); // WATCH OUT!!!
```

//
// S11S01 - If Statements
//

```javascript
var a = 1;
var b = 3;
var c = 5;
if (a < b)
  gs.info('a is less than b');

// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');

// Else if and else
if (a < b)
  gs.info('a is less than b');
else if (a > b)
  gs.info('a is greater than b');
else if (a == b)
  gs.info('a equals b');
else
  gs.info('Uh-oh');

if (a < b)
  if (b < c)
      gs.info('a b c are in order');
```

//
// S11S02 - Boolean logic
//
// AND (&&) - both must be true
//      +---------+---------+---------+
//      |   AND   |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  false  |
//      +---------+---------+---------+
//      |  false  |  false  |  false  |
//      +---------+---------+---------+
//
// OR (||) - Either must be true
//      +---------+---------+---------+
//      |   OR    |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  true   |
//      +---------+---------+---------+
//      |  false  |  true   |  false  |
//      +---------+---------+---------+
//
// NOT (!) - reverse the logic
//      +---------+---------+---------+
//      |   NOT   |  true   |  false  |
//      +---------+---------+---------+
//      |         |  false  |  true   |
//      +---------+---------+---------+
//

```javascript
var a = 1;
var b = 3;
var c = 5;

if (a < b && b < c)
  gs.info('a b c are in order');

if (b > a || b > c)
  gs.info('b is greater than one of them.');

// Note, indentation can be deceptive!!!
if (a < b)
  if (b < c) {
    gs.info('a b c are in order');
    gs.info(' that means a is less than c');
  }
else
  gs.info('a is greater than or equal to b');

var valveOpen = true;
if (valveOpen == true)
  gs.info('Valve is currently open');

if (bool)
  gs.info('Valve is currently open');

var valveOpen = false;
if (!valveOpen)
  gs.info('Valve is currently closed');
```

//
// L12S01 - The ternary operator
//

```javascript
// Could have written...
var valveOpen = true;
var openStatusString;
if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);
```

//
// L13S01 - Multiple cases
//

```javascript
// Using if/else if/else if...
var level = 5;
var message = '';
if (level == 0)
  message = 'Empty';
else if (level == 1 || level == 2)
  message = 'Low';
else if (level == 3)
  message = 'Medium';
else if (level == 4)
  message = 'High';
else if (level == 5)
  message = 'Full';
else
  message = 'Uh-oh';
gs.info('Level=' + level + ' status=' + message);
```

//
// L13S02 - Multiple cases
//

```javascript
// Using the switch statement
var level = 5;
var message = '';
switch (level) {
  case 0:
    message = 'Empty';
    break;

  case 1:
  case 2:
    message = 'Low';
    break;

  case 3: // Warning - what's wrong with case 3?
    message = 'Medium';
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);
```

//
// L14S01 - Truthy and Falsy
//

```javascript
// Simple case of true and false
//
var boolTrue = true;
var boolFalse = false;
gs.info('boolTrue=' + boolTrue + ' boolFalse=' + boolFalse);
```

//
// L14S02 - Truthy and Falsy
//

```javascript
// What about numbers
//
var num = 0; // <== try with different numbers
gs.info(num + ' is ' + ((num) ? 'true' : 'false'));
```

//
// L14S03 - Truthy and Falsy
//

```javascript
// Take a look at strings
//
var string1;
var string2 = null;
var string3 = 'Hello, world!';
gs.info('string1=' + ((string1) ? 'true' : 'false'));
gs.info('string2=' + ((string2) ? 'true' : 'false'));
gs.info('string3=' + ((string3) ? 'true' : 'false'));
```

//
// L15S01 - Simple while loop
//

```javascript
var i = 0;
while (i < 5) {
  gs.info(i);
  i++;
}
gs.info('done i=' + i);
```

//
// L15S02 - breaking out of a while loop
//

```javascript
var i = 0;
while (true) {
  if (i == 5)
    break;
  gs.info(i);
  ++i;
}
gs.info('done');
```

//
// L15S03 - Continue - jumping back to the while condition
//

```javascript
var i = 0;
var done = false;
while (!done) {
  if (i < 5) {
    ++i;
    gs.info(i + ' done=' + done);
    continue;
  }
  gs.info('I think we are done');
  done = true;
}
gs.info(i);
```

//
// L16S01 - For loop
//

```javascript
// Note: break and continue work here too!
for (var i = 0; i < 5; i++) {
  gs.info(i);
}
gs.info('done i=' + i);
```

//
// L18S01 - Nested loops
//

```javascript
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 3; j++) {
    gs.info('i=' + i + ' j=' + j);
  }
}
gs.info('Done i=' + i + ' j=' + j);
```

//
// L19S01 - Functions
//

```javascript
function sayHello() {
  gs.info('Hello');
}
sayHello();
```

//
// L19S02 - Function with a parameter
//

```javascript
function toCelsius(fahrenheit) {

    var c = (5 / 9) * (fahrenheit - 32);

    gs.info(c);
}
toCelsius(32);
toCelsius(100);
```

//
// L19S03 - Function with a return value
//

```javascript
function toCelsius(fahrenheit) {

    return (5 / 9) * (fahrenheit - 32);

}
var c = toCelsius(32);
gs.info(c);
c = toCelsius(212);
gs.info(c);
```

//
// L19S04 - Local variables scope
//

```javascript
function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32);

    return c;
}
gs.info(c); // What happened?
```

//
// L19S05 - Global variables and local
//

```javascript
var convertTo = 'F';

function toCelsius(f) {

    var c = (5 / 9) * (f - 32);
        
    return c;
}

function toFahrenheit(c) {

    var f = c * 9 / 5 + 32;
        
    return f;
}

function convertTemp(temp) {

  // use the global variable to determine conversion
  if (convertTo == 'C') {
    return toCelsius(temp);
  } else {
    return toFahrenheit(temp);
  }
}

gs.info(convertTemp(100));
```

//
// L19S06 - Self running function
//

```javascript
// This code is outside the function
var i = 20;

(function() {

  // Local variable
  i = 10; // uh-oh, forgot the var!

  gs.info('i=' + i);
  
}());

i = 3;
gs.info('i=' + i);
```

//
// L20S01 - bad script w/o try/catch
//

```javascript
for (var i = 0; i < 5; i++) {
  gs.info('i=' + i + ' answer=' + answer);
}
gs.info('done');
```

//
// L20S02 - Trapping that error
//

```javascript
try {
  for (var i = 0; i < 5; i++) {
    gs.info('i=' + i + ' answer=' + answer);
  }
} catch (e) {
  gs.error('Uh-oh ' + e.message);
}
gs.info('done');
```

// 
// L20S03 - And finally…
//

```javascript
try {
  for (var i = 0; i < 5; i++) {
    gs.info('i=' + i + ' answer=' + answer);
  }
} catch (e) {
  gs.error('Uh-oh ' + e.message);
} finally {
  gs.info('done');
}
```

//
// L21S01 - Simple Database query
//

```javascript
// Get and display numbers on all incidents
var incGr = new GlideRecord('incident');
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}
```

//
// L21S02 - Get and display numbers on all incidents v2
//

```javascript
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true);
incGr.orderBy('number');
incGr.setLimit(5);
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}
```

//
// L21S03 - What is 'number’?
//

```javascript
var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {
  var dotNumber = incGr.number;
  var gvNumber  = incGr.getValue('number');
  gs.info('dotNumber=' + typeof dotNumber + ' gvNumber=' + typeof gvNumber);
}

// Why should I care? I'll show you when we get to arrays...
```

//
// L21S04 - getting a single record quickly
// Just need one record? Use .get(SYSID) or .get('fieldName', fieldValue)
//

```javascript
var incGr = new GlideRecord('incident');

if (incGr.get('965c9e5347c12200e0ef563dbb9a7156')) {
  gs.info(incGr.getValue('number'));
}

// or...
var incGr = new GlideRecord('incident');

if (incGr.get('number', 'INC0000059')) {
  gs.info(incGr.getValue('sys_id'));
}
```

//
// L22S01 - Arrays
//

```javascript
// Make a simple array
//
// Optional declaration, but not preferred:
// var list = Array();
var list = [];
list[0] = 1;
list[1] = 3;
list[2] = 5;
gs.info('length of list is: ' + list.length);
```

//
// L22S02 - Shorter way
//

```javascript
var list = [1, 3, 5];
gs.info('length of list is: ' + list.length);
```

//
// L22S03 - Loops and arrays
//

```javascript
var list = [1, 3, 5];
for (var i = 0; i < list.length; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}

// Slightly better
var list = [1, 3, 5];
var len = list.length;
for (var i = 0; i < len; i++) {
  gs.info('i=' + i + ' value=' + list[i]);
}
```

//
// L23S01 forEach with external function
//

```javascript
var list = [1, 3, 5];

list.forEach(myFunction);

function myFunction(item) {
  gs.info('myFunction item=' + item);
}
```

//
// L23S02 embedded forEach
//

```javascript
var list = [1, 3, 5];

list.forEach(function (item) {
  gs.info('embedded function item=' + item);
});
```

//
// L23S03 - What else can you get..
//

```javascript
var list = ['apple', 'banana', 'orange'];

list.forEach(function (item, index, arr) {
  gs.info('embedded function item=' + item + ' index=' + index + ' arr=' + arr);
});
```

//
//  L24S01 - Common array methods/functions
//

```javascript
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('list=' + list);
```

//
// L24S02 - join(string)
//

```javascript
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('join: list=' + list.join(', '));

// push(value1, value2, ..., valueX)
list.push('Dave');
list.push('Andrew');
gs.info('push: list=' + list.join(', '));

// pop()
list.pop();
gs.info('pop: list=' + list.join(', '));
```

//
// L24S03 - shift()
//

```javascript
var list = ['Chuck', 'Kreg', 'Stacey'];
gs.info('Before shift(), list[0]=' + list[0]);
list.shift();
gs.info('shift: list=' + list.join(', '));
gs.info('After shift(), list[0]=' + list[0]);
```

// 
// L24S04 - unshift
//

```javascript
var list = ['Chuck', 'Kreg', 'Stacey'];
var newLength = list.unshift('Jason', 'Andrew');
gs.info('new length=' + newLength + ' unshift() list=' + list.join(', '));
```

//
// L24S05 - splice(position, n-remove, value1, 
value2, ..., valueX) - add/remove elements somewhere in the middle
//

```javascript
var names = ["Eric", "Donna", "Melanie", "Jessie"];
gs.info(names.join(', '));
names.splice(2, 0, "Cary", "Henri");
gs.info(names.join(', '));
```

//
// L24S06 -  slice(start, end) - extract part of an array in to another array
//

```javascript
var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
gs.info(names.join(', '));
var subNames = names.slice(1, 3); // Get names at positions 1 and 2
gs.info(subNames.join(', '));
```

//
// L24S08 - Reverse the elements of an array
//

```javascript
var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];
names.reverse();
gs.info(names.join(', '));
```

//
// L24S09 - Getting the value
//

```javascript
var list = [];
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {
    list.push(incGr.getValue('sys_id'));
}

gs.info('list=\n' + list.join('\n'));
```

//
// L25S01 - ArrayUtil
//

```javascript
var au = new ArrayUtil();
var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];
var newNames = au.unique(names);
gs.info(newNames.join(', '));
```

//
// L26S01 - Simple Objects
//

```javascript
var box = {};
box.height   = 20;
box.width    = 10;
box.length   = 10;
box.material = "cardboard";
box.open     = true;
gs.info(box.material);
```

//
// L26S02 - Bracket notation…
//

```javascript
var vehicle = {};
vehicle['year'] = 2018;
vehicle['make'] = "Toyota";
vehicle['model'] = "Sienna";
gs.info(vehicle['year'] + ' ' + vehicle['make'] +  ' ' + vehicle['model']);
```

//
// L26S03 - Shortcut - note the double quotes
//

```javascript
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
gs.info(vehicle['year'] + ' ' + vehicle['make'] +  ' ' + vehicle['model']);
```

//
// L27S01 - hasOwnProperty
//

```javascript
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
gs.info(vehicle.hasOwnProperty("year"));  // <== true
gs.info(vehicle.hasOwnProperty("price")); // <== false
```

//
// L28S01 - Get object keys
//

```javascript
var vehicle = {
  "year" : 2018,
  "make"  : "Toyota",
  "model" : "Sienna"
};
for (var key in vehicle) {
  gs.info('key=' + key + ' value=' + vehicle[key]);
}
```

//
// L29S01 - Array of Objects
//

```javascript
var bookList = [
  {
    "title" : "Harry Potter and the Chamber of Secrets",
    "author" : "J.K. Rowling"
  },
  {
    "title" : "Moby Dick",
    "author" : "Herman Melville"
  },
  {
    "title" : "A Tale of Two Cities",
    "author" : "Charles Dickens"
  }
];
var len = bookList.length;
gs.info('Last author=' + bookList[len].author);

for (var i = 0; i < len; i++) {
  var book = bookList[i];
  gs.info(i + ' - Title: ' + book.title + ' - Author: ' + book.author);
}
```

//
// L30S02 - Parse example
//

```javascript
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
gs.info('length=' + libraryStr.length);
var libraryObj = JSON.parse(libraryStr);
gs.info('length=' + libraryObj.length);
gs.info(JSON.stringify(libraryObj, null, 4));
```

//
// L31S01 More string stuff
// Find the position of a character or substring
//

```javascript
var subject = 'Warning: Email is not working';
var pos = subject.indexOf('Email');
gs.info(pos);
```

//
// L31S02 - Use the position of a character/substring as a condition
//

```javascript
var short_description = 'System is displaying error message';
if (short_description.indexOf('error') >= 0) {
  gs.info("Error message found");
}
```

//
// L31S03 - Get a substring
//

```javascript
var str = 'Approved: RITM0010001 - Laptop renewal';
var pos = str.indexOf('RITM');
var ritmNumber = str.substring(pos, pos + 11);
gs.info(ritmNumber);
```

//
// L31S04 - Case matters with strings
//

```javascript
var firstName = 'Chuck';
var loginName = 'chuck';
if (loginName == firstName) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}
```

//
// L31S05 - Using toUpper or toLower for better matching
//

```javascript
var firstName = 'Chuck';
var loginName = 'chuck';
gs.info('firstName=' + firstName.toUpperCase() + ' loginName=' + loginName.toUpperCase());
if (loginName.toUpperCase() == firstName.toUpperCase()) {
  gs.info('names match');
} else {
  gs.info('names do not match');
}
```

//
// L32S01 - Recursion
//

```javascript
function factorial(x) {

  // TERMINATION
  if (x < 0)
    return;

  // BASE
  if (x === 0)
    return 1;

  // RECURSION
  return x * factorial(x - 1);
}
gs.info(factorial(3)); // 6
```

//
// L33S01 - Classes, Objects, and Prototypes
//

```javascript
var person = Class.create();
person.prototype = {
    initialize: function() {
      this.firstName = '';
      this.lastName  = '';
    },

    setFirstName : function(str) {
      this.firstName = str;
    },

    setLastName : function(str) {
      this.lastName = str;
    },

    getDisplayName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    type: person
};

var me = new person();
me.setFirstName('Chuck');
me.setLastName('Tomasi')
gs.info('me=' + me.firstName + ' ' + me.lastName); // Not advised
var name = me.getDisplayName();
gs.info(name);
```

//
// L33S02 - Initialize values
//

```javascript
var person = Class.create();
person.prototype = {
    initialize: function(str1, str2) {
      this.firstName = str1;
      this.lastName  = str2;
    },

    setFirstName : function(str) {
      this.firstName = str;
    },

    setLastName : function(str) {
      this.lastName = str;
    },

    getDisplayName : function() {
      return this.firstName + ' ' + this.lastName;
    },

    type: 'person'
};

var me = new person('Chuck', 'Tomasi');
var name = me.getDisplayName();
gs.info(name);
me.setFirstName('Fred');
me.setLastName('Luddy');
gs.info(me.getDisplayName());
```

//
// L34S01 

```javascript
var item = Class.create();
item.prototype = {
    initialize: function() {
    },

    debugObject : function(obj) {

      gs.info('object=' + JSON.stringify(obj, null, 4));
    },

    type: 'item'
};

var myObj = {
  "type"   : "vehicle",
  "engine" : true,
  "wheels" : 4,
  "state"  : "allocated"
};
var myItem = new item();
myItem.debugObject(myObj); // Loosely coupled
```

//
// L35S01 - Inheritance
//

```javascript
var vehicle = Class.create();
vehicle.prototype = {
    initialize: function(year, make, model) {
      this.make = make;
      this.model = model;
      this.year = year;
    },

    register : function() {
      gs.info(this.getDisplayName() + ' registered!');
    },

    info : function() {
      gs.info('Vehicle info: TBD');
    },

    getDisplayName : function() {

      return this.year + ' ' + this.make + ' ' + this.model;

    },

    type: 'vehicle'
};

var car = Class.create();
car.prototype = Object.extendsObject(vehicle, {

    findDealer : function() {
      gs.info('Find dealer is not yet implemented');
    },

    info : function() {
      gs.info('Car info: TBD');
    },

    type: 'car'
});

var v1 = new vehicle('2018', 'John Deere', 'Tractor');
v1.register();
v1.info();

var v2 = new car('2017', 'Honda', 'CR-V');
v2.register();
v2.findDealer();
v2.info();
```

//
// L36S01 - Simple scripted REST API (GET) resource
//

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

  return "hello, world!";
    
})(request, response);
```

//
// L36S02 - Scripted REST API with query parameters
//

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example Query parameters
  // https://<instance_rest_endpoint>?active=true&name=now
  var queryParams   = request.queryParams; 
  var isActiveQuery = queryParams.active; //true
  var nameQueryVal  = queryParams.name; //‘now’

  var answer = "Response: active=" + isActiveQuery + " name=" + nameQueryVal;

  return answer;
    
})(request, response);
```

//
// L36S03 - Scripted REST API with path parameters
//

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
  // Example path parameters
  // https://instance.service-now.com/api/now/myservice/{tableName}/{id}
  // https://instance.service-now.com/api/now/myservice/myApp_table/1234
  var pathParams = request.pathParams; 
  var tableName  = pathParams.tableName; //‘myApp_table’ 
  var id         = pathParams.id; //‘1234’

  var answer = "Response: tableName=" + tableName + " id=" + id;

  return answer;
    
})(request, response);
```

//
// L36S04 - Scripted REST API (POST) with request body payload
//

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var name  = request.body.data.name;
    var id    = request.body.data.id;
    var color = request.body.data.color;
    
    var answer = "Response: name=" + name + " id=" + id + " color=" + color;

    return answer;
    
})(request, response);
```

//
// L36S05 - Scripted REST API with POST and response
//

```javascript
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
 
    var name  = request.body.data.name;
    var id    = request.body.data.id;
    var color = request.body.data.color;
    
    // Do some processing here
    
    var answer = {};
    answer.status = "OK";
    answer.author = "system";
    answer.item = {"name" : "Rome", "owner" : "Chuck Tomasi", "count" : 12};
    answer.active = true;
    response.setBody(answer);

    return response;
    
})(request, response);
```