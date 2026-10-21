def solution(numer1, denom1, numer2, denom2):
    answer = []
    
    def gcd(a, b):
        while b:
            a, b = b, a % b
        return a
    
    def lcm(a, b):
        return (a * b) // gcd(a, b)
    
    max_num = lcm(denom1, denom2)

    number1 = numer1 * (max_num // denom1)
    number2 = numer2 * (max_num // denom2)

    
    answer.append((number1 + number2) / gcd((number1 + number2) , max_num))
    answer.append(max_num / gcd((number1 + number2) , max_num))
    
    return answer