function setMultiAttr(target,attrs){
    for (let item in attrs){
        target.setAttribute(item,attrs[item])
    }
}

