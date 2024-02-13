var elem=document.getElementById('title')
elem.style.backgroundColor="red";
elem.style.textAlign="center";
elem.setAttribute('elem','tooltip set by Javascript');

var star=document.querySelector('.start');
star.innerHTML='<h2>hello my boy </h2>';
star.style.padding="20px";


const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText="hahahhaha";
section.appendChild(h1);

const ul=document.createElement("ul");
const li=document.createElement('li');
li.innerText='biriyani';
ul.appendChild(li);


const li2=document.createElement('li');
li2.innerText='biriyani';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='biriyani';
ul.appendChild(li3);
section.appendChild(ul);
star.appendChild(section);

const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>my dresses </h1>
<ul>
<li>shirt</li>
<li>pants</li>
</ul>
`

star.appendChild(sectionDress);