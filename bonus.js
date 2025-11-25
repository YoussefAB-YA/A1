var createCounter = function(init) {
    let value=init;
    let counter={
        increment:function(){
           return ++value;
        }
        ,decrement:function(){
            return --value;
        }
        ,reset:function(){
        value=init;
        return value;
        }
   
    }
    return counter;
};

//Test Case 1
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
let counter = createCounter(5);
console.log([counter.increment(),counter.reset(),counter.decrement()]);

//Test Case 2
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

counter = createCounter(0);
console.log([counter.increment(),counter.increment(),counter.decrement(),counter.reset(),counter.reset()]);
