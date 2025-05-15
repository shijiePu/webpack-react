
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCbs = [];
        this.onRejectCbs = [];
        const resolve = (value) => {
            if (this.state === PENDING) {
                console.log('change', value)
                this.value = value
                this.state = 'fulfilled'
                this.onResolveCbs.forEach(fn => fn())
            }
        }

        const reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason
                this.state = 'rejected'
                this.onRejectCbs.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(value) {
        console.log(' static resolve', value)
        if (value instanceof MyPromise) {
            return value;
        }
        return new MyPromise(resolve => resolve(value));
    }

    static reject(reason) {
        console.log(' static reason', reason)
        return new MyPromise((_, reject) => reject(reason));
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };
        const newPromise = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value)
                        resolvePromise(newPromise, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.state === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason)
                        resolvePromise(newPromise, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            } else if (this.state === PENDING) {
                this.onResolveCbs.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(newPromise, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });

                this.onRejectCbs.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(newPromise, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    }, 0);
                });
            }

        })

        return newPromise;
    }

    static race(promises) {
        return new MyPromise(() => {
            promises.forEach(promise => {
                MyPromise.resolve(promise).then(resolve, reject)
            })
        })
    }

    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const res = []
            const count = 0;
            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(res => {
                    res[index] = res
                    count++;
                    if (count === promises.length) {
                        resolve(res)
                    }
                }, reject => {
                    reject(reject)
                })
            })
        })
    }


}

function resolvePromise(promise2, x, resolve, reject) {
    // 防止 Promise 循环引用
    if (promise2 === x) {
        throw ('error')
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject);
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 任何定义了 then 方法的对象或函数
        let then;
        try {
            then = x.then;
        } catch (e) {
            return reject(e);
        }

        if (typeof then === 'function') {
            // 这个开关确保 Promise 的状态只能改变一次
            let called = false;
            try {
                // 使用 then.call(x,...)：确保 then 方法在 x 的上下文中执行
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (e) {
                reject(e)
            }
        } else {
            resolve(x);
        }
    } else {
        resolve(x)
    }
}

// const test = new MyPromise(resolve => {
//     setTimeout(() => {
//         resolve('success')
//     }, 10);
// }).then(result => {
//     console.log('then', result)
//     setTimeout(() => {
//         MyPromise.resolve('then30')
//     }, 30);
// }).then(result => {
//     console.log('then2', result)
//     setTimeout(() => {
//         MyPromise.resolve('then300')
//     }, 30);
// }).then(result => {
//     console.log('then3', result)
//     setTimeout(() => {
//         MyPromise.resolve('then3000')
//     }, 30);
// });

const test2 = new Promise(resolve => {
    setTimeout(() => {
        resolve('success')
    }, 10);
}).then(result => {
    console.log('then', result)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('then30')
        }, 30);
    })
}).then(result => {
    console.log('then2', result)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('then300')
        }, 300);
    })
}).then(result => {
    console.log('then3', result)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('then300')
        }, 3000);
    })

});