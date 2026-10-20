def solution(array):
    answer = 0
    nums = [0] * (max(array) + 1)
    
    for i in (array):
        nums[i] += 1

    count = 0
    max_num = 0
    for i, n in enumerate(nums):
        if(n > max_num):
            max_num = n
            count = 0
            answer = i
        elif n == max_num:
            count += 1
    if count > 0:
        answer = -1
        
    return answer