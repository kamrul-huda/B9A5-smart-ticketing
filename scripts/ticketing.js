const seats = document.querySelectorAll(".seat");
const ticketPrice = 550;
let selectedSeatArr = [];
let totalTicketPrice = 0;
let count = 0;

for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];

    seat.addEventListener('click', function () {
        if (selectedSeatArr.length <= 3) {           
            const seatNumberElement = document.getElementById(seat.id);
            const seatNumber = seatNumberElement.innerText;
            const isExists = selectedSeatArr.includes(seatNumber);

            if (!isExists) {
                let availableSeat = getElementById('initial-seat');
                availableSeat -= 1;
                setElementById('initial-seat', availableSeat);
    
                selectedSeatArr.push(seatNumber);
                totalTicketPrice += ticketPrice;

                setElementById('total-price', totalTicketPrice);
                setElementById('grand-total', totalTicketPrice);

                const selectedContainer = document.getElementById('selected-seat-container');

                const li = document.createElement("li");
                const p = document.createElement("p");
              
                p.innerText = seatNumber;
                const p1 = document.createElement("p");
                p1.innerText = 'Economy';
                const p2 = document.createElement("p");
                p2.innerText = ticketPrice;

                li.appendChild(p);
                li.appendChild(p1);
                li.appendChild(p2);
                selectedContainer.appendChild(li);
                removeBackgroundColorById(seatNumber);
                addBackgroundColorById(seatNumber);

                count++;
                setElementById('buy-ticket', count);
                if (count === 4) {
                    enableElement('coupon-btn');
                    enableElement('coupon-text');
                }
            }
            else
                alert('You already selected this seat.');
        }
        else
            alert('You cannot buy more than 4 tickets');
    })
}



function discountCalculate() {
    let discountPrice = 0;
    const totalPriceText = document.getElementById('grand-total').innerText;
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
