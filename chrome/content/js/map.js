/*
 * map.js - HTML interface to an associative array
 * Copyright 2013 - Nathan Osman
 */

function Map(root) {
    
    // Map of all values currently stored
    var map = {};
    
    // Begin by constructing the table that will contain the map
    var table = $('<table class="table table-striped"></table>');
    table.append('<tr><th>Name</th><th>Value</th><th></th></tr>');
    
    // Adds an item to the map
    function add(name, value) {
        
        if(name in map)
            map[name].text(value);
        else {
            var item_row = $('<tr></tr>');
            item_row.append('<td>' + name + '</td>');
            item_row.append(map[name] = $('<td></td>').text(value));
            
            // Create the button that removes the item
            var remove = $('<button class="btn btn-danger">Remove</button>');
            remove.click(function() {
                
                delete map[name];
                item_row.remove();
            });
            
            // Add the button and insert the row into the table
            item_row.append($('<td></td>').append(remove));
            item_row.insertBefore(table.find('tr:last'));
        }
    };
    
    // Create the form controls that will be used for inserting items
    var name  = $('<input type="text" class="form-control" placeholder="name">');
    var value = $('<input type="text" class="form-control" placeholder="value">');
    var add   = $('<button class="btn btn-default">Add</button>');
    
    // Set up the event handler for the add button
    add.click(function() {
        
        add(name.val(), value.val());
    });
    
    // Insert the form controls
    var control_row = $('<tr></tr>');
    control_row.append($('<td></td>').append(name));
    control_row.append($('<td></td>').append(value));
    control_row.append($('<td></td>').append(add));
    table.append(control_row);
    
    // Insert the table into the root element
    root.append(table);
    
    // Returns the map
    this.get = function() {
        
        //...
    };
    
    // Loads data into the map
    this.set = function(data) {
        
        //...
    };
}
