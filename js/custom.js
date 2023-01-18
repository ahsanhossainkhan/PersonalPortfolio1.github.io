
// preloader 
function loader(){
    document.querySelector(".preloader").style.display="none";
}

const boxes = document.querySelectorAll(".box");
const about_me = document.querySelector(".about_me-box");
const experience = document.querySelector(".experience-box");
const contact = document.querySelector(".contact-box");
const button = document.querySelector("#collapse_box");
const container = document.querySelectorAll(".box-container");
const tagline = document.querySelectorAll(".section-text");

container.forEach(item=>{
    item.classList.remove("acitve")
})
button.onclick=()=>{
    document.querySelectorAll(".box").forEach(item=>{
        setTimeout(()=>{
            item.classList.remove("active");
        },800);
    });
    gsap.to(about_me, {width: 402+"px", height: 288+"px", duration: .2});
    gsap.to(experience, {width: 402+"px", height: 288+"px", duration: .2});
    gsap.to(contact, {width: 402+"px", height: 288+"px", duration: .2});
    button.classList.remove("active");
    tagline.forEach(items=>{
        items.classList.remove("active");
    })
    container.forEach(item=>{
        item.classList.remove("active");
    })
}
about_me.onclick=()=>{
    about_me.classList.add("active");
    gsap.to(about_me, {width: 100+"%", height: 100+"%", duration: .2})
    button.classList.add("active");
    setTimeout(()=>{
        document.querySelector("#about_me_box_container").classList.add("active");
    },800);
    tagline[0].classList.add("active")
}
experience.onclick=()=>{
    experience.classList.add("active");
    gsap.to(experience, {width: 100+"%", height: 100+"%", duration: .2})
    button.classList.add("active");
    setTimeout(()=>{
        document.querySelector("#exp_box_container").classList.add("active");
    },800);
    tagline[1].classList.add("active")
}
contact.onclick=()=>{
    contact.classList.add("active");
    gsap.to(contact, {width: 100+"%", height: 100+"%", duration: .2})
    button.classList.add("active");
    setTimeout(()=>{
        document.querySelector("#contact_box_container").classList.add("active");
    },800);
    tagline[2].classList.add("active")
};


// experience box 
// gettin all buttons 
const exp_all_buttons = document.querySelectorAll(".exp_box_info button");
const exp_experience_btn = document.querySelector("#experience");
const exp_skills_btn = document.querySelector("#skills");
const exp_education_btn = document.querySelector("#education");
// getting all boxes 
const exp_experience_box = document.querySelector("#experience_box");
const exp_education_box = document.querySelector("#education_box");
const exp_skills_box = document.querySelector("#skills_box");
exp_experience_btn.onclick = ()=>{
    // setting active class in button 
    exp_experience_btn.classList.add("active")
    exp_skills_btn.classList.remove("active")
    exp_education_btn.classList.remove("active")
    // setting active class in boxes 
    exp_experience_box.classList.add("active");
    exp_education_box.classList.remove("active");
    exp_skills_box.classList.remove("active");
}


exp_education_btn.onclick = ()=>{
    // setting active class in button 
    exp_education_btn.classList.add("active")
    exp_experience_btn.classList.remove("active")
    exp_skills_btn.classList.remove("active")
    // setting active class in boxes 
    exp_education_box.classList.add("active");
    exp_experience_box.classList.remove("active");
    exp_skills_box.classList.remove("active");
}
exp_skills_btn.onclick = ()=>{
    // setting active class in button 
    exp_skills_btn.classList.add("active")
    exp_experience_btn.classList.remove("active")
    exp_education_btn.classList.remove("active")
    // setting active class in boxes 
    exp_skills_box.classList.add("active");
    exp_experience_box.classList.remove("active");
    exp_education_box.classList.remove("active");
}
