n = int(input())
a = input().split(" ")
answer = 0

for i in range(1, n):
    if int(a[i]) > int(a[i - 1]):
        answer += 1
    
print(answer)