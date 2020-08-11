def armstrong():
	secuencia = []
	n_armstrong = []
	for i in range(100,401):
		secuencia.append(str(i))
	
	for x in secuencia:
		primer_d = int(x[0])
		segundo_d = int(x[1])
		tercer_d = int(x[2])
		
		cal = primer_d**3+segundo_d**3+tercer_d**3
		if cal == int(x):
			n_armstrong.append(cal)
		

	print("Los números amrstrong entre el 100 y el 400 son: ", n_armstrong)

armstrong()