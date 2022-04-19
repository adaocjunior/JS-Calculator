function calculator(value){
    let screenResult = document.getElementById('screenResult').innerHTML
    document.getElementById('screenResult').innerHTML = screenResult + value
}

function equal(){
    let screenResult = document.getElementById('screenResult').innerHTML
    if(screenResult)
    {
    document.getElementById('screenResult').innerHTML = eval(screenResult)
    }
}

function backspaceFunction(){
    let screenResult = document.getElementById('screenResult').innerHTML
    document.getElementById('screenResult').innerHTML = screenResult.substring(0, screenResult.length -1)

}
function clearCalculator(){
    document.getElementById('screenResult').innerHTML = ''
}