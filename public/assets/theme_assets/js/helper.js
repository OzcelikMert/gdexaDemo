let Helper = ( function () {
    let id = 0;
    function Helper(){}

    Helper.types = {
        emoji: {
            confetti: './img/icons/confetti.png',
            hello_hand: './img/icons/hand_hello.png',
            hand_ok: './img/icons/hand_ok.png',
        }
    };

    Helper.swall ={

        fire : (title='',content='',emoji=null,html_top='',html_bottom='')=>{
            let icon ='';

            if(emoji !== null ) {
                icon = `<img style="width: 128px" height="128px" src="${emoji}" alt=""/>`;
            }

            if (title !== ''){
                title = `<h2 class="text-success">${title}</h2>`;
            }

            if (content !== ''){
                content = `<p class="text-dark">${content}</p>`;
            }

            id++;
            let html = `
            <div class="swall_message" data-id="${id}" style="display: none">
                <div class="body">
                    <button class="close_btn" data-function="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x nav-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                    <div class="content">
                        ${html_top}
                        ${icon}${title}${content}
                        <div class="bottom">
                            ${html_bottom}
                        </div>
                    </div>
                </div>
            </div>`;

            $('body').append(html);
            $(`.swall_message[data-id=${id}]`).fadeIn();
        }
    }


    return Helper;
})();

$(document).ready(()=>{
    console.log('ready')

    $(document).on('click','.swall_message [data-function=close]',function () {
        console.log('click close modal')
        let id = $(this).closest('.swall_message').attr('data-id')
        let element = $(`.swall_message[data-id=${id}]`);
        element.fadeOut("slow", ()=>{
            element.remove();
        });
    })
    set_circle_progress();
})

function set_circle_progress(){
    Array.from($('.cicrcle-progress[data-value]')).forEach((e)=>{
        let progress = $(e).attr('data-value');
        let color = '#25ca99', bg_color = '#d5fff3';
        if (progress < 80 ) {color = '#fa8b0c'; bg_color = '#ffe8ce'}
        if (progress < 50 ) {color = '#ea2942'; bg_color = '#ea9ea9'}


        let bg = `conic-gradient(${color} ${progress}%, #f2f2f2 ${progress}%)`;
        $(e).find('div.middle-circle').html(`${progress}%`).css('background',bg_color).css('color',color)
        $(e).find('div.progress-spinner').css('background',bg);
    })
}