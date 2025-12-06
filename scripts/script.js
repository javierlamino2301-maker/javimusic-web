const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease-out';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});

const customMessageInput = document.getElementById('customMessage');
const userMessageDisplay = document.getElementById('userMessage');

if (customMessageInput && userMessageDisplay) {
    customMessageInput.addEventListener('input', function() {
        const message = this.value.trim();
        if (message) {
            userMessageDisplay.textContent = message;

            userMessageDisplay.style.transform = 'scale(1.05)';
            setTimeout(() => {
                userMessageDisplay.style.transform = 'scale(1)';
            }, 200);
        } else {
            userMessageDisplay.textContent = '¡La música nos une a todos! 🎵';
        }
    });
}


document.querySelectorAll('.clickable-image').forEach(img => {
    img.addEventListener('click', function() {

        const imagesArray = JSON.parse(this.getAttribute('data-images'));
        let currentIndex = parseInt(this.getAttribute('data-index'));
        

        currentIndex = (currentIndex + 1) % imagesArray.length;
        

        this.style.opacity = '0.5';
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {

            this.src = imagesArray[currentIndex];
            this.setAttribute('data-index', currentIndex);
            

            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        }, 200);
    });
});


function createFloatingNote() {
    const notes = ['🎵', '🎶', '🎸', '🎹', '🎺', '🎼', '🎤', '🥁'];
    const note = document.createElement('div');
    note.className = 'floating-notes';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * 100 + '%';
    note.style.top = Math.random() * 100 + '%';
    note.style.animationDelay = Math.random() * 5 + 's';
    note.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
    document.body.appendChild(note);


    setTimeout(() => note.remove(), 6000);
}


setInterval(createFloatingNote, 3000);


function openRegister() {
    const modal = document.getElementById('registerModal');
    modal.style.display = 'flex';
    document.getElementById('userNameInput').focus();
}

function registerUser() {
    const userName = document.getElementById('userNameInput').value.trim();

    if (userName === '') {
        alert('Por favor, introduce tu nombre');
        return;
    }

    document.getElementById('userName').textContent = userName;
    document.getElementById('userProfile').style.display = 'flex';

    document.getElementById('registerModal').style.display = 'none';


    document.querySelector('#explorar').scrollIntoView({
        behavior: 'smooth'
    });
}


const userNameInput = document.getElementById('userNameInput');
if (userNameInput) {
    userNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            registerUser();
        }
    });
}


window.addEventListener('click', function(e) {
    const modal = document.getElementById('registerModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < 600) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 1000);
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🎵 JAVIMUSIC cargado correctamente - Todos los recursos JS funcionando 🎵');
