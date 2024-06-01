const nameXmen = document.querySelector('.name');
const imageXmen = document.querySelector('.image-xmen');
const realName = document.querySelector('.real-name');
const realHeight = document.querySelector('.real-height');
const realGender = document.querySelector('.gender');
const realHabilities = document.querySelector('.habilities');
const realLevel = document.querySelector('.level');
const realDescription = document.querySelector('.description');
const btnCyclops = document.querySelector('.button-cyclops');
const btnWolverine = document.querySelector('.button-wolverine');
const btnRouge = document.querySelector('.button-rouge');
const btnStorm = document.querySelector('.button-storm');
const btnBeast = document.querySelector('.button-beast');
const btnGambit = document.querySelector('.button-gambit');
const btnJubilee = document.querySelector('.button-jubilee');
const btnJean = document.querySelector('.button-jean-grey');
const btnMorph = document.querySelector('.button-morph');
const btnMagneto = document.querySelector('.button-magneto');




btnCyclops.addEventListener('click', async() => {
    try {
        
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/1');
        
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnWolverine.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/2');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
    
});

btnRouge.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('xxxxxxxxxxxxxxxx');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnStorm.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/4');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnBeast.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/5');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnGambit.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/6');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnJubilee.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/7');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnJean.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/8');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnMorph.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/9');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});

btnMagneto.addEventListener('click', async () => {
    try {
        const APIResponse = await fetch('https://super-space-tribble-g479vw45699cp65-3000.app.github.dev/10');
        if (APIResponse.status == 200){
        
            const data = await APIResponse.json();
            nameXmen.innerHTML = data[1].name
            imageXmen.src = data[5].image
            realName.innerHTML = data[2].real_name
            realHeight.innerHTML = data[3].height
            realGender.innerHTML = data[4].gender
            realHabilities.innerHTML = data[6].habilities
            realLevel.innerHTML = data[7].level
            realDescription.innerHTML = data[8].description           
        }        
    } catch (error) {
        console.error('Error:', error);
    }   
});
