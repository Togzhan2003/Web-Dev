a = int(input())

while a % 2 == 0 or a == 1:
    if a == 1:
        print("YES")
        break
    a /= 2
else:
    print("NO")