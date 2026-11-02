def solution(n):
    answer = 0
    def gcd (a, b):
        while b:
            a, b = b, a % b
        return a
    answer = n // gcd(n, 6)
    return answer