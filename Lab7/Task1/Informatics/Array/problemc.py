n = input()
n = input().split(" ")
answer = 0 

for i in n:
    if int(i) > 0:
        answer += 1

print(answer)