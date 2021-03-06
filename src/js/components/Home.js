import { TweenMax, Power2, TimelineLite } from "gsap";

class Home {
    constructor(props) {
        this.container = document.createElement('div');
        this.container.className = 'home-container';

        this.title = document.createElement('h1');
        this.title.className = 'game-title';
        this.title.innerHTML = 'Guess The Word';

        this.userNameInput = document.createElement('input');
        this.userNameInput.className = 'username';
        this.userNameInput.setAttribute('placeholder', 'username');

        this.message = document.createElement('p');
        this.message.innerHTML = 'Choose your username and hit ENTER';

        this.startBtn = document.createElement('button');
        this.startBtn.className = 'start-btn';
        this.startBtn.innerHTML = 'start';

        this.container.appendChild(this.title);
        this.container.appendChild(this.userNameInput);
        this.container.appendChild(this.message);
        this.container.appendChild(this.startBtn);
    }

    update(props) {
        const { isPlayerLoggedIn, gameEnabled } = props;

        if (isPlayerLoggedIn) {
            this.container.classList.add('hide');
            this.userNameInput.classList.add('hide');
            this.message.innerHTML = '';
            this.startBtn.classList.add('show');
            this.removeFocus();
        } else {
            this.container.classList.add('show');
            this.startBtn.classList.remove('show');
            this.userNameInput.classList.remove('hide');
            this.message.textContent = 'Choose your username and hit ENTER';
            this.setFocus();
        }

        if (gameEnabled) {
            this.startBtn.classList.remove('show');
        }
    }

    setFocus() {
        const el = this.container.querySelector('.username');
        el.autofocus = true;
    }

    removeFocus() {
        const el = this.container.querySelector('.username');
        el.autofocus = false;
    }
}

export default Home;