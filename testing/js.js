window.onload=function(){
    let oBtn=document.getElementById("btn")
    let finish_num=0
    let grade=0
    let Blank=document.getElementById("blank")
    let aTxt=Blank.getElementsByTagName("input")
    let Choose_one=document.getElementById("choose-one")
    let aRadio=Choose_one.getElementsByTagName("input")
    let Choose_more=document.getElementById("choose-more")
    let aCheckbox=Choose_more.getElementsByTagName("input")
    let Judge=document.getElementById("judge")
    let aJudge=Judge.getElementsByTagName("input")
    let Write=document.getElementById("write")
    let Textarea=Write.getElementsByTagName("textarea")[0]
    function blank(huida,answer){
        if(huida===answer){
            grade+=5           
        }
        return grade
    }
    function xuanze(){
        if(aRadio[1].checked){
            grade+=10
        }
        if(aRadio[4].checked){
            grade+=10
        }
    }
    function duoxuan(){
        if(aCheckbox[0].checked&&aCheckbox[1].checked&&aCheckbox[3].checked&&!aCheckbox[2].checked){
            grade+=10
        }
        if(aCheckbox[4].checked&&aCheckbox[5].checked&&aCheckbox[6].checked&&!aCheckbox[7].checked){
            grade+=10
        }
    }
    function judge(){
        if(aJudge[1].checked){
            grade+=10
        }
        if(aJudge[2].checked){
            grade+=10
        }
    }
    function lastquestion(){
        if(Textarea.value==="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表现形式。可以是物理实体，也可以是某种图形；或是一种数学表达式。"){
            grade+=10
        }
    }
    function getGrade(){
        blank(aTxt[0].value,"统一建模语言")
        blank(aTxt[1].value,"封装性",)
        blank(aTxt[2].value,"继承性",)
        blank(aTxt[3].value,"多态性",)
        xuanze()
        duoxuan()
        judge()
        lastquestion()
        return grade
    }
    oBtn.onclick=function(){
        getGrade()
        alert("您的分数为："+grade)
    }
}