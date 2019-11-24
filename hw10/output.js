const path = require("path")
const fs =require("fs")

const templates= path.resolve(__dirname, "./templates")//folder we look for templates in

const output= path.resolve(__dirname, "output", "out.html")//output folder path and filename
// const render= teamList=>{
    //     const html=[]
    //     html.push(renderMain())
    //     return html.join("")
    // }

    const renderMain = html=> {
        const template= fs.readFileSync(path.resolve(templates, "main.html"), "utf8");//reads the template file
        return replaceHandlebars(template, "team", "WE REPlaced the team")
    }
    
    const replaceHandlebars = (template, placeholder, value)=>{
        const pattern= new RegExp("{{ "+placeholder +" }}", "g")
        return template.replace(pattern, value)
    }

  module.exports=  fs.writeFileSync(output, renderMain(), "utf-8")