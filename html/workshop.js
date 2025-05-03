document.getElementById('workshopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const preferredDate = document.getElementById('preferredDate').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;
    let errorMsg = '';

    if (fullName.length < 10) {
        valid = false;
        errorMsg += 'A teljes név legalább 10 karakter legyen.\n';
    }
    if (phone.length < 10) {
        valid = false;
        errorMsg += 'A telefonszám legalább 10 karakter legyen.\n';
    }
    if (message.length < 10) {
        valid = false;
        errorMsg += 'Az üzenet legalább 10 karakter legyen.\n';
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        errorMsg += 'Kérlek, adj meg egy érvényes email címet.\n';
    }

    if (!preferredDate) {
        valid = false;
        errorMsg += 'Kérlek, válassz egy dátumot.\n';
    }

    if (valid) {
        alert('A jelentkezés sikeresen elküldve!');
        
    } else {
        alert(errorMsg);
    }
});
