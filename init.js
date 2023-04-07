
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('profOutput').innerText = initPerson.profession;
    document.getElementById('fatherName').innerText = initPerson.fatherName;
    
};

const plase = document.querySelector('body');

plase.addEventListener('click',function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('profOutput').innerText = initPerson.profession;
    document.getElementById('fatherName').innerText = initPerson.fatherName;
}
);