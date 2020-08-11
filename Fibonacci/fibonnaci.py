def fibonacci():
	secuencia = [0,1]
	indice = 1
	pares_suma = 0
	while True:
		secuencia.append(secuencia[indice-1]+secuencia[indice])
		if(secuencia[indice-1]> 4000000):
			break
		indice += 1
	
	for num in secuencia:
		if num%2 == 0 and num != 1:
			pares_suma += num

	print("La suma de todos los pares de la secuencia de Fibonacci menores a 4000000 es: ", pares_suma)
	
fibonacci()