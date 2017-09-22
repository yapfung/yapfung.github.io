function sing(){
    paragraph1 = "x bottles of beer on the wall, x bottles of beer. \nTake one down and pass it around, y bottles of beer on the wall.";
    paragraph2 = "x bottle of beer on the wall, 1 bottle of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.";
    var index = 99

    while(index>1){
        console.log(paragraph1.replace(/x/g, index.toString()).replace(/y/i, (index-1).toString()));
        index -= 1;
    }

    if(index == 1){
        console.log(paragraph2.replace(/x/i, index.toString()));
    }
}

sing()