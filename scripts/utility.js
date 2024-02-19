function goToBusTicket() {
    window.location = '#ticket-div';
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white');
}

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function availableElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-white');
}

function getElementById(elementId) {
    const element = document.getElementById(elementId);
    let value = parseInt(element.innerText);

    return value;
}

function setElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

document.addEventListener('keyup',function(){
    let phoneNumber = document.getElementById('phone-number').value;
    if(phoneNumber.length > 0 && count > 0)
        enableElement('next-btn');
})

function closeModal(){
    let modal = document.getElementById('my_modal');
    modal.close();
}

function enableElement(elementId) {
    document.getElementById(elementId).disabled = false;
}