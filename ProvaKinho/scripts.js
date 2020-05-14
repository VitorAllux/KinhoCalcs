function hipotenusa(H, A, B) {
    var h = document.getElementById(H).value,
        a = document.getElementById(A).value,
        b = document.getElementById(B).value;
    if (h != '') {
        if (a != '') {
            a = Math.pow(a, 2)
            h = Math.pow(h, 2)
            a = a * -1
            h = h + a
            alert('B =' + Math.sqrt(h))
        } else {
            b = Math.pow(b, 2)
            h = Math.pow(h, 2)
            b = b * -1
            h = h + b
            alert('A =' + Math.sqrt(h))
        }
    } else {
        alert('H = ' + Math.hypot(a, b))
    }
}