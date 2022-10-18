



let saveFile = () => {
    	
    // Get the data from each element on the form.
    let SC = document.getElementById('SC');
    let customer = document.getElementById('customer');
    const eID = document.getElementById('EID');
    let dispatch = document.getElementById('dispatch');
    let arrive = document.getElementById('arrive-btn');
    let counter = document.getElementById('counter');
    let notes = document.getElementById('notes');
    let parts = document.getElementById('parts');
    const status = document.getElementById('call-status');


    // This variable stores all the data.
    let data = 
        '\r Service Call #: ' + SC.value + ' \r\n ' + 
        'Customer Name/contact: ' +customer.value + ' \r\n ' + 
        'Equipment ID #: ' +eID.value + ' \r\n ' + 
        'Dispatch miles: ' + dispatch.value + ' \r\n ' + 
        'Dispatch Time: ' + document.getElementById('dispatch-time').innerHTML + ' \r\n ' + 
        'Arrive miles: ' + arrive.value + ' \r\n ' + 
        'Arrive Time: ' + document.getElementById('arrive-time').innerHTML + ' \r\n ' + 
        'Depart Time: ' + document.getElementById('depart-time').innerHTML + ' \r\n ' + 
        'Counter: ' + counter.value + ' \r\n ' + 
        'Notes: ' + notes.value + ' \r\n ' + 
        'Parts: ' + parts.value + ' \r\n ' + 
        'status: ' + status.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = SC.value + '.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

window.onload = function(){
    let SC = document.getElementById('SC');
    let customer = document.getElementById('customer');
    let eID = document.getElementById('EID');
    let dispatch = document.getElementById('dispatch');
    let arrive = document.getElementById('arrive-btn');
    let counter = document.getElementById('counter');
    let notes = document.getElementById('notes');
    let parts = document.getElementById('parts');
    const status = document.getElementById('call-status');

    const dispatchTime =  document.querySelector('#dispatch-time').innerHTML;




    //save inputs after refresh
    SC.value = sessionStorage.getItem("notes");
    SC.addEventListener("keyup", event => {
        sessionStorage.setItem("notes", event.target.value);
    })
    customer.value = sessionStorage.getItem("notes2");
    customer.addEventListener("keyup", event => {
        sessionStorage.setItem("notes2", event.target.value);
    })
     eID.value = sessionStorage.getItem("notes3");
     eID.addEventListener("keyup", event => {
        sessionStorage.setItem("notes3", event.target.value);
    })
    dispatch.value = sessionStorage.getItem("notes4");
    dispatch.addEventListener("keyup", event => {
        sessionStorage.setItem("notes4", event.target.value);
    })
    arrive.value = sessionStorage.getItem("notes5");
    arrive.addEventListener("keyup", event => {
        sessionStorage.setItem("notes5", event.target.value);
    })
    counter.value = sessionStorage.getItem("notes8");
    counter.addEventListener("keyup", event => {
        sessionStorage.setItem("notes8", event.target.value);
    })
    notes.value = sessionStorage.getItem("notes6");
    notes.addEventListener("keyup", event => {
        sessionStorage.setItem("notes6", event.target.value);
    })
    parts.value = sessionStorage.getItem("notes7");
    parts.addEventListener("keyup", event => {
        sessionStorage.setItem("notes7", event.target.value);
    });
    document.querySelector('#dispatch-time').innerHTML.valueOf = sessionStorage.getItem("notes9");
    document.querySelector('#dispatch-time').addEventListener("mouseover", event => {
        sessionStorage.setItem("notes9", event.target.value);
    });
    document.querySelector('#arrive-time').innerHTML.valueOf = sessionStorage.getItem("notes10");
    document.querySelector('#arrive-time').addEventListener("mouseover", event => {
        sessionStorage.setItem("notes10", event.target.value);
    })
    document.querySelector('#depart-time').innerHTML.valueOf = sessionStorage.getItem("notes11");
    document.querySelector('#depart-time').addEventListener("mouseover", event => {
        sessionStorage.setItem("notes11", event.target.value);
    })
    }