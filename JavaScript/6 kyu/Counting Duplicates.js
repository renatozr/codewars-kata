const duplicateCount = text => text
    .toLowerCase()
    .split('')
    .filter((e, i, a) => a.lastIndexOf(e) !== i && a.indexOf(e) === i)
    .length;
