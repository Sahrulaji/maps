var map = L.map('map').setView([1.2902927,103.8569662], 15);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 17,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

	var pinIcon = L.icon({
		iconUrl: "./img/ic-pin.png",
		iconSize: [45, 71],
		iconAnchor: [16, 37],
		popupAnchor: [60, -33],
    });
    var bigIcon = L.icon({
		iconUrl: "./img/ic-pin.png",
		iconSize: [109, 172],
		iconAnchor: [48, 138],
		popupAnchor: [60, -33],
	});

	function onEachFeature(feature, layer) {
        // insert title
		var popupContent = "<h3>" + feature.properties.popupTitle + "</H3>";
		if (feature.properties && feature.properties.popupContent) {
			popupContent += feature.properties.popupAddres;
		}

		layer.bindPopup(popupContent);
        
        layer.on('mouseover', function(event){
            layer.openPopup();
            layer.setIcon(bigIcon);
        });
        layer.on('mouseout', function(event){
            layer.closePopup();
            layer.setIcon(pinIcon);
        });
        
        
        // showsidebar
        layer.on('click', function(e) {
            $(".sidebar").show();           
            $(".nameplace").html(feature.properties.popupTitle);
            $(".Description").html(feature.properties.popupContent);
            $(".contentPopup").html(feature.properties.popupDescription);
            $(".image").attr('src',feature.properties.popupImages);    
            $(".addres").html(feature.properties.popupAddres);  
            $(".link").html(feature.properties.popupLink);     
        });
        // btnclosesidebar
        $(".btnClose").on('click', function(e) {
            $(".sidebar").hide();
            layer.closePopup();
            layer.setIcon(pinIcon);
        });
        $("#btn-mar").on('click', function(e) {
            $(".sidebar").show();
            $(".nameplace").html(feature.properties.popupTitle);
            $(".Description").html(feature.properties.popupContent);
            $(".contentPopup").html(feature.properties.popupDescription);
            $(".image").attr('src',feature.properties.popupImages);    
            $(".addres").html(feature.properties.popupAddres);  
            $(".link").html(feature.properties.popupLink);  
        });
        

        $("#btn-1").on('click', function(e) {
            if (feature.id == 1){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-2").on('click', function(e) {
            if (feature.id == 7){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-3").on('click', function(e) {
            if (feature.id == 8){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-4").on('click', function(e) {
            if (feature.id == 9){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-5").on('click', function(e) {
            if (feature.id == 2){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-6").on('click', function(e) {
            if (feature.id == 3){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-7").on('click', function(e) {
            if (feature.id == 4){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-8").on('click', function(e) {
            if (feature.id == 6){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });
        $("#btn-9").on('click', function(e) {
            if (feature.id == 5){
                $(".sidebar").show();
                $(".nameplace").html(feature.properties.popupTitle);
                $(".Description").html(feature.properties.popupContent);
                $(".contentPopup").html(feature.properties.popupDescription);
                $(".image").attr('src',feature.properties.popupImages);    
                $(".addres").html(feature.properties.popupAddres);  
                $(".link").html(feature.properties.popupLink);
                layer.openPopup();
                layer.setIcon(bigIcon);
            }
            else {
                return false;
                console.log("id not found");
            }
        });

	}

	var coorsLayer = L.geoJSON(favoritPlace, {

		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: pinIcon});
		},

		onEachFeature: onEachFeature
	}).addTo(map);

