const calculateTax=(province,subTotal)=>{
    let taxRate=0;
    
    // Determine tax rate base don province
    if(province=="AB"){
        taxRate=0.05;

    }
    else if(province=="BC")
    {
        taxRate=0.05;
    }
    else if(province=="MB")
    {
        taxRate=0.05;
    }
    else if(province=="NB")
    {
        taxRate=0.15;

    }
    else if(province=="NL")
    {
        taxRate=0.15;

    }
    else if(province=="NS")
    {
        taxRate=0.15;
    }
    else if(province=="ON")
    {
        taxRate=0.13;
    }
    else if(province=="PE")
    {
        taxRate=0.15;
    }
    else if(province=="QC")
    {
        taxRate=0.05;
    }
    else if(province=="SK")
    {
        taxRate=0.05;
    }
    else if(province=="NT")
    {
        taxRate=0.05;
    }
    else if(province=="NU")
    {
        taxRate=0.05;
    }
    else
    {
        taxRate=0.05;
    }
    const taxAmount= taxRate*subTotal;
    return taxAmount.toFixed(2);
}
module.exports = calculateTax;

