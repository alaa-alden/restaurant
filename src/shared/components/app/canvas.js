/* const design = () => {
  const canvas = document.querySelector('canvas')
  canvas.width = window.innerWidth - 5
  canvas.height = window.innerHeight - 6
  const c = canvas.getContext('2d')
  let mouse = {
      x: undefined,
      y: undefined
    },
  // MinRadius = 2,
    MaxRadius = 40
  const colorArray = [
    '#E37B40',
    '#46B29D',
    '#DE5B49',
    '#324D5C',
    '#F0CA4D'
  ]// kuler
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
  })
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth - 5
    canvas.height = window.innerHeight - 6
    init()
  })
  class circle {
    constructor(x = 0, y = 0, radius = 0, dx = 0, dy = 0) {
      this.x = x
      this.y = y
      this.radius = radius
      this.MinRadius = radius
      this.dx = dx
      this.dy = dy
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    }
    draw() {
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
      const colorNum = Math.floor(Math.random() * colorArray.length)
      c.strokeStyle = this.color
      c.stroke()
      c.fillStyle = this.color
      c.fill()
    }
    update() {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) this.dx = -this.dx
      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) this.dy = -this.dy
      this.x += this.dx, this.y += this.dy
      if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
        if (this.radius < MaxRadius) this.radius += 1
      } else if (this.radius > this.MinRadius) this.radius -= 1
      this.draw()
    }
}

  let circleArray = []
// first create circle
  function init() {
    circleArray = []
    for (let i = 0; i < 2000; i++) {
      let
        radius = Math.random() * 3 + 1,
        x = Math.random() * (innerWidth - radius * 2) + radius,
        dx = (Math.random() - 0.5) * 0.5,
        y = Math.random() * (innerHeight - radius * 2) + radius,
        dy = (Math.random() - 0.5) * 0.5
      circleArray.push(new circle(x, y, radius, dx, dy))
    }
  }
  init()
// work with animation , that fun is call update for each of circle
  function animation() {
    requestAnimationFrame(animation)
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update()
    }
  }
  animation()
}
export default design
*/
