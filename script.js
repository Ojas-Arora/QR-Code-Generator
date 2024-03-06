var selectedType = 'url';

function setType(type) {
    selectedType = type;
}

function generateQR() {
    var data = document.getElementById('data').value;
    var qrCodeDiv = document.getElementById('qr-code');

    if (!data) {
        alert('Please enter data to generate QR Code.');
        return;
    }

    var qr = new QRious({
        element: qrCodeDiv,
        value: selectedType + ':' + data
    });
}
