function ConvertText(text)
    text = text:gsub("~r~", "<span style=color:red;>") 
    text = text:gsub("~b~", "<span style=color:blue;>")
    text = text:gsub("~g~", "<span style=color:green;>")
    text = text:gsub("~y~", "<span style=color:yellow;>")
    text = text:gsub("~p~", "<span style=color:purple;>")
    text = text:gsub("~c~", "<span style=color:grey;>")
    text = text:gsub("~m~", "<span style=color:darkgrey;>")
    text = text:gsub("~u~", "<span style=color:black;>")
    text = text:gsub("~o~", "<span style=color:gold;>")
    text = text:gsub("~s~", "</span>")
    text = text:gsub("~w~", "</span>")
    text = text:gsub("~b~", "<b>")
    text = text:gsub("~n~", "<br>")
    text = "<span>" ..text.. "</span>"

    return text
end

function showNotify(message, tipo, timeout)
    if type(message) ~= 'string' then
        return
    end
    if type(tipo) ~= 'string' then
        return
    end
    if type(timeout) ~= 'number' then
        return
    end

    SendNUIMessage({
        action = 'showNoti',
        message = ConvertText(message),
        type = tipo or 'normal',
        timeout = timeout or 5000
    })
end

RegisterNetEvent('Roda_Notifications:showNotification')
AddEventHandler('Roda_Notifications:showNotification', function(message, tipo, timeout)
    showNotify(message, tipo, timeout)
end)

RegisterCommand('noti', function(src, args)
    if args[1] == 'error' then 
        showNotify('Hey, You have a error in this notification :(', args[1], 4000)
    elseif args[1] == 'info' then 
        showNotify('Hey, This is a information about you babe!', args[1], 4000)
    elseif args[1] == 'success' then 
        showNotify('Hey, This is a sucess Notification, All is good?', args[1], 4000)
    elseif args[1] == 'normal' then 
        showNotify('Hey, This is a normal Notification, It\'s okay?', args[1], 4000)
    elseif args[1] == 'warn' then 
        showNotify('Hey, This is a warn Notification, Be a Good man', args[1], 4000)
    elseif args[1] == 'announce' then 
        showNotify('Hey, This is an announce notification, The server will crash D:', args[1], 4000)
    elseif args[1] == 'twt' then 
        showNotify('Hey, This is a Twt notification, I\'m a Bird', args[1], 4000)
    end
end)

exports('showNotify', function(message, tipo, timeout)
    showNotify(message, tipo, timeout)
end)