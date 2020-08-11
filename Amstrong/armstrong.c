#include <stdio.h>
#include <stdlib.h>

int main()
{
    int suma=0,numero=0;
    int num1,num2,num3;

    for(int x=100;x<=400;x++)
    {
        suma=0;
        num1=x/100;
        num2=(x%100)/10;
        num3=x%10;
        suma=(num1*num1*num1)+(num2*num2*num2)+(num3*num3*num3);
        printf("\n%d\t%d",x,suma);

        if(suma==x)
        {
            numero+=suma;
            printf("\n%d\t%d",x,suma);
        }

    }
    return numero;
}
