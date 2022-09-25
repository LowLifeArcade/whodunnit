let input = document.getElementsByTagName('input');
input.addEventHandeler('change', (val) => {
    input.innerHtml = val
});