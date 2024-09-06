// #Vẽ tam giác số

function triangle(n)  
{  
    var i, j, s = 1;  
    for (i = 1; i <= n; i++)  
    {  
        for (j = 1; j <= i; j++)  
            document.write(s++ + " ");  
        document.write("<br>");  
    }  
}
triangle(5);
