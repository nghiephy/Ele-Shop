
const cbxProducts = document.querySelectorAll(".kind-product-checkbox")
    cbxProducts.forEach((value,index)=>{
      value.onchange = (event)=> {
        let checkedProducts = document.querySelectorAll(".kind-product-checkbox:not(:checked)") 
        checkedProducts.forEach((checkProduct,index)=>{
          if(checkProduct !== value)
            checkProduct.checked = true;
        })
      }
    })