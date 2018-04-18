class Home {
    constructor(props) {
        console.log("Home props", props);

        this.container = document.createElement('div');
        this.container.className = 'home-screen';

        this.title = document.createElement('h1');
        this.title.className = 'game-title';
        this.title.innerHTML = 'Guess The Word';

        this.userNameInput = document.createElement('input');
        this.userNameInput.className = 'username';
        this.userNameInput.setAttribute('placeholder', 'username')

        this.message = document.createElement('p');
        this.message.innerHTML = 'Choose your username and hit ENTER to start the Game';

        this.startBtn = document.createElement('button');
        this.startBtn.className = 'start-btn';
        this.startBtn.innerHTML = 'start';


        this.container.appendChild(this.title);
        this.container.appendChild(this.userNameInput);
        this.container.appendChild(this.message);
        this.container.appendChild(this.startBtn);

    }

    update(props) {
        console.log('Home Update', props);

        // if user hide user input and show start button
    }
}

export default Home;