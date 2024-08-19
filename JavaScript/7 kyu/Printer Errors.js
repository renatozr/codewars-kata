const printerError = (s) => `${(s.match(/[n-z]/g) || []).length}/${s.length}`;
