requestAnimationFrame(frame)

function frame(currentTime) {
    console.log(currentTime);
    requestAnimationFrame(frame)
}