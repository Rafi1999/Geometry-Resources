function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
document.getElementById('first').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('first');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('second').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('second');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('third').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('third');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('fourth').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('fourth');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('fifth').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('fifth');
    colorbg.style.backgroundColor = randomColor(); 
})

document.getElementById('sixth').addEventListener('mouseover',function(){
    const colorbg = document.getElementById('sixth');
    colorbg.style.backgroundColor = randomColor(); 
})
