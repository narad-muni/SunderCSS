//main
completeSunder = "";
function generateAnimation(sunder){
    sunder = sunder.split("`");
    returnName = sunder;
    outSunder = "";
    cName = sunder[0];
    outSunder += "@keyframes "+cName.replaceAll(/(\&|\$|\@)/g,'\\$&')+"{";
    args = sunder[0].split("_");
    args.shift();
    dArgs = Anupranan[cName.split("_")[0]]['dArgs'].split(" ");
    states = Anupranan[cName.split("_")[0]]['states'];

    for(var i=0;i<Object.keys(states).length;i++){
        outSunder += Object.keys(states)[i]+"{";

        sunder = states[Object.keys(states)[i]].split(" ").slice();

        for(var j=0;j<sunder.length;j++){

            while(sunder[j].includes("$")){
                param = sunder[j].match(/\$+d?./)[0];
                param2 = args[param.substring(1)-1]!=null && args[param.substring(1)-1]!="$" ? args[param.substring(1)-1] : dArgs[param.substring(1)-1];
                if(param2=="@"){
                    sunder[j] = "";
                    break;
                }
                sunder[j] = sunder[j].replace(param,param2);
            }

            if(sunder[j].length>0){
                outSunder+=generateSunder(sunder[j]);
            }
        }
        outSunder += "}";
    }

    outSunder += "}";

    addSunder(outSunder);

    returnName[0] = returnName[0].replaceAll(/(\&|\$|\@)/g,'\\$&');
    returnName = returnName.join("`");
    return returnName;
}

function generateComponent(sunder){
    cName = sunder.split("_");
    args = cName;
    cName = cName[0];
    args.shift();
    sunder = Ansh[cName];
    dArgs = sunder.dArgs;
    sunder = sunder.css.split(" ");
    cName = "";
    for(i=0;i<sunder.length;i++){
        while(sunder[i].includes("$")){
            param = sunder[i].match(/\$+d?./)[0];
            param2 = args[param.substring(1)-1]!=null && args[param.substring(1)-1]!="$" ? args[param.substring(1)-1] : dArgs[param.substring(1)-1];
            if(param2=="@"){
                sunder[i] = "";
                break;
            }
            sunder[i] = sunder[i].replace(param,param2);
        }
        if(sunder[i].length>0){
            cName += generateSunder(sunder[i]);
        }
    }

    return cName;

}

function addSunder(sunder){
    less.render(sunder, function (e, output) {
        if(e){
            // console.log(sunder);
        }else if(!document.getElementsByTagName("style")[0].innerHTML.includes(output.css)){
            completeSunder += output.css;
        }
    });
}

