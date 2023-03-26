import math

a = int(input())
answer = 0
k = int(math.sqrt(a))

for i in range(1, k + 1):
    if a % i == 0:
        if i * i == a:
            answer += 1
        else:
            answer += 2

print(answer)