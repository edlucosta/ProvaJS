function isLucky(n) {
	var tamanho = 0;
  	var numerostr = "";
  	var parte1 = "";
  	var parte2 = "";
  	var soma1 = 0;
  	var soma2 = 0;
  	numerostr = n.toString();
  	tamanho = numerostr.length / 2;    	
  	parte1 = numerostr.slice(0, tamanho);  
  	parte2 = numerostr.slice(tamanho, tamanho + tamanho);
  	
  	for (var i = parte1.length - 1; i >= 0; i--) { 
        soma1 = soma1 + parseInt(parte1[i]); 
    };

  	for (var i = parte2.length - 1; i >= 0; i--) { 
        soma2 = soma2 + parseInt(parte2[i]); 
    };
  	if (soma1 == soma2 ){
      return true
    }
  	else{
      return false;
    }     
}
