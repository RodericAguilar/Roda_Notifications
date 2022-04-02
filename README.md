## Thanks for buy this notifications.

## This is an example: 

### Client Side

```lua

-- Message, Type and Duration
exports['Roda_Notifications']:showNotify('Hey, You have a error in this notification :(', 'error', 4000)

```


## Server Side


```lua
-- Source, Message, Type and Duration
TriggerClientEvent('Roda_Notifications:showNotification', source, 'You bought a weapon!', 'success', 3000)
```

### Types

```lua

-- normal
-- success
-- error
-- warn
-- info
-- announce
-- twt

```