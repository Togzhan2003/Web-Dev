a, b, c, d = int(input()), int(input()), int(input()), int(input())

def min(a, b, c, d):
    return min(min(min(a,b), c), d)

print(min(a, b, c, d))