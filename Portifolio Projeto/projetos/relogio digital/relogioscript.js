const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let date=new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    horas.textContent=hrs
    minutos.textContent=min
    segundos.textContent=seg
})