function solution(n) {
    let answer = 1;
    //n=7 1*1=1 1*2=2 2*3=6 
    for(let i =1; i<=10; i++){
        answer *= i
        if(answer === n)
            return i;
        if(answer > n)
            return i-1;
    }
}