function goToBusTicket() {
    window.location = '#ticket-div';
}

function getSeats() {
    const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-red');
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
    let modal = document.getElementById('my_modal_5');
    modal.close();
}

function enableElement(elementId) {
    document.getElementById(elementId).disabled = false;
}