n = int(input())
k = input().split(" ")

for i in range (1, n):
    if int(k[i]) * int(k[i - 1]) > 0:
        print("YES")
        break
else: 
    print("NO")