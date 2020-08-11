#include <stdio.h>
#include <stdlib.h>
// fibonacci
int main()
{
    int suma=0;
    int aux;
    int y,x;
    int total = 0;

    for(x=1;x<4000000;)
    {
        for(y=2;y<4000000;)
        {
            suma=x+y;
            printf("\n%d\t%d\t%d",x,y,suma);
            if((suma%2)==0)
                total += suma;
            if(suma>4000000)
                return total;
            x=y;
            y=suma;
        }
    }
    return 0;
}
