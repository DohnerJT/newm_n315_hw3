

export function PageRouter(){

    //Get Active URL
    let hashTag = window.location.hash
    hashTag = hashTag.replace("#", "")


    //contentBody
    if(hashTag === "" || hashTag === "home"){
        hashTag = "home"
    }
    let address = `../pages/${hashTag}.html`
        console.log(address)
    $.get(address, function(data){
        
        $("#contentBody").html(data)


    }).fail(function (jqXHR, textStatus, errorThrown) {
            // Handle errors here
            console.error("Error fetching data:", textStatus, errorThrown);
        });
}