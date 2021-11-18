const buttons = document.querySelectorAll('.btn')
const container = document.querySelector('.scrolling_container')
let boxes = document.querySelectorAll('.feature_box')
buttons[0].addEventListener('click', () => {
    container.scrollBy({left:80, behavior:'smooth'})
})
buttons[1].addEventListener('click', () => {
    container.scrollBy({left:-80, behavior:'smooth'})
})

const maxScroll = container.scrollWidth - container.clientWidth
const autoPlay = () => {
    container.scrollLeft > (maxScroll - 1) ? container.scrollLeft -= maxScroll : container.scrollLeft += 1
}
let play = setInterval(autoPlay, 15)
for(let i = 0; i<boxes.length; i++){
    boxes[i].addEventListener('mouseover')
}
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        clearInterval(play)
    })
    box.addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 15)
    })
})