function solution(statues) {
    statues = statues.sort((a, b) => a-b);
    range = statues[statues.length-1] - statues[0];
    return (range - statues.length)+1
}