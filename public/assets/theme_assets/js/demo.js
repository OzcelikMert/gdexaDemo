let Demo = (function () {
    function Demo(){
        main.init();
        navbar.init();
        dashboard.init();

      // $(".e_requested_link").removeClass("sidebar-lock-link");
       $(".menu-title .user-group-disable-lock").remove();

    }

    let small_library = {
        get_tag: ()=> {
            let href = window.location.href;
            return href.split("#", 2);
        }
    }

    let dashboard = {
        class:{

        },
        init(){
            let self = this;

            function event(){

            }

            event();
        }
    }

    let main = {
        values: {
            welcome_pop: true,
            watch_video: true,
            profile_update: true,
            mentor_matching: true,
            talent_finish_panel: false,
            mentor_finish_panel:false,
            old_page: ``
        },
        id:{
            DASHBOARD: "#dashboard",
            DASHBOARD_VERIFIED: "#dashboard_2",
            LEARNING_PATH_DETAIL: "#learning_path_detail",
            LEARNING_PATHS: "#learning_paths",
            MENTOR_OVERVIEW: "#mentor_overview",
            MENTORING_SESSION: "#mentoring_session",
            PROFILE: "#profile",
            VERIFY_YOUR_ACCOUNT:"#verify_your_account",
            WATCH_VIDEO:"#watch_video",
            PROFILE_COMPLETION:"#profile_completion",
            PROFILE_COMPLETION_2:"#profile_completion_2",
            PROFILE_COMPLETION_3:"#profile_completion_3",
            MENTOR_MATCHING:"#mentor_matching",
            MENTOR_MATCHING_TWO:"##mentor_matching_two",
            PROFILE_TWO: "#profile_two",
            LEARNING_PATH_MEETING:"#learning_path_meeting",
            ALL_LEARNING_PATHS:"#all_learning_paths",
            MENTORING_SPACE:"#mentoring_space",
            MASTER_CLASS:"#master_class",
            WATCH_VIDEO_COMPLETE:"#watch_video_complete",
            MENTOR_MATCHING_BTN:".e_mentor_matching_btn",
            MENTOR_ACCEPTED_BTN: "#mentor_accepted_btn",
            CREATE_LEARNING_PATH:"#create_learning_path",
            PROFILE_UPDATE_BTN:"#profile_update_btn",
            FINISH_TALENT_DASHBOARD:"#finish_talent_dashboard",
            VERIFYCTION_BAR:"#verifycation_bar",
            VERIFYCTION_BAR_2:".e_verifycation_bar_2",
            UPCOMING_MENTOR_TALKS_LAST:"#upcoming_mentor_talks_last",
            UPCOMING_MENTOR_TALKS_FIRST:"#upcoming_mentor_talks_first",
            MASTER_CLASS_VIDEO:"#master_class_video",
            MASTER_CLASS_QUIZ:"#master_class_quiz",
            MASTER_CLASS_AGENDA_VIDEO_SELECT:"#master_class_agenda_video_select",
            MASTERCLASS_BOX:"#masterclass_box",
            OPEN_TALENT_REQUEST:"#open_talent_request",
            MAIN_PAGE_YOU_ASSIGN_MENTOR:"#main_page_you_assign_mentor",
            VIRTUAL_WALLET_LAST:"#virtual_wallet_last",
            VIRTUAL_WALLET_FIRST:"#virtual_wallet_first",
            MAIN_PAGE_LEARNING_PATH:"#main_page_learning_path",
            MAIN_PAGE_LEARNING_PATH_2:"#main_page_learning_path_2",
            MAIN_LEARNING_PATHS_EMPTY:".main_learning_paths_empty",
            MAIN_LEARNING_PATHS_EMPTY_2:".main_learning_paths_empty_2",
            PROGRESS_BAR_STICK:".progress_bar_stick",
            PROGRESS_BAR_VALUE:".progress_bar_value",
            SKILLING_PATH: "#skilling_path",
            MARKETPLACE: "#marketplace",
            JOBPROFILE: "#job_profile",
            INTERVİEWS_OFFERS: "#interviews_offers",
            DASHBOARD_ADMIN: "#dashboard_admin",
            MASTERCLASS_UPLOAD: "#masterclass_upload",
            MASTERCLASS_INSTALL: "#masterclass_install",
            MASTERCLASS_ADD_NEW: "masterclass_add_new",
            MY_DASBOARD: "#my_dashboard",
            TALENTS: "#talents",
            LEARNING_PATHS_MENTORS: "#learning_paths_mentors",
            LEARNING_PATHS_MENTORS_3: "#learning_paths_mentors_3",
            SIDEBAR_ADMIN: `#sidebar_admin`,
            SIDEBAR_MENTOR: `#sidebar_mentor`,
            SIDEBAR_TALENT: `#sidebar_talent`

        },
        class: {
            PAGE: ".e_page",
            MASTER_CLASS_AGENDA_QUIZ_SELECT:".e_master_class_agenda_quiz_select",
        },
        get_page(){
          let page_tag = small_library.get_tag();
            console.log(page_tag)
          if(page_tag.length > 1) {
              let target = page_tag[1];
              if(target.length < 1) {
                  window.location.href = `${location.pathname}#login`;
                  return;
              }
              //$(".e_requested_link").removeClass("sidebar-lock-link");

              $(this.id.SIDEBAR_MENTOR).hide();
              $(this.id.SIDEBAR_ADMIN).hide();
              $(this.id.SIDEBAR_TALENT).hide();
              $('#hr_sidebar').hide();

              let master_class = `master_class`;

            if (target.match(/master_class/)) {
                  if(this.values.old_page.match(/admin/)) {
                      master_class = `master_class_admin`;
                  }else if (this.values.old_page.match(/mentor/)) {
                      master_class = `master_class_mentor`;
                  }else {
                      master_class = `master_class`;
                  }

               // $(`.e_page[id*='master_class']`).attr(`id`, `${master_class}`)
              }


              if(target.match(/admin/)) {
                  $(this.id.SIDEBAR_ADMIN).show();
              }else if (target.match(/mentor/)) {
                  $(this.id.SIDEBAR_MENTOR).show();
              }else if (target.match(/hr/)) {
                  $('#hr_sidebar').show();
              }else {
                  $(this.id.SIDEBAR_TALENT).show();
              }


              this.values.old_page = target;

              target = `#${target}`;
              if((target  === '#dashboard') && this.values.talent_finish_panel ){
                $(this.id.VERIFYCTION_BAR).remove();
                $(this.id.MAIN_PAGE_YOU_ASSIGN_MENTOR).show();
                $(this.id.MAIN_PAGE_LEARNING_PATH).show();
                $(this.id.MAIN_LEARNING_PATHS_EMPTY).hide();

                Helper.swall.fire(
                    `You' ve made it!`,
                    `Congratulation. You have finished the onboarding.<br>Start your mentoring now`,
                    Helper.types.emoji.confetti,
                    '',
                    `<button class='btn btn-green' data-function="close"> <a style="color: white" href="#master_class">Go to your Mentoring Space </a> </button>`
                )
                this.values.talent_finish_panel = false;
              }
              if(this.values.welcome_pop && target === '#dashboard') {
                  Helper.swall.fire(
                      'Hi Ashley. Nice to have you here.',
                      `Your registration was successful. Please follow the next steps and collect experience points (XP's) to get your exclusive 1:1 mentoring session`,
                      Helper.types.emoji.hello_hand,
                      '',`<button class='btn btn-green' data-function="close">Start onboarding</button>`
                  )
                  this.values.welcome_pop = false;
              }

              if(target  === '#dashboard_mentor' && this.values.mentor_finish_panel ){
                  console.log('dashboard_mentor finish')
                  $(this.id.VERIFYCTION_BAR_2).remove();
                  $(this.id.VIRTUAL_WALLET_LAST).show();
                  $(this.id.VIRTUAL_WALLET_FIRST).hide();
                  $(this.id.UPCOMING_MENTOR_TALKS_LAST).show();
                  $(this.id.UPCOMING_MENTOR_TALKS_FIRST).hide();
                  $(this.id.MAIN_PAGE_LEARNING_PATH_2).show();
                  $(this.id.MAIN_LEARNING_PATHS_EMPTY_2).hide();
                  $(this.id.MASTERCLASS_BOX).hide();
                  $(this.id.OPEN_TALENT_REQUEST).show();
                  this.values.mentor_finish_panel = false;
              }

              $(this.class.PAGE).hide();
              if (['#login','#login_mentor','#login_talent','#login_admin'].includes(target)) {
                  $(target).show();
              }
              else $(target).fadeIn();

              $(`${navbar.id.SIDEBAR} li a`)
                  .removeClass("active")
                  .parent()
                  .find(`[href='${target}']`)
                  .addClass("active");
          }else {
              window.location.href = `${location.pathname}#login`;
          }
        },
        init(){
            let self = this;

            function event(){
                $(window).on('hashchange', function(){
                    self.get_page();
                });


                $(self.id.WATCH_VIDEO_COMPLETE).click(()=>{
                    if (self.values.watch_video){
                        Helper.swall.fire(
                            'Great! You earned 200 XP',
                            `You accomplished the next step.<br>To match you with a Mentor, please complete your profile`,
                            Helper.types.emoji.hand_ok,
                            '',`<button class='btn btn-green' data-function="close"><a style="color:white;" href="#profile_completion">Complete profile</a></button>`
                        )
                        self.values.watch_video = false;
                    }
                })
                $(self.id.PROFILE_UPDATE_BTN).click(()=>{
                    if (self.values.profile_update){
                        Helper.swall.fire(
                            'Awesome. Your profile looks nice!',
                            `With you updated profile we can now<br>start with the mentor matching`,
                            Helper.types.emoji.hand_ok,
                            '',`<button class='btn btn-green' data-function="close"><a style="color:white;" href="#men_matching">Finding your mentors</a></button>`)
                        self.values.profile_update = false;
                        $(self.id.PROGRESS_BAR_STICK).css('width','85%');
                        $(self.id.PROGRESS_BAR_VALUE).html('700 XP');
                    }

                })
                $(self.id.MENTOR_MATCHING_BTN).click(()=>{
                    if (self.values.mentor_matching || true){
                        Helper.swall.fire(
                            'You got a match!',
                            `Great. We found some Mentors for you.<br>If you want to pick you mentors manually please click below`,
                            null,
                            `<div class="d-flex mb-3">
                                        <div class="ap-img d-flex justify-content-center">
                                            <img class="ap-img__main bg-opacity-primary  wh-120 rounded-circle mb-3 " src="img/ekremnamazci.png" alt="profile">
                                            <p class="request-my-dashoard">85%</p>
                                        </div>
                                        <div class="ap-img d-flex justify-content-center ml-5">
                                            <img class="ap-img__main bg-opacity-primary  wh-120 rounded-circle mb-3 " src="img/ashleysmith.png" alt="profile">
                                            <p class="request-my-dashoard">85%</p>
                                        </div>
                                </div>`,
                            `<div class='d-flex flex-row'><button class='btn btn-gray m-2' data-function="close"><a style="color: white" href="#men_matching_2">Pick Mentors manually</a></button>
                            <button class='btn btn-green m-2' id="finish_talent_dashboard" data-function="close"><a style="color: white" href="#dashboard">Finish onboarding</a></button></div>`
                        )
                        self.values.mentor_matching = false;
                    }
                })

                $(self.id.CREATE_LEARNING_PATH).click(()=>{
                    Helper.swall.fire(
                        `You' ve made it!`,
                        `Congratulation. You have finished the onboarding.<br>Your Mentor Profile is now active and Talent can request you `,
                        Helper.types.emoji.confetti,
                        '',
                        `<button class='btn btn-green' data-function="close"><a style="color: white" href="#dashboard_mentor"> Check your dashboard </a></button>`
                    )
                    self.values.mentor_finish_panel = true;
                })

                $(self.id.MASTER_CLASS_AGENDA_VIDEO_SELECT).click(()=>{
                    $(self.id.MASTER_CLASS_VIDEO).fadeIn()
                    $('#master_class_agenda_video_select_bubles').addClass('active')
                    $(self.id.MASTER_CLASS_QUIZ).hide();

                })
                $(self.class.MASTER_CLASS_AGENDA_QUIZ_SELECT).click(()=>{
                    $(self.id.MASTER_CLASS_VIDEO).closest('.timeline-single__buble').addClass('active')
                    $('#master_class_agenda_quiz_select_bubles').addClass('active')
                    $(self.id.MASTER_CLASS_QUIZ).fadeIn()
                    $(self.id.MASTER_CLASS_VIDEO).hide();
                })

                $(self.id.MENTOR_MATCHING_BTN).click(()=>{
                    $("#index_rookie_level").html("Superstar");
                    $("#progressbar_index").css('width','100%');
                    $("#index_progress_text").html('1000 XP');
                    $("#index_progress_text_2").html('0 XP');
                    $(".e_requested_link").removeClass("sidebar-lock-link");
                    self.values.talent_finish_panel = true;
                })

                $(`${self.id.MARKETPLACE} input[name='tag_option']`).change(function (){
                    let value = $(this).val();

                    if(value === `all`) {
                        $(`.e_recommended_item`).fadeIn(`slow`);
                    }else{
                        $(`.e_recommended_item[tag='${value}']`).fadeIn(`slow`);
                        $(`.e_recommended_item`).not(`[tag='${value}']`).hide();
                    }
                })

                $(`${self.id.SKILLING_PATH} .e_skill_items .e_item button[function='remove']`).click(function (){
                    $(this).closest(`.e_item`).remove();
                })
                $(document).on('click', `${self.id.SKILLING_PATH} .e_item_slot .e_item_accepted`, function () {
                    if($(`${self.id.SKILLING_PATH} .e_item_slot .e_skill_completed`).length >= 5) {
                        Helper.swall.fire(
                            `You' ve made it!`,
                            `Congratulation. You have finished your learning journey.<br>Now you can ready to find your dreamjob!`,
                            Helper.types.emoji.confetti,
                            '',
                            `<button class='btn btn-green' data-function="close"> <a style="color: white" href="#job_profile">Go to your hiring area </a> </button>`
                        );
                    }

                    $(this).closest(`.e_item_slot`).append(`
                        <div class="e_skill_completed skill-completed">
                            <div>
                                <i class="    
                              fa-check"></i>
                            </div>
                        </div>
                    `);
                })
                $(document).on('click', `${self.id.SKILLING_PATH} .e_item_slot.e_upload_video`, function () { $(`${self.id.SKILLING_PATH} #upload_video`).trigger(`click`); });


                $(document).on('click','.signIn-createBtn',function (){
                    let mail=null,password=null;
                    Array.from($('.e_login_username')).forEach((e)=>{
                        e = $(e).val()
                        if (e !== '') mail = e;
                    })
                    Array.from($('.e_login_password')).forEach((e)=>{
                        e = $(e).val()
                        if (e !== '') password = e;
                    })

                    let type = $(this).attr('login-type')

                    let d = new Date();
                    let s = (d.getHours() > 12) ? d.getHours() - 12 : d.getHours();
                    let dd = s.toString()+d.getMinutes().toString()

                    //console.log(dd,mail, password,type)
                    if (/*mail === dd && password === 'gd2022!'*/true){
                        $('.e_login_username').val('');
                        $('.e_login_password').val('');
                        switch (type){
                            case 'talent': location.href = '#dashboard';break;
                            case 'mentor': location.href = '#dashboard_mentor';break;
                            case 'admin': location.href = '#dashboard_admin';break;
                        }
                    }
                })
            }

            self.get_page();
            $(`${navbar.id.SIDEBAR} li a`).trigger("click");
            event();
            $(`${self.id.PROFILE_COMPLETION_2} select[name='choose_desired_skills']`).select2();
        }
    }

    let navbar = {
        id:{
            SIDEBAR: "#sidebar"
        },
        init(){
            let self = this;

            function event(){

            }

            event();
        }
    }

    return Demo;
})();

$(function () {
    $('.e_login_username').val('');
    $('.e_login_password').val('');
    (new Demo());
    setTimeout(()=>{
        $("body").fadeIn();
    },500);

})

var loadFile = function(event) {
    $(`#skilling_path .e_item_slot.e_upload_video`).html(`
        <div class="e_item_accepted card h-100">
            <img src="${URL.createObjectURL(event.target.files[0])}" class="card-img-top" style="height: 208px !important;">
        </div>
    `).removeClass(`e_upload_video`).removeClass(`no-item`);
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev, img, title) {
    ev.dataTransfer.setData("text", JSON.stringify({
        "index": ev.target.attributes.index.value,
        "img": img,
        "title": title
    }));
}

function drop(ev) {
    ev.preventDefault();
    var data = JSON.parse(ev.dataTransfer.getData("text"));
    //let e = $(`#skilling_path .e_item[index='${data.index}']`);
    $(ev.target).closest(`.e_item_slot`).html(`
        <div class="e_item_accepted card h-100">
            <img src="img/${data.img}" class="card-img-top">
            <div class="card-body pb-0">
                <h6 class="card-title text-capitalize text-dark mb-0">${data.title}</h6>
            </div>
        </div>
    `).removeClass(`no-item`);
}