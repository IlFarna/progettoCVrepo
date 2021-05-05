function renderSkills() {

    $('.level-bar-inner').each(function() {
    
        var itemWidth = $(this).data('level');
        
        $(this).animate({
            width: itemWidth
        }, 800);
        
    });
};


jQuery(document).ready(function($) {

    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

});

function Invia(){
    var u = $('#User').val();
    var p = $('#Pass').val();
    if(u == "" || p == ""){alert("Inserire nome utente o password")};
    if(u == "vincenzo" && p == "1234") {
        localStorage.setItem("storageU", u);
        window.open('admin/index.html', "_blank");
    }
    else{
        alert("Nome utente o password errati");
    }
};

function FormresetL(){
    $('#login').on('hidden.bs.modal', function(e) {
    $(this).find('form').trigger('reset');
    });
};

/*function FormresetO(){
    $('#contactme').on('hidden.bs.modal', function(e) {
    $(this).find('form').trigger('reset');
    });
}; */
$('a#link').click(function (){
    window.open('https://www.linkedin.com/in/vincenzo-farnatale-a9597b1b3/', "_blank");
});