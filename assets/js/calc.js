const chengeCount = (action,element) =>{
    let busket_item = element.parentNode.parentNode.parentNode
    let count_html = busket_item.querySelector('.count')
    let count = parseInt(count_html.innerHTML)

    if(action === 'minus'){
        if(count > 1){
            count -= 1
        }
    }
    else{
        count +=1
    }

    count_html.innerHTML = count
}