
function addNewweField(){
  // console.log("Adding New Field")

let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('wefield');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placehoder','Enter here')
let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById('weAddButton');

weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField()
{
  let newNode=document.createElement('textarea');
newNode.classList.add('form-control');
newNode.classList.add('eqfield');
newNode.classList.add('mt-2');
newNode.setAttribute("rows",3);
newNode.setAttribute('placehoder','Enter here')

let weOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById('aqAddButton');
weOb.insertBefore(newNode, aqAddButtonOb);

}

function generatecv(){
 

  let nameField=document.getElementById("nameField").value;

  let nameT1=document.getElementById("nameT1")

  nameT1.innerHTML = nameField;

  document.getElementById('nameT1').innerHTML = nameField;

  //contact
  document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

  //Address
  document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;
  
  document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
  

  document.getElementById('instaT').innerHTML=document.getElementById('instaField' ).value;
  document.getElementById('linkedT').innerHTML=document.getElementById('linkedField'  ).value;

  //objective

  document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

  //we

  let wes=document.getElementsByClassName('weField')

  let str=''

  for(let e of wes)
  {
    str += `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

//aq

let aqs=document.getElementsByClassName('eqField')

let str1=''

for(let e of aqs){
  str1= `<li> ${e.value}</li>`;
}
 document.getElementById("aqT").innerHTML=str1;

//  code for settting image
  
  let file=document.getElementById('imgField').files[0]



    let reader=new FileReader()

    reader.readAsDataURL(file);

    //set the image in template

    let fileReader= reader
    reader.onloadend =function (){
      document.getElementById("imgTemplate").src = fileReader.result;
    }

  document.getElementById('cv-form').style.display='none';
  document.getElementById('cv-template').style.display='block';
  document.getElementById('generateCVBtn').style.display = 'none';


}
//print cv
function printCV()
{
  window.print();
}

