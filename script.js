let y = 0
let x = 0
let deg = 0
let map = ["north", "west", "south", "east"]
let mapPointer = 0
let placed = false
let projectileDisplacement = "100px"


setInterval(() => {
    if (window.innerWidth < 514) {
        projectileDisplacement = "50px"
    }
    else{
        projectileDisplacement = "100px"
    }
}, 1000)

//move
document.getElementById("b").onclick = function () {
    checkDirection()
    $("#a").detach().appendTo(`#${x}-${y}`)
}
//move


//rotation
document.getElementById("left").onclick = function () {
    deg -= 90
    document.getElementById("a").style.transform = `rotate(${deg}deg)`
    mapPointer++
    if (mapPointer > 3) {
        mapPointer = 0
    }
    console.log(map[mapPointer])
}

document.getElementById("right").onclick = function () {
    deg += 90
    document.getElementById("a").style.transform = `rotate(${deg}deg)`
    mapPointer--
    if (mapPointer < 0) {
        mapPointer = 3
    }
    console.log(map[mapPointer])
}
//rotation

//fire event
document.getElementById("fire").onclick = function () {
    if (map[mapPointer] == "north" && y + 2 <= 9) {

        $(`#${x}-${y}`).append(`<img src="blast.png" id="projectile">`)
        document.getElementById("fire").disabled = true
        document.getElementById("b").disabled = true
        $("#projectile").css("transform", "rotate(-90deg)").animate({ bottom: projectileDisplacement }, 1000, () => {
            $(`#${x}-${y + 2}`).append(`<img src ="./Images/explode.png" class ="explode">`)
            setTimeout(() => {
                //$(`#${x}-${y + 2}`).css("background", "aqua")
                $(".explode").remove()
                document.getElementById("fire").disabled = false
                document.getElementById("b").disabled = false
            }, 1000)
            $("#projectile").remove()
            $(".explode").fadeOut("slow")
        })
    }
    else if (map[mapPointer] == "south" && y - 2 >= 0) {

        $(`#${x}-${y}`).append(`<img src="blast.png" id="projectile">`)
        document.getElementById("fire").disabled = true
        document.getElementById("b").disabled = true
        $("#projectile").css("transform", "rotate(90deg)").animate({ top: projectileDisplacement }, 1000, () => {
            $(`#${x}-${y - 2}`).append(`<img src ="./Images/explode.png" class ="explode">`)
            setTimeout(() => {
                $(".explode").remove()
                document.getElementById("fire").disabled = false
                document.getElementById("b").disabled = false
            }, 1000)
            $("#projectile").remove()
            $(".explode").fadeOut("slow")
        })
    }
    else if (map[mapPointer] == "east" && x + 2 <= 9) {


        $(`#${x}-${y}`).append(`<img src="blast.png" id="projectile">`)
        document.getElementById("fire").disabled = true
        document.getElementById("b").disabled = true
        $("#projectile").animate({ left: projectileDisplacement }, 1000, () => {
            $(`#${x + 2}-${y}`).append(`<img src ="./Images/explode.png" class ="explode">`)
            setTimeout(() => {
                $(".explode").remove()
                document.getElementById("fire").disabled = false
                document.getElementById("b").disabled = false
            }, 1000)
            $("#projectile").remove()
            $(".explode").fadeOut("slow")
        })
    }
    else if (map[mapPointer] == "west" && x - 2 >= 0) {

        $(`#${x}-${y}`).append(`<img src="blast.png" id="projectile">`)
        document.getElementById("fire").disabled = true
        document.getElementById("b").disabled = true
        $("#projectile").css("transform", "rotate(180deg)").animate({ right: projectileDisplacement }, 1000, () => {
            $(`#${x - 2}-${y}`).append(`<img src ="./Images/explode.png" class ="explode">`)
            setTimeout(() => {
                $(".explode").remove()
                document.getElementById("fire").disabled = false
                document.getElementById("b").disabled = false
            }, 1000)
            $("#projectile").remove()
            $(".explode").fadeOut("slow")
        })
    }
    else {
        console.log(x)
        console.log(y)
    }
}
//fire event

//place
document.getElementById("place").onclick = function () {
    let userx = document.getElementById("userX").value
    let usery = document.getElementById("userY").value
    let direction = document.getElementById("directionInput").value
    console.log(direction)
    y = parseInt(usery) 
    x = parseInt(userx) 
    if (!placed) {
        $(`#${x}-${y}`).append(`<img src = "xwing.png" width = "40" height = "40" z-index = "1" id = "a">`)
    }
    $("#a").detach().appendTo(`#${x}-${y}`)
    if (direction == "east") {
        document.getElementById("a").style.transform = "rotate(90deg)"
        deg = 90
        mapPointer = 3
    }
    else if (direction == "south") {
        document.getElementById("a").style.transform = "rotate(180deg)"
        deg = 180
        mapPointer = 2
    }
    else if (direction == "west") {
        document.getElementById("a").style.transform = "rotate(270deg)"
        deg = 270
        mapPointer = 1
    }
    else if (direction == "north") {
        document.getElementById("a").style.transform = "rotate(360deg)"
        deg = 360
        mapPointer = 0
    }

    placed = true
    document.getElementById("fire").disabled = false
    document.getElementById("report").disabled = false
    document.getElementById("b").disabled = false
    document.getElementById("left").disabled = false
    document.getElementById("right").disabled = false

}
//place



//report location
document.getElementById("report").onclick = function () {
    alert(`x: ${x}, y: ${y} and direction is ${map[mapPointer]}`)
}
//report location



//spin edit input
document.getElementById("incX").onclick = function () {
    if (document.getElementById("userX").value == 9) {
        return
    }
    document.getElementById("userX").value++
}

document.getElementById("decX").onclick = function () {
    if (document.getElementById("userX").value == 0) {
        return
    }
    document.getElementById("userX").value--
}

document.getElementById("incY").onclick = function () {
    if (document.getElementById("userY").value == 9) {
        return
    }
    document.getElementById("userY").value++
}

document.getElementById("decY").onclick = function () {
    if (document.getElementById("userY").value == 0) {
        return
    }
    document.getElementById("userY").value--
}
//spin edit input




function checkDirection() {
    if (map[mapPointer] == "north") {
        if (y == 9) {
            return
        }
        else {
            y++
        }
    }
    else if (map[mapPointer] == "south") {
        if (y == 0) {
            return
        }
        else {
            y--
        }
    }
    else if (map[mapPointer] == "east") {
        if (x == 9) {
            return
        }
        else {
            x++
        }
    }
    else if (map[mapPointer] == "west") {
        if (x == 0) {
            return
        }
        else {
            x--
        }
    }
}