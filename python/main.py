def getShape(n):
    if (n % 6 == 0):
        return "CIRCLE STAR"
    elif (n % 2 == 0):
        return "CIRCLE"
    elif (n % 3 == 0):
        return "STAR"
    
    return None

if __name__ == '__main__':
    n = int(input())

    print(getShape(n))
