//All of the functions that will change the colors of the block


export function setCheckedOutColors(checkedOut, mainModel) {

    for (var i = 0; i < checkedOut.length; i++) {

        //assigns the material effect to each respective material as the 
        //for loop runs currently sets normal map color to dark red
        mainModel.setColor(checkedOut[i], mainModel.DiffuseColor, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.AOPBR, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.AlbedoPBR, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.BumpMap, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.CavityPBR, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.DiffusePBR, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.SpecularColor, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.SpecularF0, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.SpecularHardness, "#8a0000"); 
        mainModel.setColor(checkedOut[i], mainModel.SpecularPBR, "#8a0000"); 


        //console.log("checkedout individual piece");
        //console.log(checkedOut[i]);

    }//ends for loop
} //ends setCheckedOutColors

//Sets the clicked piece color to yellow
export function setClickedColor(name, mainModel) {
    console.log("setClickedColor", name);

    mainModel.setColor(name, mainModel.DiffuseColor,"#ffff00");
    mainModel.setColor(name, mainModel.AOPBR,"#ffff00");
    mainModel.setColor(name, mainModel.AlbedoPBR,"#ffff00");
    mainModel.setColor(name, mainModel.BumpMap,"#ffff00");
    mainModel.setColor(name, mainModel.CavityPBR,"#ffff00");
    mainModel.setColor(name, mainModel.DiffusePBR,"#ffff00");
    mainModel.setColor(name, mainModel.SpecularColor,"#ffff00");
    mainModel.setColor(name, mainModel.SpecularF0,"#ffff00");
    mainModel.setColor(name, mainModel.SpecularHardness,"#ffff00");
    mainModel.setColor(name, mainModel.SpecularPBR,"#ffff00");
}

export function resetColor(materialHasVal, mainModel){

    mainModel.resetColor(materialHasVal, mainModel.DiffuseColor);
    mainModel.resetColor(materialHasVal, mainModel.AOPBR);
    mainModel.resetColor(materialHasVal, mainModel.AlbedoPBR);
    mainModel.resetColor(materialHasVal, mainModel.BumpMap);
    mainModel.resetColor(materialHasVal, mainModel.CavityPBR);
    mainModel.resetColor(materialHasVal, mainModel.DiffusePBR);
    mainModel.resetColor(materialHasVal, mainModel.SpecularColor);
    mainModel.resetColor(materialHasVal, mainModel.SpecularF0);
    mainModel.resetColor(materialHasVal, mainModel.SpecularHardness);
    mainModel.resetColor(materialHasVal, mainModel.SpecularPBR);
}

export function colorOffset(name, mainModel){
    mainModel.setColor(name, mainModel.DiffuseColor, "#ffff00");
    mainModel.setColor(name, mainModel.AOPBR, "#ffff00");
    mainModel.setColor(name, mainModel.AlbedoPBR, "#ffff00");
    mainModel.setColor(name, mainModel.BumpMap, "#ffff00");
    mainModel.setColor(name, mainModel.CavityPBR, "#ffff00");
    mainModel.setColor(name, mainModel.DiffusePBR, "#ffff00");
    mainModel.setColor(name, mainModel.SpecularColor, "#ffff00");
    mainModel.setColor(name, mainModel.SpecularF0, "#ffff00");
    mainModel.setColor(name, mainModel.SpecularHardness, "#ffff00");
    mainModel.setColor(name, mainModel.SpecularPBR, "#ffff00");
}