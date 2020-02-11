// As a User (AAU), I don't want to see any developer skills when the page first loads so that I can start with a fresh slate.
$('td').hide();

// AAU, I want to be able to type in a skill and have it added to my list of skills by clicking a button.
$('#addSkill').on('click', function() {
     let skill = $('input').val();
     let newSkill =
     `<tr>
       <td><button class="remove">X</button></td>
       <td class="skills">${skill}</td>
     </tr>`
     $('tbody').append(newSkill);
     $('input').val('');
 });

// AAU, I want to be able to remove an individual skill one at a time in case I make a mistake.
   $('tbody').on('click', 'button', function() {
       $(this).closest('tr').fadeOut(500, function() {
           $(this).remove();
       });
   });