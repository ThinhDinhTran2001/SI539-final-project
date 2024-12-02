document.addEventListener('DOMContentLoaded', function() {
    // Popup functionality
    var popup = document.getElementById('popup');
    var popupImg = document.getElementById('popup-img');
    var closeBtn = document.getElementsByClassName('close')[0];

    function showPopup(imgSrc) {
        popupImg.src = imgSrc;
        popup.style.display = 'block';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            closePopup();
        }
    }

    document.querySelectorAll('.menu-category ul li').forEach(function(item) {
        item.addEventListener('click', function() {
            var imgSrc = this.querySelector('img').src;
            showPopup(imgSrc);
        });

        item.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                var imgSrc = this.querySelector('img').src;
                showPopup(imgSrc);
            }
        });
    });

    window.onclick = function(event) {
        if (event.target == popup) {
            closePopup();
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    // Form submission functionality
    var form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
        });
    }

    // Dark mode toggle functionality
    var darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});