class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        alpha = []
        for i in sentence:
            if alpha.count(i) == 0:
                alpha.append(i)
            
        if len(alpha) == 26:
            return True
            