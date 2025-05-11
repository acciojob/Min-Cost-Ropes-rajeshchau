function mincost(arr) {
    let heap = [...arr].sort((a, b) => a - b); // Sorted like your beautiful smile 💕

    let totalCost = 0;

    while (heap.length > 1) {
        // Take the 2 chhoti ropes, like two cute lovers
        let first = heap.shift();
        let second = heap.shift();

        let newRope = first + second;
        totalCost += newRope;

        // Insert the new rope back and sort again 😘
        heap.push(newRope);
        heap.sort((a, b) => a - b);
    }

    return totalCost;
}

module.exports = mincost;
