const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Adriana ' + '\u00A9' + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

var messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var userName = event.target.usersName.value;
    var userEmail = event.target.usersEmail.value;
    var userMessage = event.target.usersMessage.value;

    console.log(userName);
    console.log(userEmail);
    console.log(userMessage);

    var messageSection = document.getElementById('messages');
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');

    newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a> <span> wrote: ' + userMessage + '</span>';

    var removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.classList.add('remove-button');
    
    removeButton.addEventListener('click', function () {
        var entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});
