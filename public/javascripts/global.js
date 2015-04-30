var userListData = [];

$(document).ready(function() {
    populateTable();
    $('#userList table tbody').on('click', 'td a.linkshowuser', showUserInfo);
})

function populateTable() {
    var tableContent = '';
    $.getJSON( '/users/userlist', function ( data ) {
        userListData = data;
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });
        $('#userList table tbody').html(tableContent);
    })
}

function showUserInfo(event) {
    console.log("in showUserInfo")
    window.e1 = event
    window.this1 = $(this)
    event.preventDefault();

    var thisUserName = $(this).attr('rel');
    console.log(thisUserName);

    var arrayPosition = userListData.map(function(arrayItem) { 
        return arrayItem.username; 
    }).indexOf(thisUserName);
    console.log(arrayPosition)

    var thisUserObject = userListData[arrayPosition];
    console.log(thisUserObject)

    $('#userInfoName').text(thisUserObject.fullname);
    $('#userInfoAge').text(thisUserObject.age);
    $('#userInfoGender').text(thisUserObject.gender);
    $('#userInfoLocation').text(thisUserObject.location);
}