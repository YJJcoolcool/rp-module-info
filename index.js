//id="";final="";function display(text){final+='"'+text.substr(0,4)+'":"'+text.substr(5)+'", '};document.getElementById(id).innerText.split("\n").forEach(display);final=final.substr(0,final.length-2);console.log(final)

function check(){
    raw = document.getElementById("input").value
    rawsplit = raw.split("-")

    modules={"A104":"Biology", "A105":"General", "A106":"Organic", "A107":"Physics", "A108":"Laboratory", "A113":"Mathematics", "A364":"Analytical", "E114":"Mathematics", "A216":"Polymer", "A291":"Materials", "A217":"Laboratory Skills in Analytical Testing", "A218":"Quality Assurance and Data Science", "E343":"Wafer Fabrication and Packaging", "A345":"Biomaterials", "A394":"Materials Analysis", "A391":"Materials Processing", "A333":"Nanotechnology", "A395":"Composite Materials Design and Applications", "A396":"Additive Manufacturing for Applied Materials", "C207":"Database Systems"}
    document.getElementById("name").innerHTML=rawsplit[0]+" "+modules[rawsplit[0]]

    datecode = rawsplit[1].split("")
    durationcode = rawsplit[3].split("")
    //datecode = rawsplit[1].match(/.{1,2}/g)
    starttime={"A":800, "B":830, "C":900, "D":915, "E":930, "F":945, "G":1000, "H":1115, "J":1130, "K":1145, "L":1200, "M":1215, "N":1300, "P":1315, "Q":1330, "R":1400, "S":1430, "T":1445, "U":1500, "V":1545, "W":1600, "X":1630, "Y":1700, "Z":1730}
    durationtime={"B":430, "C":400, "D":300, "E":230, "F":215, "G":200, "H":130, "I":115, "J":100}
    datecodetext = ""
    j=0
    for (i=0; i<datecode.length; i+=2){
        datecodetext+=", Day "+datecode[i]+" from "
        //Starttime
        starttimenum=starttime[datecode[i+1]]
        starttimetext=starttimenum.toString()
        if (starttimenum<1200) {
            if (starttimetext.length==3) {
                datecodetext+=starttimetext.substr(0,1)+":"+starttimetext.substr(1)+" AM to "
            } else {
                datecodetext+=starttimetext.substr(0,2)+":"+starttimetext.substr(2)+" AM to "
            }
        } else {
            datecodetext+=starttimetext.substr(0,2)+":"+starttimetext.substr(2)+" PM to "
        }
        //Duration
        if (durationcode[j]=="A") {
            if (datecode[i+1]=="B") {
                datecodetext+= "3:30 PM"
            } else if (datecode[i+1]=="D") {
                datecodetext+= "4:00 PM"
            } else if (datecode[i+1]=="F") {
                datecodetext+= "4:30 PM"
            }
        } else {
            starttimenum+=durationtime[durationcode[j]]
            starttimetext=starttimenum.toString()
            if (parseInt(starttimetext.substr(-2))>=60){
                starttimenum+=40
                starttimetext=starttimenum.toString()
            }
            if (starttimenum<1200){
                if (starttimetext.length==3) {
                    datecodetext+=starttimetext.substr(0,1)+":"+starttimetext.substr(1)+" AM"
                } else {
                    datecodetext+=starttimetext.substr(0,2)+":"+starttimetext.substr(2)+" AM"
                }
            } else {
                starttimenum-=1200
                starttimetext=starttimenum.toString()
                if (starttimetext.length==3) {
                    datecodetext+=starttimetext.substr(0,1)+":"+starttimetext.substr(1)+" PM"
                } else {
                    datecodetext+=starttimetext.substr(0,2)+":"+starttimetext.substr(2)+" PM"
                }
            }
        }
        j++
    }
    if (datecodetext=="") {
        datecodetext="ERROR"
    } else {
        datecodetext=datecodetext.substr(2)
    }
    document.getElementById("datetime").innerHTML = datecodetext

    classcode = rawsplit[2]
    document.getElementById("class").innerHTML = classcode
    document.getElementById("building").innerHTML = classcode.substr(0,2)
    document.getElementById("level").innerHTML = classcode.substr(2,1)
    document.getElementById("classroom").innerHTML = classcode.substr(3,1)
}