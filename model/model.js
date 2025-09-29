

export function PageRouter(){

    //Get Active URL
    let hashTag = window.location.hash
    hashTag = hashTag.replace("#", "")


    //contentBody
    if(hashTag === "" || hashTag === "home"){
        hashTag = "home"
    }

    $.get(`../pages/${hashTag}.html`, function(data){
        $("#contentBody").html(data)
    })
}