function minimal(arr) {
    let min = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}

function maximal(arr) {
    let max = Number.MIN_SAFE_INTEGER;

    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

function median(arr) {
    return quickSort(arr)[arr.length / 2];
}

function quickSort(arr) {
    if (arr.length < 2) return arr;

    let p = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(p, quickSort(right));
}

let array = [];

for (let i = 0; i < 1000; i++) {
    array.push(Math.random() * (Number.MAX_SAFE_INTEGER - Number.MIN_SAFE_INTEGER) + Number.MIN_SAFE_INTEGER);
}

console.log(quickSort(array))
console.log(maximal(array));
console.log(minimal(array));
console.log(median(array));

tags = document.querySelectorAll("*");
map = new Map();

console.log(tags)

for (let i = 0; i < tags.length; i++) {
    if (map.has(tags[i].tagName)) {
        let prevValue = map.get(tags[i].tagName);

        map.set(tags[i].tagName, prevValue + 1);
    } else {
        map.set(tags[i].tagName, 1);
    }
}
console.log(map);