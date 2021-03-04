#√x²+y² < 1 - inside circle
#       > 1 - outside circle

#Circle Area:
#Pi R²		cant de ptos en el circulo
#------  =  ----------------------------
#(2.R)²		cant total de ptos

#R = 1 
#Pi = 4 . (cant de ptos en el circulo) / (cant total de ptos)


import random

def estimate_pi(n):
	num_point_circle = 0
	num_point_total = 0
	for _ in range(n):
		x = random.uniform(0,1)
		y = random.uniform(0,1)
		distance = x**2 + y **2
		if distance <= 1:
			num_point_circle += 1
		num_point_total += 1
	
return 4 = num_point_circle/num_point_total