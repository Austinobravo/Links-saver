// Chrome extension
myLeads = []
// myLeads =JSON.stringify(myLeads)
// console.log(typeof myLeads);
// myLeads = JSON.parse(myLeads)

// console.log(myLeads.push('www')); 
// console.log(myLeads);

// picking the input and manipulating  the DOM

chromeInput = document.getElementById('chromeInput')
leads = document.getElementById('leads')
//leads.innerHTML+= '<button>Buy!</button> '
// leads.addEventListener('click', function(){
//     leads.innerHTML += '<p> Thank yu fr buting</p>'
//     console.log(' <br> <p> Thank yu fr buting');

// Getting links from the local storage

linksFromLocalStorage = localStorage.getItem('Links')
console.log( linksFromLocalStorage);
if (linksFromLocalStorage){
    myLeads = JSON.parse(linksFromLocalStorage)
    renderForLoop(myLeads)
}
//})

// Making the save button functional
SaveFunction = document.getElementById('chromeInputSave').addEventListener('click', function(){
    if(chromeInput.value && chromeInput.value !=""){
        myLeads.push(chromeInput.value)
        localStorage.setItem('Links', JSON.stringify(myLeads) )
        renderForLoop(myLeads)
        
    } else{
        
    }
    chromeInput.value = ""
    
})

// Function that lists out the  links
function renderForLoop(parameterLeads) {
    listItems = ""
    for ( let i = 0; i < parameterLeads.length; i++){
        //console.log(myLeads[i]);
        //listItems.push(myLeads[i]) 
        // listItems+= "<a href=" + myLeads[i] +" target='_blank'><li>" +myLeads[i]+"</li></a>"
        listItems += `<a href="${parameterLeads[i]}" target="_blank"><li> ${parameterLeads[i]} </li></a> `
        console.log(listItems);
        // li = document.createElement(li)
        // li.textContent = myLeads[i]
        // leads.append(li)
        
    }
    leads.innerHTML= listItems
    
    
}

// Creating the clear local storage button

clearLocalStorage = document.getElementById('chromeInputDelete').addEventListener('click', function () {
    localStorage.clear()
    myLeads=[]
    renderForLoop(myLeads )

    
})

urls=[
    {url: "www.li.co"}
]
// Saving current url
saveCurrentUrl = document.getElementById('chromeSaveUrl').addEventListener('click', function() {
    chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
        let activeTab = tabs[0]
        let activeTabId = activeTab.url
        myLeads.push(activeTabId)
        localStorage.setItem('Links', JSON.stringify(myLeads) )
        renderForLoop(myLeads)
        console.log(urls[0].url );
    })
})
 
// localStorage.setItem('Links', 'www.gmail.com')
// console.log(localStorage.getItem('Links'));
//flocalStorage.clear()
nameAgain = ['per', 'hari']
function Greetname(nameAgain) {


    return nameAgain
    
}
console.log(Greetname(nameAgain));
//localStorage.setItem('links', 'per')
console.log(localStorage.getItem('links')); 