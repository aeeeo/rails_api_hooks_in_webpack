import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { **insert prototype name** } from './api.js';

$(document).ready(function() {
  $('#getBites').click(function() {
    // let city = $('#location').val();
    // $('#location').val("");
    $.ajax({
      url: `http://localhost:3000/bites`,
      type: 'GET',
      data: {
        format: 'json'
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE1MjU5ODkwNDd9.SBR8Etphvv8LEu5sFk65nm_IbrW1C-ROTSi0clHYtzM");
      },
      success: function(response) {
        $('.showHumidity').text(`${response[0].species}`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
