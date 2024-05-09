// Ini Javascript

// Validate Fungtion
function validation() {
    let yourname = document.getElementById('form-yourname').value;
        if (yourname == '' || yourname == null) {
            document.getElementById('form-yourname').style.border = '2px solid red';
            alert('Inputan Anda Kosong, Periksa Kembali')
        } else {
            document.getElementById('form-yourname').style.border = '2px solid #d5dfe7';
            console.log(yourname);
        }
        
    let email = document.getElementById('form-email').value;
        if (email == '' || email == null) {
            document.getElementById('form-email').style.border = '2px solid red';
            alert('Inputan Anda Kosong, Periksa Kembali')
        } else {
            document.getElementById('form-email').style.border = '2px solid #d5dfe7';
            console.log(email);
        }
    
    let option = document.getElementById('form-option').value;
        if (option == '' || option == null) {
            document.getElementById('form-option').style.border = '2px solid red';
            alert('Inputan Anda Kosong, Periksa Kembali')
        } else {
            document.getElementById('form-option').style.border = '2px solid #d5dfe7';
            console.log(option);
        }
}

// Auto Slide Fungtion
let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName('benner-item');
    console.log(listImage);
    console.log('Banyak Image: ' + listImage.length)

    if (index > listImage.length) indexSlide = 1;

    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    listImage[indexSlide - 1].style.display = 'block';

    console.log('showSlide ' + index)
}

setInterval(() => nextSlide(1), 5000)

document.getElementById('send-btn').addEventListener('click', () => validation())