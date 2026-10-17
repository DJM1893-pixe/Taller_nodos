const h1 = document.createElement('h1');
h1.textContent = 'My presentation';

const ubicacion = document.querySelector('.ref1');
ubicacion.insertAdjacentElement('beforebegin', h1);

const p1 = document.createElement('p');
p1.textContent = 'My best friend is Mickey';

ubicacion.insertAdjacentElement('beforeend', p1);

h1.style.color = 'blue';

p1.style.backgroundColor = 'pink';

p1.style.fontWeight = 'bold';

