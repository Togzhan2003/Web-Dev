n = int(input())
k = input().split(" ")

for i in range(int(n / 2)):
    m = k[i]
    k[i] = k[n - 1 - i]
    k[n - 1 - i] = m

for i in range(n):
    print(k[i], end = " ")