def power(n, k):
    res = 1

    for i in range(k):
        res *= n
    return res

a = input().split(" ")

print(power(float(a[0]), int(a[1])))