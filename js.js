const body = document.querySelector('body')
const blocks = document.querySelectorAll('.block')

console.log(blocks)

function createBlocks() {
    const colors = ["red", "blue", "pink", "yellow", "purple", "orange", "lightgreen", "lightblue"]


    for (let i = 0; i < 5000; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)]
        div = document.createElement('div')
        div.classList.add('block')

        div.addEventListener('mouseover', (e) => {
            e.target.classList.add(color)
        })

        div.addEventListener('mouseout', (e) => {
            e.target.classList.add('transition')

            setTimeout(() => {
                e.target.classList.remove(color)
                e.target.classList.remove('transition')
            }, 800)
        })


        body.append(div)

    }

}

createBlocks()





