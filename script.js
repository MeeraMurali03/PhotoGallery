//creating new div

const modal=document.createElement('div');
modal.id='modal'
document.body.appendChild(modal)

//to make div active
//modal.classList.add('active')


//selecting image
const images=document.querySelectorAll('.img')
//console.log(images)
//selecting each image
images.forEach(image=>{
    image.addEventListener('click',()=>{
       modal.classList.add('active');
//selecting image -big once
        //creating/selecting big image
        const bigimg=document.createElement('img')
        //bigimg = foreach image
        bigimg.src=image.src
        //assigning big image id
            bigimg.id="bigimg"
        //to remove repition image
        while(modal.firstChild)
        {
            modal.removeChild(modal.firstChild)
        }
        //display image
        modal.append(bigimg)

    })
})

//to remove  blur by pressing the screen
modal.addEventListener('click',()=>{
    modal.classList.remove('active')
})