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

function openModal(){
    alert(1);
}

function discountCalculate() {
    let discountPrice = 0;
    const totalPriceText = document.getElementById('grand-total').innerHTML;
    const totalPrice = parseInt(totalPriceText);
    const couponCode = document.getElementById('coupon-text').value;

    if (couponCode === 'NEW15') {
        discountPrice = (totalPrice * 0.15);
    }
    else if (couponCode === 'Couple 20') {
        discountPrice = (totalPrice * 0.2);
    }
    else
        alert('Invalid coupon code');

    if (discountPrice > 0) {
        setElementById('discount-price', discountPrice);
        const grandTotal = totalPrice - discountPrice;
        setElementById('grand-total', grandTotal);
        hideElementById('discount-section');
        showElementById('discount');
    }
}

const seats = document.querySelectorAll(".seat");
const ticketPrice = 550;
let selectedSeatArr = [];
let totalTicketPrice = 0;
let count = 0;
for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    seat.addEventListener('click', function () {
        if (selectedSeatArr.length <= 3) {
            let availableSeat = getElementById('initial-seat');
            availableSeat -= 1;
            setElementById('initial-seat', availableSeat);

            const seatNumber = document.getElementById(seat.id);
            const isExists = selectedSeatArr.includes(seatNumber.innerText);
            if (!isExists) {
                selectedSeatArr.push(seatNumber.innerText);

                totalTicketPrice += ticketPrice;

                setElementById('total-price', totalTicketPrice);
                setElementById('grand-total', totalTicketPrice);

                const selectedContainer = document.getElementById('selected-seat-container');

                const li = document.createElement("li");
                const p = document.createElement("p");
                let sNo = seatNumber.innerText;
                p.innerText = sNo;
                const p1 = document.createElement("p");
                p1.innerText = 'Economy';
                const p2 = document.createElement("p");
                p2.innerText = ticketPrice;

                li.appendChild(p);
                li.appendChild(p1);
                li.appendChild(p2);
                selectedContainer.appendChild(li);
                removeBackgroundColorById(seatNumber.innerText);
                addBackgroundColorById(seatNumber.innerText);


                count++;
                setElementById('buy-ticket', count);
                if (count === 4) {
                    enableElement('coupon-btn');
                    enableElement('coupon-text');
                }
            }
            else
                alert('You already selected this seat.')

        }
        else
            alert('You can not buy more than 4 tickets');
    })
}

function enableElement(elementId) {
    document.getElementById(elementId).disabled = false;
}