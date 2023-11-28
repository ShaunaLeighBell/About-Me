let arrow = document.getElementById('arrow');

arrow.addEventListener('mouseover', (event => {
    event.target.style.top = '100px';
}
));
 
arrow.addEventListener('mouseout', (event => {
    event.target.style.top = '0px';
}));
