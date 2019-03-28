/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

var board = [];
var turn =1;

var btn = document.querySelector('#gameboard');

for(var i = 0;i < 6;i++)
{
  board[i] = [];
  
  for(var j = 0; j <7;j++)
  {
    board [i][j] = 0; 
  }
}

console.log(board);

function set(row,column,player)
{
  if(player == 1)
  {
     board[row][column]= 1;
  }
  
  else
  {
     board[row][column]= 2;
  }
}

function play(column)
{
  var row;
  for(var i = 5;i >= 0;i--)
  {
    if(board [i][column] == 1 || board [i][column] == 2)
    {
      
    }
    else
    {
      row = i;
      break;
    }
  }
   
    if(row == undefined)
    {
      return false;
    }
    else{
    
      set(row,column,turn);
      
    if(turn == 2)
    {
      turn =1;
    }
    else
    {
      turn =2;
    }

    return row;
    }
  
}

function action(a)
{
  if(a.target.dataset.column != undefined)
  {
    play(a.target.dataset.column);
    console.log(render());
  }
  
}

function render()
{
  var div = document.querySelector('#gameboard');
  
  div.innerHTML = '';
  
  var tableau = document.createElement('table');
  
  div.appendChild(tableau);
  
for(var i = 0;i < 6;i++)
{
  
  var tr = document.createElement('tr');
  
  tableau.appendChild(tr);
  
  for(var j = 0; j <7;j++)
  {
    var td = document.createElement('td');
    
    if(board[i][j]==1)
    {
      td.className = 'player1';
      

    }
    if(board[i][j]==2)
    {
      td.className = 'player2';
    }
    
     
    tr.appendChild(td);

    td.dataset.column = j;
  }
}

}





btn.addEventListener('click', action);
console.log(action.target)


console.log(render());

