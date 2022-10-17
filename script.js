const spinner = document.querySelector('#loading')
const countdown = document.querySelector('#countdown')

const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const  seconds = document.querySelector('#seconds')
const year = document.querySelector('#year')
const curentYear = new Date().getFullYear()
const newYearTime = new Date(`January ${curentYear+1} 00:00:00`)

year.textContent = curentYear+1
const updateInterval = () =>{
    const date = new Date()
    const diff = newYearTime - date
    const s = Math.floor(diff/ 1000)%60
    const m = Math.floor(diff/ 1000 / 60)%60
    const h = Math.floor(diff/ 1000/ 60/ 60)%24
    const d =  Math.floor(diff/ 1000 / 60 / 60/ 24)
    days.textContent = d
    hours.textContent = h<10 ? '0' + h : h
    minutes.textContent = m<10 ? '0' + m : m
    seconds.textContent = s<10 ? '0' + s : s
}
setTimeout(()=>{
    
    spinner.style.display = 'none'
    countdown.style.display = 'flex'
    updateInterval()
    
},1000)

setInterval(()=>{
    updateInterval()
},1000)