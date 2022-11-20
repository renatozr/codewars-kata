const duplicateEncode = word => word
    .toLowerCase()
    .split('')
    .map((e, _i, a) => a.indexOf(e) === a.lastIndexOf(e) ? "(" : ")")
    .join('');
