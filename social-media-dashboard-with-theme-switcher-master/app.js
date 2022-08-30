let input = document.querySelector('input');

input.addEventListener("change", function(e){
    const {checked} = e.target;
    if(checked){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
})