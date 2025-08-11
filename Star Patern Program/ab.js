function abcdPatern(num){
  for (let line=num; line>=0; line--){
    let row="";
    for (let count=0; count<=line; count++){
      row+=String.fromCharCode(65+count)+" ";
    }
    console.log(row);
    
  }
}
abcdPatern(5);