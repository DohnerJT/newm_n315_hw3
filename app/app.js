import {PageRouter} from "../model/model.js"

function initListeners() {
    
    

}

function HashChange() {
    $(window).on("hashchange", PageRouter)
    PageRouter()
}


$(document).ready(function () {
   
    HashChange()

    initListeners();
})