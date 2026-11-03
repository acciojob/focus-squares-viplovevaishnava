//your JS code here. If required.
const boxes = document.querySelectorAll('.square')
boxes.forEach((box) => {
    console.log(box, 'box')
    box.addEventListener("mouseover", (e) => {
        console.log(e.target.id)
        changeColor(e.target.id)
    })
    box.addEventListener("mouseout", (e) => {
        boxes.forEach((box) => {
            box.style.backgroundColor = '#E6E6FA'
        })
    })
})
function changeColor(hoverBoxId) {
    boxes.forEach((box) => {
        if (box.id != hoverBoxId) box.style.backgroundColor = '#6F4E37'
    })
}
