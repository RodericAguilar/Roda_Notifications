window.addEventListener("message", function(event) {
    var v = event.data

    
    switch (v.action) {
        case 'showNoti': 
            ShowNoti(v.message, v.type, v.timeout)
        break;
    }
});



function ShowNoti(message, type, timeout) {
    var sound = null;
    var id = $('.notify .notify-append').length;

    $('.notify').animate({'right':'1vw'})
    $('.notify').fadeIn(500)

    if(type === 'normal'){
        $('.notify').append(`
        <div id=${id} class="notify-append normal">
            <i class="far fa-bell" style="color:blue; text-shadow: .0vw .0vw .5vw blue;"></i>
            <h1 style="color:blue">NOTIFY</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'success'){
        $('.notify').append(`
        <div id=${id} class="notify-append success">
        <i class="fal fa-badge-check" style="color:rgb(0, 255, 0); text-shadow: .0vw .0vw .5vw rgb(0, 255, 0); "></i>
            <h1 style="color:rgb(0, 255, 0)">SUCCESS</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'error'){
        $('.notify').append(`
        <div id=${id} class="notify-append error">
        <i class="fal fa-exclamation-triangle" style="color:red; text-shadow: .0vw .0vw .5vw red; "></i>
            <h1 style="color:red">ERROR</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'info'){
        $('.notify').append(`
        <div id=${id} class="notify-append info">
            <i class="fal fa-info" style="color:aqua; text-shadow: .0vw .0vw .5vw aqua;"></i>
            <h1 style="color:aqua">INFO</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'warn'){
        $('.notify').append(`
        <div id=${id} class="notify-append warn">
            <i class="fal fa-wind-warning" style="color:yellow; text-shadow: .0vw .0vw .5vw yellow;"></i>
            <h1 style="color:yellow">WARN</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'announce'){
        $('.notify').append(`
        <div id=${id} class="notify-append announce">
            <i class="fal fa-bullhorn" style="color:rgb(255, 0, 225); text-shadow: .0vw .0vw .5vw rgb(255, 0, 225);"></i>
            <h1 style="color:rgb(255, 0, 225)">ANNOUNCE</h1>
            <p>${message}</p>
        </div>
        `)
    }else if(type === 'twt'){
        $('.notify').append(`
        <div id=${id} class="notify-append twt">
            <i class="fab fa-twitter" style="color:#1A8CD8; text-shadow: .0vw .0vw .5vw #1A8CD8;"></i>
            <h1 style="color:#1A8CD8">TWITTER</h1>
            <p>${message}</p>
        </div>
        `)
    }

    setTimeout(function(){
        if (sound != null) {
            sound.pause();
        }

        sound = new Howl({src: ['./sounds/notiSound.mp3']});
        sound.volume(0.7);
        sound.play();
    }, 200)
    
    setTimeout(function () {
        var $this = $(`.notify .notify-append[id=${id}]`);

        $this.animate({'left':'20vw'})
        $this.fadeOut()
    }, timeout)
}