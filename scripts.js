
//this code makes dropdownable the mobile menu
$(".menu").click((e) => {
  $(".hero").toggleClass("move");
  $(".menu-dropdown").toggleClass("block");
  $(".account_form").toggleClass("move");
  $(".stats-main").toggleClass("move");
  if($('hero').hasClass('hidden')){
    $('matchs').addClass('move');
  }
});

//this code makes visible the create team popup on main page
$(".create_match").click((e) => {
  $(".create_match_popup").removeClass("zoom-in");
  $(".create_match_popup").removeClass("zoom-out");
  $(".create_match_popup").removeClass("hidden");
  $(".popup-overlay").removeClass("hidden");
  $(".create_match_popup").addClass("zoom-in");
  
});


//this code makes visible the create team popup on account page
$(".create_team").click((e) => {
  $(".create_team_popup").removeClass("zoom-in");
  $(".create_team_popup").removeClass("zoom-out");
  $(".create_team_popup").removeClass("hidden");
  $(".popup-overlay").removeClass("hidden");
  $(".create_team_popup").addClass("zoom-in");
  
});


//this will make visible one or two inputs if the matchs is set on PC systems
//please check the index.html file at the popup-overlay sections/join-popup
//to see that it has a class only for js purposes
$(".PC").click((e) => {
  $(".join-popup").find(".usernames").removeClass("hidden");
});

$(".no-PC").click((e) => {
  $(".join-popup").find(".username").removeClass("hidden");

});


//opens the join popup
$(".join").click((e) => {
  $(".join-popup").removeClass("zoom-in");
  $(".join-popup").removeClass("zoom-out");
  $(".join-popup").removeClass("hidden");
  $(".popup-overlay").removeClass("hidden");
  $(".join-popup").addClass("zoom-in");
  
});

//close x on hero

$(".close_hero").click((e) => {
    $(".hero").addClass("hidden");
  
});


//this is the code for the close X on popups
$(".close").click((e) => {
    $(".join-popup").addClass("zoom-in");
    $(".join-popup").addClass("zoom-out");
    setTimeout(()=>{
      $(".join-popup").find(".usernames").addClass("hidden");
      $(".join-popup").find(".username").addClass("hidden");
      $(".join-popup").removeClass("hidden");
      $(".popup-overlay").addClass("hidden");
      $(".join-popup").removeClass("zoom-in");
      $(".join-popup").addClass("hidden");
      $(".create_match_popup").addClass("hidden");
      $(".create_team_popup").addClass("hidden");
      $(".manage_team_popup_1").addClass("hidden");
      $(".manage_match_popup_2").addClass("hidden");
    },100);
});


//makes an input editable on account page
$(".edit").click(function(e){
  e.preventDefault();
  if($(this).prev('input').prop("disabled")){
    $(this).prev('input').prop("disabled", false);
  }
});


//opens the manage team popup on account page, where you choose delete or edit
$(".manage").click(function(e){
  $(".popup-overlay").addClass("hidden");
  $(".manage_team_popup_1").removeClass("zoom-in");
  $(".manage_team_popup_1").removeClass("zoom-out");
  $(".manage_team_popup_1").removeClass("hidden");
  $(".popup-overlay").removeClass("hidden");
  $(".manage_team_popup_1").addClass("zoom-in");
});

//opens the manage team popup on account page

$(".edit_team").click(function(e){
  $(".manage_team_popup_2").removeClass("zoom-in");
  $(".manage_team_popup_2").removeClass("zoom-out");
  $(".manage_team_popup_2").removeClass("hidden");
  $(".popup-overlay").removeClass("hidden");
  $(".manage_team_popup_2").addClass("zoom-in");
});

/*
var system = "";

$('.creator_system').click(()=>{
    system = "";
    system = $(".select").find("option:selected").val();
    
    $(".creator_username").prop("disabled", false);

});


$('.creator_username').click(()=>{
    if (system === "PC") {
      $(".creator_username").html('<option> HOBBO_BATTLENET</option><option> HOBBO_ACTIVISION</option>');
    }

    if(system === "XBOX ONE"){
       $(".creator_username").html('<option> HOBBO_XBOX</option>');
    }

    if(system === "PLAYSTATION 4"){
      $(".creator_username").html('<option> HOBBO_PSN</option>');
    }
});
*/

// this code will update the label text of the selectbox
$(".select").on("click" , function() {
  
  $(this).parent(".select-box").toggleClass("open");
  
});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$(".select").on("click" , function() {
  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");
    
  label.find(".label-desc").html(selection);
    
});
