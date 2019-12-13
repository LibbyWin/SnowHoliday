{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":28,"position":28,"stack":[[{"start":{"row":0,"column":0},"end":{"row":28,"column":9},"action":"remove","lines":["        function initMap() {","            var map = new google.maps.Map(document.getElementById(\"map\"), {","                zoom: 3,","                center: {","                    lat: 46.619261,","                    lng: -33.134766","                }","            });","            var labels = \"ABCDEFGHIJKLMONPQRSTUVWXYZ\";","            var locations = [{","                lat: 40.785091,","                lng: -73.968285","            }, {","                lat: 41.084045,","                lng: -73.874256","            }, {","                lat: 40.754932,","                lng: -73.984016","            }];","            var markers = locations.map(function(location, i) {","                return new google.maps.Marker({","                    position: location,","                    label: labels[i % labels.length]","                });","            });","            var markerCluster = new MarkerClusterer(map, markers, {","                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'","            });","        }"],"id":2},{"start":{"row":0,"column":0},"end":{"row":52,"column":13},"action":"insert","lines":["<script>","        function initMap() {","            var map = new google.maps.Map(document.getElementById(\"map\"), {","                zoom: 2,","                center: {","                    lat: 46.619261,","                    lng: -33.134766","                }","            });","         ","        var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";","            var locations = [{","                lat: 46.193646,","                lng: 6.773301","            }, {","                lat: 47.136266,","                lng: 10.268162","            }, {","                lat: 42.543433,","                lng: 1.733681","            }, {","                lat: 50.122180,","                lng: -122.957228","            }, {","                lat: 51.177105,","                lng: -115.568315","            }, {","                lat: 39.481223,","                lng: -106.066729","            }, {","                lat: 43.069520,","                lng: 142.614962","            }, {","                lat: -44.872167,","                lng: 168.948805","            }, {","                lat: -44.850923,","                lng: 168.939220","            }];","        ","        ","            var markers = locations.map(function(location, i) {","                return new google.maps.Marker({","                    position: location,","                    label: labels[i % labels.length]","                });","            });","            ","            var markerCluster = new MarkerClusterer(map, markers, {","                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'","            });","        }","    </script>"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["<script>"],"id":3}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":13},"action":"remove","lines":["    </script>"],"id":4},{"start":{"row":51,"column":9},"end":{"row":52,"column":0},"action":"remove","lines":["",""]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"remove","lines":[" "]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"remove","lines":[" "]},{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["    "]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":2},"action":"remove","lines":["  "],"id":5}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":12},"action":"remove","lines":["        "],"id":6},{"start":{"row":2,"column":8},"end":{"row":2,"column":16},"action":"remove","lines":["        "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"remove","lines":[" "]},{"start":{"row":3,"column":8},"end":{"row":3,"column":15},"action":"remove","lines":["       "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":12},"end":{"row":4,"column":18},"action":"remove","lines":["      "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":7},"action":"remove","lines":["       "]},{"start":{"row":5,"column":12},"end":{"row":5,"column":13},"action":"remove","lines":[" "]},{"start":{"row":6,"column":8},"end":{"row":6,"column":16},"action":"remove","lines":["        "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":8},"action":"remove","lines":["        "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":9},"action":"remove","lines":["         "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "]},{"start":{"row":10,"column":4},"end":{"row":10,"column":12},"action":"remove","lines":["        "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":6},"action":"remove","lines":["      "]},{"start":{"row":11,"column":8},"end":{"row":11,"column":10},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":12,"column":8},"end":{"row":12,"column":12},"action":"remove","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"remove","lines":["        "]},{"start":{"row":14,"column":8},"end":{"row":14,"column":16},"action":"remove","lines":["        "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":5},"action":"remove","lines":["     "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":11},"action":"remove","lines":["   "]},{"start":{"row":16,"column":4},"end":{"row":16,"column":12},"action":"remove","lines":["        "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":[" "]},{"start":{"row":17,"column":8},"end":{"row":17,"column":15},"action":"remove","lines":["       "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":6},"action":"remove","lines":["      "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":10},"action":"remove","lines":["  "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":12},"action":"remove","lines":["        "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":8},"end":{"row":20,"column":14},"action":"remove","lines":["      "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":7},"action":"remove","lines":["       "]},{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"remove","lines":[" "]},{"start":{"row":22,"column":4},"end":{"row":22,"column":12},"action":"remove","lines":["        "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"remove","lines":["   "]},{"start":{"row":23,"column":8},"end":{"row":23,"column":13},"action":"remove","lines":["     "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":8},"action":"remove","lines":["        "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":12},"action":"remove","lines":["        "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":26,"column":8},"end":{"row":26,"column":12},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"remove","lines":["   "]},{"start":{"row":27,"column":8},"end":{"row":27,"column":13},"action":"remove","lines":["     "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":8},"action":"remove","lines":["        "]},{"start":{"row":29,"column":0},"end":{"row":29,"column":6},"action":"remove","lines":["      "]},{"start":{"row":29,"column":8},"end":{"row":29,"column":10},"action":"remove","lines":["  "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":5},"action":"remove","lines":["     "]},{"start":{"row":30,"column":8},"end":{"row":30,"column":11},"action":"remove","lines":["   "]},{"start":{"row":31,"column":0},"end":{"row":31,"column":8},"action":"remove","lines":["        "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":7},"action":"remove","lines":["       "]},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"remove","lines":[" "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":6},"action":"remove","lines":["      "]},{"start":{"row":33,"column":8},"end":{"row":33,"column":10},"action":"remove","lines":["  "]},{"start":{"row":34,"column":4},"end":{"row":34,"column":12},"action":"remove","lines":["        "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"remove","lines":["        "]},{"start":{"row":36,"column":8},"end":{"row":36,"column":16},"action":"remove","lines":["        "]},{"start":{"row":37,"column":4},"end":{"row":37,"column":12},"action":"remove","lines":["        "]},{"start":{"row":38,"column":0},"end":{"row":38,"column":8},"action":"remove","lines":["        "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":8},"action":"remove","lines":["        "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":8},"action":"remove","lines":["        "]},{"start":{"row":41,"column":8},"end":{"row":41,"column":16},"action":"remove","lines":["        "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["  "]},{"start":{"row":42,"column":12},"end":{"row":42,"column":18},"action":"remove","lines":["      "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"remove","lines":["        "]},{"start":{"row":44,"column":8},"end":{"row":44,"column":16},"action":"remove","lines":["        "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":8},"action":"remove","lines":["        "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":12},"action":"remove","lines":["            "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":8},"action":"remove","lines":["        "]},{"start":{"row":48,"column":8},"end":{"row":48,"column":16},"action":"remove","lines":["        "]},{"start":{"row":49,"column":4},"end":{"row":49,"column":12},"action":"remove","lines":["        "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":8},"action":"remove","lines":["        "]},{"start":{"row":50,"column":1},"end":{"row":51,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":28,"column":7},"end":{"row":31,"column":6},"action":"remove","lines":["{","        lat: 43.069520,","        lng: 142.614962","    },"],"id":7},{"start":{"row":34,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["{","        lat: 43.069520,","        lng: 142.614962","    },"]}],[{"start":{"row":34,"column":5},"end":{"row":34,"column":6},"action":"insert","lines":[","],"id":8}],[{"start":{"row":34,"column":6},"end":{"row":34,"column":7},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"remove","lines":[","],"id":10}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"remove","lines":[" "],"id":11}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":[" "],"id":12},{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":[" "]},{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":[" "]},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["/"]},{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":["/"]}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":45},"action":"insert","lines":["/france - Avariaz"],"id":13}],[{"start":{"row":11,"column":28},"end":{"row":11,"column":29},"action":"remove","lines":["/"],"id":14}],[{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":[" "],"id":15},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":14,"column":25},"end":{"row":14,"column":47},"action":"insert","lines":[" // autria - St. anton"],"id":16}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":17},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":[" "]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["/"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["/"]}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":52},"action":"insert","lines":[" Andorra - pas de la casa"],"id":18}],[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":[" "],"id":19},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":20,"column":25},"end":{"row":20,"column":44},"action":"insert","lines":["//Canada - Whistler"],"id":20}],[{"start":{"row":24,"column":24},"end":{"row":24,"column":25},"action":"insert","lines":[" "],"id":21},{"start":{"row":24,"column":25},"end":{"row":24,"column":26},"action":"insert","lines":[" "]}],[{"start":{"row":24,"column":26},"end":{"row":24,"column":43},"action":"insert","lines":["// Canada - Banff"],"id":22}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":[" "],"id":23},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":[" "]}],[{"start":{"row":27,"column":26},"end":{"row":27,"column":47},"action":"insert","lines":["// USA - Breckenridge"],"id":24}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":[" "],"id":25},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":55},"action":"insert","lines":["//New Zealand - Mount Cardrona"],"id":26}],[{"start":{"row":36,"column":23},"end":{"row":36,"column":24},"action":"insert","lines":[" "],"id":27},{"start":{"row":36,"column":24},"end":{"row":36,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":36,"column":25},"end":{"row":36,"column":54},"action":"insert","lines":[" // New Zealand - Treble cone"],"id":28}],[{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":[" "],"id":29},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":[" "]}],[{"start":{"row":33,"column":25},"end":{"row":33,"column":42},"action":"insert","lines":["// Japan - tomamu"],"id":30}]]},"ace":{"folds":[],"scrolltop":480,"scrollleft":0,"selection":{"start":{"row":51,"column":0},"end":{"row":51,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":276,"mode":"ace/mode/javascript"}},"timestamp":1576240635749,"hash":"fc7e6ede3e8d0ab0cfb4826d1a121521bfc14564"}