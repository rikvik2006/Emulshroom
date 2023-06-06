window.addEventListener('beforeunload', function (event: BeforeUnloadEvent) {
    event.preventDefault();
    const whiteScreen = document.createElement('div');
    whiteScreen.classList.add('white-screen');
    document.body.appendChild(whiteScreen);
    setTimeout(function () {
        window.location.href = 'nuova-pagina.html';
    }, 200);
});

export { }