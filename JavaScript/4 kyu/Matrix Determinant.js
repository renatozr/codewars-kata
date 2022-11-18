function determinant(m) {
    const nxn = m.length;

    if (nxn === 1) return m[0][0];
    if (nxn === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    let det = 0;

    for (let i = 0; i < nxn; i += 1) {
        const subMatrix = [...m]
            .slice(1)
            .map((line) => {
                const newLine = [...line];
                newLine.splice(i, 1);

                return newLine;
            });

        if (i % 2 === 0) {
            det += m[0][i] * determinant(subMatrix);
        } else {
            det -= m[0][i] * determinant(subMatrix);
        }
    }

    return det;
};