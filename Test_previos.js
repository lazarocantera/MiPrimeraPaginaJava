for (let i = 0; i<3; i++) {
    console.log(`Esta es la iteración ${i}`);
}
const mesesAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
for (let i=0; i<12; i++){
    console.log(mesesAño[i]);
}
for (const mes of mesesAño){
    console.log(mes);
}
for (const mes in mesesAño){
    console.log(mes);
}
