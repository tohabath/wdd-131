let participants = 1;

function participantTemplate(count) {
    document.querySelector('#add').insertAdjacentHTML('beforbegin', `<section class="participant${count}">`);
}

document.getElementById('add').addEventListener('click', participantTemplate);