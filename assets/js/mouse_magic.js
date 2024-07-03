const handleOnMove = e => {
    const mouse = { x: e.clientX, y: e.clientY }

    const fireEffect = document.createElement("span");
    fireEffect.className = "fire-effect";

    fireEffect.style.left = `${mouse.x}px`;
    fireEffect.style.top = `${mouse.y}px`;

    $('#Container').append(fireEffect);
}

window.onmousemove = e => handleOnMove(e);