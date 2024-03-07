document.addEventListener('DOMContentLoaded', function() {
   
    var links = document.querySelectorAll('.link');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });
    
    var createButton = document.getElementById('createButton');
    var historyButton = document.getElementById('historyButton');
    
    createButton.addEventListener('click', function() {
        toggleButton(this);
    });
    
    historyButton.addEventListener('click', function() {
        toggleButton(this);
    });
    
    function toggleButton(button) {
        document.querySelectorAll('.button').forEach(function(button) {
            button.classList.remove('active');
        });
        
        button.classList.add('active');
    }
    function addRow(itemNumber, itemName, quantity, unitPrice) {
        var tableBody = document.querySelector('#itemTable tbody');
    
        var newRow = document.createElement('tr');
    
        newRow.innerHTML = `
            <td>${itemNumber}</td>
            <td>${itemName}</td>
            <td>${quantity}</td>
            <td>${unitPrice}</td>
        `;
    
        tableBody.appendChild(newRow);
    }
    
    addRow('001', 'Product A', 10, '$20.00');
    addRow('002', 'Product B', 5, '$15.00');
    addRow('003', 'Product C', 10, '$30.00');
    addRow('004', 'Product D', 5, '$5.00');
});
var currentItemId = 1; 

function addRowToTable(itemName, quantity) {
    var tableBody = document.querySelector('#itemTable tbody');

    var newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${currentItemId++}</td>
        <td>${itemName}</td>
        <td>${quantity}</td>
        <td></td> <!-- Empty cell for Unit Price -->
    `;

    tableBody.appendChild(newRow);
}

document.getElementById('addItemButton').addEventListener('click', function() {
    var itemName = document.getElementById('addItemInput').value;
    var quantity = document.getElementById('quantityInput').value;

    addRowToTable(itemName, quantity);

});
document.getElementById('saveButton').addEventListener('click', function() {
    
});

document.getElementById('exportPdfButton').addEventListener('click', function() {
    
});

document.getElementById('printButton').addEventListener('click', function() {
    window.print();
});
var createButton = document.getElementById('createButton');
var historyButton = document.getElementById('historyButton');

var createContent = document.querySelector('.big-box');
var historyContent = document.querySelector('.history-content');

createButton.addEventListener('click', function() {
    createContent.style.display = 'block';
    historyContent.style.display = 'none';
});

historyButton.addEventListener('click', function() {
    createContent.style.display = 'none';
    historyContent.style.display = 'block';
});


