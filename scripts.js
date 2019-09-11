document.body.innerHTML += '<div><p>Александра</p></div>';

let names = ['make injections', 'measure blood pressure', 'cook borsh', 'studying javascript'];

document.body.innerHTML += '<div id=' + "test" + '></div>'

names.forEach(element => {
    document.getElementById('test').innerHTML += element + '</br>';
});