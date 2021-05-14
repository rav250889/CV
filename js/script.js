$("document").ready(
    function()
    {
        function showElements(showId, ClickId)
        {
             $("#"+ClickId).click(
                function()
                {
                    if($(this).text() === "+")
                    {
                        $("#"+showId).fadeIn("slow");

                        $(this).text("-");
                    }

                    else
                    {
                       $("#"+showId).hide();

                        $(this).text("+"); 
                    }

                }
            );

        }
        
        showElements("euroimpex", "euroimpexClick");
        
        showElements("protelnet", "protelnetClick");
        
        showElements("hem", "hemClick");
        
        showElements("msi", "msiClick");
        
        showElements("lang", "langClick");
        
        showElements("skill", "skillClick");
        
        showElements("intrest", "intrestClick");
      
    }
);