const app = document.querySelector('#app');

let users = [
    {id: 1, name: 'Dennis', slot: 'first', selected: false},
    {id: 2, name: 'Mac', slot: 'first', selected: false},
    {id: 3, name: 'Dee', slot: 'first', selected: false},
    {id: 4, name: 'Charlie', slot: 'first', selected: false},
    {id: 4, name: 'Frank', slot: 'first', selected: false}
];

const createHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerDiv');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerHTML = 'Always Sunny First, Second, Third';

    headerDiv.appendChild(header);
    return headerDiv;
}

const createBody = () => {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('bodyDiv');

    bodyDiv.appendChild(createFirstDiv());
    bodyDiv.appendChild(createSecondDiv());
    bodyDiv.appendChild(createThirdDiv());

    return bodyDiv;
}

const createFirstDiv = () => {
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('firstDiv');

    const firstDivButton = createArrowButton('>');

    firstDivButton.addEventListener('click', ev => {
        users.forEach(user => {
            if (user.slot === 'first' && user.selected === true) {
                user.slot = 'second';
                user.selected = false;
            }
        });
        render();
    });

    firstDiv.appendChild(firstDivButton);


    users.forEach(user => {
        if (user.slot === 'first') {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            let userText = document.createElement('span');
            userText.innerHTML = user.name;

            userDiv.addEventListener('click', ev => {
                if (user.selected === false) {
                    user.selected = true;
                } else {
                    user.selected = false;
                }
                render();
            });

            if (user.selected === false) {
                userDiv.className = 'customerDiv';
            } else {
                userDiv.className = 'selected';
            }

            userDiv.appendChild(userText);
            firstDiv.appendChild(userDiv);
        }
    });
    
        
    return firstDiv;
}

const createSecondDiv = () => {
    const secondDiv = document.createElement('div');
    secondDiv.classList.add('secondDiv');

    const secondDivLeftButton = createArrowButton('<');

    secondDivLeftButton.addEventListener('click', ev => {
        users.forEach(user => {
            if (user.slot === 'second' && user.selected === true) {
                user.slot = 'first';
                user.selected = false;
            }
        });
        render();
    });

    secondDiv.appendChild(secondDivLeftButton);

    const secondDivRightButton = createArrowButton('>');

    secondDivRightButton.addEventListener('click', ev => {
        users.forEach(user => {
            if (user.slot === 'second' && user.selected === true) {
                user.slot = 'third';
                user.selected = false;
            }
        });
        render();
    });

    secondDiv.appendChild(secondDivRightButton);

    users.forEach(user => {
        if (user.slot === 'second') {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            let userText = document.createElement('span');
            userText.innerHTML = user.name;

            userDiv.addEventListener('click', ev => {
                if (user.selected === false) {
                    user.selected = true;
                } else {
                    user.selected = false;
                }
                render();
            });

            if (user.selected === false) {
                userDiv.className = 'customerDiv';
            } else {
                userDiv.className = 'selected';
            }

            userDiv.appendChild(userText);
            secondDiv.appendChild(userDiv);
        }
    });

    return secondDiv;
}

const createThirdDiv = () => {
    const thirdDiv = document.createElement('div');
    thirdDiv.classList.add('thirdDiv');

    const thirdDivButton = createArrowButton('<');

    thirdDivButton.addEventListener('click', ev => {
        users.forEach(user => {
            if (user.slot === 'third' && user.selected === true) {
                user.slot = 'second';
                user.selected = false;
            }
        });
        render();
    });

    thirdDiv.appendChild(thirdDivButton)


    users.forEach(user => {
        if (user.slot === 'third') {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            let userText = document.createElement('span');
            userText.innerHTML = user.name;

            userDiv.addEventListener('click', ev => {
                if (user.selected === false) {
                    user.selected = true;
                } else {
                    user.selected = false;
                }
                render();
            });

            if (user.selected === false) {
                userDiv.className = 'customerDiv';
            } else {
                userDiv.className = 'selected';
            }

            userDiv.appendChild(userText);
            thirdDiv.appendChild(userDiv);
        }
    });

    return thirdDiv;
}

const createArrowButton = (symbol) => {
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = symbol;

    buttonDiv.appendChild(button);
    
    return buttonDiv;
}


const render = () => {
    app.innerHTML = '';

    app.appendChild(createHeader());

    app.appendChild(createBody());
}

render();
