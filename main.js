function main(){
    
    let input = document.getElementById("inputcolor")

    let color = input.value
    let lowerCase = color.toLocaleLowerCase();
    
    if (lowerCase == "green"){
         alert("You can go!")
    } else if (lowerCase == "yellow"){
        alert("Prepare to go after the green color")
    } else {
        alert("Please, stop!")
    }
}
