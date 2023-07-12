function add(n1, n2){
    // { '0': 10, '1': 20 }  類似陣列，可以套用部分陣列方法
    console.log(arguments);
    return n1+n2;
}

add(10, 20);