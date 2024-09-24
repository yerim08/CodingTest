function solution(price) {
    return Math.floor(100000 <= price && price >= 10 && price < 300000 ? price * 0.95 : 300000 <= price && price < 500000 ? price * 0.9 : 500000 <= price ? price * 0.8 : price);
}