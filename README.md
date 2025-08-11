# it's just want to try something
1st, let's make count button.

## why use prev ?
setCount(count + 1) -> it uses thr value of count at hhe time line runs.
but React doesn't update state instantly
setCount(prev => prev +1) -> prev is guaranteed to be the latest state value.
