let navButtons = Array.from(document.querySelectorAll('.navigation-button'));

navButtons.forEach( (item) =>
{
    item.onclick = () =>
    {   //add class name to card (if doesen't exist)
        item.parentElement.parentElement.classList.toggle('change');
    }
});