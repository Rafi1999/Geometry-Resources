let serial = 0;
const newField = 'cm'+'2'.sup();
const btnText = 'Convert to '+'m'+'2'.sup();
const btnColor = ' bg-sky-500 text-white btn btn-lg';
function displayData(name,area,newField,btnText){
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}.</td>
    <td>${name}</td>
    <td>${area}${newField}</td>
    <td>
    <button class='bg-sky-500 border-white text-white btn btn-sm text-primary lowercase'>${btnText}</button>
    </td>
    
  `;
  container.appendChild(tr);
}

document.getElementById('btn-first').addEventListener('click', function(){
    serial+=1;
    const name = document.getElementById('triangle').innerText;
    const breadthField = document.getElementById('breadth-triangle').value;
    const heightField = document.getElementById('height-triangle').value;
    const area = parseFloat(0.5*parseInt(breadthField)*parseInt(heightField));
    displayData(name,area,newField,btnText);
})