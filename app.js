function getValueZero(inputId){
    const Cost=document.getElementById(inputId);
     Cost.innerText=0;

}
function getValue180(inputId){
    const Cost=document.getElementById(inputId);
    Cost.innerText=180;

}


function getTotal(){
    const bestPrice=parseFloat(document.getElementById('best-price').innerText);
    const memoryCost=parseFloat(document.getElementById('extra-memory-cost').innerText);
    const storageCost=parseFloat(document.getElementById('extra-storage-cost').innerText);
    const deliveryCost= parseFloat( document.getElementById('delivery-charge').innerText);

    const total=bestPrice+memoryCost+storageCost+deliveryCost;
    const totalPrice=document.getElementById('total-price');
    totalPrice.innerText=total;
    const lastTotal= document.getElementById('total');
    lastTotal.innerText=total
    return total;
}


document.getElementById('8GB').addEventListener('click',function(){
 getValueZero('extra-memory-cost');
 getTotal();
 
});

document.getElementById('16GB').addEventListener('click',function(){
    getValue180('extra-memory-cost');
    getTotal();
   
});

document.getElementById('256GB').addEventListener('click',function(){
   
    getValueZero('extra-storage-cost');
    getTotal();
   
  });
document.getElementById('512GB').addEventListener('click',function(){
    const memoryCost=document.getElementById('extra-storage-cost');
    memoryCost.innerText=120;
    getTotal();
   
  });

document.getElementById('1TB').addEventListener('click',function(){
   
    getValue180('extra-storage-cost');
    getTotal();
   
  });
  document.getElementById('aug-25').addEventListener('click',function(){
    
    getValueZero('delivery-charge');
    getTotal();
  });
  document.getElementById('aug-21').addEventListener('click',function(){
      const deliveryCost=document.getElementById('delivery-charge');
      deliveryCost.innerText=20;
      getTotal();
  });


  document.getElementById('apply-button').addEventListener('click',function(){

      const input=document.getElementById('pomo-code-input').value;
      if(input=='stevekaku'){
          const discountPrice=getTotal()*(20/100);
          const totalPrice=getTotal()-discountPrice;
          const lastTotal= document.getElementById('total');
          lastTotal.innerText=totalPrice;
          input.value='';
          

      }

      else{
       const hidden=document.getElementById('hidden');
       hidden.innerText='To get Dioscount ,Please add pomo code'
       
      }
  })

