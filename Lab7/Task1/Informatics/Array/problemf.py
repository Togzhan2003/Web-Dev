n = int(input())
k = input().split(" ")
answer = 0

for i in range(1, n - 1):
    if int(k[i - 1]) < int(k[i]) and int(k[i + 1]) < int(k[i]):
        answer += 1

print(answer)