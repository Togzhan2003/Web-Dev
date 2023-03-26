a = int(input())
b = int(input())
answer = ""

for x in range(a, b + 1):
    if x % 2 == 0:
        answer += format("%d" % x)
print(answer)