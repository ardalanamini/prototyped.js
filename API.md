## Objects

<dl>
<dt><a href="#Array">Array</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Boolean">Boolean</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Date">Date</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Function">Function</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Math">Math</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Number">Number</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Object">Object</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#String">String</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Array"></a>

## Array : <code>object</code>
**Kind**: global namespace  

* [Array](#Array) : <code>object</code>
    * _instance_
        * [.avg](#Array+avg) ⇒ <code>number</code>
        * [.first()](#Array+first) ⇒ <code>\*</code>
        * [.last()](#Array+last) ⇒ <code>\*</code>
        * [.initial()](#Array+initial) ⇒ [<code>Array</code>](#Array)
        * [.tail()](#Array+tail) ⇒ [<code>Array</code>](#Array)
        * [.chunk(size)](#Array+chunk) ⇒ [<code>Array.&lt;Array&gt;</code>](#Array)
        * [.compact()](#Array+compact) ⇒ [<code>Array</code>](#Array)
        * [.count([value])](#Array+count) ⇒ <code>number</code>
        * [.countBy(fn)](#Array+countBy) ⇒ [<code>Object</code>](#Object)
        * [.flatten([depth])](#Array+flatten) ⇒ [<code>Array</code>](#Array)
        * [.deepFlatten()](#Array+deepFlatten) ⇒ [<code>Array</code>](#Array)
        * [.diff(array, [comp])](#Array+diff) ⇒ [<code>Array</code>](#Array)
        * [.distinct()](#Array+distinct) ⇒ [<code>Array</code>](#Array)
        * [.everyNth()](#Array+everyNth) ⇒ [<code>Array</code>](#Array)
        * [.groupBy(fn)](#Array+groupBy) ⇒ [<code>Object</code>](#Object)
        * [.indexOfAll(value)](#Array+indexOfAll) ⇒ <code>Array.&lt;number&gt;</code>
        * [.intersect(array)](#Array+intersect) ⇒ [<code>Array</code>](#Array)
        * [.partition(fn)](#Array+partition) ⇒ [<code>Array</code>](#Array)
        * [.pull(args)](#Array+pull)
        * [.sample()](#Array+sample) ⇒ <code>\*</code>
        * [.shuffle()](#Array+shuffle) ⇒ [<code>Array</code>](#Array)
        * [.union(array)](#Array+union) ⇒ [<code>Array</code>](#Array)
        * [.zip(array)](#Array+zip) ⇒ [<code>Array</code>](#Array)
        * [.zipObject(array)](#Array+zipObject) ⇒ [<code>Array</code>](#Array)
        * [.pluck(key)](#Array+pluck) ⇒ [<code>Array</code>](#Array)
        * [.sum([key])](#Array+sum) ⇒ <code>number</code>
        * [.average([key])](#Array+average) ⇒ <code>number</code>
        * [.max([key])](#Array+max) ⇒ <code>number</code>
        * [.min([key])](#Array+min) ⇒ <code>number</code>
        * [.contains(value)](#Array+contains) ⇒ <code>boolean</code>
        * [.crossJoin(array)](#Array+crossJoin) ⇒ [<code>Array.&lt;Array&gt;</code>](#Array)
        * [.get(index, [def])](#Array+get) ⇒ <code>\*</code>
        * [.implode(key, [separator])](#Array+implode) ⇒ [<code>String</code>](#String)
        * [.clone()](#Array+clone) ⇒ [<code>Array</code>](#Array)
        * [.median()](#Array+median) ⇒ [<code>Array</code>](#Array)
        * [.pad(size, [value])](#Array+pad) ⇒ [<code>Array</code>](#Array)
        * [.append(value)](#Array+append)
        * [.prepend(value)](#Array+prepend)
    * _static_
        * [.isInstance](#Array.isInstance) ⇒ <code>boolean</code>
        * [.range(end, [start], [step])](#Array.range) ⇒ <code>Array.&lt;number&gt;</code>
        * [.repeat(n, [value])](#Array.repeat) ⇒ [<code>Array</code>](#Array)

<a name="Array+avg"></a>

### array.avg ⇒ <code>number</code>
An alias of Array.prototype.average

**Kind**: instance property of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [key] | [<code>String</code>](#String) | 

**Example**  
```javascript
[1, 2, 3].avg(); // 2
[{a: 1}, {a: 2}, {a: 3}].avg('a'); // 2
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].avg('a.b'); // 2
```
<a name="Array+first"></a>

### array.first() ⇒ <code>\*</code>
Returns the first item of the array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3].first(); // 1
```
<a name="Array+last"></a>

### array.last() ⇒ <code>\*</code>
Returns the last item of the array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3].last(); // 3
```
<a name="Array+initial"></a>

### array.initial() ⇒ [<code>Array</code>](#Array)
Returns all the elements of an array except the last one

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3].initial(); // [1, 2]
```
<a name="Array+tail"></a>

### array.tail() ⇒ [<code>Array</code>](#Array)
Returns all elements in an array except for the first one

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3].tail(); // [2, 3]
```
<a name="Array+chunk"></a>

### array.chunk(size) ⇒ [<code>Array.&lt;Array&gt;</code>](#Array)
Chunks the array into smaller arrays of a specified size

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| size | <code>number</code> | 

**Example**  
```javascript
[1, 2, 3, 4, 5].chunk(2); // [[1,2],[3,4],[5]]
```
<a name="Array+compact"></a>

### array.compact() ⇒ [<code>Array</code>](#Array)
Removes falsey values from the array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34].compact(); // [ 1, 2, 3, 'a', 's', 34 ]
```
<a name="Array+count"></a>

### array.count([value]) ⇒ <code>number</code>
Counts the occurrences of a value in an array

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [value] | <code>\*</code> | 

**Example**  
```javascript
[1, 1, 2, 1, 2, 3].count(); // 6
[1, 1, 2, 1, 2, 3].count(1); // 3
```
<a name="Array+countBy"></a>

### array.countBy(fn) ⇒ [<code>Object</code>](#Object)
Groups the elements of an array based on the given function and returns the count of elements in each group

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| fn | [<code>String</code>](#String) \| <code>function</code> | 

**Example**  
```javascript
[6.1, 4.2, 6.3].countBy(Math.floor); // {4: 1, 6: 2}
['one', 'two', 'three'].countBy('length'); // {3: 2, 5: 1}
```
<a name="Array+flatten"></a>

### array.flatten([depth]) ⇒ [<code>Array</code>](#Array)
Flattens an array up to the specified depth

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type | Default |
| --- | --- | --- |
| [depth] | <code>number</code> | <code>1</code> | 

**Example**  
```javascript
[1, [2], 3, 4].flatten(); // [1, 2, 3, 4]
[1, [2, [3, [4, 5], 6], 7], 8].flatten(2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
<a name="Array+deepFlatten"></a>

### array.deepFlatten() ⇒ [<code>Array</code>](#Array)
Deep flattens an array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, [2], [[3], 4], 5].deepFlatten(); // [1,2,3,4,5]
```
<a name="Array+diff"></a>

### array.diff(array, [comp]) ⇒ [<code>Array</code>](#Array)
Returns the difference between this and another array
if `comp` is given, filters out all values from an array for which the comparator function does not return true

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array</code>](#Array) | 
| [comp] | <code>function</code> | 

**Example**  
```javascript
[1, 2, 3].diff([1, 2, 4]); // [3]
[1, 1.2, 1.5, 3, 0].diff([1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```
<a name="Array+distinct"></a>

### array.distinct() ⇒ [<code>Array</code>](#Array)
Returns all the distinct values of an array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 2, 3, 4, 4, 5].distinct(); // [1,2,3,4,5]
```
<a name="Array+everyNth"></a>

### array.everyNth() ⇒ [<code>Array</code>](#Array)
Returns every nth element in an array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3, 4, 5, 6].everyNth(2); // [ 2, 4, 6 ]
```
<a name="Array+groupBy"></a>

### array.groupBy(fn) ⇒ [<code>Object</code>](#Object)
Groups the elements of an array based on the given function

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| fn | <code>string</code> \| <code>function</code> | 

**Example**  
```javascript
[6.1, 4.2, 6.3].groupBy(Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
['one', 'two', 'three'].groupBy('length'); // {3: ['one', 'two'], 5: ['three']}
```
<a name="Array+indexOfAll"></a>

### array.indexOfAll(value) ⇒ <code>Array.&lt;number&gt;</code>
Returns all indices of value in the array. If value never occurs, returns []

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
[1, 2, 3, 1, 2, 3].indexOfAll(1); // [0,3]
[1, 2, 3].indexOfAll(4); // []
```
<a name="Array+intersect"></a>

### array.intersect(array) ⇒ [<code>Array</code>](#Array)
Returns a list of elements that exist in both arrays

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array</code>](#Array) | 

**Example**  
```javascript
[1, 2, 3].intersect([4, 3, 2]); // [2,3]
```
<a name="Array+partition"></a>

### array.partition(fn) ⇒ [<code>Array</code>](#Array)
Groups the elements into two arrays, depending on the provided function's truthiness for each element

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```javascript
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
users.partition(o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```
<a name="Array+pull"></a>

### array.pull(args)
Mutates the original array to filter out the values specified

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| args | [<code>Array</code>](#Array) | 

**Example**  
```javascript
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
myArray.pull('a', 'c'); // myArray = [ 'b', 'b' ];
```
<a name="Array+sample"></a>

### array.sample() ⇒ <code>\*</code>
Returns a random element from an array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[3, 7, 9, 11].sample(); // 9
```
<a name="Array+shuffle"></a>

### array.shuffle() ⇒ [<code>Array</code>](#Array)
Randomizes the order of the values of an array, returning a new array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
const foo = [1, 2, 3];
foo.shuffle(); // [2,3,1], foo = [1,2,3]
```
<a name="Array+union"></a>

### array.union(array) ⇒ [<code>Array</code>](#Array)
Returns every element that exists in any of the two arrays once

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array</code>](#Array) | 

**Example**  
```javascript
[1, 2, 3].union([4, 3, 2]); // [1,2,3,4]
```
<a name="Array+zip"></a>

### array.zip(array) ⇒ [<code>Array</code>](#Array)
Creates an array of elements, grouped based on the position in the original arrays

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array.&lt;Array&gt;</code>](#Array) | 

**Example**  
```javascript
['a', 'b'].zip([1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
['a'].zip([1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```
<a name="Array+zipObject"></a>

### array.zipObject(array) ⇒ [<code>Array</code>](#Array)
Creates an array of elements, grouped based on the position in the original arrays

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array</code>](#Array) | 

**Example**  
```javascript
['a', 'b', 'c'].zipObject([1, 2]); // {a: 1, b: 2, c: undefined}
['a', 'b'].zipObject([1, 2, 3]); // {a: 1, b: 2}
```
<a name="Array+pluck"></a>

### array.pluck(key) ⇒ [<code>Array</code>](#Array)
Returns all of the values for the given key

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

**Example**  
```javascript
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a'); // [{b: 1}, {b: 2}, {b: 3}]
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].pluck('a.b'); // [1, 2, 3]
```
<a name="Array+sum"></a>

### array.sum([key]) ⇒ <code>number</code>
Returns the minimum value of a given key

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [key] | [<code>String</code>](#String) | 

**Example**  
```javascript
[1, 2, 3].sum(); // 6
[{a: 1}, {a: 2}, {a: 3}].sum('a'); // 6
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].sum('a.b'); // 6
```
<a name="Array+average"></a>

### array.average([key]) ⇒ <code>number</code>
Returns the average value of a given key

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [key] | [<code>String</code>](#String) | 

**Example**  
```javascript
[1, 2, 3].average(); // 2
[{a: 1}, {a: 2}, {a: 3}].average('a'); // 2
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].average('a.b'); // 2
```
<a name="Array+max"></a>

### array.max([key]) ⇒ <code>number</code>
Returns the maximum value of a given key

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [key] | [<code>String</code>](#String) | 

**Example**  
```javascript
[1, 2, 3].max(); // 3
[{a: 1}, {a: 2}, {a: 3}].max('a'); // 3
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].max('a.b'); // 3
```
<a name="Array+min"></a>

### array.min([key]) ⇒ <code>number</code>
Returns the minimum value of a given key

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| [key] | [<code>String</code>](#String) | 

**Example**  
```javascript
[1, 2, 3].min(); // 1
[{a: 1}, {a: 2}, {a: 3}].min('a'); // 1
[{a: {b: 1}}, {a: {b: 2}}, {a: {b: 3}}].min('a.b'); // 1
```
<a name="Array+contains"></a>

### array.contains(value) ⇒ <code>boolean</code>
Determines whether the collection contains a given item

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
[1, 2, 3].contains(2); // true
```
<a name="Array+crossJoin"></a>

### array.crossJoin(array) ⇒ [<code>Array.&lt;Array&gt;</code>](#Array)
Cross joins the array's values among the given arrays, returning a Cartesian product with all possible permutations

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| array | [<code>Array</code>](#Array) | 

**Example**  
```javascript
[1, 2].crossJoin(['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```
<a name="Array+get"></a>

### array.get(index, [def]) ⇒ <code>\*</code>
Returns the item at a given index. If the index does not exist, def is returned

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 
| [def] | <code>\*</code> | 

**Example**  
```javascript
[1, 2, 3].get(0, 'default value'); // 1
[1, 2, 3].get(4, 0); // 0
```
<a name="Array+implode"></a>

### array.implode(key, [separator]) ⇒ [<code>String</code>](#String)
It's like join but u get to git it which keys to join

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type | Default |
| --- | --- | --- |
| key | [<code>String</code>](#String) |  | 
| [separator] | [<code>String</code>](#String) | <code>&quot;, &quot;</code> | 

**Example**  
```javascript
[{a: {b: 'first'}}, {a: {b: 'second'}}, {a: {b: 'third'}}].implode('a.b', ', '); // 'first, second, third'
```
<a name="Array+clone"></a>

### array.clone() ⇒ [<code>Array</code>](#Array)
Returns the cloned array

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 2, 3].clone(); // [1, 2, 3]
```
<a name="Array+median"></a>

### array.median() ⇒ [<code>Array</code>](#Array)
Returns the median value of a given key

**Kind**: instance method of [<code>Array</code>](#Array)  
**Example**  
```javascript
[1, 1, 2, 4].median(); // 1.5
[{foo: 10}, {foo: 10}, {foo: 20}, {foo: 40}].median('foo'); // 15
```
<a name="Array+pad"></a>

### array.pad(size, [value]) ⇒ [<code>Array</code>](#Array)
FillS the array with the given value until the array reaches the specified size

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type | Default |
| --- | --- | --- |
| size | <code>number</code> |  | 
| [value] | <code>\*</code> | <code>0</code> | 

**Example**  
```javascript
[1, 2, 3].pad(5, 0); // [1, 2, 3, 0, 0]
[1, 2, 3].pad(-5, 0); // [0, 0, 1, 2, 3]
```
<a name="Array+append"></a>

### array.append(value)
Same as push but uses concat

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
var myArray = [1, 2, 3]
myArray.append(0); // myArray => [1, 2, 3, 0]
```
<a name="Array+prepend"></a>

### array.prepend(value)
Adds an item to the beginning of the array

**Kind**: instance method of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```javascript
var myArray = [1, 2, 3]
myArray.prepend(0); // myArray => [0, 1, 2, 3]
```
<a name="Array.isInstance"></a>

### Array.isInstance ⇒ <code>boolean</code>
An alias of Array.isArray

**Kind**: static property of [<code>Array</code>](#Array)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Array.isInstance(2); // false
Array.isInstance([7, 3]); // true
```
<a name="Array.range"></a>

### Array.range(end, [start], [step]) ⇒ <code>Array.&lt;number&gt;</code>
Initializes an array containing the numbers in the specified range where start and end are inclusive with there common difference step

**Kind**: static method of [<code>Array</code>](#Array)  

| Param | Type | Default |
| --- | --- | --- |
| end | <code>number</code> |  | 
| [start] | <code>number</code> | <code>0</code> | 
| [step] | <code>number</code> | <code>1</code> | 

**Example**  
```javascript
Array.range(5); // [0,1,2,3,4,5]
Array.range(7, 3); // [3,4,5,6,7]
Array.range(9, 0, 2); // [0,2,4,6,8]
```
<a name="Array.repeat"></a>

### Array.repeat(n, [value]) ⇒ [<code>Array</code>](#Array)
Initializes and fills an array with the specified value

**Kind**: static method of [<code>Array</code>](#Array)  

| Param | Type | Default |
| --- | --- | --- |
| n | <code>number</code> |  | 
| [value] | <code>\*</code> | <code>0</code> | 

**Example**  
```javascript
Array.repeat(5, 2); // [2,2,2,2,2]
```
<a name="Boolean"></a>

## Boolean : <code>object</code>
**Kind**: global namespace  
<a name="Boolean.isInstance"></a>

### Boolean.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is a boolean

**Kind**: static method of [<code>Boolean</code>](#Boolean)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Boolean.isInstance('foo bar'); // false
Boolean.isInstance(flase); // true
```
<a name="Date"></a>

## Date : <code>object</code>
**Kind**: global namespace  
<a name="Date.isInstance"></a>

### Date.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is an instance of Date

**Kind**: static method of [<code>Date</code>](#Date)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Date.isInstance('foo bar'); // false
Date.isInstance(new Date()); // true
```
<a name="Function"></a>

## Function : <code>object</code>
**Kind**: global namespace  

* [Function](#Function) : <code>object</code>
    * _instance_
        * [.once(args)](#Function+once) ⇒ <code>\*</code>
        * [.defer(args)](#Function+defer) ⇒ <code>\*</code>
        * [.cache(args)](#Function+cache) ⇒ <code>\*</code>
    * _static_
        * [.isInstance(arg)](#Function.isInstance) ⇒ <code>boolean</code>

<a name="Function+once"></a>

### function.once(args) ⇒ <code>\*</code>
Ensures a function is called only once

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type |
| --- | --- |
| args | [<code>Array</code>](#Array) | 

**Example**  
```javascript
const test = (msg) => console.log(msg);
test.once('a'); // logs 'a'
test.once('b'); // no log this time
```
<a name="Function+defer"></a>

### function.defer(args) ⇒ <code>\*</code>
Defers invoking the function until the current call stack has cleared

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type |
| --- | --- |
| args | [<code>Array</code>](#Array) | 

**Example**  
```javascript
const test = (msg) => console.log(msg);
test.defer('a'), test('b'); // logs 'b' then 'a'
```
<a name="Function+cache"></a>

### function.cache(args) ⇒ <code>\*</code>
Returns the cached function results if already runned with this method

**Kind**: instance method of [<code>Function</code>](#Function)  

| Param | Type |
| --- | --- |
| args | [<code>Array</code>](#Array) | 

**Example**  
```javascript
const test = () => setTimeout(console.log, 1000, `test`);
test.cache(); // takes a second to log 'test'
test.cache(); // instantly logs the second 'test'
```
<a name="Function.isInstance"></a>

### Function.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is a function

**Kind**: static method of [<code>Function</code>](#Function)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Function.isInstance(2); // false
Function.isInstance((() => {})); // true
```
<a name="Math"></a>

## Math : <code>object</code>
**Kind**: global namespace  

* [Math](#Math) : <code>object</code>
    * [.avg](#Math.avg) ⇒ <code>number</code>
    * [.average(nums)](#Math.average) ⇒ <code>number</code>
    * [.factorial(num)](#Math.factorial) ⇒ <code>number</code>
    * [.fibonacci(num)](#Math.fibonacci) ⇒ <code>Array.&lt;number&gt;</code>
    * [.gcd(nums)](#Math.gcd) ⇒ <code>number</code>
    * [.lcm(nums)](#Math.lcm) ⇒ <code>number</code>
    * [.isEven(num)](#Math.isEven) ⇒ <code>boolean</code>
    * [.isPrime(num)](#Math.isPrime) ⇒ <code>boolean</code>

<a name="Math.avg"></a>

### Math.avg ⇒ <code>number</code>
An alias of Math.average

**Kind**: static property of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| nums | <code>Array.&lt;number&gt;</code> | 

**Example**  
```javascript
Math.avg(...[1, 2, 3]); // 2
Math.avg(1, 2, 3); // 2
```
<a name="Math.average"></a>

### Math.average(nums) ⇒ <code>number</code>
Returns the average of an of two or more numbers

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| nums | <code>Array.&lt;number&gt;</code> | 

**Example**  
```javascript
Math.average(...[1, 2, 3]); // 2
Math.average(1, 2, 3); // 2
```
<a name="Math.factorial"></a>

### Math.factorial(num) ⇒ <code>number</code>
Calculates the factorial of a number

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

**Example**  
```javascript
Math.factorial(6); // 720
```
<a name="Math.fibonacci"></a>

### Math.fibonacci(num) ⇒ <code>Array.&lt;number&gt;</code>
Generates an array, containing the Fibonacci sequence, up until the nth term

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

**Example**  
```javascript
Math.fibonacci(6); // [0, 1, 1, 2, 3, 5]
```
<a name="Math.gcd"></a>

### Math.gcd(nums) ⇒ <code>number</code>
Calculates the greatest common divisor between two or more numbers

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| nums | <code>Array.&lt;number&gt;</code> | 

**Example**  
```javascript
Math.gcd(8, 36); // 4
Math.gcd(...[12, 8, 32]); // 4
```
<a name="Math.lcm"></a>

### Math.lcm(nums) ⇒ <code>number</code>
Returns the least common multiple of two or more numbers

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| nums | <code>Array.&lt;number&gt;</code> | 

**Example**  
```javascript
Math.lcm(12, 7); // 84
Math.lcm(...[1, 3, 4, 5]); // 60
```
<a name="Math.isEven"></a>

### Math.isEven(num) ⇒ <code>boolean</code>
Returns true if the given number is even, false otherwise

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

**Example**  
```javascript
Math.isEven(3); // false
```
<a name="Math.isPrime"></a>

### Math.isPrime(num) ⇒ <code>boolean</code>
Checks if the provided integer is a prime number

**Kind**: static method of [<code>Math</code>](#Math)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

**Example**  
```javascript
Math.isPrime(11); // true
```
<a name="Number"></a>

## Number : <code>object</code>
**Kind**: global namespace  
<a name="Number.isInstance"></a>

### Number.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is a number

**Kind**: static method of [<code>Number</code>](#Number)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Number.isInstance('foo bar'); // false
Number.isInstance(2); // true
```
<a name="Object"></a>

## Object : <code>object</code>
**Kind**: global namespace  

* [Object](#Object) : <code>object</code>
    * _instance_
        * [.s.invert()](#Object+s.invert) ⇒ [<code>Object</code>](#Object)
        * [.s.lowerCaseKeys()](#Object+s.lowerCaseKeys) ⇒ [<code>Object</code>](#Object)
        * [.s.map(fn)](#Object+s.map) ⇒ [<code>Object</code>](#Object)
        * [.s.mapKeys(fn)](#Object+s.mapKeys) ⇒ [<code>Object</code>](#Object)
        * [.s.merge(objects)](#Object+s.merge) ⇒ [<code>Object</code>](#Object)
        * [.s.size()](#Object+s.size) ⇒ [<code>Object</code>](#Object)
    * _static_
        * [.isInstance(arg)](#Object.isInstance) ⇒ <code>boolean</code>

<a name="Object+s.invert"></a>

### object.s.invert() ⇒ [<code>Object</code>](#Object)
Inverts the key-value pairs of the object, without mutating it

**Kind**: instance method of [<code>Object</code>](#Object)  
**Example**  
```javascript
{ name: 'John', age: 20 }.invert(); // { 20: 'age', John: 'name' }
```
<a name="Object+s.lowerCaseKeys"></a>

### object.s.lowerCaseKeys() ⇒ [<code>Object</code>](#Object)
Creates a new object from the specified object, where all the keys are in lowercase

**Kind**: instance method of [<code>Object</code>](#Object)  
**Example**  
```javascript
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = myObj.lowerCaseKeys(); // {name: 'Adam', surname: 'Smith'}
```
<a name="Object+s.map"></a>

### object.s.map(fn) ⇒ [<code>Object</code>](#Object)
Creates an object with the same keys as the provided object and values generated by running the provided function for each value

**Kind**: instance method of [<code>Object</code>](#Object)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```javascript
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
users.map(u => u.age); // { fred: 40, pebbles: 1 }
```
<a name="Object+s.mapKeys"></a>

### object.s.mapKeys(fn) ⇒ [<code>Object</code>](#Object)
Creates an object with keys generated by running the provided function for each key and the same values as the provided object

**Kind**: instance method of [<code>Object</code>](#Object)  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```javascript
{ a: 1, b: 2 }.mapKeys((val, key) => key + val); // { a1: 1, b2: 2 }
```
<a name="Object+s.merge"></a>

### object.s.merge(objects) ⇒ [<code>Object</code>](#Object)
Creates a new object from the combination of two or more objects

**Kind**: instance method of [<code>Object</code>](#Object)  

| Param | Type |
| --- | --- |
| objects | [<code>Array.&lt;Object&gt;</code>](#Object) | 

**Example**  
```javascript
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
object.merge(other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```
<a name="Object+s.size"></a>

### object.s.size() ⇒ [<code>Object</code>](#Object)
Get size of the object

**Kind**: instance method of [<code>Object</code>](#Object)  
**Example**  
```javascript
{ one: 1, two: 2, three: 3 }.size(); // 3
```
<a name="Object.isInstance"></a>

### Object.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is an object

**Kind**: static method of [<code>Object</code>](#Object)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
Object.isInstance(2); // false
Object.isInstance({foo: 'bar'}); // true
```
<a name="String"></a>

## String : <code>object</code>
**Kind**: global namespace  

* [String](#String) : <code>object</code>
    * _instance_
        * [.capitalize([allWords])](#String+capitalize) ⇒ <code>string</code>
        * [.decapitalize([allWords])](#String+decapitalize) ⇒ <code>string</code>
        * [.mask([num], [mask])](#String+mask) ⇒ <code>string</code>
        * [.pluralize(value, [plural])](#String+pluralize) ⇒ <code>string</code>
        * [.reverse()](#String+reverse) ⇒ <code>string</code>
        * [.lines()](#String+lines) ⇒ <code>Array.&lt;string&gt;</code>
        * [.camelCase()](#String+camelCase) ⇒ <code>string</code>
        * [.kebabCase()](#String+kebabCase) ⇒ <code>string</code>
        * [.snakeCase()](#String+snakeCase) ⇒ <code>string</code>
        * [.truncate(num)](#String+truncate) ⇒ <code>string</code>
        * [.words(pattern)](#String+words) ⇒ <code>Array.&lt;string&gt;</code>
        * [.contains(pattern)](#String+contains) ⇒ <code>Array.&lt;string&gt;</code>
    * _static_
        * [.isInstance(arg)](#String.isInstance) ⇒ <code>boolean</code>

<a name="String+capitalize"></a>

### string.capitalize([allWords]) ⇒ <code>string</code>
Returns the capitalized string

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type | Default |
| --- | --- | --- |
| [allWords] | <code>boolean</code> | <code>false</code> | 

**Example**  
```javascript
'foo bar'.capitalize(); // 'Foo bar'
'hello world'.capitalize(true); // 'Hello World'
```
<a name="String+decapitalize"></a>

### string.decapitalize([allWords]) ⇒ <code>string</code>
Returns the decapitalized string

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type | Default |
| --- | --- | --- |
| [allWords] | <code>boolean</code> | <code>false</code> | 

**Example**  
```javascript
'Foo Bar'.decapitalize(); // 'foo Bar'
'Hello World'.decapitalize(true); // 'hello world'
```
<a name="String+mask"></a>

### string.mask([num], [mask]) ⇒ <code>string</code>
Replaces all but the last num of characters with the specified mask character

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type | Default |
| --- | --- | --- |
| [num] | <code>number</code> | <code>4</code> | 
| [mask] | <code>string</code> | <code>&quot;&#x27;*&#x27;&quot;</code> | 

**Example**  
```javascript
'1234567890'.mask(); // '******7890'
'1234567890'.mask(3); // '*******890'
'1234567890'.mask(-4, '$'); // '$$$$567890'
```
<a name="String+pluralize"></a>

### string.pluralize(value, [plural]) ⇒ <code>string</code>
Returns the singular or plural form of the word based on the input number

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| [plural] | <code>string</code> | 

**Example**  
```javascript
'apple'.pluralize(0); // 'apples'
'apple'.pluralize(1); // 'apple'
'apple'.pluralize(2); // 'apples'
'person'.pluralize(2, 'people'); // 'people'
```
<a name="String+reverse"></a>

### string.reverse() ⇒ <code>string</code>
Reverses the string

**Kind**: instance method of [<code>String</code>](#String)  
**Example**  
```javascript
'foobar'.reverse(); // 'raboof'
```
<a name="String+lines"></a>

### string.lines() ⇒ <code>Array.&lt;string&gt;</code>
Splits a multiline string into an array of lines

**Kind**: instance method of [<code>String</code>](#String)  
**Example**  
```javascript
'This\nis a\nmultiline\nstring.\n'.lines(); // ['This', 'is a', 'multiline', 'string.' , '']
```
<a name="String+camelCase"></a>

### string.camelCase() ⇒ <code>string</code>
Converts the string to camelcase

**Kind**: instance method of [<code>String</code>](#String)  
**Example**  
```javascript
'some_database_field_name'.camelCase(); // 'someDatabaseFieldName'
'Some label that needs to be camelized'.camelCase(); // 'someLabelThatNeedsToBeCamelized'
'some-javascript-property'.camelCase(); // 'someJavascriptProperty'
'some-mixed_string with spaces_underscores-and-hyphens'.camelCase(); // 'someMixedStringWithSpacesUnderscoresAndHyphens'
```
<a name="String+kebabCase"></a>

### string.kebabCase() ⇒ <code>string</code>
Converts a string to kebab case

**Kind**: instance method of [<code>String</code>](#String)  
**Example**  
```javascript
'camelCase'.kebabCase(); // 'camel-case'
'some text'.kebabCase(); // 'some-text'
'some-mixed_string With spaces_underscores-and-hyphens'.kebabCase(); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
'AllThe-small Things'.kebabCase(); // "all-the-small-things"
'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.kebabCase(); // 'i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html'
```
<a name="String+snakeCase"></a>

### string.snakeCase() ⇒ <code>string</code>
Converts a string to snake case

**Kind**: instance method of [<code>String</code>](#String)  
**Example**  
```javascript
'camelCase'.snakeCase(); // 'camel_case'
'some text'.snakeCase(); // 'some_text'
'some-mixed_string With spaces_underscores-and-hyphens'.snakeCase(); // 'some_mixed_string_with_spaces_underscores_and_hyphens'
'AllThe-small Things'.snakeCase(); // "all_the_small_things"
'IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'.snakeCase(); // 'i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html'
```
<a name="String+truncate"></a>

### string.truncate(num) ⇒ <code>string</code>
Truncates a string up to a specified length

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

**Example**  
```javascript
'boomerang'.truncate(7); // 'boom...'
```
<a name="String+words"></a>

### string.words(pattern) ⇒ <code>Array.&lt;string&gt;</code>
Converts a given string into an array of words

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| pattern | <code>RegExp</code> | 

**Example**  
```javascript
'I love javaScript!!'.words(); // ["I", "love", "javaScript"]
'python, javaScript & coffee'.words(); // ["python", "javaScript", "coffee"]
```
<a name="String+contains"></a>

### string.contains(pattern) ⇒ <code>Array.&lt;string&gt;</code>
Find out if the string contains the argument at any position

**Kind**: instance method of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| pattern | <code>RegExp</code> | 

**Example**  
```javascript
'javaScript & typescript'.contains('Typescript'); // true
'javaScript & typescript'.contains('Typescript', true); // false
```
<a name="String.isInstance"></a>

### String.isInstance(arg) ⇒ <code>boolean</code>
Returns true if the given argument is an string

**Kind**: static method of [<code>String</code>](#String)  

| Param | Type |
| --- | --- |
| arg | <code>\*</code> | 

**Example**  
```javascript
String.isInstance(2); // false
String.isInstance('foo bar'); // true
```
