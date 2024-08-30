document.addEventListener("DOMContentLoaded", function () {
    // Setting background-colors for sections
    const sections = document.querySelectorAll('.album');
    sections.forEach(section => {
        const bgColor = section.getAttribute('data-bgcolor');
        section.style.backgroundColor = bgColor;
    });

    // Open and close lyrics popup
    const trackLists = document.querySelectorAll('.tracklist');
    const overlay = document.querySelector('.overlay');
    const lyricsPopup = document.querySelector('.lyrics-popup');

    lyricsPopup.style.backgroundColor = lyricsPopup.getAttribute('data-bgcolor');

    trackLists.forEach(tracklist => {
        tracklist.addEventListener('click', (e) => {
            if (e.target.classList.contains('track')) {
                openLyricsPopup();
                disableBodyScrolling();
            }
        });
    });

    overlay.addEventListener('click', () => {
        closeLyricsPopup();
    });

    function openLyricsPopup() {
        lyricsPopup.classList.add('open');
        overlay.classList.add('open');
    }

    function closeLyricsPopup() {
        lyricsPopup.classList.remove('open');
        overlay.classList.remove('open');
        enableBodyScrolling();
    }

    function disableBodyScrolling() {
        document.body.style.overflow = hidden;
    }
    function enableBodyScrolling() {
        document.body.style.overflow = '';
    }
});
