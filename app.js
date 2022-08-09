const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////
    // sections active class
    allSections.forEach(sect =>{
        sect.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                // remove selected state from the other btns
                sectBtns.forEach(btn =>{
                    btn.classList.remove('active');
                })
                e.target.classList.add('active');

                sections.forEach(section =>{
                    section.classList.remove('active');
                })
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })

    // Toggle theme: dark/light.
    // const themeBtn = document.querySelector('.theme-btn');
    // themeBtn.addEventListener('click', () =>{
    //     let element = document.body;
    //     element.classList.toggle('light-mode');  // toggle on/off.
    // })
}

PageTransitions();
