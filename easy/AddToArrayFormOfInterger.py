class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        num = [str(element) for element in num]
        num = "".join(num)
        num = int(num)
        newNum = str(num + k)
        array = [*newNum]
        array = [int(element) for element in array]
        return array