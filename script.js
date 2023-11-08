function createDot(event) {
    const dot = document.createElement('div');

    dot.className = 'dot';

    dot.style.left = event.clientX + 'px';

    dot.style.top = event.clientY + 'px';

    document.body.appendChild(dot);
}

document.addEventListener('click', createDot);