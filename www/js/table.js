
function create_table (a, b) {
	var table = $("#"+a+"");
	var t = "";
	t+= "<tr>";
		////t+= '<td class="sudoku-key">1</td>';
		if (b[0][0] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point00" id="point00"></td>'; else t+= '<td class="bt bl">'+b[0][0]+'</td>';  
		if (b[0][1] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point01"></td>'; else t+= '<td class="bt">'+b[0][1]+'</td>';
		if (b[0][2] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point02"></td>'; else t+= '<td class="bt br">'+b[0][2]+'</td>';
		if (b[0][3] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point03"></td>'; else t+= '<td class="bt bl">'+b[0][3]+'</td>';
		if (b[0][4] === 0) t+= '<td class="bt  editable"><input type="text" max-value="9" class="insert" id="point04"></td>'; else t+= '<td class="bt ">'+b[0][4]+'</td>';
		if (b[0][5] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point05"></td>'; else t+= '<td class="bt br">'+b[0][5]+'</td>';
		if (b[0][6] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point06"></td>'; else t+= '<td class="bt bl">'+b[0][6]+'</td>';
		if (b[0][7] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point07"></td>'; else t+= '<td class="bt">'+b[0][7]+'</td>';
		if (b[0][8] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point08"></td>'; else t+= '<td class="bt br">'+b[0][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		////t+= '<td class="sudoku-key">2</td>';
		if (b[1][0] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point10"></td>'; else t+= '<td class="bl">'+b[1][0]+'</td>';
		if (b[1][1] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point11"></td>'; else t+= '<td class="">'+b[1][1]+'</td>';
		if (b[1][2] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point12"></td>'; else t+= '<td class="br">'+b[1][2]+'</td>';
		if (b[1][3] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point13"></td>'; else t+= '<td class="bl">'+b[1][3]+'</td>';
		if (b[1][4] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point14"></td>'; else t+= '<td class="">'+b[1][4]+'</td>';
		if (b[1][5] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point15"></td>'; else t+= '<td class="br">'+b[1][5]+'</td>';
		if (b[1][6] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point16"></td>'; else t+= '<td class="bl">'+b[1][6]+'</td>';
		if (b[1][7] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point17"></td>'; else t+= '<td class="">'+b[1][7]+'</td>';
		if (b[1][8] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point18"></td>'; else t+= '<td class="br">'+b[1][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">3</td>';
		if (b[2][0] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point20"></td>'; else t+= '<td class="bb bl">'+b[2][0]+'</td>';
		if (b[2][1] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point21"></td>'; else t+= '<td class="bb">'+b[2][1]+'</td>';
		if (b[2][2] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point22"></td>'; else t+= '<td class="bb br">'+b[2][2]+'</td>';
		if (b[2][3] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point23"></td>'; else t+= '<td class="bb bl">'+b[2][3]+'</td>';
		if (b[2][4] === 0) t+= '<td class="bb  editable"><input type="text" max-value="9" class="insert" id="point24"></td>'; else t+= '<td class="bb ">'+b[2][4]+'</td>';
		if (b[2][5] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point25"></td>'; else t+= '<td class="bb br">'+b[2][5]+'</td>';
		if (b[2][6] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point26"></td>'; else t+= '<td class="bb bl">'+b[2][6]+'</td>';
		if (b[2][7] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point27"></td>'; else t+= '<td class="bb">'+b[2][7]+'</td>';
		if (b[2][8] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point28"></td>'; else t+= '<td class="bb br">'+b[2][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">4</td>';
		if (b[3][0] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point30"></td>'; else t+= '<td class="bt bl">'+b[3][0]+'</td>';
		if (b[3][1] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point31"></td>'; else t+= '<td class="bt">'+b[3][1]+'</td>';
		if (b[3][2] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point32"></td>'; else t+= '<td class="bt br">'+b[3][2]+'</td>';
		if (b[3][3] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point33"></td>'; else t+= '<td class="bt bl">'+b[3][3]+'</td>';
		if (b[3][4] === 0) t+= '<td class="bt  editable"><input type="text" max-value="9" class="insert" id="point34"></td>'; else t+= '<td class="bt ">'+b[3][4]+'</td>';
		if (b[3][5] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point35"></td>'; else t+= '<td class="bt br">'+b[3][5]+'</td>';
		if (b[3][6] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point36"></td>'; else t+= '<td class="bt bl">'+b[3][6]+'</td>';
		if (b[3][7] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point37"></td>'; else t+= '<td class="bt">'+b[3][7]+'</td>';
		if (b[3][8] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point38"></td>'; else t+= '<td class="bt br">'+b[3][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">5</td>';
		if (b[4][0] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point40"></td>'; else t+= '<td class="bl">'+b[4][0]+'</td>';
		if (b[4][1] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point41"></td>'; else t+= '<td class="">'+b[4][1]+'</td>';
		if (b[4][2] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point42"></td>'; else t+= '<td class="br">'+b[4][2]+'</td>';
		if (b[4][3] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point43"></td>'; else t+= '<td class="bl">'+b[4][3]+'</td>';
		if (b[4][4] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point44"></td>'; else t+= '<td class="">'+b[4][4]+'</td>';
		if (b[4][5] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point45"></td>'; else t+= '<td class="br">'+b[4][5]+'</td>';
		if (b[4][6] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point46"></td>'; else t+= '<td class="bl">'+b[4][6]+'</td>';
		if (b[4][7] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point47"></td>'; else t+= '<td class="">'+b[4][7]+'</td>';
		if (b[4][8] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point48"></td>'; else t+= '<td class="br">'+b[4][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">6</td>';
		if (b[5][0] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point50"></td>'; else t+= '<td class="bb bl">'+b[5][0]+'</td>';
		if (b[5][1] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point51"></td>'; else t+= '<td class="bb">'+b[5][1]+'</td>';
		if (b[5][2] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point52"></td>'; else t+= '<td class="bb br">'+b[5][2]+'</td>';
		if (b[5][3] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point53"></td>'; else t+= '<td class="bb bl">'+b[5][3]+'</td>';
		if (b[5][4] === 0) t+= '<td class="bb  editable"><input type="text" max-value="9" class="insert" id="point54"></td>'; else t+= '<td class="bb ">'+b[5][4]+'</td>';
		if (b[5][5] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point55"></td>'; else t+= '<td class="bb br">'+b[5][5]+'</td>';
		if (b[5][6] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point56"></td>'; else t+= '<td class="bb bl">'+b[5][6]+'</td>';
		if (b[5][7] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point57"></td>'; else t+= '<td class="bb">'+b[5][7]+'</td>';
		if (b[5][8] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point58"></td>'; else t+= '<td class="bb br">'+b[5][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">7</td>';
		if (b[6][0] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point60"></td>'; else t+= '<td class="bt bl">'+b[6][0]+'</td>';
		if (b[6][1] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point61"></td>'; else t+= '<td class="bt">'+b[6][1]+'</td>';
		if (b[6][2] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point62"></td>'; else t+= '<td class="bt br">'+b[6][2]+'</td>';
		if (b[6][3] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point63"></td>'; else t+= '<td class="bt bl">'+b[6][3]+'</td>';
		if (b[6][4] === 0) t+= '<td class="bt  editable"><input type="text" max-value="9" class="insert" id="point64"></td>'; else t+= '<td class="bt ">'+b[6][4]+'</td>';
		if (b[6][5] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point65"></td>'; else t+= '<td class="bt br">'+b[6][5]+'</td>';
		if (b[6][6] === 0) t+= '<td class="bt bl editable"><input type="text" max-value="9" class="insert" id="point66"></td>'; else t+= '<td class="bt bl">'+b[6][6]+'</td>';
		if (b[6][7] === 0) t+= '<td class="bt editable"><input type="text" max-value="9" class="insert" id="point67"></td>'; else t+= '<td class="bt">'+b[6][7]+'</td>';
		if (b[6][8] === 0) t+= '<td class="bt br editable"><input type="text" max-value="9" class="insert" id="point68"></td>'; else t+= '<td class="bt br">'+b[6][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">8</td>';
		if (b[7][0] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point70"></td>'; else t+= '<td class="bl">'+b[7][0]+'</td>';
		if (b[7][1] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point71"></td>'; else t+= '<td class="">'+b[7][1]+'</td>';
		if (b[7][2] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point72"></td>'; else t+= '<td class="br">'+b[7][2]+'</td>';
		if (b[7][3] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point73"></td>'; else t+= '<td class="bl">'+b[7][3]+'</td>';
		if (b[7][4] === 0) t+= '<td class="  editable"><input type="text" max-value="9" class="insert" id="point74"></td>'; else t+= '<td class=" ">'+b[7][4]+'</td>';
		if (b[7][5] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point75"></td>'; else t+= '<td class="br">'+b[7][5]+'</td>';
		if (b[7][6] === 0) t+= '<td class="bl editable"><input type="text" max-value="9" class="insert" id="point76"></td>'; else t+= '<td class="bl">'+b[7][6]+'</td>';
		if (b[7][7] === 0) t+= '<td class=" editable"><input type="text" max-value="9" class="insert" id="point77"></td>'; else t+= '<td class="">'+b[7][7]+'</td>';
		if (b[7][8] === 0) t+= '<td class="br editable"><input type="text" max-value="9" class="insert" id="point78"></td>'; else t+= '<td class="br">'+b[7][8]+'</td>';
		
	t+= "</tr>";
	t+= "<tr>";
		//t+= '<td class="sudoku-key">9</td>';
		if (b[8][0] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point80"></td>'; else t+= '<td class="bb bl">'+b[8][0]+'</td>';
		if (b[8][1] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point81"></td>'; else t+= '<td class="bb">'+b[8][1]+'</td>';
		if (b[8][2] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point82"></td>'; else t+= '<td class="bb br">'+b[8][2]+'</td>';
		if (b[8][3] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point83"></td>'; else t+= '<td class="bb bl">'+b[8][3]+'</td>';
		if (b[8][4] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point84"></td>'; else t+= '<td class="bb ">'+b[8][4]+'</td>';
		if (b[8][5] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point85"></td>'; else t+= '<td class="bb br">'+b[8][5]+'</td>';
		if (b[8][6] === 0) t+= '<td class="bb bl editable"><input type="text" max-value="9" class="insert" id="point86"></td>'; else t+= '<td class="bb bl">'+b[8][6]+'</td>';
		if (b[8][7] === 0) t+= '<td class="bb editable"><input type="text" max-value="9" class="insert" id="point87"></td>'; else t+= '<td class="bb">'+b[8][7]+'</td>';
		if (b[8][8] === 0) t+= '<td class="bb br editable"><input type="text" max-value="9" class="insert" id="point88"></td>'; else t+= '<td class="bb br">'+b[8][8]+'</td>';
		
	t+= "</tr>";
	table.append(t);
};


$(document).ready(function(){
	$('#game_div').sudoku({
		editable				: true,
		touch 					: true,
		touchKeyboard 			: true,
		fullscreenEnterText 	: '<span class="glyph-large icon-resize-enlarge"></span>',
		fullscreenExitText 		: '<span class="glyph-large icon-resize-shrink"></span>',
		resetText 				: '<span class="glyph-large icon-cycle"></span>',
		onComplete  : function(elem) { 
			elem.children().eq(1).addClass('active magictime tinUpIn');
			elem.children().eq(0).addClass('magictime blinking');
			console.log("END");
			elem.sudoku('editable', false);
			elem.sudoku('touch', false);
			elem.sudoku('keyboard', false);
			elem.sudoku('fullscreen', false)
			elem.sudoku('hideOptions');
			var isFull = elem.parent().attr('class').search('sudoku-fullscreen');
			console.log(elem.parent().attr('class').search('sudoku-fullscreen'));
			if (isFull != -1)
				elem.sudoku('fullscreen', true);
		},
		onPause             : function(){
			console.log('game puased!!');
		},
	});
});