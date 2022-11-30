function titleCase(title, minorWords) {
    minorWords = minorWords ? minorWords.toLowerCase().split(' ') : [];
    
    return title.toLowerCase().split(' ').map((w, i) => {
        if (w === '' || (i !== 0 && minorWords.includes(w))) return w;
        
        return `${w[0].toUpperCase()}${w.slice(1)}`;
    }).join(' ');
}
