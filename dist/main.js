const form=document.querySelector('form')

// const height=parseInt(document.querySelector('#height').value)
// this usecase will give u emptyvalue 

form.addEventListener("submit" , (e)=>{
    //remove default action (post , get method)
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value) ;//using parseInt string to number
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#result');
    
    

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please give a valid height`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight`;
    }else{
        const bmi=weight/(height*height)
        results.innerHTML=`<span>${bmi}</span>`
    }
   
    //The BMI is calculated by dividing an adult's weight in kilograms by their height in metres squared. For example, if you weigh 70kg (around 11 stone) and are 1.70m (around 5 foot 7 inches) tall, you work out your BMI by: squaring your height in metres: 1.70 x 1.70 = 2.89.
    

})

