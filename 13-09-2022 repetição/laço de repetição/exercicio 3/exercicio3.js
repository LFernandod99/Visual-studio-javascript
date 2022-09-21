let n = 0, n2 = 0, n3 = 0, m

while (n >= 0) {
    n = prompt ("Digite um número: ")

    n2 = parseInt(n2) + parseInt(n)
    n3 = parseInt(n3) + parseInt(1)
}
if (n < 0) {
    n2 = n2 - n
    n3 = n3 - 1
    m = n2/n3
    alert (n2 + "\n" + m + "\n" + n3)
}