function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
        return null;
    } else {
        var stars = n;
        var output = '';
        var firstLine = true;
        while (stars > 0) {
            var j;
            if (!firstLine) {
                output = '\n' + output;
                for (j = 0; j < (n - stars) / 2; j++) {
                    output += ' ';
                }
            }
            for (var i = 0; i < stars; i++) {
                output += '*';
                if (!firstLine) {
                    output = '*' + output;
                }
            }
            if (!firstLine) {
                for (j = 0; j < (n - stars) / 2; j++) {
                    output = ' ' + output;
                }
            }
            output = output + '\n';
            stars -= 2;
            firstLine = false;
        }
        return ' ' + output.substring(1);
    }
}

console.log(diamond(5))