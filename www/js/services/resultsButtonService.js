angular.module('TKResultsButton', [])
.service('TKResultsButtonService', function()
{
    var service = this;
    var shouldShowButton = true;
   
    service.setShouldShowMenuButton = function(show)
    {
        shouldShowButton = show;
    };
   
    service.getShouldShowMenuButton = function()
    {
        return shouldShowButton;
    };
});