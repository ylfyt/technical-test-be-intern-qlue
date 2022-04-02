def getCombination(targetLength: int, length:int, sum:int, temp:list[int], target:int):
    if (targetLength == length):
        if (sum == target):
            print(temp)
    elif (sum < target):
        for i in range(1, target):
            if (length >= 1):
                if (i >= temp[length-1]):
                    cop = [x for x in temp]
                    cop.append(i)
                    tempSum = sum + i
                    getCombination(targetLength, length+1, tempSum, cop, target)
            else:
                cop = [x for x in temp]
                cop.append(i)
                tempSum = sum + i
                getCombination(targetLength, length+1, tempSum, cop, target)
         
def solution(n):
    for i in range(2, n+1):
        getCombination(i, 0, 0, [], n)
 
if __name__ == '__main__':
    n = int(input())
    solution(n)
    