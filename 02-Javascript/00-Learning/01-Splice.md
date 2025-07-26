| #  | Problem                                    | Code                                                    | Result                            |
| -- | ------------------------------------------ | ------------------------------------------------------- | --------------------------------- |
| 1  | **Remove a specific index**                | `arr.splice(2, 1);`                                     | Deletes 1 item at index 2         |
| 2  | **Insert at specific index**               | `arr.splice(2, 0, 'new')`                               | Inserts `'new'` at index 2        |
| 3  | **Replace element at index**               | `arr.splice(2, 1, 'updated')`                           | Replaces index 2 with `'updated'` |
| 4  | **Remove last element**                    | `arr.splice(-1)`                                        | Removes last item                 |
| 5  | **Remove first element**                   | `arr.splice(0, 1)`                                      | Removes first item                |
| 6  | **Empty an array**                         | `arr.splice(0)`                                         | Empties the entire array          |
| 7  | **Remove last 3 elements**                 | `arr.splice(-3)`                                        | Removes last 3                    |
| 8  | **Replace last element**                   | `arr.splice(-1, 1, 'end')`                              | Replaces last item                |
| 9  | **Insert at the end**                      | `arr.splice(arr.length, 0, 'end')`                      | Same as `push()`                  |
| 10 | **Insert multiple items**                  | `arr.splice(2, 0, 'a', 'b')`                            | Inserts 2 items at index 2        |
| 11 | **Remove multiple from middle**            | `arr.splice(2, 3)`                                      | Removes 3 items from index 2      |
| 12 | **Replace multiple items**                 | `arr.splice(1, 2, 'x', 'y')`                            | Replaces 2 with `'x','y'`         |
| 13 | **Clone array from original using splice** | `cloned = arr.slice().splice(0)`                        | Destructive clone                 |
| 14 | **Move an item from one index to another** | `arr.splice(to, 0, arr.splice(from, 1)[0])`             | Moves element                     |
| 15 | **Delete item by value**                   | `arr.splice(arr.indexOf(val), 1)`                       | Deletes item if exists            |
| 16 | **Replace item by value**                  | `arr.splice(arr.indexOf(old), 1, new)`                  | Replaces value                    |
| 17 | **Remove duplicates**                      | Loop + splice when duplicate found                      | Cleans duplicates                 |
| 18 | **Remove items conditionally**             | `arr.forEach((v, i) => { if (cond) arr.splice(i, 1) })` | Use with care                     




🧹 Array Cleanup

```
// Remove undefined/nulls
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] == null) arr.splice(i, 1);
}
```


🔀 Reordering Elements
```
// Move item from index 1 to 3
arr.splice(3, 0, arr.splice(1, 1)[0]);
```

🧪 Immutable Clone (Alternative to slice)
```
const newArr = [...arr].splice(2, 2); // Non-destructive subarray
```
