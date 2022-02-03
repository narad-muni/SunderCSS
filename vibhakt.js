const parse = require('node-html-parser');

const fs = require('fs');

readFile = 'avyav.html';

const stringify = (obj, indent = 2) => 
    JSON.stringify(obj, (key, value) => {
        if (Array.isArray(value) && !value.some(x => x && typeof x === 'object')) {
        return `\uE000${JSON.stringify(value.map(v => typeof v === 'string' ? v.replace(/"/g, '\uE001') : v))}\uE000`;
        }
        return value;
    }, indent).replace(/"\uE000([^\uE000]+)\uE000"/g, match => match.substr(2, match.length - 4).replace(/\\"/g, '"').replace(/\uE001/g, '\\\"'));


fs.watchFile(readFile,{interval:2000}, function(curr, prev) {
    try{


        var components = fs.readFileSync('avyav.html', 'utf8');

        components = parse.parse(components);

        var animation = components.querySelectorAll('animation');
        keyframeCss = "{\n";
        for(var i=0;i<animation.length;i++){
            keyframeCss+='"'+animation[i].getAttribute('name')+'": {\n';
            keyframeCss+= "\"dArgs\":\""+animation[i].getAttribute('dArgs')+"\",\n";
            keyframeCss += "\"states\":{\n";
            for(var j=0;j<animation[i].childNodes.length;j++){
                try{
                    sDom = animation[i].childNodes[j];
                    keyframeCss+= '"'+sDom.getAttribute('name')+'": "'+sDom.getAttribute('sunder')+'",';
                }catch{}
            }
            keyframeCss = keyframeCss.substr(0,keyframeCss.length-1);
            keyframeCss += "}";
            keyframeCss += "},";
        }
        keyframeCss = keyframeCss.substr(0,keyframeCss.length-1);
        keyframeCss += "}\n";

        components = components.querySelectorAll('component');

        generatedJson = "";

        for(var i=0;i<components.length;i++){
            dArgs = components[i].getAttribute('dArgs');
            css = components[i].getAttribute('sunder');
            generatedJson += '"'+components[i].getAttribute('name')+'":{\n\t"dArgs":'+JSON.stringify(dArgs)+',\n\t"css":'+JSON.stringify(css)+'\n},\n';
        }

        generatedJson = "{"+generatedJson.slice(0,-2)+"}";
        generatedKeyframe = JSON.parse(keyframeCss);
        generatedJson = JSON.parse(generatedJson);

        fs.writeFile('avyav.js', 'var Ansh = '+stringify(generatedJson,4)+';\nvar Anupranan = '+stringify(generatedKeyframe,4), function(err) {
            if(err) {
                console.log(err);
                return;
            }
        });
    }catch{}

});