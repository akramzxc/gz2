var n = prompt("Введите число");

    for (var i = 1; i <= n; i++) 
    {
        for (var j = 1; j <= i; j++)
            document.write(' ' + j + ' '); 
            document.write('<br>'); 
    }