function generateSunder(sunder){
    if(sunder.startsWith("(")){
        outSunder = "";
        breakPoint = sunder.substring(1,sunder.indexOf(")"));
        if(breakPoint == "p"){
            outSunder += "@media only print{";
        }else if(breakPoint.startsWith("-") && preDefined[breakPoint.substring(1)]){
            outSunder += "@media only screen and (min-width: "+preDefined[breakPoint.substring(1)]+"){";
        }else if(preDefined[breakPoint]){
            outSunder += "@media only screen and (max-width: "+preDefined[breakPoint]+"){";
        }else{
            breakPoint = breakPoint.split("-");
            if(preDefined["-"+breakPoint[1]]){
                outSunder += "@media only screen and ("+breakPoint[0]+"-"+preDefined["-"+breakPoint[1]]+": "+breakPoint[2]+"){";
            }else{
                outSunder += "@media only screen and ("+breakPoint[0]+"-"+breakPoint[1]+": "+breakPoint[2]+"){";
            }
        }
        sunder = sunder.slice(sunder.indexOf("[")+1,-1).split(";");
        for(i=0;i<sunder.length;i++){
            outSunder += generateSunder(sunder[i]);
        }
        outSunder += "}";
        return outSunder;
    }
    else if(sunder.startsWith(":^")){
        outSunder = "";
        sunder = sunder.substring(2);
        sunder = sunder.split(":");
        sunder[0]=sunder[0].replaceAll("^"," ").replaceAll("@",":");
        outSunder += sunder[0]+"{";
        sunder.shift();
        for(i=0;i<sunder.length;i++){
            outSunder += generateSunder(sunder[i]);
        }
        outSunder += "}";
        return outSunder;
    }else if(sunder.startsWith("::")){
        outSunder = "&:";
        sunder = sunder.split(":");
        sunder.shift();
        sunder.shift();
        outSunder += ":"+sunder[0];
        sunder.shift();
        outSunder += "{";
        for(i=0;i<sunder.length;i++){
            outSunder += generateSunder(sunder[i]);
        }
        outSunder += "}";
        return outSunder;
    }else if(sunder.startsWith(":")){
        outSunder = "&:";
        sunder = sunder.split(":");
        sunder.shift();
        if(preDefined[sunder[0]]){
            outSunder += preDefined[sunder[0]];
        }else{
            outSunder += sunder[0];
        }
        sunder.shift();
        outSunder += "{";
        for(i=0;i<sunder.length;i++){
            outSunder += generateSunder(sunder[i]);
        }
        outSunder += "}";
        return outSunder;
    }else if(sunder.startsWith("$")){
        return generateComponent(sunder);
    }else if(sunder.includes("_")){
        property = sunder.substring(0,sunder.indexOf("_")+1);
        value = sunder.substring(property.length);
        if(SunderUtility[property]){
            if(value.startsWith("&")){
                return SunderUtility[property]+generateAnimation(value).replaceAll("`"," ")+";";
            }else{
                return SunderUtility[property]+value.replaceAll("`"," ")+";";
            }
        }else{
            return property.slice(0,-1)+":"+value.replaceAll("`"," ")+";";
        }
    }
}

function parseSunder(sunder){
    outSunder = "[sunder~=\""+sunder.replaceAll(/[-[\]\`{\!}%():;*+?.,\\^$|#\s]/g, '\\$&')+"\"]{\n";
    outSunder += generateSunder(sunder);
    outSunder += "}";
    addSunder(outSunder);
}

var oldClasses = [],newClasses = [];
var allElements;

function run(allElements = document.querySelectorAll('*')){
    console.time();
    window.newClasses = [];
    if(allElements.length){
        for (var i = 0; i < allElements.length; i++) {
            try{
                var classes = allElements[i].getAttribute("sunder").toString().split(/\s+/);
                for (var j = 0; j < classes.length; j++) {
                    var cls = classes[j];
                    if (cls && window.oldClasses.indexOf(cls) === -1){
                        window.oldClasses.push(cls);
                        window.newClasses.push(cls);
                    }
                }
            }catch(error){}
            if(allElements[i].tagName=="ADI"){
                allElements[i].remove();
            }
        }
    }else{
        try{
            var classes = allElements.getAttribute("sunder").toString().split(/\s+/);
            for (var j = 0; j < classes.length; j++) {
                var cls = classes[j];
                if (cls && window.oldClasses.indexOf(cls) === -1){
                    window.oldClasses.push(cls);
                    window.newClasses.push(cls);
                }
            }
        }catch(error){}
        if(allElements.tagName=="ADI"){
            allElements.remove();
        }
    }

    completeSunder = "";
    for(var i=0;i<window.newClasses.length;i++){
        parseSunder(window.newClasses[i]);
    }
    document.getElementsByTagName("style")[0].insertAdjacentHTML("beforeend",completeSunder);
    console.timeEnd();
}

if(document.getElementsByName("autoRender")[0].content=="true"){

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var observer = new MutationObserver(function(mutations) {
        elementList = [];
        mutations.forEach(element => {
            if((element.target.tagName != "STYLE" && element.target.tagName != "SCRIPT" && element.target.tagName != "HEAD" && element.target.tagName != "HTML")){
                if(element.type=="childList"){
                    element.addedNodes.forEach(element2 => {
                        try{
                            if(element2.getAttribute('sunder')){
                                elementList.push(element2);
                            }
                        }catch{}
                    });
                }else if(element.type=="attributes"){
                    elementList.push(mutations[0].target);
                }
            }
        });
        if(elementList.length > 0){
            run(elementList);
        }
    });

    observer.observe(document.querySelectorAll('body')[0], {
        subtree: true,
        attributes: true,
        childList: true,
        attributeFilter: ['sunder'] 
    });

}