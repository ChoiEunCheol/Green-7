function lifeIsLoop(callback, interval){
    function aa(){
        callback();
        setTimeout(aa, 1000);
    }
    setTimeout(aa,10000);
}

lifeIsLoop(function(){
    console.log("돌고");
},2000);

// 10초의 지연시간을 갖는 부분은 처음 lifeIsLoop함수가 호출되었을 때 aa함수를 실행시키기 위해 있는 것
