$(document).ready(function(){
	
	$("button#addstudent").click(function(e) {
		e.preventDefault();
	    var formData = {
	    	      name: $("#name").val(),
	    	      age: $("#age").val(),
	    	      mobile: $("#mobile").val(),
	    	      address: $("#address").val(),
	    	    };
	    $.ajax({
	        type: "POST",
	        url: 'http://localhost:7777/students',
	        data: JSON.stringify(formData),
	        dataType: "json",
	        contentType: "application/json; charset=utf-8",
	        success: function(data) {
	        	$("#studentform").html(
	        		'<div class="alert alert-success"> Success </div>'
	        		);
	        }
	    });
	    
	});

    $("button#getcontacts").click(function(){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:7777/students',
            success: function(contactArray) {
                var contactsDiv = $('div#allContacts');
                //$("div#allContacts").html(result);
                //alert("result:" + contactArray);

                $.each(contactArray, function(index, contact) {
                    var contactInfo = '<p>';
                    contactInfo += 'ID: ' + contact.id + '<br>';
                    contactInfo += 'Name: ' + contact.name + '<br>';
                    contactInfo += 'Age: ' + contact.age + '<br>';
                    contactInfo += 'Mobile: ' + contact.mobile + '<br>';
                    contactInfo += 'Address: ' + contact.address + '<br>';
                    contactInfo += '</p><hr>';
                
                    contactsDiv.append(contactInfo);
                })
            },
            error: function() {
                alert('FAILURE!');
            }
        })
    });

})