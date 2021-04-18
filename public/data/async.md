```ts
// elem.onkeydown = (event) => console.log('keydown',event)

console.log(1)

setTimeout(()=> console.log(5),0)

Promise.resolve(4).then(console.log)

console.log(2)

time = Date.now()

while( time + 5000 > Date.now()) {}

console.log(3)
```

## Event queues
https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf

```ts
setTimeout(() => {
    console.log(1)
        
    Promise.resolve(3).then((res)=>{ 
        console.log(res)

        setTimeout(() => {
            console.log(4)
        })
    })
    console.log(2)
} ,0)
```

