# Authentication bypassing the cache
``` javascript
    Auth.currentAuthenticatedUser({
    bypassCache:false 
    # if true=> query the Cognito pool
}).then( user=> setUser(user)).catch(err=> console.log(err))
```
_______________
Hub, unsecontext ?
_______________
