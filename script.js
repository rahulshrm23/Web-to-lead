function beforesubmit()
{
    debugger;
    let inputdate=document.querySelector(".inputdate");
    let outpudate=document.querySelector(".outpudate");
    console.log('inputdate',inputdate); 
    let comingdate=inputdate.value;
    console.log('comingdate',comingdate)
 let formatteddate=new Date(comingdate).toLocaleDateString("en-IN");
 outpudate.value=formatteddate;
 console.log('outputdate',outpudate);
}