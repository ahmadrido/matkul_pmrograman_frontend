// get element
const main = document.getElementById('container');
const mainChild = document.createElement('p');
const zero = document.createElement('p')
// styling for paragraph
mainChild.innerText = 'Add Contact'
mainChild.style.color = 'red'
mainChild.style.fontWeight = 'bold'
mainChild.style.fontSize = '2rem'
main.appendChild(mainChild)
// craete input user
const inputUser = document.createElement('input')
main.appendChild(inputUser);
inputUser.setAttribute('type', 'text')
inputUser.setAttribute('id', 'inputValue');
inputUser.setAttribute('placeholder', 'input your name');
// create button add
const buttonAdd = document.createElement('button')
main.appendChild(buttonAdd)
buttonAdd.textContent = 'Add'
// handle event add
buttonAdd.addEventListener('click', ()=>{
    const value = inputUser.value
    // check input value
    if(value == ''){
        alert('value cannot be empty')
    }else {
        // add contact if input value not empty
        addContact(value)
        inputUser.value = ''
    }
    // remove zero text
    if(ul.childElementCount > 0){
       zero.textContent = ''
    }
})

// create ul element
const ul = document.createElement('ul');
main.appendChild(ul)

// function add contact
function addContact (username){
    // create li element and append to ul
    const li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = username
    li.style.padding = '5px'
    // create button remove
    const buttonRemove = document.createElement('i')
    buttonRemove.setAttribute('class', 'fa-solid fa-trash')
    buttonRemove.style.color = 'red'
    buttonRemove.style.marginLeft = '5px'
    li.appendChild(buttonRemove)
    // handle event remove
    buttonRemove.addEventListener('click', () => {
        ul.removeChild(li)
        // check if ul child is empty
        if(ul.childElementCount <= 0){
            zero.textContent = 'no one contact in here!, add contact first'
            zero.style.color = 'red'
            main.appendChild(zero)
        }
    })
    
}

// default value
addContact('jhon Doe')
addContact('ahmad')
addContact('rydo')


