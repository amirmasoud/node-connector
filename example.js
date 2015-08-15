
var redraw, g, renderer;

/* only do all this when document has finished loading (needed for RaphaelJS) */
window.onload = function() {
    
    var width = $(document).width() - 100;
    var height = $(document).height() - 100;
	var matrix = new Array();    

    g = new Graph();
	//g.addNode();
    g.addEdge("sib", "golabi");
    g.addEdge("sib", "kivi");

    /* add a simple node */


    /* add a node with a customized label */


	
    /* add a node with a customized shape 
       (the Raphael graph drawing implementation can draw this shape, please 
       consult the RaphaelJS reference for details http://raphaeljs.com/) */
//    var render = function(r, n) {
//        var label = r.text(0, 30, n.label).attr({opacity:0});
        /* the Raphael set is obligatory, containing all you want to display */
//        var set = r.set().push(
//            r.rect(-30, -13, 62, 86).attr({"fill": "#fa8", "stroke-width": 2, r : "9px"}))
//            .push(label);
        /* make the label show only on hover */
//        set.hover(function(){ label.animate({opacity:1,"fill-opacity":1}, 500); }, function(){ label.animate({opacity:0},300); });

//        tooltip = r.set()
//            .push(
//                r.rect(0, 0, 90, 30).attr({"fill": "#fec", "stroke-width": 1, r : "9px"})
//            ).push(
//                r.text(25, 15, "overlay").attr({"fill": "#000000"})
//            );
//        for(i in set.items) {
//            set.items[i].tooltip(tooltip);
//        };
//	//            set.tooltip(r.set().push(r.rect(0, 0, 30, 30).attr({"fill": "#fec", "stroke-width": 1, r : "9px"})).hide());
//        return set;
//    };
	

    //    g.addNode("Wheat", {
    /* filling the shape with a color makes it easier to be dragged */
    /* arguments: r = Raphael object, n : node object */
    //        shapes : [ {
    //                type: "rect",
    //                x: 10,
    //                y: 10,
    //                width: 25,
    //                height: 25,
    //                stroke: "#f00"
    //            }, {
    //                type: "text",
    //                x: 30,
    //                y: 40,
    //                text: "Dump"
    //            }],
    //        overlay : "<b>Hello <a href=\"http://wikipedia.org/\">World!</a></b>"
    //    });



    /* connect nodes with edges */


    /* a directed connection, using an arrow */
    
    /* customize the colors of that edge */
    
    /* add an unknown node implicitly by adding an edge */

    g.removeNode("1");

    /* layout the graph using the Spring layout implementation */
    var layouter = new Graph.Layout.Spring(g);
    
    /* draw the graph using the RaphaelJS draw implementation */
    renderer = new Graph.Renderer.Raphael('canvas', g, width, height);
    
    redraw = function() {
        layouter.layout();
        renderer.draw();
    };
    hide = function(id) {
        g.nodes[id].hide();
    };
    show = function(id) {
        g.nodes[id].show();
    };
	add = function(){
		var x = document.getElementById('addElement').value;
		if(x == "")
			alert("form couldn't be empty!\nPlease fill to continue.");
		if(x != ""){
			g.addNode(x);
			redraw();
		}
	};
	add_edge = function(){
		var x = document.getElementById('edge1').value;
		var y = document.getElementById('edge2').value;		
		if(x == "" || y == "")
			alert("forms couldn't be empty!\nPlease fill to continue.");
		if(x != "" && y != ""){
			g.addEdge(x,y);
			redraw();
		}
	};
    //    console.log(g.nodes["kiwi"]);
};

