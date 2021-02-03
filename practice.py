# Find all the pairs of two integers in an unsorted array that sum up to a given S. For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

array = [3, 5, 2, -4, 8, 11]
s = 7


def pairs(arr, n):
    # Array of answer/s
    ans = []

    # loop through array
    for i in arr:
        # target is going to === s
        target = n - i

        # check if pair can be made and isn't already in ans array
        if target in arr and target not in [a[0] for a in ans]:
            # append to the ans array
            ans.append([i, target])

    return ans


print(pairs(array, s))

def pairsTwo(arr, n):
    # Array of answer/s
    ans = []
    # loop through array to check each element
    for i in range(len(arr)):
        # checking each other element in the array
        for j in range(i + 1, len(arr)):
            # if two element in array equal to sum then append it to the an
            # s array
            if arr[i] + arr[j] == n:
                ans.append([arr[i], arr[j]])
    return ans


print(pairsTwo(array, s))