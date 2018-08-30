/** $('#search').on('click',function() {
  // var sem = $(this).val();
  // $.ajax({
  //   method : 'POST',
  //   url : '/api/'+sem+'/getbranch',
  //   dataType: 'json',
  //   success : function(data){
  //     var $el = $("#branch");
  //                   $el.empty(); // remove old options
  //                   $el.append($("<option></option>")
  //                           .attr("value", '').text('Please Select'));
  //                   $.each(data, function(value, key) {
  //                       $el.append($("<option></option>")
  //                               .text(key.BRANCH));
  //                   });                           
      
  //   }
  // })
  console.log("i am here")
});
**/
$(document).ready(function () {
  $('#stream_select').on('change', function () {
    console.log("called");
    var stream = $(this).val();
    $.ajax({
      method: 'GET',
      url: "/api/stream/" + stream,

      dataType: 'json',
      success: function (data) {
        console.log('/api/' + stream + '/getsem');
        console.log(data);
        var $el = $("#sem_select");
        $el.empty(); // remove old options
        $el.append($("<option></option>")
          .attr("value", '').text('Please Select'));
        $.each(data, function (value, key) {
          $el.append($("<option></option>")
            .text(key.SEM));
        });

      }
    })
  })

  $('#sem_select').on('change', function () {
    console.log("called");

    var sem = $("#sem_select").val();
    var stream = $("#stream_select").val();

    var branch = $(this).val();
    console.log(branch);
    $.ajax({
      method: 'GET',
      url: "/api/sem/" + sem + "/" + stream,
      dataType: 'json',
      success: function (data) {
        console.log(data);
        var $el = $("#branch_select");
        $el.empty(); // remove old options
        $el.append($("<option></option>")
          .attr("value", '').text('Please Select'));
        $.each(data, function (value, key) {
          $el.append($("<option></option>")
            .text(key.BRANCH));
        });

      }
    })
  })

  $("#get_details").click(function () {
    var sem = $("#sem_select").val();
    var stream = $("#stream_select").val();
    var branch = $("#branch_select").val();
    /* var subject = $("#subject_select").val();*/
    var date = $("#date").val();
    var section= $("#section").val();
    var group= $("#group").val();
    var room= $("#room").val();

    var _url = "/details/" + stream + "/" + sem + "/" + branch + "/" + section + "/" + group + "/" + room  + "/" + date ;
    location.href = "/details" ;
    console.log(_url);  


  });

});
  /** 
    $('#branch_select').on('change', function () {
      var stream = $('#stream_select').val();
      console.log(stream);
      var sem = $('#sem_select').val();
      console.log(sem);
      var branch = $('#branch_select').val();
      console.log(branch);
      var subject= $(this).val();
      console.log(subject);
      $.ajax({
        method: 'GET',
        url: '/api/' + stream + '/' + sem + '/' + branch + '/getsubj',
        dataType: 'json',
        success: function (data) {
          console.log(data);
          var $el = $("#subject_select");
          $el.empty(); // remove old options
          $el.append($("<option></option>")
            .attr("value", '').text('Please Select'));
          $.each(data, function (value, key) {
            $el.append($("<option></option>")
              .attr("value", key.Sub_Code).text(key.Subject));
          });
        }
      })
    })
  **/
/*
  $('#branch_select').on('change', function () {
    console.log("called");

    var stream = $('#stream_select').val();
    console.log(sem);
    var sem = $('#sem_select').val();
    console.log(sem);
    var branch = $('#branch_select').val();
    console.log(branch);

    var section = $(this).val();
    console.log(section);

    $.ajax({
      method: 'GET',
      url: '/api/' + stream + '/' + sem + '/' + branch + ' /getsection',
      dataType: 'json',
      success: function (data) {
        console.log(data);

        var $el = $("#section_select");
        $el.empty(); // remove old options
        $el.append($("<option></option>")
          .attr("value", '').text('Please Select'));
        $.each(data, function (value, key) {
          $el.append($("<option></option>")
            .text(key.SECTION));
        });
      }
    })
  })
*/
/*
  $('#section_select').on('change', function () {
    var stream = $('#stream_select').val();
    console.log(sem);
    var sem = $('#sem_select').val();
    console.log(sem);
    var branch = $('#branch_select').val();
    console.log(branch);

    var section = $('#section_select').val();
    console.log(section);
    var group = $(this).val();
    console.log(group);

    $.ajax({
      method: 'GET',
      url: '/api/' + stream + '/' + sem + '/' + branch + '/' + section + '/getgroup',
      dataType: 'json',
      success: function (data) {
        var $el = $("#group_select");
        $el.empty(); // remove old options
        $el.append($("<option></option>")
          .attr("value", '').text('Please Select'));
        $.each(data, function (value, key) {
          $el.append($("<option></option>")
            .text(key.GROUP));
        });
      }
    })
  })
});

*/






// $('#searchbtn').on('click',function() {
//       var sem = $('#sem_select').val();
//       console.log(sem);
//       var branch = $('#branch_select').val();
//       console.log(branch);
//       var subject = $('#subject_select').val();
//       console.log(subject);
//       location.href = '/result/'+sem+'/'+branch+'/'+subject;
// })


/**$('.markbox').on('change',function() {
  var redgno = $(this).data('reg');
  var mark = $(this).val();
  console.log(mark);
  console.log(redgno);
  $.ajax({
    method : 'GET',
    url : '/result/'+redgno+'/'+mark,
    success : function(data){
      console.log(data);                          
    }
  })
}) **/

























