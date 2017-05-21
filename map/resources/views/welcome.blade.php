<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="{!!asset('css/style.css')!!}">
    </head>
    <body ng-app="app">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" href="#">DRAGON</a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#band">BAND</a></li>
                        <li><a href="#tour">TOUR</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">MORE
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Merchandise</a></li>
                                <li><a href="#">Extras</a></li>
                                <li><a href="#">Media</a></li> 
                            </ul>
                        </li>
                        <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid main-content" ng-controller="TableController">
            <h2 class="text-center">Map Application</h2>
            <div id="map" class="panel panel-default panel-success"></div> 
            <table-directive></table-directive>
        </div>
        <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <p>!!! Insert correct data !!!</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>    
        <script src = "{!!asset('js/angular.min.js')!!}"></script>
        <script src = "{!!asset('js/table-directive.js')!!}"></script>        
    </body>
</html>
