def find_pairs(array, target):

    seen = set()
    pairs = set()

    for number in array:
        com = target - number

        if com in seen:
            pairs.add(max(number, com))
        seen.add(number)

    return list(pairs)



array = [2, 4, 3, 5, 7, 8, 1]
target = 9

yes = find_pairs(array, target)

print("unique values pairs ", yes)