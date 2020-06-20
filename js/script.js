$("document").ready(
    function()
    {
        $("#protelnetClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#protelnet").fadeIn("slow");
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#protelnet").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
        
        $("#hemClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#hem").fadeIn("slow");
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#hem").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
        
        $("#msiClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#msi").fadeIn("slow");
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#msi").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
        let flag = 0;
        $(".click").click(
            function()
            {
                if(flag === 0)
                {
                    $("#right").css({"animation-name": "anime"});
                    flag = 1;
                }
                
                else
                {
                    $("#right").css({"animation-name": "dwa"});
                    flag = 0;
                }
            }
        );
        
        $("#langClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#lang").fadeIn(1000);
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#lang").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
        
        $("#skillClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#skill").fadeIn(1000);
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#skill").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
        
        $("#intrestClick").click(
            function()
            {
                if($(this).text() === "+")
                {
                    $("#intrest").fadeIn(1000);
                
                    $(this).text("-");
                }
                
                else
                {
                   $("#intrest").hide();
                
                    $(this).text("+"); 
                }
                
            }
        );
      
    }
);
